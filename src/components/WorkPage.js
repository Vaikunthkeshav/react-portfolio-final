import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'
import { motion } from 'framer-motion'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import Card from '../subComponents/Card'
import { Work } from '../data/WorkData'
import BigTitlte from '../subComponents/BigTitlte'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`

const Container = styled.div`
  padding: 5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`

const PageTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.text};
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: 2px solid ${props => props.active ? '#2563eb' : props.theme.textRgba(0.3)};
  background: ${props => props.active ? '#2563eb' : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.text};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    background: #2563eb;
    color: white;
    border-color: #2563eb;
  }
`

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.body};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
`

const ProjectContent = styled.div`
  padding: 2rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
`

const ProjectDescription = styled.p`
  color: ${props => props.theme.textRgba(0.8)};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`

const Tag = styled.span`
  padding: 0.3rem 0.8rem;
  background: ${props => props.theme.textRgba(0.1)};
  border-radius: 15px;
  font-size: 0.85rem;
  color: ${props => props.theme.textRgba(0.8)};
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const ProjectLink = styled.a`
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1e40af;
  }
`

// Enhanced Work Data with categories
const categories = ['All', 'Robotics', 'Design', 'Manufacturing', 'Research'];

const WorkPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [filteredWork, setFilteredWork] = useState(Work);

    useEffect(() => {
        if (activeFilter === 'All') {
            setFilteredWork(Work);
        } else {
            setFilteredWork(Work.filter(work => 
                work.category && work.category.toLowerCase() === activeFilter.toLowerCase()
            ));
        }
    }, [activeFilter]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleComponent theme='dark' />
                
                <Container>
                    <PageTitle>Projects</PageTitle>
                    
                    <FilterContainer>
                        {categories.map(category => (
                            <FilterButton
                                key={category}
                                active={activeFilter === category}
                                onClick={() => setActiveFilter(category)}
                            >
                                {category}
                            </FilterButton>
                        ))}
                    </FilterContainer>
                    
                    <Grid
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {filteredWork.map(work => (
                            <ProjectCard
                                key={work.id}
                                variants={item}
                            >
                                <ProjectImage>
                                    {work.icon || '🔧'}
                                </ProjectImage>
                                <ProjectContent>
                                    <ProjectTitle>{work.name}</ProjectTitle>
                                    <ProjectDescription>{work.description}</ProjectDescription>
                                    <TagContainer>
                                        {work.tags.map((tag, index) => (
                                            <Tag key={index}>#{tag}</Tag>
                                        ))}
                                    </TagContainer>
                                    <ProjectLinks>
                                        {work.demo && (
                                            <ProjectLink href={work.demo} target="_blank">
                                                View Project →
                                            </ProjectLink>
                                        )}
                                        {work.github && (
                                            <ProjectLink href={work.github} target="_blank">
                                                GitHub →
                                            </ProjectLink>
                                        )}
                                    </ProjectLinks>
                                </ProjectContent>
                            </ProjectCard>
                        ))}
                    </Grid>
                </Container>
                
                <BigTitlte text="PROJECTS" top='10%' right="20%" />
            </Box>
        </ThemeProvider>
    )
}

export default WorkPage
