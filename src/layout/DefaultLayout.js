import React, { Component } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as specialtyActions from '../services/redux/actions/specialtyActions'

export class DefaultLayout extends Component {

  onLogout = async () => {
    await this.props.logout();
  }

  render() {
    return (
      <div>
        <AppSidebar onLogout={this.onLogout}/>
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
          <AppFooter />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
      ...bindActionCreators(Object.assign({}, specialtyActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)
