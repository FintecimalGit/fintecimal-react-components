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

import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
import RefreshIcon from '@material-ui/icons/Refresh';

import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

import useStyles from './style';

const FLIP_STEAP = -1;
const ROTATION_STEAP = 90;

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

  const rotateRigth = useCallback(() => {
    const newRotation = rotation + ROTATION_STEAP;
    setRotation(newRotation);
  }, [rotation]);

  const rotateImage = useCallback(() => {
    if (!cropper) return;
    cropper.rotateTo(rotation);
    cropper.crop();
  }, [cropper, rotation]);

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

  return (
    <div ref={containerRef}>
      <div
        style={{
          height: (
            (containerRef.current && actionsContainerRef.current) && containerRef.current.offsetHeight - actionsContainerRef.current.offsetHeight
          ) || 0,
        }}
      >
        <img
          ref={imageRef}
          alt={url}
          src={url}
          className={classes.img}
        />
      </div>
      <div ref={actionsContainerRef}>
        <Grid
          className={classes.actionContainer}
          container
          spacing={1}
          justify="space-around"
        >
          <Grid item sm={4} xs={4}>
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth
              color="primary"
              onClick={cancel}
            >
              Cancelar
            </Button>
          </Grid>
          <Grid item sm={4} xs={4}>
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth
              color="primary"
              onClick={rotateRigth}
            >
              <RefreshIcon />
              Girar
            </Button>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Button
              className={classes.button}
              variant="contained"
              fullWidth
              color="primary"
              onClick={cropImage}
            >
              Recortar
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
