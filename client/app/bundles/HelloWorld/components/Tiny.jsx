import React from 'react';
import TinyMCE from 'react-tinymce';

export default class Tiny extends React.Component {
  // Not here with original Tiny
  constructor(props, _railsContext) {
      super(props);
      this.state = {
       content: ''
     };
     // this.updateMate = this.updateMate.bind(this);
  }

  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
    // Not here with original Tiny
    this.setState({ content: e.target.getContent() })
  }

  // Not here with original Tiny
  checkState() {
    console.log('Please see', this.state.content)
  }

  // Not here with original Tiny
  updateContent() {
    $.ajax({
      url: `/reports/${this.props.report.id}`,
      type: 'PUT',
      data: { report:
              {content: this.state.content,
               header_colour: this.state.content}
            },
      success: () => {
        console.log('you did it');
      }
    });
  }

  render() {
    return (
      <div>
        <TinyMCE
          content="<p>This is the initial content of the editor</p>"
          config={{
            plugins: 'link image code table textcolor colorpicker hr preview wordcount',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code table forecolor backcolor fontselect fontsizeselect hr preview'
          }}
          onChange={this.handleEditorChange}
        />
         {/* Not here with original Tiny */}
        <button onClick={() => this.checkState()}>Press</button>
        <button onClick={() => this.updateContent()}>Update {this.props.report.title, this.props.report.id} Content</button>
      </div>
    );
  }
}
