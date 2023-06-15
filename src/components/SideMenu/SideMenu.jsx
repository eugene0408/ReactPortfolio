import React, {useContext} from 'react'
import { ThemeContext, SectionContext } from '../../App'

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

  // Sections list
  const sections = ['s-home', 's-skills', 's-portfolio', 's-contacts']

  const furtherSection = () => {
    const currentIndex = sections.indexOf(active);
    return {
      next: sections[currentIndex + 1],
      prev: sections[currentIndex - 1]
    }
  }

  const nextSection = furtherSection().next;
  const prevSection = furtherSection().prev;

  const sectionNameFromId = (string) => {
    if(string){
      string = string.substring(2)
      string = string.toUpperCase()
      return string
    }
  }


  return (
    <MenuWrapper>

      <ArrowLinkPrev
        prevSection={prevSection}
        active={active}
        onClick={ () => scrollToSection(prevSection)}
      >
        <UpArrow />
        {sectionNameFromId(prevSection)}
      </ArrowLinkPrev>

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

      <ArrowLinkNext
        nextSection={nextSection}
        active={active}
        onClick={ () => scrollToSection(nextSection)}
      >
        {sectionNameFromId(nextSection)}
        <DownArrow />
      </ArrowLinkNext>

    </MenuWrapper>

  )
}

