import React from 'react';
import TinyMCE from 'react-tinymce';

export default class Tiny extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <TinyMCE
        content="<p>This is the initial content of the editor</p>"
        config={{
          plugins: 'link image code table textcolor colorpicker hr preview wordcount',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code table forecolor backcolor fontselect fontsizeselect hr preview'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}
