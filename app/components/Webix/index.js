// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import Webix from './Webix';


function getUI(columns) {
  return {
    view: "datatable",
    scroll: false,
    autoheight: true,
    select: false,
    columns: columns,
    on: {
      onAfterSelect: function (id) {
        select(id);
      }
    }
  };
}

const TableView = ({ data, columns }) => (
  <Webix ui={getUI(columns)} data={data} />
)

export default TableView;
