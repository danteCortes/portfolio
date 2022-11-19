import { useState } from "react";
import { Card, Table, Image } from "react-bootstrap";
import ModalSkills from "./ModalSkills";
import logoLaravel from "../../img/logos/logoLaravel.png";
import logoPhp from "../../img/logos/logoPhp.png";
import logoVue from "../../img/logos/logoVue.png";
import logoReact from "../../img/logos/logoReact.png";
import logoGit from "../../img/logos/logoGit.png";
import logoJavascript from "../../img/logos/logoJavascript.png";
import logoBootstrap from "../../img/logos/logoBootstrap.png";
import logoPostgresql from "../../img/logos/logoPostgresql.png";
import logoSqlserver from "../../img/logos/logoSqlserver.png";

export default function Skills()
{
    const [show, setShow] = useState(false);
    const [description, setDescription] = useState('');
    const [logo, setLogo] = useState();
    const laravelDescription  =`Experiencia de 8 años desarrollando aplicaciones con el framework de Laravel desde su
        verión 4.2, con diferentes gestores de base de datos y de diferentes funcionalidades como control de alamcén, agencias de seguridad, sistema para
        agencia de transportes, etc. además de desarrollar diferentes API's para el consumo de frontend.`;
    const phpDescription = `Antes de poder conocer el framework Laravel, las aplicaciones que desarrollaba estaban escritas en php puro, fué una manera de
        comenzar mi carrera como programador web y programador backend.`;
    const vueDescription = `Para el desarrollo de Single Pages Applications el framework Vue js es muy práctico, con este pude realizar el frontend de 
        numerosas aplicaciones web desde hace más de 5 años, consumiendo el API que desarrollaba, entre mis trabajos con Vue están sistemas de 
        facturación electrónica, sistema de control de clientes y diferentes sistemas privados.`;
    const reactDescription = `React js es un framework de mucho poder, ideal para desarrollar frontend de diferente aplicaciones web, tengo alrededor de 
        5 años de experiencia con este framework, desarrollando diferentes aplicaciones web para diferentes empresas privadas. entre lo más resaltante
        de mis trabajos está el sistema de asistencia.`;
    const javascriptDescription = `Con javascript pude darle dinamismo a mis projectos web, es una base fundamental para el manejo de diferentes framworks
        como Vue js y React, además del uso de la librería JQuery, desde hace 6 años que utilizo este lenguaje para controlar diferentes aspectos de las
        páginas web que desarrollo.`;
    const bootstrapDescription = `Para los estilos en mis proyectos web me es necesario utilizar el framework bootstrap y sus diferentes componentes,
        este framework de css es util para utilizar con React y Vue, todos mis proyectos utilizan este framework con algunas modificaciones ayudándome
        de archivos css personalizados.`;
    const gitDescription = `Para el control de versiones en cada proyecto es necesario utilizar git, esta herramienta de desarrollo es fundamental en cada
        uno de los proyectos en los que participo, el uso de diferentes ramas para cada entorno (desarrollo, QA, producción, etc.), la definicón de un
        gitflow y el uso de repositorios remotos le dá más orden al desarrollo de cada proyecto en el que participo.`;
    const sqlserverDescription = `SQL Server es un gestor de base de datos utilizado en diferentes proyectos que necesita guardar información de los clientes
        este gestor se puede utilizar en cuaquier proyecto de backend.`;
    const postgresqlDescription = `Otros proyectos de backend que desarrollo utilizan base de datos en PostgreSQL, otro gestor muy rápido y que puede 
        contener mucha información de los clientes en cada sistema que se desarrolle para ellos.`;
    
  
    const handleShowModal = (description: string, logo: any) => {
        setDescription(description);
        setLogo(logo);
        setShow(!show);
    }

    const handleCloseModal = () => {
        setShow(false);
    }

    return (
        <Card className="bg-transparent" style={{width: '70%', margin: '0 auto', border: '3px solid #A6192E', borderRadius: '25px'}}>
            <Card.Body className="text-center">
                <Card.Title className="mb-4">Habilidades</Card.Title>
                <Table responsive style={{width: '100%', margin: '0 auto'}}>
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <Image src={logoLaravel} className="m-2 logos-skills" onClick={() => handleShowModal(laravelDescription, logoLaravel)}/>
                            </td>
                            <td className="text-center">
                                <Image src={logoPhp} className="m-2 logos-skills" onClick={() => handleShowModal(phpDescription, logoPhp)}/>
                            </td>
                            <td className="text-center">
                                <Image src={logoVue} className="m-2 logos-skills" onClick={() => handleShowModal(vueDescription, logoVue)}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <Image src={logoReact} className="m-2 logos-skills" onClick={() => handleShowModal(reactDescription, logoReact)}/>
                            </td>
                            <td className="text-center">
                                <Image src={logoJavascript} className="m-2 logos-skills" onClick={() => handleShowModal(javascriptDescription, logoJavascript)}/>
                            </td>
                            <td className="text-center">
                                <Image src={logoBootstrap} className="m-2 logos-skills" onClick={() => handleShowModal(bootstrapDescription, logoBootstrap)}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <Image src={logoGit} className="m-2 logos-skills" onClick={() => handleShowModal(gitDescription, logoGit)}/>
                            </td>
                            <td className="text-center">
                                <Image src={logoSqlserver} className="m-2 logos-skills" onClick={() => handleShowModal(sqlserverDescription, logoSqlserver)}/>
                            </td>
                            <td className="text-center">
                                <Image src={logoPostgresql} className="m-2 logos-skills" onClick={() => handleShowModal(postgresqlDescription, logoPostgresql)}/>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
            <ModalSkills show={show} handleCloseModal={handleCloseModal} description={description} logo={logo} />
        </Card>
    )
}