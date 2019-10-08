import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { Draggable } from 'react-page-maker';

class DraggableSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
      slides: [
        'https://picsum.photos/id/0/300/100',
        'https://picsum.photos/id/1/300/100',
        'https://picsum.photos/id/2/300/100',
      ]
    }
  }

  addSlide = () => {
    const newCount = this.state.slides.length;
    this.setState({
      slides: [
        ...this.state.slides,
        `https://picsum.photos/id/${newCount}/300/100`
      ]
    });
  }

  removeSlide = () => {
    this.setState({
      slides: this.state.slides
        .filter((s, i) => i !==  this.state.currentSlide)
    });
  }

  updateCount = (factor) => {
    this.setState({
      currentSlide: this.state.currentSlide + (1 * factor)
    });
  }

  render() {
    const { showBasicContent, showPreview } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    if (showBasicContent) {
      return (
        <Draggable { ...this.props } >
          {
            <span>Slider</span>
          }
        </Draggable>
      )
    }

    if (showPreview) {
      return (
        <div className="relative m-1">
          <CarouselProvider
            naturalSlideWidth={300}
            naturalSlideHeight={100}
            totalSlides={3}
          >
            <Slider>
              {
                this.state.slides
                  .map((src, i) => (
                    <Slide index={`${i}-1`}>
                      <img style={{'width': '100%'}} src={src} />
                    </Slide>
                  ))
              }
            </Slider>
            <ButtonBack><FaArrowLeft /></ButtonBack>
            <ButtonNext><FaArrowRight /></ButtonNext>
          </CarouselProvider>
        </div>
      );
    }

    return (
      <Draggable { ...this.props } >
        <CarouselProvider
          naturalSlideWidth={300}
          naturalSlideHeight={100}
          totalSlides={3}
        >
          <Slider>
            {
              this.state.slides
                .map((src, i) => (
                  <Slide index={i}>
                    <img style={{'width': '100%'}} src={src} />
                  </Slide>
                ))
            }
          </Slider>
          <ButtonBack onClick={() => this.updateCount(1)}><FaArrowLeft /></ButtonBack>
          <ButtonNext  onClick={() => this.updateCount(-1)}><FaArrowRight /></ButtonNext>
          {/* <div className="text-center">
            <FaPlus onClick={this.addSlide} className="m-1" />
            <FaTrash onClick={this.removeSlide} className="m-1" color="#dc3545" />
          </div> */}
        </CarouselProvider>
      </Draggable>
    )
  }
}

export default DraggableSlider;