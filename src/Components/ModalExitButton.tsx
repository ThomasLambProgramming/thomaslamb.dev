import React from 'react';

interface ExitProps {
  isShown: boolean;
  hide: () => void;
  darkMode: boolean;
}

const ModalExitButton: React.FC<ExitProps> = (properties) => {
  {/*The fixed modal without loading a separate page forced me to add an overlay for the exit button just so I could use sticky*/ }
  if (!properties.isShown)
    return null;

  return (
    <div className="flex justify-center w-full text-right z-50 sticky top-0 text-3xl">
      <div className={`text-white w-[95%] max-w-[1200px] mr-10 text-6xl " ${properties.darkMode ? "text-white" : "text-black"}`} onClick={properties.hide}>
        <button>
          X
        </button>
      </div>
    </div>
  );
}

export default ModalExitButton;
