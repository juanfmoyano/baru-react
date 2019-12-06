import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LunchSlide from "./LunchSlide/LunchSlide";
import Dots from "./Dots/Dots";

import { createDotsArray } from "utils/helpers/dotHelper";

import "./LunchsSlider.scss";

class LunchsSlider extends Component {
  state = {
    activeSlideIndex: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => this.nextImageHandler(), 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

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

  dotSelectionHandler(dotIndex) {
    this.setState({ activeSlideIndex: dotIndex });
  }

  render() {
    const dotsArray = createDotsArray(this.props.slides.length);
    return (
      <div className="LunchsSlider">
        <div
          className="LunchsSlider__Previous"
          onClick={() => this.previousImageHandler()}
        >
          <FontAwesomeIcon icon={this.props.iconPrevious} />
        </div>
        <div className="LunchsSlider__Show">
          {this.createLunchSlides()}
          <Dots
            dots={dotsArray}
            activeDot={this.state.activeSlideIndex}
            dotAction={dotIndex => this.dotSelectionHandler(dotIndex)}
          />
        </div>
        <div
          className="LunchsSlider__Next"
          onClick={() => this.nextImageHandler()}
        >
          <FontAwesomeIcon icon={this.props.iconNext} />
        </div>
      </div>
    );
  }
}

export default LunchsSlider;
