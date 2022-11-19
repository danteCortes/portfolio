import { Image, Card } from "react-bootstrap";
import ImgProfile from "../../img/perfil.jpg";

export default function Info()
{
    return (
        <>
            <Image src={ImgProfile} roundedCircle fluid className='mt-5 photo-perfil'></Image>
            <Card className='pb-4 bg-redblack' style={{position: 'relative', bottom: '50px', color: '#FFFEF4', borderRadius: '25px'}}>
                <Card.Body>
                    <h1 className='mt-5'>Dante Esteban Cortés Ganoza</h1>
                    <Card.Text className='fs-5 mt-3'>
                        Hola, mi nombre es Dante Cortés, soy desarrollador fullstack con experiencia en desarrollo de sitios web, aplicaciones web,
                        sistemas de facturación electrónica, sistemas de venta, sistemas para control de almacén, sistemas de asistencia, sistemas para 
                        colegios, y muchos más.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}