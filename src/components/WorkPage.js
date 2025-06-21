import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import {motion} from 'framer-motion'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;
color: white;
z-index:3;
`

const Project = styled(motion.li)`
width: 16rem;
height: 40vh;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
padding: 1rem;
margin-right: 6rem;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
cursor: pointer;

&:hover{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
}
`

const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla', sans-serif;
font-weight: 500;

${Project}:hover &{
    color: ${props => props.theme.body};
}
`

const Tags = styled.div`
border-top: 2px solid ${props => props.theme.body};
padding-top: 0.5rem;
display: flex;
flex-wrap: wrap;

${Project}:hover &{
    border-top: 2px solid ${props => props.theme.text};
}
`

const Tag = styled.span`
margin-right: 1rem;
font-size: 0.9rem;
`

const WorkPage = () => {
    const [work, setWork] = useState([
        {
            id: 1,
            name: "Mario Kart Balloon Battle Robot",
            description: "Autonomous robot with mecanum wheels, sensors, and PixyCam for object detection in Mario Kart Balloon Battle competition.",
            tags: ["Robotics", "Computer Vision", "Autonomous Systems"],
            demo: "",
            github: ""
        },
        {
            id: 2,
            name: "4-DOF Robotic Arm Simulation",
            description: "Simulated robotic arm with gripper using forward kinematics for motion control in SolidWorks.",
            tags: ["Robotics", "SolidWorks", "Kinematics"],
            demo: "",
            github: ""
        },
        {
            id: 3,
            name: "Pressure Vessel Design",
            description: "Designed pressure vessels and heat exchangers optimizing manufacturing process and ensuring ANSI B16 compliance.",
            tags: ["CAD", "AutoCAD", "ANSI Standards"],
            demo: "",
            github: ""
        },
        {
            id: 4,
            name: "Chocolate Winnowing Machine",
            description: "Novel design for cacao winnowing machine with integrated vacuum to improve efficiency and reduce cost to $441.80.",
            tags: ["Product Design", "Manufacturing", "Cost Optimization"],
            demo: "",
            github: ""
        }
    ]);

    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Main>
                    {work.map(d => 
                        <Project key={d.id}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1, delay:1}}
                        >
                            <Title>{d.name}</Title>
                            <Description>
                                {d.description}
                            </Description>
                            <Tags>
                                {d.tags.map((t,id) => 
                                    <Tag key={id}>#{t}</Tag>
                                )}
                            </Tags>
                        </Project>
                    )}
                </Main>
                <BigTitle text="WORK" top="10%" right="20%" />
            </Box>
        </ThemeProvider>
    )
}

export default WorkPage
