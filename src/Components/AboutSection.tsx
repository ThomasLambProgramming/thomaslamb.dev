import React from 'react';

const AboutSection: React.FC<{isDarkMode: boolean, defaultText: string[]}> = ({isDarkMode, defaultText}) =>
{
    return (
    <div className={"" + (isDarkMode ? "" : "")}>
       {defaultText.map((textValue: string) => (
        <p className='p-2'>{textValue}</p>
       ))}
    </div>
    );
}

export default AboutSection;