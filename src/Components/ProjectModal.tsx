import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';
import closeButton from '../close-button.png'

export interface ModalProps {
  isShown: boolean;
  projectName: string;
  hide: () => void;
}

const ProjectModal: React.FC<ModalProps> = ({isShown, hide, projectName}) => {
    
    const [filePath, setFilePath] = useState('/ProjectAssets/' + projectName + "/" + projectName + ".md");
    const [post, setPost] = useState('');

    if (filePath.includes(projectName) == false)
    {
        //Clear current post
        setPost("");
        setFilePath('/ProjectAssets/' + projectName + "/" + projectName + ".md");
    }

    useEffect(() => {
        const mrk = new Request(filePath);
        fetch(mrk).then(data => data.text()).then(text => setPost(text));
    }, [filePath]);

    const modal = (
        <React.Fragment>
            {/* This is just the background so if the user clicks away it will go back to the main page */}
            <div className="block overflow-y-scroll">
                <div className='fixed overscroll-none inset-0 flex items-center overflow-y-hidden z-20 opacity-30 w-full h-full align-middle justify-center' onClick={hide} />
                {/* Had to add a double up here so the leave button will stay in the same position, just makes it so the scroll isnt affected in the very top of the modal, can probably add a header
                background later so people will think that the header itself is what is denying the scroll. */}
                <div className="fixed inset-0 overflow-y-auto rounded-lg z-40 align-middle w-[95%] h-[5%] mt-8 m-auto opacity-[100%] text-center">
                    <div className="absolute border-0 inline-block z-40 align-middle overflow-hidden cursor-pointer whitespace-nowrap min-h-[40px] max-h-[60px] min-w-[40px] max-w-[60px] w-auto h-auto top-0 mt-5 mr-8 right-0" onClick={hide}>
                        <img src={closeButton} alt="X" className="min-h-[40px] max-h-[40px] min-w-[40px] max-w-[60px] w-auto h-auto"/>
                    </div>
                </div>
                <div className="fixed inset-0 overflow-y-auto z-30 rounded-lg align-middle w-[95%] h-full mt-8 m-auto text-center bg-pewter-default/95">
                    <div className="text-gray-950 space-y-12 mt-8 max-w-screen-lg w-full flex justify-center flex-col items-center m-auto scroll-smooth opacity-[100%]">
                        <Markdown>
                            {post}
                        </Markdown>
                    </div>
                <div className="opacity-0 text-opacity-0 h-[10%]">
                    Adding height here so scroll doesnt cut off end of modal text
                </div>
                </div>
            </div>
        </React.Fragment>
    );
        
    // Do markdown file reading here.
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default ProjectModal;

