import React from 'react';

const AboutSection: React.FC<{isDarkMode: boolean, defaultText: string[]}> = ({isDarkMode, defaultText}) =>
{
    return (
    <div className={"" + (isDarkMode ? "" : "")}>
       <h1 className='text-xl dark:text-Neutral-0 text-DarkNeutralN-100 p-2'>About me</h1>
       {defaultText.map((textValue: string) => (
        <p className='p-2' key={textValue.substring(0, textValue.length > 10 ? 10 : textValue.length)}>{textValue}</p>
       ))}
    </div>
    );
}

export default AboutSection;