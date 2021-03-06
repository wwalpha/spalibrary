
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'styles/common/table/tableHeaderColumn.css';

const styles = {
  sortable: {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

class TableHeaderColumn extends Component {

  render() {
    let style = {
      ...this.props.style,
      width: this.props.width,
    };

    // sort有効の場合
    style = this.props.sortable ? { ...style, ...styles.sortable } : style;

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <th
        ref={(headerColumn) => { this.headerColumn = headerColumn; }}
        colSpan={this.props.colSpan}
        rowSpan={this.props.rowSpan}
        className={css.headerColumn}
        style={style}
        onClick={() => this.props.onClick(this.props.columnNo)}
      >
        {this.props.children}
      </th>
    );
  }
}

TableHeaderColumn.defaultProps = {
  onClick: () => {},
  width: 'auto',
  style: {},
};

TableHeaderColumn.propTypes = {
  children: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.string),
  sortable: PropTypes.bool,
  onClick: PropTypes.func,
  columnNo: PropTypes.number,
  width: PropTypes.string,
  colSpan: PropTypes.string,
  rowSpan: PropTypes.string,
};

export default TableHeaderColumn;
