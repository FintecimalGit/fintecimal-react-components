/* eslint-disable react/no-this-in-sfc */

import React, {
  memo,
  useMemo,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import RefreshIcon from '@material-ui/icons/Refresh';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import OpenWithIcon from '@material-ui/icons/OpenWith';

import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

import useStyles from './style';

const FLIP_STEAP = -1;
const ROTATION_RIGHT = 90;
const ROTATION_LEFT = -90;

const MOVE = 'move';
const CROP = 'crop'

const ImageEditor = ({ file, onCrop, cancel }) => {
  const classes = useStyles();

  const imageRef = useRef(null);
  const containerRef = useRef(useRef);
  const actionsContainerRef = useRef(useRef);

  const [cropper, setCropper] = useState(null);
  const [horizontalScale, setHorizontalScale] = useState(1);
  const [verticalScale, setVerticalScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  const destroyCropper = useCallback(() => {
    if (cropper) cropper.destroy();
  }, [cropper]);

  const initializeCroppper = useCallback(() => {
    const _cropper = new Cropper(
      imageRef.current,
      {
        checkCrossOrigin: true,
        responsive: true,
        viewMode: 0, // 0, 1, 2 , 3
        zoomable: true,
        scalable: true,
        rotatable: true,
        ready() {
          this.cropper.zoom(0);
          this.cropper.crop();
        },
      },
    );
    setCropper(_cropper);
  }, [imageRef]);

  const startCropper = useCallback(() => {
    destroyCropper();
    initializeCroppper();
  }, [initializeCroppper, destroyCropper]);

  const flipImage = useCallback(() => {
    if (!cropper) return;
    cropper.scale(horizontalScale, verticalScale);
    cropper.crop();
  }, [cropper, horizontalScale, verticalScale]);

  const rotate = useCallback((rotationDirection) => {
    const newRotation = rotation + rotationDirection;
    setRotation(newRotation);
  }, [rotation]);

  const rotateImage = useCallback(() => {
    if (!cropper) return;
    cropper.rotateTo(rotation);
    cropper.crop();
  }, [cropper, rotation]);

  /*----------------Move----------------*/
  const changeMoveOrCropImageState = (mode) => {
    if (!cropper) return;
    cropper.setDragMode(mode);
  };
  
  /*****************Move****************/
  /*----------------Zoom----------------*/

  const zoomImage = useCallback((zoomRatio) => {
    if (!cropper) return;
    cropper.zoom(zoomRatio);
  }, [cropper]);
  /*****************Zoom****************/



  const cropImage = useCallback(async (event) => {
    if (!cropper) return;
    const canvasData = cropper.getData();
    cropper.setData({ ...canvasData,
      height: canvasData.height + 40,
      width: canvasData.width + 40,
      x: canvasData.x - 20 ,
      y: canvasData.y - 20,
    });
    const canvas = cropper.getCroppedCanvas();
    const blob = await new Promise((resolve) => {
      canvas.toBlob(resolve);
    });
    onCrop(event, blob);
  }, [cropper, onCrop]);

  const url = useMemo(() => (
    file instanceof Blob ? URL.createObjectURL(file) : file
  ), [file]);

  useEffect(() => {
    startCropper();
  }, [url]);

  useEffect(() => {
    flipImage();
  }, [horizontalScale, verticalScale, flipImage]);

  useEffect(() => {
    rotateImage();
  }, [rotation, rotateImage]);

  const adjustImageHeight = () => {
    if (!(containerRef.current)) return 0;
    const imageHeight = containerRef.current.offsetHeight;
    return imageHeight;
  };
  

  return (
    <div 
      ref={containerRef}
    >
      <div
        style={{
          height: adjustImageHeight(),
          position: 'relative'
        }}
      >
        <img
          ref={imageRef}
          alt={url}
          src={url}
          className={classes.img}
        />
        <div className={classes.actions}>
          <Grid
            className={classes.actionContainer}
            container
            spacing={1}
            justify="space-around"
          >
            
            <Grid item xs={12}>
              <Button
                className={classes.button}
                variant="contained"
                fullWidth
                color="primary"
                onClick={() => changeMoveOrCropImageState(MOVE)}
              >
                <OpenWithIcon
                  style={{ color: 'white' }}
                />
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Button
                className={classes.button}
                style={{
                  transform: 'scaleX(-1)'
                }}
                variant="contained"
                fullWidth
                color="primary"
                onClick={() => rotate(ROTATION_LEFT)}
              >
                <RefreshIcon
                  style={{ color: 'white' }}
                />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.button}
                variant="contained"
                fullWidth
                color="primary"
                onClick={() => rotate(ROTATION_RIGHT)}
              >
                <RefreshIcon
                  style={{ color: 'white' }}
                />
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Button
                className={classes.button}
                variant="contained"
                fullWidth
                color="primary"
                onClick={() => zoomImage(0.1)}
              >
                <ZoomInIcon
                  style={{ color: 'white' }}
                />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.button}
                variant="contained"
                fullWidth
                color="primary"
                onClick={() => zoomImage(-0.1)}
              >
                <ZoomOutIcon
                  style={{ color: 'white' }}
                />
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Button
                className={classes.button}
                variant="contained"
                fullWidth
                color="primary"
                onClick={cropImage}
              >
                <CheckIcon style={{ color: 'white' }} />
              </Button>
            </Grid>

          </Grid>
        </div>
        <Grid
            className={classes.cancel}
            container
            spacing={1}
            justify="space-around"
          >
            <Grid item xs={12}>
              <Button
                className={classes.button}
                variant="contained"
                fullWidth
                color="primary"
                onClick={cancel}
              >
                <CloseIcon  style={{ color: 'white' }} />
              </Button>
            </Grid>
          </Grid>
      </div>
    </div>
  );
};

ImageEditor.propTypes = {
  file: PropTypes.oneOfType([
    PropTypes.instanceOf(Blob),
    PropTypes.string,
  ]),
  onCrop: PropTypes.func,
  cancel: PropTypes.func,
};

ImageEditor.defaultProps = {
  file: '',
  onCrop: () => {},
  cancel: () => {},
};

export default memo(ImageEditor);
