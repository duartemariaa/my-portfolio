import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material"

const Footer = () => {

  return (
    <>
      <Box pt={2} pb={2}>
        <Container maxWidth="sm">
          <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
            <IconButton onClick={() => window.open("https://github.com/duartemariaa")}>
              <GitHub/>
            </IconButton>
            <IconButton onClick={() => window.open("https://www.linkedin.com/in/mariaduartebarbosa/")}>
              <LinkedIn/>
            </IconButton>
            <IconButton href="mailto:mariaduarte061@hotmail.com" target="_blank">
              <Email/>
            </IconButton>
          </Box>
          <Typography textAlign="center">
            © 2026 Maria Duarte
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default Footer;