import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(10px) }
100% { transform: translateY(-10px) }
`

const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease-in-out infinite;
img{
    width: 100%;
    height: auto;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
font-family: 'Ubuntu Mono', monospace;
font-style: italic;
display: flex;
flex-direction: column;
justify-content: space-between;
position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                <ParticleComponent theme='dark' />
                
                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>
                
                <Main>
                    I'm a Mechanical Engineering graduate student at University of Colorado Boulder. I love to design innovative mechanical systems and explore robotics applications.
                    <br /><br />
                    I'm passionate about the intersection of mechanical design and automation. I enjoy working on projects involving pressure vessels, heat exchangers, and robotic systems. I'm an aspiring engineer with industry experience.
                    <br /><br />
                    I believe engineering is an art when you put your creativity and problem-solving skills into it. You can connect with me via social links.
                </Main>
                
                <BigTitle text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage
