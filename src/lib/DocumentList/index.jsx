import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

import HeaderCollapse from '../HeaderCollapse';

import useStyle from './style';
import {
  ACCEPTED,
  REJECTED,
  PENDING,
  REVISION,
  SEQUENCE_STATUS,
} from './status';

const DocumentList = ({
  title, documents, onClickDocument, onDownload, open, iconTooltip, onDownloadSecondary, iconTooltipSec,
}) => {
  const clasess = useStyle();

  /**
   *
   * @param {Object} document
   */
  const handleOnClickDocument = (document, index) => () => {
    onClickDocument(document, index);
  };

  /**
   *
   * @param {String} status
   * @returns {String}
   */
  const getDotColorClass = (status) => {
    switch (status) {
      case REVISION:
        return clasess.dotReview;
      case PENDING:
        return clasess.dotPending;
      case ACCEPTED:
        return clasess.dotSuccess;
      case REJECTED:
        return clasess.dotDanger;
      default:
        return clasess.dotOnHold;
    }
  };

  /**
   *
   * @param {String} status
   * @returns {String|DOMElement}
   */
  const getLabelStatus = (status) => {
    switch (status) {
      case ACCEPTED:
        return <DoneIcon className={clasess.successIcon} />;
      case REJECTED:
        return <ClearIcon className={clasess.dangerIcon} />;
      case REVISION:
      case PENDING:
      default:
        return (
          <span className={clasess.statusName}>
            {status}
            {' '}
          </span>
        );
    }
  };

  /**
   *
   * @param {String} status
   * @returns {Boolean}
   */
  const isOnHold = (status) => status === PENDING || status === REVISION;

  /**
   *
   * @param {String} status
   * @returns {Boolean}
   */
  const isNotPending = (status) => status !== PENDING;

  const createMessageContent = (status, progress) => {
    const { qty, total } = progress;
    const next_status = SEQUENCE_STATUS[status];
    switch (status) {
      case ACCEPTED:
        return '';
      case REJECTED:
        return `Es necesario corregir ${total - qty} firma(s) para regresar el estatus ${next_status}`;
      case REVISION:
        return `Faltan ${total - qty} firmante(s) para el siguiente estatus ${next_status}`;
      case PENDING:
        return `Faltan ${total - qty} firmante(s) para el siguiente estatus ${next_status}`;
      default: return '';
    }
  }

  const getTitleProgress = (document) => {
    const { status, progress = {} } = document;
    if (!status || !progress) return;
    return (
      <>
        <Typography variant="h6" color="inherit"> {status} </Typography>
        <span>{createMessageContent(status, progress)}</span>
      </>
    )
  }

  return (
    <HeaderCollapse
      open={open}
      title={title}
      onDownload={onDownload}
      iconTooltip={iconTooltip}
      onDownloadSecondary={onDownloadSecondary}
      iconTooltipSec={iconTooltipSec}
    >
      <List className={clasess.noPadding}>
        {documents.map((document, index) => (
          <Tooltip key={document.name} title={getTitleProgress(document)}>
            <ListItem
              button={isNotPending(document.status)}
              onClick={
                isNotPending(document.status) ? handleOnClickDocument(document, index) : () => {}
              }
              className={clasess.listItem}
            >
              <ListItemText>
                <span className={classnames(clasess.dot, getDotColorClass(document.status))} />
                <span
                  className={classnames(clasess.name, {
                    [clasess.nameOnHole]: isOnHold(document.status),
                  })}
                >
                {document.name}
              </span>
              </ListItemText>
              <div>
                <span>{getLabelStatus(document.status)}</span>
              </div>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </HeaderCollapse>
  );
};

DocumentList.propTypes = {
  title: PropTypes.string,
  documents: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClickDocument: PropTypes.func,
  onDownload: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
    PropTypes.func,
  ]),
  open: PropTypes.bool,
  iconTooltip: PropTypes.string,
  onDownloadSecondary: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
    PropTypes.func,
  ]),
  iconTooltipSec: PropTypes.string,
};

DocumentList.defaultProps = {
  title: '',
  documents: [],
  onClickDocument: () => {},
  onDownload: () => {},
  open: false,
  iconTooltip: '',
  onDownloadSecondary: null,
  iconTooltipSec: '',
};

export default DocumentList;
