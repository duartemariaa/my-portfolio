import { Box, Container, Grid, styled, Typography } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimatedComponent/AnimatedComponent";

const Projects = () => {
  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,

  }));

  const projects = [
    {
      title: "Udemy React Course",
      subtitle: "Jul 2024 - Dez 2025",
      srcImg: "/src/assets/images/udemy-react-course.png",
      description: "Curso prático de React pela Udemy, com foco no desenvolvimento de aplicações modernas e escaláveis para a web. Ao longo do curso, desenvolvi diversos projetos práticos, aprofundando conceitos fundamentais e avançados do ecossistema React, incluindo componentização, gerenciamento de estado, rotas e boas práticas de organização de projetos.",
      technologies: "Technologies: React, Next.js, Redux, JavaScript, HTML, CSS, SCSS",
      websiteURL: "https://github.com/duartemariaa/udemy-react-course",
      codeURL: "https://github.com/duartemariaa/udemy-react-course",
    },
    {
      title: "Udemy JavaScript Course",
      subtitle: "Jul 2023 - Nov 2024",
      srcImg: "/src/assets/images/udemy-javaScript-course.png",
      description: "Curso prático de JavaScript, com foco no desenvolvimento de aplicações web dinâmicas e interativas. Ao longo do curso, desenvolvi diversos projetos práticos, aprofundando conceitos essenciais da linguagem, como manipulação do DOM, funções, arrays, objetos, eventos, lógica de programação e boas práticas para escrita de código limpo e eficiente.",
      technologies: "Technologies: JavaScript, HTML, CSS, Git, GitHub, PostgreSQL",
      websiteURL: "https://github.com/duartemariaa/udemy-javaScript-course",
      codeURL: "https://github.com/duartemariaa/udemy-javaScript-course",
    },
    {
      title: "Spotify Clone",
      subtitle: "Jan 2023 - Jan 2023",
      srcImg: "/src/assets/images/spotify-clone.jpeg",
      description: "Projeto de clone do Spotify desenvolvido utilizando apenas HTML e CSS, com foco na construção de uma interface fiel ao layout original. O projeto explora conceitos de estruturação semântica, organização de componentes visuais, responsividade e estilização, reforçando boas práticas de design e desenvolvimento front-end sem o uso de JavaScript.",
      technologies: "Technologies: HTML, CSS",
      websiteURL: "https://github.com/duartemariaa/spotifyclone",
      codeURL: "https://github.com/duartemariaa/spotifyclone",
    },
    {
      title: "Login Page",
      subtitle: "Jun 2025 - Jun 2025",
      srcImg: "/src/assets/images/login-page.jpeg",
      description: "Projeto de página de login desenvolvido durante meus estudos em Angular, com foco na criação de componentes, organização da estrutura da aplicação e boas práticas do framework. O projeto aborda conceitos como data binding, uso de formulários e separação de responsabilidades, reforçando a base para o desenvolvimento de aplicações front-end mais estruturadas e escaláveis.",
      technologies: "Technologies: Angular, TypeScript, HTML, SCSS",
      websiteURL: "https://github.com/duartemariaa/login-page",
      codeURL: "https://github.com/duartemariaa/login-page",
    },
  ]

  return (
    <StyledExperience>
      <Container maxWidth="lg">
        <Box id="projects" pt={5} pb={3}>
          <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
        </Box>

        <Grid container spacing={5} pb={3}>
          {projects.map((project: ProjectCardProps, index: number) => (
            <Grid item md={6} key={index}>
              <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  srcImg={project.srcImg}
                  description={project.description}
                  technologies={project.technologies}
                  websiteURL={project.websiteURL}
                  codeURL={project.codeURL}
                />
              </AnimationComponent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledExperience>
  )



}

export default Projects;