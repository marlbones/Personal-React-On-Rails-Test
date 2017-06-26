import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';

import ReportIndex from '../components/ReportIndex';

import NewReport from '../components/NewReport';

import Report from '../components/Report';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  NewReport,
  ReportIndex,
  Report
});
