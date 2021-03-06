import React, {Component} from 'react';
import Radium from 'radium';

const style = {
  base: {}
}

class DashboardNav extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    this.props.logout();
  }

  render() {
    return (
      <aside className="menu">
        <p className="menu-label">
          <PatientCard handleLogout={this.handleLogout}/>
        </p>
        <ul className="menu-list">
          <li>
            <a className="is-active">Dashboard</a>
          </li>
          <li>
            <a>Account Settings</a>
          </li>
        </ul>
        <p className="menu-label">
          Your Health
        </p>
        <ul className="menu-list">
          <li>
            <a>Patient Profile Settings</a>
          </li>
          <li>
            <a className="is-active">Manage Your Medications</a>
            <ul>
              <li>
                <a>View Medications</a>
              </li>
              <li>
                <a>View Medication Interactions</a>
              </li>
              <li>
                <a>Edit Medications</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Track Health</a>
          </li>
          <li>
            <a>Dietary</a>
          </li>
          <li>
            <a>Exercise Log</a>
          </li>
        </ul>
      </aside>
    )
  }
}

class PatientCard extends Component {
  render() {
    return (
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>John Smith</strong>
              <br />
              <p className="control">
                <a className="button is-danger is-outlined" onClick={this.props.handleLogout}>
                  <span className="icon">
                    <i className="fa fa-sign-out"></i>
                  </span>
                  <span>Logout</span>
                </a>
              </p>
            </p>
          </div>
        </div>
      </article>
    )
  }
}

export default DashboardNav;
