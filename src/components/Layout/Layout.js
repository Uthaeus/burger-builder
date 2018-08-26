import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true
  }
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  menuFunctionHandler = () => {
    let current = this.state.showSideDrawer;
    this.setState({showSideDrawer: !current});
  }

  render() {
    return (
      <Aux>
        <Toolbar clicked={this.menuFunctionHandler} />
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
} 



export default Layout;