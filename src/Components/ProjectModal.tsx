import React from 'react';
import ReactDOM from 'react-dom';
import DefaultBlankProject from './ProjectComponents/DefaultBlank/DefaultBlankProject';
import ManiacCabProject from './ProjectComponents/ManiacCab/ManiacCabProject';
import DirectXRendererProject from './ProjectComponents/DirectXRenderer/DirectXRendererProject';
import NodeGraphGeneratorProject from './ProjectComponents/NodeGraphGenerator/NodeGraphGeneratorProject';
import MaliciousProject from './ProjectComponents/Malicious/MaliciousProject';
import RapidDeliveryProject from './ProjectComponents/RapidDelivery/RapidDeliveryProject';
import CarnivalCarnageProject from './ProjectComponents/CarnivalCarnage/CarnivalCarnageProject';
import IsolatorProject from './ProjectComponents/Isolator/IsolatorProject';
import BezierProject from './ProjectComponents/BezierCurves/BezierProject';
import FishingWizardProject from './ProjectComponents/FishingWizard/FishingWizardProject';
import GraphicsEngineProject from './ProjectComponents/GraphicsEngine/GraphicsEngineProject';
import LiminalSleepProject from './ProjectComponents/LiminalSleep/LiminalSleepProject';
import OpenglRendererProject from './ProjectComponents/OpenglRenderer/OpenglRendererProject';

interface ModalProps {
  isShown: boolean;
  index: number;
  hide: () => void;
  darkMode: boolean;
}

const ProjectModal: React.FC<ModalProps> = (properties) => {

  let componentToRender = <DefaultBlankProject darkModeEnabled={properties.darkMode}></DefaultBlankProject>
  switch (properties.index) {
    case 0:
      //Vlad
      break;
    case 1:
      //Aradena
      break;
    case 2:
      //Homebase
      break;
    case 3:
      //Motogp
      break;
    case 4:
      //ManiacCab
      componentToRender = <ManiacCabProject darkModeEnabled={properties.darkMode} />
      break;
    case 5:
      //DirectX
      componentToRender = <DirectXRendererProject darkModeEnabled={properties.darkMode} />
      break;
    case 6:
      //FishingWizard
      componentToRender = <FishingWizardProject darkModeEnabled={properties.darkMode} />
      break;
    case 7:
      //GraphicsEngine
      componentToRender = <GraphicsEngineProject darkModeEnabled={properties.darkMode} />
      break;
    case 8:
      //NodeGraph
      componentToRender = <NodeGraphGeneratorProject darkModeEnabled={properties.darkMode} />
      break;
    case 9:
      //LiminalSleep
      componentToRender = <LiminalSleepProject darkModeEnabled={properties.darkMode} />
      break;
    case 10:
      //MaliciousProject
      componentToRender = <MaliciousProject darkModeEnabled={properties.darkMode} />
      break;
    case 11:
      //RapidDelivery
      componentToRender = <RapidDeliveryProject darkModeEnabled={properties.darkMode} />
      break;
    case 12:
      //CarnivalCarnage
      componentToRender = <CarnivalCarnageProject darkModeEnabled={properties.darkMode} />
      break;
    case 13:
      //Isolator
      componentToRender = <IsolatorProject darkModeEnabled={properties.darkMode} />
      break;
    case 14:
      //Bezier
      componentToRender = <BezierProject darkModeEnabled={properties.darkMode} />
      break;
    case 15:
      //OpenglRenderer
      componentToRender = <OpenglRendererProject darkModeEnabled={properties.darkMode} />
      break;
  }

  const modal = (
    <div className={`${properties.darkMode ? "dark" : ""} block z-50 overflow-y-scroll`}>
      <div className='fixed overscroll-none inset-0 flex items-center overflow-y-hidden z-50 w-full h-full align-middle justify-center' onClick={properties.hide} />

      {/* Had to add a double up here so the leave button will stay in the same position, just makes it so the scroll isnt affected in the very top of the modal, can probably add a header
            background later so people will think that the header itself is what is denying the scroll. */}
      <div className="fixed inset-0 overflow-y-auto rounded-lg z-50 align-middle w-[95%] h-[15%] mt-8 m-auto bg-pewter-fakeInvisible text-right">
        <div className="absolute border-0 inline-block z-50 align-middle overflow-hidden cursor-pointer whitespace-nowrap min-h-[40px] max-h-[60px] min-w-[40px] max-w-[60px] w-auto h-auto top-0 mt-5 mr-8 right-0" onClick={properties.hide}>
          {/* <img src={closeButton} alt="X" className="min-h-[40px] max-h-[40px] min-w-[40px] max-w-[60px] w-auto opacity-100 h-auto"/> */}
        </div>
      </div>

      <div className={`fixed ${properties.darkMode ? "bg-DarkNeutral-300/95" : "bg-Neutral-200/95"} hideScroll max-w-[1200px] inset-0 overflow-y-scroll z-50 rounded-lg align-middle w-[95%] h-full m-auto text-center`}>
        <div className="w-full max-w-[1200px] flex align-middle justify-center flex-col items-center m-auto opacity-[100%] pb-12 dark:text-Neutral-600 text-DarkNeutral-0">
          {componentToRender}
        </div>
        <div className="opacity-0 text-opacity-0 h-[30%]">
          Adding height here so scroll doesnt cut off end of modal text
        </div>
      </div>
    </div>
  );

  //Create portal is so it is not under the current divs and is on its own separate section so that it can cover the whole screen without being affected by other elements.
  return properties.isShown ? ReactDOM.createPortal(modal, document.body) : null;
};


export default ProjectModal;

