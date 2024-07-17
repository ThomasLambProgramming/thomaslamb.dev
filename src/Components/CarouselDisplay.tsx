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
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
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
        {props.imagesToDisplay.map((filepath: string, index: number) => {
          return (
            <div className=''>
              <img key={index + "Carousel" + props.imagesToDisplay[index]} src={filepath}></img>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselDisplay;
