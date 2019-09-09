import React, { Component } from 'react';

import './styles/Pagination.css';

const imageDisable =
  'https://s3.us-east-2.amazonaws.com/fintecimal/fintecimal-img/arrow-left-menu-disable.svg';
const imageActive = 'https://s3.us-east-2.amazonaws.com/fintecimal/fintecimal-img/arrow-left.svg';

class Pagination extends Component {
  checkNumber(sum) {
    const { actualPage, totalPage } = this.props;
    const newCount = actualPage + sum;
    if (!(newCount < 1 || newCount > totalPage)) {
      this.props.onChangePagination(newCount);
    }
  }

  render() {
    const { totalPage, actualPage } = this.props;
    return (
      <div className="fnt-pagination">
        <div className="ftn-pagination-arrow-left" onClick={() => this.checkNumber(-1)}>
          <img alt="" src={actualPage === 1 ? imageDisable : imageActive}></img>
        </div>
        <div className="ftn-pagination-body">
          <span className="ftn-pagination-text">
            Página {actualPage} de {totalPage}
          </span>
        </div>
        <div className="ftn-pagination-arrow-right" onClick={() => this.checkNumber(1)}>
          <img alt="" src={actualPage >= totalPage ? imageDisable : imageActive}></img>
        </div>
      </div>
    );
  }
}

Pagination.defaultProps = {
  totalPage: 5,
  actualPage: 1
};

export default Pagination;
