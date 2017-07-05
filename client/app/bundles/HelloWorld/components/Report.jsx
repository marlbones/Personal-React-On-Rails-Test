import PropTypes from 'prop-types';
import React from 'react';

export default class Report extends React.Component {

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */

   constructor(props, _railsContext) {
     super(props);
     this.state = {
       editable: false,
       title: '',
       headerColour: ''
     }
   };

  onUpdate() {
  if (this.state.editable) {
    var id = this.props.report.id;
    var title = this.state.title;
    var headerColour = this.state.headerColour;
    var footerColour = this.props.report.footer_colour;
    var report = { id: id, title: title, header_colour: headerColour, footer_colour: footerColour };
    this.props.handleUpdate(report);
    this.props.getReports();
  }
    this.setState({ editable: !this.state.editable })
  }

  passObject(report) {
    this.props.objectPass(report);
  }

   handleEdit() {
    if (this.state.editable) {
      var title = this.state.title;
      var headerColour = this.state.headerColour;
      console.log('in handleEdit', this.state.editable, title, headerColour);
      this.onUpdate();
    }
     this.setState({ editable: !this.state.editable })
   }

   render() {
    var name = this.state.editable ? <input type='text'
                                            defaultValue={this.props.report.title}
                                            onChange={ (e) => this.setState({ title: e.target.value }) }/>
                                    : <p>{this.props.report.title}</p>
    let details = this.state.editable ? <textarea type='text'
                                                  defaultValue={this.props.report.header_colour}
                                                  onChange={ (e) => this.setState({ headerColour: e.target.value }) }></textarea>
                                      : <p>{this.props.report.header_colour}</p>
     return (
       <div>
         <p>{name}{details}</p>

         <button onClick={this.props.handleDelete}>
            Delete
          </button>

          <button onClick={() => this.handleEdit()}>{this.state.editable ? 'Submit' : 'Edit' }</button>
          <button onClick={() => this.passObject(this.props.report)}>Show</button>
       </div>
     );
   }
}
