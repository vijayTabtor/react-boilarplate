/**
 *
 * H4
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class H4 extends React.Component {
  render() {
    return (
      <div>
        <h4>
        <FormattedMessage {...messages.header} />
        </h4>
      </div>
    );
  }
}

H4.propTypes = {};

export default H4;
