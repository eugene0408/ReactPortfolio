import React, {useContext, useEffect, useState} from 'react'
import { motion } from 'framer-motion'

import { ThemeContext } from '../../../App'

import { ReactComponent as MoonIcon } from '../../../assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '../../../assets/icons/sun.svg'

import {
    Container,
    Wrapper,
    Item,
    ThemeIndicator
} from './ThemeSwitch.styles'

export const ThemeSwitch = () => {

    const {theme, changeTheme} = useContext(ThemeContext)

    const switchHandler = () => {
        changeTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const ThemeIcon = ({title}) => {
        switch(title) {
            case 'dark':
                return(<MoonIcon/>)
            case 'light':
                return(<SunIcon/>)
            default: 
                return
        }
    }

    const themeOptions = ['dark', 'light']

    const [indicatorPosition, 
        setPosition] = useState(0)

    useEffect(()=> {
        setPosition(theme === 'dark' ? 0 : 34)
    }, [theme])

    return (

        <Wrapper
            theme={theme}
            as={motion.div}
            onClick={() => switchHandler()}
        >
            <ThemeIndicator 
                as={motion.div}
                theme={theme}
                animate={{
                    x: indicatorPosition,
                }}
                transition={{
                    duration: 0.05,
                    type: "spring"
                }}
            />

            {themeOptions.map((option, index)=> (
                <Item
                    key={option + index}
                    value={option}
                    theme={theme}
                    as={motion.div}
                >
                    <ThemeIcon title={option}/>
                </Item>
            ))}


        </Wrapper>

    )
}
