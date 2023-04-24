import {ReactComponent as LinkedIcon } from '../../assets/icons/linkedin.svg'
import {ReactComponent as GitHubIcon } from '../../assets/icons/github.svg'

import { ThemeSwitch } from './ThemeSwitch/ThemeSwitch'

import { 
    ToplineContainer,
    ToplineLink,
    LinksWrapper,
    ToplineWrapper
  } from './Topline.styles'


export const Topline = () => {
  return (
    <ToplineWrapper>
        <ToplineContainer>
        
            <ThemeSwitch />

            <LinksWrapper>
                <ToplineLink href='https://linkedin.com'>
                <LinkedIcon />
                </ToplineLink>
                <ToplineLink href='https://github.com'>
                <GitHubIcon />
                </ToplineLink>
            </LinksWrapper>

        </ToplineContainer>
    </ToplineWrapper>
  )
}