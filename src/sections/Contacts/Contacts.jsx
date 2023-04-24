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
  ColDash,
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
          md={6}
          >
            <ContactContainer>
              <ContactHeader>
                Get stay in touch
              </ContactHeader>
              {/*---------- Mail --------------*/}
              <ContactItem theme={finalTheme}>
                <MailIcon />
                <span>
                  zhenualemak@gmail.com
                </span>   
              </ContactItem>
              {/*--------- Phone -------------*/}
              <ContactItem theme={finalTheme}>
                <PhoneIcon />
                <span>
                  +38<ColDash/>068<ColDash/>19<ColDash/>08<ColDash/>994
                </span>   
              </ContactItem>
              {/*--------- Location -------------*/}
              <ContactItem theme={finalTheme}>
                <LocationIcon />
                <span>
                  Ukraine, Zakarpatia
                </span>   
              </ContactItem>

              {/*----------------- Social -----------------*/}
              <SocialContainer>
                {/* Telegram */}
                <SocialItem>
                  <TelegramIcon />
                </SocialItem>
                {/* Insta */}
                <SocialItem>
                  <InstaIcon />
                </SocialItem>
                {/* Facebook */}
                <SocialItem>
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
            md={6}
          >
            <FormContainer>
              <Form theme={finalTheme}>

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
