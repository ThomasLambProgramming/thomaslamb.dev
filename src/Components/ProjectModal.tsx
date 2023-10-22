import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
}

const ProjectModal: React.FC<ModalProps> = ({isShown, hide}) => {
    
    const modal = (
        <React.Fragment>
            {/* This is just the background so if the user clicks away it will go back to the main page */}
            
            <div className="block overflow-y-scroll">
                <div className='fixed inset-0 flex items-center z-20 opacity-10 w-full h-full align-middle text-center bg-slate-700 justify-center' onClick={hide} />

                <div className="fixed block inset-0 overflow-y-auto items-center z-30 rounded-lg opacity-100 w-3/5 h-[95%] m-auto align-middle text-center bg-slate-950 justify-center">
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                    <div className='text-center text-white mt-20'>Bottom</div>
                </div>
            </div>
                
            
        </React.Fragment>
    );
        
    // Do markdown file reading here.
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default ProjectModal;

