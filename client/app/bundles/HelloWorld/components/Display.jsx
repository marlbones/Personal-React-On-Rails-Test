import PropTypes from 'prop-types';
import React from 'react';
import RichText from '../components/RichText';
import Tiny from '../components/Tiny';
import DraftPlug from '../components/DraftPlug';

export default class Display extends React.Component {
  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  render() {
    return (
      <div>
        <h1>Hi</h1>
        {/* <Tiny /> */}
        {/* <RichText /> */}
      </div>
    )
  }
}
