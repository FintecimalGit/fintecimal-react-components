import React, { useMemo, useState } from 'react';
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
  participants,
  verify,
  title,
}) => {
  const clasess = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const participantsCarousel = useMemo(() => participants.map(({_id, label, status, score, completed}) => ({
    _id, label, status, score, completed
  })), [participants]);
  const currentParticipant = useMemo(() => participants[currentIndex], [currentIndex, participants])
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
        <LivenessCarousel onClick={(index) => setCurrentIndex(index)} signers={participantsCarousel} />
      </div>
      <div className={clasess.containerInes}>
        <div className={clasess.grid}>
          <div>
            <LivenessVideo video={currentParticipant.video}/>
          </div>
          <div className={clasess.ines}>
            <div className={clasess.containerIneImg}>
              <img
                className={clasess.ineImg}
                src={currentParticipant.ines[0]}
              />
            </div>
            <div className={clasess.containerIneImg}>
              <img
                className={clasess.ineImg}
                src={currentParticipant.ines[1]}
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
  title: PropTypes.string,
  participants: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    label: PropTypes.string,
    status: PropTypes.string,
    score: PropTypes.number,
    ines: PropTypes.shape({
      front: PropTypes.string,
      reverse: PropTypes.string,
    }),
    videoUrl: PropTypes.string,
  })),
};

Liveness.defaultProps = {
  participants: [],
  title: '',
  verify: {
    status: -1,
  },
};

export default Liveness;
