import { useState, useEffect, Fragment } from "react";

interface CarouselProps {
  translateXAmount: number,
  imagesToDisplay: string[],
  isDarkMode: boolean,
}

const transitionDuration: number = 500;
const gotoNextImageTimer: number = 4000;

const CarouselDisplay: React.FC<CarouselProps> = (props: CarouselProps) => {
  let imageArray = [props.imagesToDisplay[props.imagesToDisplay.length - 1], ...props.imagesToDisplay, props.imagesToDisplay[0]];
  const [carouselImages] = useState<string[]>(imageArray);

  const [projectIndex, setProjectIndex] = useState<number>(1);
  const [previousProjectIndex, setPreviousProjectIndex] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      IterateProjectIndex(1);
    }, gotoNextImageTimer);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [projectIndex]);

  const IterateProjectIndex = (direction: number) => {
    let newIndex = projectIndex + direction;

    if (direction > 0) {
      if (newIndex > carouselImages.length - 2) {
        setTimeout(() => {
          setProjectIndex(1);
        }, transitionDuration);
        setPreviousProjectIndex(carouselImages.length - 1);
      }
    }
    else if (direction < 0) {
      if (newIndex < 1) {
        setTimeout(() => {
          setPreviousProjectIndex(0);
          setProjectIndex(carouselImages.length - 2);
        }, transitionDuration);
      }
    }

    if (previousProjectIndex != projectIndex)
      setPreviousProjectIndex(projectIndex);

    setProjectIndex(newIndex);
  };

  return (
    <div className={`relative w-full max-w-[${props.translateXAmount}px] bg-emerald-100`}>
      <div className="relative h-56 flex overflow-hidden md:h-96">
        <div className={`flex ${((projectIndex == 1 && previousProjectIndex == carouselImages.length - 2) || (projectIndex == carouselImages.length - 2 && previousProjectIndex == 0)) ? "" : "transition ease-out duration-500"}`}
          style={{
            transform: `translateX(${projectIndex * -props.translateXAmount}px)`,
          }}>

          {carouselImages.map((filepath: string, index: number) => {
            return (
              <img key={index + "Carousel" + carouselImages[index]} src={filepath}></img>
            );
          })}
        </div>
      </div>

      <CarouselSideButton position="start-0" pointRight={false} onClickFunction={() => IterateProjectIndex(-1)} />
      <CarouselSideButton position="end-0" pointRight={true} onClickFunction={() => IterateProjectIndex(1)} />
    </div>
  );
}

interface SideButtonInterface {
  position: string,
  pointRight: boolean,
  onClickFunction: () => void;
}
const CarouselSideButton: React.FC<SideButtonInterface> = (props) => (
  <Fragment>
    <button type="button" onClick={props.onClickFunction} className={`absolute top-0 ${props.position} z-30 flex items-center justify-center h-full px-4 cursor-pointer group`}>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={props.pointRight ? "m1 9 4-4-4-4" : "M4 1 1 5l4 4"} />
        </svg>
      </span>
    </button >
  </Fragment>
);
export default CarouselDisplay;
