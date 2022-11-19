import { Modal, Image } from "react-bootstrap";

export default function ModalSkills({show, handleCloseModal, description, logo}: any)
{
    return (
        <Modal show={show} onHide={handleCloseModal} centered>
            <Modal.Body className="modal-skills text-center">
                <Image src={logo} className="image-skill" />
                <p className="mt-3">{description}</p>
            </Modal.Body>
        </Modal>
    )
}