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
import makeSelectCop from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Input from './Input';
import Button from './Button'
import Webix from 'components/Webix';
import CenteredSection from './CenteredSection';
/* eslint-disable react/prefer-stateless-function */
export class Cop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
      password: '',
      columns:[
        { id:"name", fillspace:1 },
        { id:"email", fillspace:1 },
        { id:"age", sort: 'int'}
      ],
      data: [
        {
          name: 'vijay',
          email: 'xyz@gmail.com',
          age: 50
        },
        {
          name: 'Bhushan',
          email: 'abc@gmail.com',
          age: 52
        },
        {
          name: 'Sanjay',
          email: 'ltd@gmail.com',
          age: 53
        }
      ]
    };
  }

  onHandleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  render() {
    const { isLoggedIn } = this.state;
    console.log(this.state);
    return (
      <div>
        <Helmet>
          <title>Cop</title>
          <meta name="description" content="Description of Cop" />
        </Helmet>
        <CenteredSection>
          <h2 style={{ flexGrow: '24'}}>Webix Grid</h2>
          <div>
            <Webix data={this.state.data} columns={this.state.columns} />
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
  cop: makeSelectCop(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
