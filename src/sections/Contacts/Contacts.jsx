import React, {forwardRef, useContext}from 'react'
import { Container, Row, Col } from 'react-grid-system'

import { ThemeContext } from '../../App'

import { ReactComponent as MailIcon } from '../../assets/icons/gmail.svg'
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
  ContactHeader,
  IconWrapper,
  ColDot,
  SocialContainer,
  SocialItem,
  Form,
  InputWrapper,
  Input,
  FormContainer,
  Label,
  TextWrapper,
  TextArea,
  SubmitButton,
  ButtonWrapper
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
          xl={6} lg={6} md={12}
          order={{lg: 1, md: 2, sm: 2, xs: 2}}
          >
            <ContactContainer>
              <ContactHeader>
                Get stay in touch
              </ContactHeader>
              {/*---------- Mail --------------*/}
              <ContactItem theme={finalTheme}>
                <IconWrapper>
                  <MailIcon />
                </IconWrapper>        
                <span>
                  zhenualemak@gmail.com
                </span>   
              </ContactItem>
              {/*--------- Phone -------------*/}
              <ContactItem theme={finalTheme}>
                <IconWrapper>
                  <PhoneIcon />
                </IconWrapper> 
                <span>
                  +38<ColDot/>068<ColDot/>1908<ColDot/>994
                </span>   
              </ContactItem>
              {/*--------- Location -------------*/}
              <ContactItem theme={finalTheme}>
                <IconWrapper>
                  <LocationIcon />
                </IconWrapper> 
                <span>
                  Ukraine, Zakarpatia
                </span>   
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
          {/* ----------------------------
          Contact Form
          ---------------------------- */}
          <Col
            xl={6} lg={6} md={12}
            order={{lg: 2, md: 1, sm: 1, xs: 1}}
          >
            <FormContainer>
              <Form theme={finalTheme}
                onSubmit={ (e) => { e.preventDefault() } }
              >

                <Label>Your Name</Label>
                <InputWrapper>
                  <AvaIcon />
                  <Input type={'text'} />
                </InputWrapper>

                <Label>Your Mail</Label>
                <InputWrapper>
                  <AtIcon />
                  <Input type={'mail'} />
                </InputWrapper>

                <Label>Message</Label>
                <TextWrapper>
                  <ChatIcon />
                  <TextArea 
                    rows={6} 
                    style={{width: '100%'}}
                  />
                </TextWrapper>

                <ButtonWrapper>
                  <SubmitButton>
                    Submit
                  </SubmitButton>
                </ButtonWrapper>
       

              </Form>
            </FormContainer>
          </Col>


        </Row>
      </Container>

    </PageWrapper>
  )
})
