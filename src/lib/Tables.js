import React, { Component } from 'react';
import '../styles/Tables.css';

class Tables extends Component {

  colsInRow(headers, style, body = null) {
    const arrayHeaders = Object.keys(headers);
    return arrayHeaders.map((type, i) => {
      return (
        <div key={i} className={`fnt-tables-${style}-col`}>
          { body === null ?
            headers[type] :
            body[type]
          }
        </div>
      );
    })
  }

  bodyTable(body, headers) {
    // const arrayHeaders = Object.keys(headers);
    return body.map((row, i) => {
      return (
        <div
          key={i}
          className='fnt-tables-body-row'
          onClick={() => this.props.onSelectRow({...row,i})}
        >
          { this.colsInRow(headers, 'body', body[i]) }
        </div>
      )
    })
  }

  render() {

    const { headers, body } = this.props.table;
    return (
      <div className='fnt-tables'>
        <div className='fnt-tables-header-row'>
          {this.colsInRow(headers, 'header')}
        </div>
        {this.bodyTable(body, headers)}
      </div>
    )
  }

}

export default Tables;