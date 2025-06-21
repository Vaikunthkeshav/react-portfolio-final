import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import { Design, Develope} from './AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
${Main}:hover &{
        color:${props => props.theme.body};
}
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                <ParticleComponent theme='dark' />
                
                <Main>
                    <Title>
                        <Design width={40} height={40} /> Mechanical Engineer
                    </Title>
                    <Description>
                        I design pressure vessels, heat exchangers, and mechanical systems with precision and innovation.
                    </Description>
                    <Description>
                        <strong>I like to Design</strong>
                        <ul>
                            <li>Pressure Vessels</li>
                            <li>Heat Exchangers</li>
                            <li>Mechanical Systems</li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>SolidWorks</li>
                            <li>AutoCAD</li>
                            <li>CATIA</li>
                            <li>Ansys</li>
                        </ul>
                    </Description>
                </Main>
                
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Graduate Student
                    </Title>
                    <Description>
                        I'm pursuing my M.S. in Mechanical Engineering with focus on robotics and automation.
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>
                            Python, C++, CAD Design, FEA Analysis, Robotics, Mechatronics
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                            Solid Edge, Ansys, Abaqus, MATLAB, Python, Git
                        </p>
                    </Description>
                </Main>
                
                <BigTitle text="SKILLS" top="80%" right="30%" />
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage
