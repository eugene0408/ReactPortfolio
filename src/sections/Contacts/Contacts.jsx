import React, {forwardRef, useContext, useState}from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { Container, Row, Col } from 'react-grid-system'

import { ThemeContext } from '../../App'

import { ReactComponent as MailIcon } from '../../assets/icons/gmail.svg'
import { ReactComponent as SendIcon } from '../../assets/icons/send-message.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg'
import { ReactComponent as InstaIcon } from '../../assets/icons/instagram.svg'
import { ReactComponent as TelegramIcon } from '../../assets/icons/telegram.svg'
import { ReactComponent as LinkedIcon } from '../../assets/icons/linkedin.svg'

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
  SocialContainer,
  SocialItem,
  CopiedAlert
 } from './Contacts.styles'


 const headerAnimation = {
  hidden: {
    opacity: 0,
    y: -150
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.3
    }
  }
 }

 const mailIconAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.3,
      duration: 0.5
    }
  }
 }

 const mailTextAnimation = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.4
    }
  }
 }

 const actionIconAnimation = {
  hidden: {
    opacity: 0,
    x: -40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.5
    }
  }
 }

 const socialLinkAnimation = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: custom => ({
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      delay: custom * 0.1
    }
  }),
  hover: {
    background: 'var(--accent)',
    transition: {
      duration: 0.3
    }
  }
 }

 const copyAlertAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    sclale: 1,
    transition: {
      duration: 0.2,
      type: "spring"
    }
  },
  exit:{
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.1
    }
  }
 }

export const Contacts = forwardRef((props, ref) => {

  const {theme} = useContext(ThemeContext)
  const [mailClicked,
  setMailClicked] = useState(false)

  const mailOnClickHandler = (duration) => {
    setMailClicked(true);
    setTimeout(() => {
      setMailClicked(false)
    }, duration)
  }

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
          xl={12} lg={12} md={12} xs={11} offset={{xs: 1, sm: 0}}
          >
            <ContactContainer
              as={motion.div}
              initial='hidden'
              whileInView='visible'
            >
              <ContactHeader
                as={motion.h3}
                variants={headerAnimation}
              >
                Get stay in touch
              </ContactHeader>
              {/*---------- Mail --------------*/}
              <ContactItem theme={theme}>
                <ContactText
                  onClick={()=> {
                    navigator.clipboard.writeText('zhenualemak@gmail.com')
                  }}
                >
                  <IconWrapper
                    as={motion.div}
                    variants={mailIconAnimation}
                  >
                    <MailIcon />
                  </IconWrapper>        
                  <motion.span
                    variants={mailTextAnimation}
                    onClick={() => {mailOnClickHandler(1000)}}
                  >
                    zhenualemak@gmail.com
                  </motion.span>   
                </ContactText>
                <ContactButton
                  href='mailto:zhenualemak@gmail.com'
                >
                  <motion.div
                    variants={actionIconAnimation}
                  >
                    <SendIcon />
                  </motion.div>
                </ContactButton>
                <AnimatePresence>
                  {mailClicked &&
                    <CopiedAlert
                      as={motion.div}
                      variants={copyAlertAnimation}
                      initial='hidden'
                      animate='visible'
                      exit='exit'
                    >
                      Coppied to clipboard
                    </CopiedAlert>
                  }
                </AnimatePresence>
              </ContactItem>


              {/*----------------- Social -----------------*/}
              <SocialContainer>
                {/* Telegram */}
                <SocialItem
                  href="tg://resolve?domain=eugene0408"
                  as={motion.a}
                  variants={socialLinkAnimation}
                  initial='hidden'
                  whileInView='visible'
                  whileHover='hover'
                  custom={2}
                >
                  <TelegramIcon />
                </SocialItem>
                {/* Insta */}
                <SocialItem
                  href="https://www.instagram.com/lemak_evg/"
                  as={motion.a}
                  variants={socialLinkAnimation}
                  initial='hidden'
                  whileInView='visible'
                  whileHover='hover'
                  custom={3}
                >
                  <InstaIcon />
                </SocialItem>
                {/* Facebook */}
                <SocialItem
                  href = "https://www.facebook.com/eugene.lemak.1"
                  as={motion.a}
                  variants={socialLinkAnimation}
                  initial='hidden'
                  whileInView='visible'
                  whileHover='hover'
                  custom={4}
                >
                  <FacebookIcon />
                </SocialItem>
                {/* Linked */}
                <SocialItem
                  as={motion.a}
                  variants={socialLinkAnimation}
                  initial='hidden'
                  whileInView='visible'
                  whileHover='hover'
                  custom={5}
                >
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
