import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} classNameName={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  );

  return (
    <header className="main-header">
      <a href="index2.html" className="logo">
        <span className="logo-mini"><b>A</b>LT</span>
        <span className="logo-lg"><b>Admin</b>LTE</span>
      </a>
      <nav className="navbar navbar-static-top" role="navigation">
        <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
          <span className="sr-only">Toggle navigation</span>
        </a>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown messages-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-envelope-o"></i>
                <span className="label label-success">4</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 4 messages</li>
                <li>
                  <ul className="menu">
                    <li>
                      <a href="#">
                        <div className="pull-left">
                          <img src={require("admin-lte/dist/img/user2-160x160.jpg")} className="img-circle" alt="User"></img>
                        </div>
                        <h4>
                          Support Team
                          <small><i className="fa fa-clock-o"></i> 5 mins</small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer"><a href="#">See All Messages</a></li>
              </ul>
            </li>

            <li className="dropdown notifications-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bell-o"></i>
                <span className="label label-warning">10</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 10 notifications</li>
                <li>
                  <ul className="menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-users text-aqua"></i> 5 new members joined today
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer"><a href="#">View all</a></li>
              </ul>
            </li>
            <li className="dropdown tasks-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-flag-o"></i>
                <span className="label label-danger">9</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 9 tasks</li>
                <li>
                  <ul className="menu">
                    <li>
                      <a href="#">
                        <h3>
                          Design some buttons
                          <small className="pull-right">20%</small>
                        </h3>
                        <div className="progress xs">
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">View all tasks</a>
                </li>
              </ul>
            </li>
            <li className="dropdown user user-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src={require("admin-lte/dist/img/user2-160x160.jpg")} className="user-image" alt="User"></img>
                <span className="hidden-xs">Alexander Pierce</span>
              </a>
              <ul className="dropdown-menu">
                <li className="user-header">
                  <img src={require("admin-lte/dist/img/user2-160x160.jpg")} className="img-circle" alt="User"></img>
                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                </li>
                <li className="user-body">
                  <div className="row">
                    <div className="col-xs-4 text-center">
                      <a href="#">Followers</a>
                    </div>
                    <div className="col-xs-4 text-center">
                      <a href="#">Sales</a>
                    </div>
                    <div className="col-xs-4 text-center">
                      <a href="#">Friends</a>
                    </div>
                  </div>
                </li>
                <li className="user-footer">
                  <div className="pull-left">
                    <a href="#" className="btn btn-default btn-flat">Profile</a>
                  </div>
                  <div className="pull-right">
                    <a href="#" className="btn btn-default btn-flat">Sign out</a>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
