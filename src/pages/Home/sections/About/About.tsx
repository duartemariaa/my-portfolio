import { Box, Card, Container, Grid, styled, Typography } from "@mui/material";
import React from "react";
import AnimationComponent from "../../../../components/AnimatedComponent/AnimatedComponent";
import { School, WorkspacePremium } from "@mui/icons-material";

const About: React.FC = () => {
  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 10px",
    textAlign: "center",
    marginBottom: "10px",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  }));

  const skillsSet = [
    "Javascript", "Typescript", "React", "Angular", "HTML", "CSS", "SCSS", "Git", "UI/UX", "SQL", "Material UI", "Figma"
  ]

  return (
    <>
      <Container maxWidth="lg">
        <Box id="about" pt={5} mb={3}>
          <Typography variant="h2" textAlign="center">About me</Typography>
        </Box>
        <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
          <Grid item xs={9} md={2.5}>
            <AnimationComponent moveDirection="right">
              <StyledCard variant="outlined">
                <WorkspacePremium/>
                  <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                  <Typography textAlign="center">2+ years</Typography>
                  <Typography textAlign="center">Frontend Development</Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
          <Grid item xs={9} md={2.5}>
            <AnimationComponent moveDirection="left">
              <StyledCard variant="outlined">
                <School/>
                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                <Typography textAlign="center">Bachelors Degree</Typography>
                <Typography textAlign="center">Computer Science</Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
        </Grid>
        <Box pb={1}>
          <Typography>
            Hi! I’m Maria Duarte 👋
            I’m a Computer Science student at the Federal University of Technology – Paraná (UTFPR).
            I have hands-on experience developing personal projects on my own, where I work with technologies such as React, TypeScript, JavaScript, Angular, Git, SQL, and Figma, focusing on building well-structured, responsive, and user-friendly applications.
            Currently, I’m deepening my knowledge in front-end development and expanding my skills in full-stack concepts, including Node.js and modern development workflows.
            In addition to my technical background, I have experience as a Computer Science and IT instructor, teaching:
            Microsoft Office (Word, Excel, PowerPoint),
            Programming logic,
            Introductory programming concepts.
            This teaching experience helped me develop strong communication, problem-solving, and mentoring skills, as well as the ability to explain complex concepts in a clear and accessible way.
          </Typography>
        </Box>
        <hr/>
        <Box id="skills" pt={1} mb={3}>
          <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
        </Box>
        <Box mb={5}>
          <Grid container spacing={3} justifyContent="center">
            {skillsSet.map((skill, index) => (
              <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                <StyledCard variant="outlined">{skill}</StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default About;