import React, { Component } from "react";
import LunchSlide from "./LunchSlide/LunchSlide";

import { ICONS_LABELS } from "utils/constants";
import { createDotsArray } from "utils/helpers/dotHelper";

import Dots from "./Dots/Dots";

import "./LunchsSlider.scss";

class LunchsSlider extends Component {
  state = {
    activeSlideIndex: 0
  };

  createLunchSlides() {
    return this.props.slides.map((slide, index) => {
      const isActiveSlide = index === this.state.activeSlideIndex;
      return <LunchSlide active={isActiveSlide} key={index} image={slide} />;
    });
  }

  previousImageHandler() {
    const actualIndex = this.state.activeSlideIndex;
    const maxIndex = this.props.slides.length - 1;
    const nextIndex = actualIndex === 0 ? maxIndex : actualIndex - 1;
    this.setState({ activeSlideIndex: nextIndex });
  }

  nextImageHandler() {
    const actualIndex = this.state.activeSlideIndex;
    const maxIndex = this.props.slides.length - 1;
    const nextIndex = actualIndex === maxIndex ? 0 : actualIndex + 1;
    this.setState({ activeSlideIndex: nextIndex });
  }

  render() {
    const dotsArray = createDotsArray(this.props.slides.length);
    return (
      <div className="LunchsSlider">
        <div
          className="LunchsSlider__Previous"
          onClick={() => this.previousImageHandler()}
        >
          {ICONS_LABELS.previous}
        </div>
        <div className="LunchsSlider__Show">
          {this.createLunchSlides()}
          <Dots dots={dotsArray} activeDot={this.state.activeSlideIndex} />
        </div>
        <div
          className="LunchsSlider__Next"
          onClick={() => this.nextImageHandler()}
        >
          {ICONS_LABELS.next}
        </div>
      </div>
    );
  }
}

export default LunchsSlider;
