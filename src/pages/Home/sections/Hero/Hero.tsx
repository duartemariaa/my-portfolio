import {styled, Container, Typography, Box} from '@mui/material'
import Grid from '@mui/material/Grid'
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Avatar from '../../../../assets/images/avatar.jpeg';
import StyledButton from '../../../../components/StyledButton/StyledButton.tsx';
import { AnimatedBackground } from '../../../../components/AnimatedBackground/AnimatedBackground.tsx';
import CV from "../../../../assets/pdfs/mariajduartebarbosaa.pdf";

const Hero = () => {

    const StyledHero = styled('div')(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
    }));

    const StyledImg = styled('img')(({theme})=> ({
        width: '75%',
        borderRadius: '50%',
        border: `1px solid ${theme.palette.primary.contrastText}`,
        position: "relative"
    }));

    const handleDownload = () => {
        console.log("download")
        const link = document.createElement('a');
        link.href = CV
        link.download = 'example.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = 'example@example.com';
        const subject = 'Subject';
        const body = 'Hello! I saw your portfolio...';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    };

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative" pb={3}>
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground/>
                                </Box>
                                <Box textAlign="center">
                                    <StyledImg src={Avatar}/>
                                </Box>
                            </Box>
                        </Grid>


                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Maria Duarte</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Enginner</Typography>
                            <Box mt={3}>
                                <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                    <Grid item xs={12} md={4}>
                                        <StyledButton onClick={() => handleDownload()}>
                                            <DownloadIcon/>
                                            <Typography>Download CV</Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <StyledButton onClick={() => handleEmail()}>
                                            <MailOutlineIcon/>
                                            <Typography>Contact me</Typography>
                                        </StyledButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>

        </>
    )
}

export default Hero