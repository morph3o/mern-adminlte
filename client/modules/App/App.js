import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div className="hold-transition skin-blue sidebar-mini">
          <Helmet
            title="MERN Starter - Blog App"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
            intl={this.props.intl}
            toggleAddPost={this.toggleAddPostSection}
          />
          <div className="wrapper">
            <aside className="main-sidebar">
              <section className="sidebar">
                <div className="user-panel">
                  <div className="pull-left image">
                    <img src={require("admin-lte/dist/img/user2-160x160.jpg")} className="img-circle"></img>
                  </div>
                  <div className="pull-left info">
                    <p>Alexander Pierce</p>
                    <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                  </div>
                </div>
                <form action="#" method="get" className="sidebar-form">
                  <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder="Search..."></input>
                    <span className="input-group-btn">
                      <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </form>
                <ul className="sidebar-menu" data-widget="tree">
                  <li className="header">HEADER</li>
                  <li className="active"><a href="#"><i className="fa fa-link"></i> <span>Link</span></a></li>
                  <li><a href="#"><i className="fa fa-link"></i> <span>Another Link</span></a></li>
                  <li className="treeview">
                    <a href="#"><i className="fa fa-link"></i> <span>Multilevel</span>
                      <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                      </span>
                    </a>
                    <ul className="treeview-menu">
                      <li><a href="#">Link in level 2</a></li>
                      <li><a href="#">Link in level 2</a></li>
                    </ul>
                  </li>
                </ul>
              </section>
            </aside>
            <div className="content-wrapper">
              {this.props.children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
