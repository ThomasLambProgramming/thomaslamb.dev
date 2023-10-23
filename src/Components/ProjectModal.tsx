import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';

export interface ModalProps {
  isShown: boolean;
  projectName: string;
  hide: () => void;
}

const ProjectModal: React.FC<ModalProps> = ({isShown, hide, projectName}) => {
    
    const filePath = ('/ProjectAssets/' + projectName + "/" + projectName + ".md");
    const [post, setPost] = useState('');

    useEffect(() => {
        
        const mrk = new Request(filePath);
        
        //Clear the current post so images arent remaining.
        setPost("");
        fetch(mrk).then(data => data.text()).then(text => setPost(text));

        // import(
        //     /* @vite-ignore */                    
        //     filePath).then(res => {
        //     fetch(res.default)
        //     .then(res => res.text())
        //     .then(res => {
        //         setPost(res);
        //     })
        //     .catch(err => console.log(err));
        // })
        // .catch(err => console.log(err));

    });

    const modal = (
        <React.Fragment>
            {/* This is just the background so if the user clicks away it will go back to the main page */}
            <div className="block overflow-y-scroll">
                <div className='fixed overscroll-none inset-0 flex items-center overflow-y-hidden z-20 opacity-30 w-full h-full align-middle text-center bg-slate-700 justify-center' onClick={hide} />
                <div className="fixed block inset-0 overflow-y-auto items-center z-30 rounded-lg opacity-[100%] w-[90%] mt-8 h-full m-auto align-middle text-center bg-slate-950 justify-center no-scrollbar">
                    <div className="text-white space-y-12 mt-12 max-w-screen-lg block items-center m-auto">
                        <Markdown components={{
                            em() {
                                return <div className="mt-12 text-black" />        
                            }
                            }}>
                            {post}
                        </Markdown>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
        
    // Do markdown file reading here.
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default ProjectModal;

