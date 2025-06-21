import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
  padding: 80px 5%;
  background: ${props => props.theme.body};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.text};
`

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: ${props => props.theme.textRgba(0.2)};
  }
  
  @media (max-width: 768px) {
    &::before {
      left: 30px;
    }
  }
`

const TimelineItem = styled(motion.div)`
  position: relative;
  padding: 2rem 0;
`

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: #2563eb;
  border-radius: 50%;
  top: 2rem;
  box-shadow: 0 0 0 4px ${props => props.theme.body}, 
              0 0 0 6px ${props => props.theme.textRgba(0.2)};
  
  @media (max-width: 768px) {
    left: 30px;
  }
`

const TimelineContent = styled.div`
  background: ${props => props.theme.body};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  width: calc(50% - 40px);
  position: relative;
  
  ${TimelineItem}:nth-child(odd) & {
    margin-left: auto;
  }
  
  @media (max-width: 768px) {
    width: calc(100% - 80px);
    margin-left: 60px !important;
  }
`

const TimelineDate = styled.div`
  position: absolute;
  top: 2rem;
  font-weight: 600;
  color: ${props => props.theme.textRgba(0.6)};
  
  ${TimelineItem}:nth-child(odd) & {
    right: calc(50% + 60px);
  }
  
  ${TimelineItem}:nth-child(even) & {
    left: calc(50% + 60px);
  }
  
  @media (max-width: 768px) {
    left: 60px !important;
    top: -1.5rem;
  }
`

const experiences = [
  {
    id: 1,
    title: "Research Assistant",
    company: "University Robotics Lab",
    date: "2024 - Present",
    description: [
      "Developing autonomous navigation systems for mobile robots",
      "Designing custom end-effectors for robotic arms",
      "Implementing ROS-based control systems"
    ]
  },
  {
    id: 2,
    title: "Mechanical Engineering Intern",
    company: "Advanced Manufacturing Corp",
    date: "Summer 2023",
    description: [
      "Optimized CNC machining processes reducing cycle time by 20%",
      "Designed fixtures and jigs for production line",
      "Conducted FEA analysis for critical components"
    ]
  },
  {
    id: 3,
    title: "Formula SAE Team Lead",
    company: "University Racing Team",
    date: "2022 - 2023",
    description: [
      "Led chassis design team for electric race car",
      "Managed budget and coordinated with sponsors",
      "Achieved 3rd place in design competition"
    ]
  }
]

const ExperienceTimeline = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>My Journey</SectionTitle>
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimelineDot />
              <TimelineDate>{exp.date}</TimelineDate>
              <TimelineContent>
                <h3>{exp.title}</h3>
                <h4 style={{ color: '#2563eb', marginBottom: '1rem' }}>{exp.company}</h4>
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  )
}

export default ExperienceTimeline
