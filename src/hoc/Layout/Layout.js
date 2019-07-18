import React, { Component } from "react";


import { transformObjectToArray } from "utils/helpers/objectsHelper";

// Redux
import { connect } from "react-redux";
import * as menuActions from "store/actions/menu/actions";

// Components
import Wrapper from "hoc/Wrapper/Wrapper";
import Header from "components/Header/Header";
import SideMenu from "components/Navigation/SideMenu/SideMenu";
import Backdrop from "components/UI/Backdrop/Backdrop";
import Footer from "components/Footer/Footer";

// Utilities
import {
  getRoutesInfo
} from "utils/routing/routesInfo";
import { SIDEMENU } from "utils/constants";

class Layout extends Component {
  render() {
    const routesInfoObject = getRoutesInfo();
    Object.keys(routesInfoObject).forEach(route => {
      routesInfoObject[route] = {
        ...routesInfoObject[route],
        icon: SIDEMENU.itemIcons[route]
      };
    });
    const routesInfoArray = transformObjectToArray(routesInfoObject);
    return (
      <Wrapper>
        <Header navOptions={routesInfoArray} openMenu={this.props.openMenu} />
        <SideMenu
          open={this.props.open}
          closeMenu={this.props.closeMenu}
          options={routesInfoArray}
        />
        <Backdrop show={this.props.open} clicked={this.props.closeMenu} />
        <main className="Main">{this.props.children}</main>
        <Footer />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openMenu: () => dispatch(menuActions.openMenu()),
  closeMenu: () => dispatch(menuActions.closeMenu())
});

const mapStateToProps = state => ({
  open: state.ui.menuOpen
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
