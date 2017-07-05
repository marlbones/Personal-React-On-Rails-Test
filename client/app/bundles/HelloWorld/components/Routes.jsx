import PropTypes from 'prop-types';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import HelloWorld from '../components/HelloWorld';
import NewReport from '../components/NewReport';

export default class Routes extends React.Component {

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */

   render() {
     return (
       <Router>
        <div>
          <ul>
            <li><Link to="/new">Hello World</Link></li>
            <li><Link to="/baby">New Report</Link></li>
          </ul>
        <p></p>
        <Switch>
          <Route exact path="/new" component={HelloWorld}/>
          <Route exact path="/baby" component={NewReport}/>
        </Switch>
        </div>
      </Router>
     )
   }
}
