import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2, h3, h4, h5, h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
  padding: 2rem;
`

// Modern Navigation Bar (from both portfolios)
const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
`

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.text};
  cursor: pointer;
  
  span {
    color: #2563eb;
  }
`

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  
  &:hover {
    color: #2563eb;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #2563eb;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

// Hero Section (combining both styles)
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 5%;
  margin-top: 5rem;
`

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSubtitle = styled(motion.h2)`
  font-size: 1.8rem;
  color: ${props => props.theme.textRgba(0.8)};
  margin-bottom: 1.5rem;
  font-weight: 400;
`

const HeroDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.textRgba(0.7)};
  margin-bottom: 2rem;
  max-width: 500px;
`

const HeroImage = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProfileImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const Button = styled(motion.a)`
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &.primary {
    background: #2563eb;
    color: white;
    
    &:hover {
      background: #1e40af;
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
    }
  }
  
  &.secondary {
    background: transparent;
    color: #2563eb;
    border: 2px solid #2563eb;
    
    &:hover {
      background: #2563eb;
      color: white;
    }
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.textRgba(0.7)};
  
  svg {
    width: 20px;
    height: 20px;
  }
`

const Main = () => {
    const [click, setClick] = useState(false);
    const [showIntro, setShowIntro] = useState(true);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            {showIntro && <Intro />}
            
            <NavBar>
                <Logo>VK<span>.</span></Logo>
                <NavMenu>
                    <NavItem to="/" exact>Home</NavItem>
                    <NavItem to="/about">About</NavItem>
                    <NavItem to="/skills">Skills</NavItem>
                    <NavItem to="/work">Projects</NavItem>
                    <NavItem to="/blog">Blog</NavItem>
                </NavMenu>
            </NavBar>

            <HeroSection>
                <HeroContent>
                    <HeroText>
                        <HeroTitle
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Vaikunth Keshav
                        </HeroTitle>
                        
                        <HeroSubtitle
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Mechanical Engineer
                        </HeroSubtitle>
                        
                        <HeroDescription
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Passionate about designing innovative mechanical solutions through 
                            CAD modeling, manufacturing processes, and cutting-edge engineering 
                            principles. Specializing in product development and automation.
                        </HeroDescription>
                        
                        <ButtonGroup>
                            <Button 
                                href="#contact" 
                                className="primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </Button>
                            <Button 
                                href="/work" 
                                className="secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                            </Button>
                        </ButtonGroup>
                        
                        <ContactInfo>
                            <ContactItem>
                                <span>📧</span>
                                <span>vaikunthkeshav@gmail.com</span>
                            </ContactItem>
                            <ContactItem>
                                <span>📍</span>
                                <span>Denver, Colorado</span>
                            </ContactItem>
                            <ContactItem>
                                <span>🎓</span>
                                <span>Mechanical Engineering Student</span>
                            </ContactItem>
                        </ContactInfo>
                    </HeroText>
                    
                    <HeroImage
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <ProfileImage src="/profile-image.jpg" alt="Vaikunth Keshav" />
                    </HeroImage>
                </HeroContent>
            </HeroSection>
            
            <PowerButton />
            <SocialIcons />
        </MainContainer>
    )
}

export default Main
