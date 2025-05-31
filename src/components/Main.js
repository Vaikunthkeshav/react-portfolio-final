import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from './Intro'

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;
position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled.a`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`

const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`

const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`

const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

// Ball Particle Button Animations
const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
`

const orbit = keyframes`
  from { transform: rotate(0deg) translateX(40px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
`

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px #ffd700; }
  50% { box-shadow: 0 0 40px #ffd700, 0 0 60px #ffd700; }
`

// Ball Particle Navigation Hub
const ParticleHub = styled.div`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
width: ${props => props.click ? '100px' : '150px'};
height: ${props => props.click ? '100px' : '150px'};
transition: all 1s ease;
cursor: pointer;
z-index: 2;
`

const CentralBall = styled.div`
width: 60px;
height: 60px;
background: radial-gradient(circle at 30% 30%, #fff, #ffd700, #ff8c00);
border-radius: 50%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
animation: ${pulse} 2s infinite, ${glow} 3s infinite;
cursor: pointer;
box-shadow: 0 0 30px rgba(255, 215, 0, 0.6);

&:hover {
  animation-duration: 1s, 1.5s;
  transform: translate(-50%, -50%) scale(1.1);
}
`

const OrbitingParticle = styled.div`
position: absolute;
width: 8px;
height: 8px;
background: #ffd700;
border-radius: 50%;
top: 50%;
left: 50%;
animation: ${orbit} 4s infinite linear;
box-shadow: 0 0 8px #ffd700;

&:nth-child(2) { animation-delay: -1s; animation-duration: 3s; }
&:nth-child(3) { animation-delay: -2s; animation-duration: 5s; }
&:nth-child(4) { animation-delay: -0.5s; animation-duration: 3.5s; }
&:nth-child(5) { animation-delay: -1.5s; animation-duration: 4.5s; }
&:nth-child(6) { animation-delay: -2.5s; animation-duration: 4.2s; }
`

const NavigationMenu = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: ${props => props.show ? 'flex' : 'none'};
flex-direction: column;
gap: 1rem;
background: rgba(0, 0, 0, 0.8);
padding: 2rem;
border-radius: 15px;
border: 2px solid #ffd700;
z-index: 10;
`

const MenuLink = styled(NavLink)`
color: #ffd700;
text-decoration: none;
font-size: 1.2rem;
font-weight: 600;
padding: 0.5rem 1rem;
border-radius: 8px;
transition: all 0.3s ease;

&:hover {
  background: #ffd700;
  color: #000;
  transform: translateX(10px);
}
`

const CloseButton = styled.button`
position: absolute;
top: 10px;
right: 15px;
background: transparent;
border: none;
color: #ffd700;
font-size: 1.5rem;
cursor: pointer;
`

const ClickText = styled.span`
display: ${props => props.click ? 'none' :'block'  };
position: absolute;
bottom: -30px;
left: 50%;
transform: translateX(-50%);
color: ${props => props.theme.text};
font-size: 0.8rem;
opacity: 0.8;
white-space: nowrap;
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {
    const [click, setClick] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => setClick(!click);
    const handleParticleClick = () => setShowMenu(!showMenu);

    return (
        <MainContainer>
            <DarkDiv click={click}/>
            <Container>
                <PowerButton />
                <LogoComponent theme={click ? 'dark' :'light'}/>
                <SocialIcons theme={click ? 'dark' :'light'} />
               
                <ParticleHub click={click}>
                    <CentralBall onClick={handleParticleClick} />
                    <OrbitingParticle />
                    <OrbitingParticle />
                    <OrbitingParticle />
                    <OrbitingParticle />
                    <OrbitingParticle />
                    <OrbitingParticle />
                    <ClickText click={click}>click particle</ClickText>
                </ParticleHub>

                {/* Navigation Menu */}
                <NavigationMenu show={showMenu}>
                    <CloseButton onClick={() => setShowMenu(false)}>×</CloseButton>
                    <MenuLink to="/about" onClick={() => setShowMenu(false)}>About Me</MenuLink>
                    <MenuLink to="/work" onClick={() => setShowMenu(false)}>My Work</MenuLink>
                    <MenuLink to="/skills" onClick={() => setShowMenu(false)}>Skills</MenuLink>
                    <MenuLink to="/blog" onClick={() => setShowMenu(false)}>Blog</MenuLink>
                    <button 
                        onClick={() => {setShowMenu(false); handleClick();}} 
                        style={{
                            background: 'transparent',
                            border: '2px solid #ffd700',
                            color: '#ffd700',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        Toggle Intro
                    </button>
                </NavigationMenu>

                <Contact target="_blank" href="mailto:vakr3628@colorado.edu">
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        Say hi..
                    </motion.h2>
                </Contact>

                <BLOG to="/blog">
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        Blog
                    </motion.h2>
                </BLOG>

                <WORK to="/work" click={+click}>
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                     whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        Work
                    </motion.h2>
                </WORK>

                <BottomBar>
                    <ABOUT to="/about" click={+click}>
                        <motion.h2
                        initial={{
                            y:200,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                         whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        >
                            About.
                        </motion.h2>
                    </ABOUT>

                    <SKILLS to="/skills">
                        <motion.h2
                        initial={{
                            y:200,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                         whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        >
                            My Skills.
                        </motion.h2>
                    </SKILLS>
                </BottomBar>
            </Container>

            {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
}

export default Main
