import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';

import ReportIndex from '../components/ReportIndex';

import NewReport from '../components/NewReport';

import Report from '../components/Report';

import Routes from '../components/Routes';

import Display from '../components/Display';

import RichText from '../components/RichText';

import Tiny from '../components/Tiny';

import DraftPlug from '../components/DraftPlug';

import TinyEditor from '../components/TinyEditor';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  NewReport,
  ReportIndex,
  Report,
  Routes,
  Display,
  RichText,
  Tiny,
  DraftPlug,
  TinyEditor
});
