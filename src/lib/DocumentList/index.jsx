import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

import HeaderCollapse from '../HeaderCollapse';

import useStyle from './style';

const DocumentList = ({
  title,
  documents,
  onClickDocument,
  onDownload,
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
      case 'En espera':
      case 'En revisión':
        return clasess.dotOnHold;
      case 'Pendiente':
        return clasess.dotPending;
      case 'Aceptado':
        return clasess.dotSuccess;
      case 'Rechazado':
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
      case 'Aceptado':
        return <DoneIcon className={clasess.successIcon} />;
      case 'Rechazado':
        return <ClearIcon className={clasess.dangerIcon} />;
      case 'En espera':
      case 'En revisión':
      case 'Pendiente':
      default:
        return <span className={clasess.statusName}>{ status } </span>;
    }
  };

  /**
   *
   * @param {String} status
   * @returns {Boolean}
   */
  const isOnHole = (status) => status === 'En espera' || status === 'En revisión';

  /**
   *
   * @param {String} status
   * @returns {Boolean}
   */
  const isPending = (status) => status === 'Pendiente';

  return (
    <HeaderCollapse
      title={title}
      onDownload={onDownload}
    >
      <List className={clasess.noPadding}>
        {
          documents.map((document, index) => (
            <ListItem
              key={document.name}
              button={isPending(document.status)}
              onClick={isPending(document.status) ? handleOnClickDocument(document, index) : () => {}}
              className={clasess.listItem}
            >
              <ListItemText>
                <span className={classnames(clasess.dot, getDotColorClass(document.status))} />
                <span
                  className={classnames(clasess.name, {
                    [clasess.nameOnHole]: isOnHole(document.status),
                  })}
                >
                  { document.name }
                </span>
              </ListItemText>
              <div>
                <span>
                  { getLabelStatus(document.status) }
                </span>
              </div>
            </ListItem>
          ))
        }
      </List>
    </HeaderCollapse>
  );
};

DocumentList.propTypes = {
  title: PropTypes.string,
  documents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  onClickDocument: PropTypes.func,
  onDownload: PropTypes.func,
};

DocumentList.defaultProps = {
  title: '',
  documents: [],
  onClickDocument: () => {},
  onDownload: () => {},
};

export default DocumentList;
