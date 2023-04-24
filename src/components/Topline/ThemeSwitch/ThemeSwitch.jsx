import React, {useContext} from 'react'

import { ThemeContext } from '../../../App'

import { ReactComponent as MoonIcon } from '../../../assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '../../../assets/icons/sun.svg'
import { ReactComponent as AutoIcon } from '../../../assets/icons/auto.svg'

import {
    Container,
    Wrapper,
    Item,
    // IndicatorWrapper,
    ThemeIndicator
} from './ThemeSwitch.styles'

export const ThemeSwitch = () => {

    const {selectedTheme, changeTheme, finalTheme} = useContext(ThemeContext)
    const switchHandler = (e) => {
        changeTheme(e.currentTarget.value)
    }

    return (
      <Wrapper
        theme={finalTheme}
      >

        <ThemeIndicator 
            selectedTheme={selectedTheme}
            theme = {finalTheme}
        />

        <Item
            value={'dark'}
            selectedTheme={selectedTheme}
            theme = {finalTheme}
            onClick={e => switchHandler(e)}
        >
            <MoonIcon />
        </Item>
        <Item
            value={'auto'}
            selectedTheme={selectedTheme}
            theme = {finalTheme}
            onClick={e => switchHandler(e)}
        >
            <AutoIcon />
        </Item>
        <Item
            value={'light'}
            selectedTheme={selectedTheme}
            theme = {finalTheme}
            onClick={e => switchHandler(e)}
        >
            <SunIcon />
        </Item>
      </Wrapper>
    )
}
