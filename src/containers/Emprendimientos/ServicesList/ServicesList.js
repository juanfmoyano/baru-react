import React, { Component } from "react";

import ServiceItem from "./ServiceItem/ServiceItem";

import "./ServicesList.scss";

class ServicesList extends Component {
  getServiceItems() {
    return this.props.services.map(service => (
      <ServiceItem key={service.title} {...service} />
    ));
  }
  render() {
    return <div className="ServicesList">{this.getServiceItems()}</div>;
  }
}

export default ServicesList;
