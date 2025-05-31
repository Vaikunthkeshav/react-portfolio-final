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

// Particle Animation Keyframes
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(120deg); }
  66% { transform: translateY(5px) rotate(240deg); }
`

const pulse = keyframes`
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
`

const orbit = keyframes`
  from { transform: rotate(0deg) translateX(50px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
`

// Particle Button Container
const ParticleButton = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background: transparent;
cursor: pointer;
width: ${props => props.click ? '120px' : '200px'};
height: ${props => props.click ? '120px' : '200px'};
transition: all 1s ease;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

// Central Particle
const CentralParticle = styled.div`
width: 20px;
height: 20px;
background: ${props => props.theme.text};
border-radius: 50%;
position: relative;
animation: ${pulse} 2s infinite;
box-shadow: 0 0 20px ${props => props.theme.text};
`

// Orbiting Particles
const OrbitingParticle = styled.div`
position: absolute;
width: 8px;
height: 8px;
background: ${props => props.theme.text};
border-radius: 50%;
opacity: 0.8;
animation: ${orbit} 4s infinite linear;
box-shadow: 0 0 10px ${props => props.theme.text};

&:nth-child(2) {
  animation-delay: -1s;
  animation-duration: 3s;
}

&:nth-child(3) {
  animation-delay: -2s;
  animation-duration: 5s;
}

&:nth-child(4) {
  animation-delay: -0.5s;
  animation-duration: 3.5s;
}

&:nth-child(5) {
  animation-delay: -1.5s;
  animation-duration: 4.5s;
}
`

// Floating Particles
const FloatingParticle = styled.div`
position: absolute;
width: 4px;
height: 4px;
background: ${props => props.theme.text};
border-radius: 50%;
opacity: 0.6;
animation: ${float} 6s infinite ease-in-out;

&:nth-child(6) { top: -30px; left: -20px; animation-delay: -1s; }
&:nth-child(7) { top: -20px; right: -30px; animation-delay: -2s; }
&:nth-child(8) { bottom: -30px; left: -15px; animation-delay: -3s; }
&:nth-child(9) { bottom: -20px; right: -25px; animation-delay: -4s; }
&:nth-child(10) { top: 10px; left: -40px; animation-delay: -5s; }
&:nth-child(11) { top: 20px; right: -35px; animation-delay: -0.5s; }
`

const ClickText = styled.span`
display: ${props => props.click ? 'none' :'block'  };
margin-top: 1rem;
color: ${props => props.theme.text};
font-size: 0.8rem;
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

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
         <DarkDiv   click={click}/>
            <Container>
            <PowerButton />
            <LogoComponent theme={click ? 'dark' :'light'}/>
            <SocialIcons theme={click ? 'dark' :'light'} />
           
            <ParticleButton click={click} onClick={handleClick}>
                <CentralParticle />
                <OrbitingParticle />
                <OrbitingParticle />
                <OrbitingParticle />
                <OrbitingParticle />
                <OrbitingParticle />
                <FloatingParticle />
                <FloatingParticle />
                <FloatingParticle />
                <FloatingParticle />
                <FloatingParticle />
                <FloatingParticle />
                <ClickText click={click}>click here</ClickText>
            </ParticleButton>

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
