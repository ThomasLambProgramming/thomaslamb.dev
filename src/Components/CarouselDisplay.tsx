import { useState, Fragment } from "react";

//const translateXAmount: number = 600;
//const imagesToDisplay: string[] = [
//  '/ProjectAssets/Malicious/MaliciousTitle.png',
//  '/ProjectAssets/Malicious/Malicious4.png',
//  '/ProjectAssets/Malicious/Malicious1.png',
//];
interface CarouselProps {
  translateXAmount: number,
  imagesToDisplay: string[],
  isDarkMode: boolean,
}
const CarouselDisplay: React.FC<CarouselProps> = (props: CarouselProps) => {

  const [projectIndex, setProjectIndex] = useState<number>(0);
  const IterateProjectIndex = (direction: number) => {
    let newIndex = projectIndex + direction;
    if (newIndex < 0) {
      newIndex = props.imagesToDisplay.length - 1;
    }
    else if (newIndex > props.imagesToDisplay.length - 1) {
      newIndex = 0;
    }
    setProjectIndex(newIndex);
  };

  return (
    <div className={`relative w-full max-w-[${props.translateXAmount}px] bg-emerald-100`}>
      <div className="relative h-56 flex overflow-hidden md:h-96">
        <div className="flex transition ease-out duration-100"
          style={{
            transform: `translateX(${projectIndex * -props.translateXAmount}px)`,
          }}>

          {props.imagesToDisplay.map((filepath: string) => {
            return (
              <img src={filepath}></img>
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
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={props.pointRight ? "m1 9 4-4-4-4" : "M4 1 1 5l4 4"} />
        </svg>
      </span>
    </button >
  </Fragment>
);
export default CarouselDisplay;
