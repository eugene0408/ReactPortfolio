import React, {useContext} from 'react'
import { ThemeContext, SectionContext } from '../../App'

import { ReactComponent as HomeIcon} from '../../assets/icons/menu/home.svg'
import { ReactComponent as CodeIcon} from '../../assets/icons/menu/code.svg'
import { ReactComponent as GalleryIcon} from '../../assets/icons/menu/gallery.svg'
import { ReactComponent as ContactsIcon} from '../../assets/icons/menu/chat.svg'

import {
  Menu,
  MenuLink,
  MenuWrapper
} from './SideMenu.styles'

export const SideMenu = ({scrollToSection}) => {
  const {finalTheme} = useContext(ThemeContext)
  const {active} = useContext(SectionContext)


const NavMenuLink = (props) => (
  <MenuLink
    to={props.to}
    theme={finalTheme}
    active={active}
    onClick={() => scrollToSection(props.to)}
  >
    {props.children}
  </MenuLink>

  )

  return (
    <MenuWrapper>
       <Menu>

        <NavMenuLink to="s-home">
          <HomeIcon/>
        </NavMenuLink>

        <NavMenuLink to="s-skills">
          <CodeIcon/>
        </NavMenuLink>

        <NavMenuLink to="s-portfolio" >
          <GalleryIcon/>
        </NavMenuLink>

        <NavMenuLink to="s-contacts">
          <ContactsIcon/>
        </NavMenuLink>
      </Menu>
    </MenuWrapper>

  )
}

