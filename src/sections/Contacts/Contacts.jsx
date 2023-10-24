import React, {forwardRef, useContext}from 'react'
import { Container, Row, Col } from 'react-grid-system'

import { ThemeContext } from '../../App'

import { ReactComponent as MailIcon } from '../../assets/icons/gmail.svg'
import { ReactComponent as SendIcon } from '../../assets/icons/send-message.svg'
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg'
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg'
import { ReactComponent as InstaIcon } from '../../assets/icons/instagram.svg'
import { ReactComponent as TelegramIcon } from '../../assets/icons/telegram.svg'
import { ReactComponent as LinkedIcon } from '../../assets/icons/linkedin.svg'
import { ReactComponent as AvaIcon } from '../../assets/icons/avatar.svg'
import { ReactComponent as AtIcon } from '../../assets/icons/at.svg'
import { ReactComponent as ChatIcon } from '../../assets/icons/chat.svg'

import { 
  PageWrapper,
  PageHeader
 } from '../Pages.styles'

 import {
  ContactContainer,
  ContactItem,
  ContactText,
  ContactHeader,
  ContactButton,
  IconWrapper,
  ColDot,
  SocialContainer,
  SocialItem
 } from './Contacts.styles'

export const Contacts = forwardRef((props, ref) => {

  const {finalTheme} = useContext(ThemeContext)


  return (
    <PageWrapper
      ref={ref}
      id="s-contacts"
    >
      <PageHeader> Contacts </PageHeader>

      <Container>
        <Row align='center' style={{minHeight: '65vh'}} >
          {/* -------------------
          Contacts & Social
          ------------------- */}
          <Col
          xl={12} 
          >
            <ContactContainer>
              <ContactHeader>
                Get stay in touch
              </ContactHeader>
              {/*---------- Mail --------------*/}
              <ContactItem theme={finalTheme}>
                <ContactText
                  onClick={()=> {
                    navigator.clipboard.writeText('zhenualemak@gmail.com')
                  }}
                >
                  <IconWrapper>
                    <MailIcon />
                  </IconWrapper>        
                  <span>
                    zhenualemak@gmail.com
                  </span>   
                </ContactText>
                <ContactButton
                  href='mailto:zhenualemak@gmail.com'
                >
                  <SendIcon />
                </ContactButton>
              </ContactItem>


              {/*----------------- Social -----------------*/}
              <SocialContainer>
                {/* Telegram */}
                <SocialItem
                  href="tg://resolve?domain=eugene0408"
                >
                  <TelegramIcon />
                </SocialItem>
                {/* Insta */}
                <SocialItem
                  href="https://www.instagram.com/lemak_evg/"
                >
                  <InstaIcon />
                </SocialItem>
                {/* Facebook */}
                <SocialItem
                  href = "https://www.facebook.com/eugene.lemak.1"
                >
                  <FacebookIcon />
                </SocialItem>
                {/* Linked */}
                <SocialItem>
                  <LinkedIcon />
                </SocialItem>
              </SocialContainer>

            </ContactContainer>

          </Col>
         

        </Row>
      </Container>

    </PageWrapper>
  )
})
