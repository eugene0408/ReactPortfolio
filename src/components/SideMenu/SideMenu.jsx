import React, {useContext} from 'react'
import { ThemeContext } from '../../App'

import { ReactComponent as HomeIcon} from '../../assets/icons/menu/home.svg'
import { ReactComponent as CodeIcon} from '../../assets/icons/menu/code.svg'
import { ReactComponent as GalleryIcon} from '../../assets/icons/menu/gallery.svg'
import { ReactComponent as ContactsIcon} from '../../assets/icons/menu/chat.svg'
import { ReactComponent as UpArrow } from '../../assets/icons/up-arrow.svg'
import { ReactComponent as DownArrow } from '../../assets/icons/down-arrow.svg'

import {
  Menu,
  MenuLink,
  MenuWrapper,
  ArrowLinkPrev,
  ArrowLinkNext
} from './SideMenu.styles'

export const SideMenu = ({prevSection, nextSection}) => {

  const {finalTheme} = useContext(ThemeContext)
  
  const NavMenuLink = (props) => (
    <MenuLink
      to={props.to}
      theme={finalTheme}
    >
      {props.children}
    </MenuLink>
  
    )



  return (
    <MenuWrapper>

      <ArrowLinkPrev
        prevsection={prevSection}
        to={prevSection === 'home' ? '/' : prevSection}
      >
        <UpArrow />
        {prevSection}
      </ArrowLinkPrev>

       <Menu>

        <NavMenuLink to={"/"}>
          <HomeIcon/>
        </NavMenuLink>

        <NavMenuLink to={"skills"}>
          <CodeIcon/>
        </NavMenuLink>

        <NavMenuLink to={"portfolio"} >
          <GalleryIcon/>
        </NavMenuLink>

        <NavMenuLink to={"contacts"}>
          <ContactsIcon/>
        </NavMenuLink>
      </Menu>

      <ArrowLinkNext
        nextsection={nextSection}
        to={nextSection}
      >
        {nextSection} 
        <DownArrow />
      </ArrowLinkNext>

    </MenuWrapper>

  )
}

