import PropTypes from 'prop-types';
import React from 'react';

export default class NewReport extends React.Component {

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */

  constructor(props, _railsContext) {
    super(props);
    this.state = {
      title: '',
      headerColour: '',
      footerColour: ''
    }
  };

  handleClick() {
    let title = this.state.title;
    let headerColour = this.state.headerColour;
    let footerColour = this.state.footerColour;
    console.log(title, headerColour, footerColour);

    $.ajax({
      url: '/reports',
      type: 'POST',
      data: { report: { title: title, header_colour: headerColour, footer_colour: footerColour } },
      success: (response) => {
        console.log('Report saved', response);
      }
    });
    this.props.getReports();
  }

   render() {
     return (
       <div>
         <h1>New Report</h1>
         <input onChange={ (e) => this.setState({ title: e.target.value }) } placeholder='Enter Title' />
         <input onChange={ (e) => this.setState({ headerColour: e.target.value }) } placeholder='Enter Header Colour' />
         <input onChange={ (e) => this.setState({ footerColour: e.target.value }) } placeholder='Enter Footer Colour' />
         <button onClick={() => this.handleClick()}>Submit</button>
       </div>
     );
   }
}
