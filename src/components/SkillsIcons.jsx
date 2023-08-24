import React from 'react';


import { ReactComponent as HTMLIcon } from '../assets/icons/skills/html.svg';
import { ReactComponent as CssIcon } from '../assets/icons/skills/css.svg';
import { ReactComponent as SassIcon } from '../assets/icons/skills/sass.svg';
import { ReactComponent as BootstrapIcon } from '../assets/icons/skills/bootstrap.svg';
import { ReactComponent as ResponsiveIcon } from '../assets/icons/skills/responsive.svg';
import { ReactComponent as JSIcon } from '../assets/icons/skills/js.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/skills/atom.svg';
import { ReactComponent as ReduxIcon } from '../assets/icons/skills/redux.svg';
import { ReactComponent as GitIcon } from '../assets/icons/skills/git.svg';
import { ReactComponent as GitHubIcon } from '../assets/icons/skills/github.svg';
import { ReactComponent as DeployIcon } from '../assets/icons/skills/upload.svg';
import { ReactComponent as GulpIcon } from '../assets/icons/skills/gulp.svg';
import { ReactComponent as FigmaIcon } from '../assets/icons/skills/figma.svg';
import { ReactComponent as PhotoshopIcon } from '../assets/icons/skills/photoshop.svg';




export const SkillsIcons = ({name}) => {
    switch(name){
        case "html":
            return(<HTMLIcon />)
        case "css":
            return(<CssIcon/>)
        case "sass":
            return(<SassIcon/>)
        case "bootstrap":
            return(<BootstrapIcon/>)
        case "responsive":
            return(<ResponsiveIcon/>)
        case "js" || "java script":
            return(<JSIcon/>)
        case "react":
            return(<ReactIcon/>)
        case "redux":
            return(<ReduxIcon/>)
        case "git":
            return(<GitIcon/>)
        case "github":
            return(<GitHubIcon/>)
        case "deploying":
            return(<DeployIcon/>)
        case "gulp":
            return(<GulpIcon/>)
        case "figma":
            return(<FigmaIcon/>)
        case "photoshop":
            return(<PhotoshopIcon/>)
        default: return(<span>icon</span>)
    }
}
