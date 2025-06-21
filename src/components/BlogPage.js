import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
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
justify-content: center;
align-items: center;
position: absolute;
left: calc(5rem + 5vw);
top: 10rem;
text-align: center;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h1`
font-size: 2rem;
margin-bottom: 2rem;
`

const Description = styled.p`
font-size: 1.2rem;
margin-bottom: 1rem;
`

const BlogPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                <ParticleComponent theme='dark' />
                
                <Main>
                    <Title>Coming Soon</Title>
                    <Description>
                        I'm currently focused on my mechanical engineering studies and research projects.
                    </Description>
                    <Description>
                        Blog posts about robotics, engineering design, and graduate school experiences will be added soon.
                    </Description>
                    <Description>
                        Stay tuned for insights into mechanical engineering projects and academic journey!
                    </Description>
                </Main>
                
                <BigTitle text="BLOG" top="10%" right="20%" />
            </Box>
        </ThemeProvider>
    )
}

export default BlogPage
