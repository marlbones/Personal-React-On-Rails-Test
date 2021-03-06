// import React from 'react';
// import tinymce from 'tinymce';
// import 'tinymce/themes/modern';
// import 'tinymce/plugins/wordcount';
// import 'tinymce/plugins/table';
//
// export default class TinyEditor extends React.Component {
//   constructor() {
//     super();
//     this.state = { editor: null };
//   }
//   componentDidMount() {
//     tinymce.init({
//       selector: `#${this.props.id}`,
//       skin_url: `client/app/bundles/HelloWorld/components/tiny/skins/lightgray`,
//       plugins: 'wordcount table',
//       setup: editor => {
//         this.setState({ editor });
//         editor.on('keyup change', () => {
//           const content = editor.getContent();
//           this.props.onEditorChange(content);
//         });
//       }
//     });
//   }
//
//   componentWillUnmount() {
//     tinymce.remove(this.state.editor);
//   }
//
//   render() {
//     return (
//       <textarea
//         id={this.props.id}
//         value={this.props.content}
//         onChange={e => console.log(e)}
//       />
//     );
//   }
// }
