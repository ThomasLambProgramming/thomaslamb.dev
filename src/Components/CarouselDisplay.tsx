import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

interface CarouselProps {
  translateXAmount: number,
  imagesToDisplay: string[],
  isDarkMode: boolean,
}

const CarouselDisplay: React.FC<CarouselProps> = (props: CarouselProps) => {

  let imgArray: string[] = [];
  let vidArray: string[] = [];

  props.imagesToDisplay.map((stringValue) => {
    if (stringValue.includes(".mp4"))
      vidArray.push(stringValue);
    else
      imgArray.push(stringValue);
  })

  const [imageArray] = useState(imgArray);
  const [videoArray] = useState(vidArray);

  return (
    <div >
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={props.imagesToDisplay.length > 1}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        autoPlay={true}
        transitionDuration={500}
        containerClass="carousel-container flex max-w-[500px]"
        itemClass="carousel-item-padding-40-px"
        dotListClass="custom-dot-list-style"
        pauseOnHover
      >

        {videoArray.map((filepath: string, index: number) => {
          return (
            <div className='' key={index + "CarouselDiv" + videoArray[index]}>
              <video key={index + "Carousel" + videoArray[index]} muted preload="none" autoPlay={true} loop src={filepath}></video>
            </div>
          );
        })}
        {imageArray.map((filepath: string, index: number) => {
          return (
            <div className='' key={index + "CarouselDiv" + videoArray[index]}>
              <img key={index + "Carousel" + imageArray[index]} src={filepath}></img>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselDisplay;
