import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';

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
                <div className='fixed overscroll-none inset-0 flex items-center overflow-y-hidden z-20 opacity-30 w-full h-full align-middle text-center bg-slate-700 justify-center' onClick={hide} />
                <div className="fixed inset-0 overflow-y-auto z-30 rounded-lg w-[90%] mt-8 h-auto m-auto text-center bg-slate-950 no-scrollbar">
                    <div className="text-white space-y-12 mt-12 max-w-screen-lg flex justify-center flex-col items-center m-auto">
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

