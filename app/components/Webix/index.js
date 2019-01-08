// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import Webix from './Webix';

function getUI(columns, data, select) {
  return {
    view: 'datatable',
    scroll: false,
    autoheight: true,
    select: true,
    columns,
    editable: true,
    drag: true,
    resizeColumn: true,
    resizeRow: true,
    pager: {
      template: '{common.prev()} {common.pages()} {common.next()}',
      container: 'page-here', // the container to place the pager controls into
      size: 3, // the number of records per a page
      group: data.length / 3, // the number of pages in the pager
    },
    on: {
      onAfterSelect(id) {
        select(id);
      },
    },
  };
}

const TableView = ({ data, columns, select }) => (
  <div>
    <Webix ui={getUI(columns, data, select)} data={data} />
  </div>
);

export default TableView;
