import PropTypes from 'prop-types';
import React from 'react';
import NewReport from '../components/NewReport';
import Report from '../components/Report';
import Routes from '../components/Routes';
import Display from '../components/Display';

export default class ReportIndex extends React.Component {
  // static propTypes = {
  //   reports: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */

   constructor(props, _railsContext) {
       super(props);
       this.state = {
        reports: [],
        report: ''
      };
      // this.updateMate = this.updateMate.bind(this);
   }

   componentDidMount() {
     this.getReports();
   }

   getReports() {
     $.getJSON('/reports.json', (response) => { this.setState({ reports: response }) });
   }

   handleDelete(report){
    $.ajax({
    url: `/reports/${report}`,
    type: 'DELETE',
    success(response) {
      console.log('successfully removed skill', response)
    }
    });
   }

   handleEdit(){
     console.log('edit');
   }

   handleUpdate(report) {
     console.log(report);
     $.ajax({
       url: `/reports/${report.id}`,
       type: 'PUT',
       data: { report: report },
       success: () => {
         console.log('you did it');
         this.updateReports(report);
         // callback to swap objects
       }
     });
  };

  updateReports(report) {
    var reports = this.state.reports.filter((r) => { return r.id != report.id });
    reports.push(report);

    this.setState({ reports: reports });
  }

  objectPass(report) {
    this.updateMate(report)
  };

  updateMate(report) {
    this.setState({ report: report });
  }

   render() {
     return (
       <div>
         <Routes />
         <h1>Reports</h1>
         <ul>
           {this.state.reports.map((report, i) =>
            <div key={i}>
              <Report report={report}
                      handleDelete={() => this.handleDelete(report.id)}
                      handleEdit={() => this.handleEdit()}
                      handleUpdate={this.handleUpdate}
                      getReports={() => this.getReports()}
                      objectPass={this.objectPass}
                      updateMate={() => this.updateMate(report)}
              />
            {/* <li>{report.title}</li>
            <button onClick={() => this.handleDelete(report.id)}>Delete</button>
            <button onClick={() => this.handleEdit()}>Edit</button> */}
            </div>)}
         </ul>
         <NewReport getReports={() => this.getReports()} />
         <div className="woop">
           <h1>Maybe see you later</h1>
           <Display report={this.state.report} />
         </div>
       </div>
     );
   }
}
