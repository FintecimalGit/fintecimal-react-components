import React from 'react';
import LivenessCarousel from './LivenessCarousel';
import useStyles from './style';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Tooltip from '@material-ui/core/Tooltip';
import LivenessVideo from './LivenessVideo';

const STATUS = {
  0: {
    image: "https://fintecimal-test.s3.amazonaws.com/VALIDATE_DOCUMENTS_ICONS/Reject_validation.png",
    label: "No se pudo hacer la validacion automatica",
  },
  1: {
    image: "https://fintecimal-test.s3.amazonaws.com/VALIDATE_DOCUMENTS_ICONS/Accept_validation.png",
    label: "Documento Validado",
  },
  2: {
    image: "https://fintecimal-test.s3.amazonaws.com/VALIDATE_DOCUMENTS_ICONS/Reject_validation.png",
    label: "Documento No Valido",
  },
};

const Liveness = ({
  signers,
  ines,
  video,
  verify,
  title,
}) => {
  const clasess = useStyles();
  return (
    <Card className={clasess.card}>
      <CardHeader
        className={clasess.cardHeader}
        title={title}
        action={(
          <>
            {
              verify.status !== -1 ? 
              (
                  <Tooltip
                  title={STATUS[verify.status].label}
                  placement="top"
                  arrow
                >
                  <span className={clasess.tooltipValidation}>
                    <img 
                      className={clasess.img}
                      src={STATUS[verify.status].image}
                      />
                  </span>
                </Tooltip>
                ) : ""
            }
          </>
        )}
      />
      <div className={clasess.containerCarousel}>
        <LivenessCarousel signers={signers} />
      </div>
      <div className={clasess.containerInes}>
        <div className={clasess.grid}>
          <div>
            <LivenessVideo video={video}/>
          </div>
          <div>
            <div className={clasess.containerIneImg}>
              <img
                className={clasess.ineImg}
                src={ines.front}
              />
            </div>
            <div className={clasess.containerIneImg}>
              <img
                className={clasess.ineImg}
                src={ines.reverse}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

Liveness.propTypes = {
  verify: PropTypes.object,
  signers: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    label: PropTypes.string,
    status: PropTypes.string,
  })),
  ines: PropTypes.shape({
    front: PropTypes.string,
    reverse: PropTypes.string,
  }),
  videoUrl: PropTypes.string,
};

Liveness.defaultProps = {
  signers: [],
  verify: {
    status: -1,
  },
  ines: { front: '', reverse: ''},
  videoUrl: '',
};

export default Liveness;
