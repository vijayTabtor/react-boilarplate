/**
 *
 * Cop
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Webix from 'components/Webix';
import makeSelectCop from './selectors';
import selectCopDomain from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Input from './Input';
import Button from './Button';
import CenteredSection from './CenteredSection';
import data from './data';
import { selectRow } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Cop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
      password: '',
      columns: [
        {
          id: 'name',
          fillspace: 1,
          header: ['name', { content: 'textFilter' }],
        },
        {
          id: 'email',
          fillspace: 1,
          header: 'email',
          editor: 'text',
          batch: 2,
        },
        {
          id: 'age',
          sort: 'int',
          header: ['age', { content: 'numberFilter' }],
        },
      ],
      data,
    };
  }

  onHandleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    console.log(this.props.cop.selectedRow);
    return (
      <div>
        <Helmet>
          <title>Cop</title>
          <meta name="description" content="Description of Cop" />
        </Helmet>
        <CenteredSection>
          <h2 style={{ flexGrow: '24' }}>Webix Grid</h2>
          <div>
            <Webix
              data={this.props.cop.data}
              select={this.props.select}
              columns={this.state.columns}
            />
            <div id="page-here" />
          </div>
        </CenteredSection>
      </div>
    );
  }
}

Cop.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cop: selectCopDomain(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    select: id => {
      dispatch(selectRow(id));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'cop', reducer });
const withSaga = injectSaga({ key: 'cop', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Cop);
