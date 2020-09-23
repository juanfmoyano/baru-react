import React, { Component } from "react";

import ServiceItem from "./ServiceItem/ServiceItem";

import "./ServicesList.scss";

class ServicesList extends Component {
  getServiceItems() {
    return this.props.services.map(service => (
      <ServiceItem key={service.title} {...service} />
    ));
  }
  //render() {
  //  return <div className="ServicesList">{this.getServiceItems()}</div>;
  // }

  render() {
    const [
      fabrica,
      eventos,
      viandas,
      baraka,
      restoDelBosque,
      santasLasBrasas
    ] = this.props.services;
    return (
      <div className="ServiceList">
        <div className="ServiceContainer">
          <ServiceItem {...viandas} />
          <ServiceItem {...eventos} />
        </div>
        <div className="ServiceContainer">
          <ServiceItem {...fabrica} />          
          <ServiceItem {...santasLasBrasas} />
        </div>
        <div className="ServiceContainer">
          <ServiceItem {...restoDelBosque} />
          <ServiceItem {...baraka} />
        </div>
      </div>
    );
  }
}

export default ServicesList;
