import PropTypes from 'prop-types';
import React from 'react';

export default class EditReport extends React.Component {
  static propTypes = {
    reports: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */

   constructor(props, _railsContext) {
     super(props);

     this.state = { reports: this.props.reports };
   }

   render() {
     return (
       <div>
         <h1>Hi,l,l,l,l</h1>
         <ul>
           {this.state.reports.map((report, i) => <li key={i}>{report.title}</li>)}
         </ul>
       </div>
     );
   }
}
