import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import closeButton from '../close-button.png'

export interface ModalProps {
  isShown: boolean;
  projectName: string;
  hide: () => void;
}

const ProjectModal: React.FC<ModalProps> = ({isShown, hide, projectName}) => {
    
    const [filePath, setFilePath] = useState('/ProjectAssets/' + projectName + "/" + projectName + ".md");
    const [htmlToRender, setHtmlToRender] = useState<(JSX.Element)[]>([]);

    if (filePath.includes(projectName) == false)
    {
        setFilePath('/ProjectAssets/' + projectName + "/" + projectName + ".md");
        setHtmlToRender([]);
    }

    useEffect(() => {
        const mrk = new Request(filePath);
        fetch(mrk).then(data => data.text()).then(
            text => {
                
                let stringArray : string[];
                stringArray = text.split("\n");
                
                const defaultClasses = " bg-pewter-darker min-w-[100%] pt-10";
                const defaultClassesText = " pr-12 pl-12 pt-4 pb-4";
                const defaultClassesImage = " pr-12 pl-12";
                const defaultClassesHeader = " pt-40 pb-20 text-5xl bg-pewter-default/95 w-full text-4xl";
                
                let newHtml : JSX.Element[];
                newHtml = [];
                stringArray.map(splitText => {
                    
                    //Header 
                    if (splitText.charAt(0) == "#") {
                        
                        let convertedStrings = GetInsideAndRemoveString("<", splitText);
                
                        convertedStrings[1] = convertedStrings[1].replace("#", '');
                        convertedStrings[1] = convertedStrings[1].trim();

                        newHtml.push(<p className={defaultClasses + defaultClassesText + defaultClassesHeader + " " + convertedStrings[0]}>{convertedStrings[1]}</p>);                            
                    }
                    //Link or image
                    else if (splitText.charAt(0) == "!") {

                        let convertedStrings = GetInsideAndRemoveString("[", splitText);
                        let altText = convertedStrings[0];
                        
                        convertedStrings = GetInsideAndRemoveString('(', splitText);
                        let imgSrc = convertedStrings[0];

                        convertedStrings = GetInsideAndRemoveString('<', splitText);
                        let className = convertedStrings[0];

                        newHtml.push(<img className={className + defaultClasses + defaultClassesImage} src={imgSrc} alt={altText}></img>); 
                    }
                    //Regular Text with css information
                    else if (splitText.charAt(0) == "<") {
                        let convertedStringsH = GetInsideAndRemoveString("<", splitText);
                        
                        if (splitText.includes('['))
                        {
                            let convertedStrings = GetInsideAndRemoveString("[", convertedStringsH[1]);    
                            let linkOutwardText = convertedStrings[0];
                            convertedStrings = GetInsideAndRemoveString("(", convertedStrings[1]);
                            let link = convertedStrings[0];
                            let indexOfLink = splitText.indexOf('[');     
                            
                            let firstHalfOfString = convertedStrings[1].slice(0, indexOfLink);
                            let secondHalfOfString = convertedStrings[1].slice(indexOfLink + 1);

                            newHtml.push(<p className={convertedStringsH[0] + defaultClasses + defaultClassesText}>{firstHalfOfString}<a target="_blank" href={link}>{linkOutwardText}</a>{secondHalfOfString}</p>)
                            
                        }
                        else
                            newHtml.push(<p className={convertedStringsH[0] + defaultClasses + defaultClassesText}>{convertedStringsH[1]}</p>);
                    }
                    //basic text with standard formatting.
                    else if (splitText.trim().length > 1) {
                        
                        let outputText = splitText;
                        if (splitText.includes('['))
                        {
                            let convertedStrings = GetInsideAndRemoveString("[", splitText);    
                            let linkOutwardText = convertedStrings[0];
                            convertedStrings = GetInsideAndRemoveString("(", convertedStrings[1]);
                            let link = convertedStrings[0];
                            let indexOfLink = splitText.indexOf('[');     
                            
                            let firstHalfOfString = convertedStrings[1].slice(0, indexOfLink);
                            let secondHalfOfString = convertedStrings[1].slice(indexOfLink + 1);

                            newHtml.push(<p className={defaultClasses + defaultClassesText}>{firstHalfOfString}<a target="_blank" href={link}>{linkOutwardText}</a>{secondHalfOfString}</p>)
                            
                        }
                        else
                            newHtml.push(<p className={defaultClasses + defaultClassesText}>{outputText}</p>);
                    }
                });

                setHtmlToRender(newHtml);

                // setPost(text);
            });
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
                <div className="fixed inset-0 overflow-y-auto z-30 rounded-lg align-middle w-[95%] h-full m-auto text-center bg-pewter-default/95">
                    <div className="text-gray-950 max-w-screen-lg w-full flex justify-center flex-col items-center m-auto scroll-smooth opacity-[100%] pb-12">
                        {htmlToRender}
                    </div>
                <div className="opacity-0 text-opacity-0 h-[30%]">
                    Adding height here so scroll doesnt cut off end of modal text
                </div>
                </div>
            </div>
        </React.Fragment>
    );
        
    // Do markdown file reading here.
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

/** Output Array = First index is the inside of brackets, Second index is the rest of the string with the string from opening to ending statement removed. **/
function GetInsideAndRemoveString(statementToCheck: string, text: string) : string[] {
    let regex: RegExp;
    if (statementToCheck.includes("<"))
        regex = /\<(.*?)\>/g;
    else if (statementToCheck.includes("("))
        regex = /\((.*?)\)/g;
    else if (statementToCheck.includes("["))
        regex = /\[(.*?)\]/g;
    else
    {
        //Returning a double so that regardless of what is used it just returns the same text.
        return [text, text];
    }

    let inBracketStringArray = text.match(regex);
                        
    let outsideBracketString = text.replace(regex, '');
    outsideBracketString = outsideBracketString.trim();

    let inBracketString: string;
    if (inBracketStringArray != null)
        inBracketString = inBracketStringArray[0].substring(1, inBracketStringArray[0].length - 1);
    else
        inBracketString = "";

    return [inBracketString, outsideBracketString];
}

export default ProjectModal;

