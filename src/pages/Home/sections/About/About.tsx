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
            Olá! Eu sou Maria Duarte 👋
            Sou estudante de Ciência da Computação na Universidade Tecnológica Federal do Paraná (UTFPR).
            Tenho experiência prática no desenvolvimento de projetos pessoais realizados de forma independente, utilizando tecnologias como React, TypeScript, JavaScript, Angular, Git, SQL e Figma, com foco na construção de aplicações bem estruturadas, responsivas e com boa experiência do usuário.
            Atualmente, estou aprofundando meus conhecimentos em desenvolvimento front-end e expandindo minhas habilidades em conceitos de full stack, incluindo Node.js e fluxos modernos de desenvolvimento.
            Além da minha formação técnica, tenho experiência como instrutora de informática, ministrando aulas de:
            Pacote Office (Word, Excel e PowerPoint),
            Lógica de programação,
            Programação introdutória. 
            Essa experiência como instrutora contribuiu para o desenvolvimento de fortes habilidades de comunicação, resolução de problemas e mentoria, além da capacidade de explicar conceitos complexos de forma clara e acessível.
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