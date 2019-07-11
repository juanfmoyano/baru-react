import React, { Component } from "react";

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
import { getRoutesInfo } from "../../utils/routing/routesInfo";

class Layout extends Component {
  render() {
    const routesInfo = getRoutesInfo();
    return (
      <Wrapper>
        <Header navOptions={routesInfo} openMenu={this.props.openMenu} />
        <SideMenu
          open={this.props.open}
          closeMenu={this.props.closeMenu}
          options={routesInfo}
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
