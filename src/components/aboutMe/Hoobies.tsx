import { Card, Image, Table } from "react-bootstrap";

import Chess from "../../img/hobbies/chess.png";
import Dota2 from "../../img/hobbies/dota2.png";
import Futbol from "../../img/hobbies/futbol.png";
import Comics from "../../img/hobbies/comics.png";

export default function Hoobies()
{
    return (
        <Card className="bg-transparent border-0 my-5">
            <Card.Body>
                <Card.Title className="card-title">Mis Pasatiempos</Card.Title>
                <Table responsive size="sm">
                    <tbody>
                        <tr>
                            <td>
                                <Image className="logo-hoobies" src={Chess} /> <strong>Ajedrez</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Image className="logo-hoobies" src={Futbol} /> <strong>Futbol</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Image className="logo-hoobies" src={Dota2} /> <strong>Dota 2</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Image className="logo-hoobies" src={Comics} /> <strong>Comics</strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}