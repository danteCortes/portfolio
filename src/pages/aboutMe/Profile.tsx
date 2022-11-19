import { Container, Card } from "react-bootstrap";
import Info from "../../components/aboutMe/Info";
import SocialNetwork from "../../components/aboutMe/SocialNetwork";
import Skills from "../../components/aboutMe/Skills";
import Hoobies from "../../components/aboutMe/Hoobies";

export default function Profile()
{
    return (
        <Container className='text-center mt-5'>
            <Info />
            <SocialNetwork />
            <Skills />
            <Hoobies />
        </Container>
    )
}