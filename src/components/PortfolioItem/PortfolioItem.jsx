import React from 'react'
import {ReactComponent as InternetIcon} from '../../assets/icons/internet.svg'
import {ReactComponent as GitHubIcon} from '../../assets/icons/skills/github.svg'

import {
    Wrapper,
    ScreensWrapper,
    DescrWrapper,
    DesctopScreen,
    Title,
    Description,
    MobileScreen,
    Tags,
    LinksWrapper,
    LinkItem
} from './PortfolioItem.styles'

export const PortfolioItem = ({
  desktop,
  mobile,
  descr,
  title,
  tags,
  website,
  repo
}) => {
  return (
    <Wrapper>
        <ScreensWrapper>
          <DesctopScreen>
            <img src={desktop} alt={`${title}-img`} />

            <MobileScreen>
              <img src={mobile} alt={`${title}-small-img`} />
            </MobileScreen>

            <Tags>
              { tags.map(tag => <span key={tag + Math.floor((Math.random()*1000)+1) }>{tag}</span>) }
            </Tags>

          </DesctopScreen>
        </ScreensWrapper>
        <DescrWrapper>

            <Title>
              {title}
            </Title>

            <Description>
              {descr}
            </Description>

            <LinksWrapper>

              <LinkItem href={website}>
                website <InternetIcon />
              </LinkItem>
              
              <span>||</span>

              <LinkItem href={repo}>
                <GitHubIcon /> repository
              </LinkItem>

            </LinksWrapper>
        </DescrWrapper>
    </Wrapper>
  )
}
