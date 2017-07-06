import PropTypes from 'prop-types';
import React from 'react';
import Tiny from '../components/Tiny';
import TinyEditor from '../components/TinyEditor';
import ReportIndex from '../components/ReportIndex';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {
      name: this.props.somethingELse,
      report: 'yup'
    };
    this.helloUpdateReport = this.helloUpdateReport.bind(this);

  }

  updateName = (name) => {
    this.setState({ name });
  };

  helloUpdateReport(report) {
    this.setState({report: report})
    console.log('YAYAYAAY', this.state.report)
  };

  render() {
    return (
      <div>
        <h3>
          Hello, {this.state.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>

          <Tiny report={this.state.report} />
          <button onClick={() => console.log('hi')}>Save</button>
          <hr />
          <ReportIndex helloUpdateReport={this.helloUpdateReport} />

        {/* <TinyEditor
          id="myCoolEditor"
          onEditorChange={content => console.log(content)}
        /> */}
      </div>
    );
  }
}
