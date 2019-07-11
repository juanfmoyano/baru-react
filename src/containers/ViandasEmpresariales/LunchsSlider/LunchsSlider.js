import React, { Component } from "react";

import "./LunchsSlider.scss";

import LunchSlide from "./LunchSlide/LunchSlide";

class LunchsSlider extends Component {
  state = {
    slides: this.props.slides,
    activeSlideIndex: 0
  };

  createLunchSlides() {
    return this.state.slides.map((slide, index) => {
      const isActiveSlide = index === this.state.activeSlideIndex;
      return <LunchSlide key={index} active={isActiveSlide} image={slide} />;
    });
  }

  previousImageHandler() {
    const actualState = { ...this.state };
    const actualIndex = actualState.activeSlideIndex;
    const maxIndex = actualState.slides.length - 1;
    const nextIndex = actualIndex === 0 ? maxIndex : actualIndex - 1;
    this.setState({ activeSlideIndex: nextIndex });
  }

  nextImageHandler() {
    const actualState = { ...this.state };
    const actualIndex = actualState.activeSlideIndex;
    const maxIndex = actualState.slides.length - 1;
    const nextIndex = actualIndex === maxIndex ? 0 : actualIndex + 1;
    this.setState({ activeSlideIndex: nextIndex });
  }

  render() {
    return (
      <div className="LunchsSlider">
        <button
          className="LunchsSlider__Previous"
          onClick={() => this.previousImageHandler()}
        >
          {" "}
          Previous{" "}
        </button>
        <div className="LunchsSlider__Show">{this.createLunchSlides()}</div>
        <button
          className="LunchsSlider__Next"
          onClick={() => this.nextImageHandler()}
        >
          {" "}
          Next{" "}
        </button>
      </div>
    );
  }
}

export default LunchsSlider;
