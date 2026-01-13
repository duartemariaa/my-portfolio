import Footer from "../../components/Footer/Footer.tsx"
import NavBar from "../../components/NavBar/NavBar.tsx"
import About from "./sections/About/About.tsx"
import Hero from "./sections/Hero/Hero.tsx"
import Projects from "./sections/Projects/Projects.tsx"


const Home = () => {

    return (
        <>
            <NavBar/>
            <Hero/>
            <About/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default Home