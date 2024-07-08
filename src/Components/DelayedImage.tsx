import React, { useState } from 'react';

const DelayedImage: React.FC<{projectName: string, className : string}> = ({projectName, className}) =>
{
    let filePath = '/ProjectAssets/' + projectName + "/" + projectName + "Preview";
    
    const [isLoaded, SetIsLoaded] = useState(false);
    
    return (
        <div>
            {isLoaded ? <img className={className} onLoad={() => SetIsLoaded(true)} src={filePath + "Still.png"}></img> : <React.Fragment></React.Fragment> }
            <img className={className} src={filePath + ".gif"}></img>
        </div>
    );
}
export default DelayedImage;