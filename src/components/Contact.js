import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import dragonImg from "../assets/img/dragoncraft-png-5690494.svg";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_daa66at', 'template_6dnr99y', form.current, {
            publicKey: 'Vp9kaW7zSSMf3yW_r',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset();
      };

    const buttonText = 'Send';

    return (
        <section className = "contact" id = "contact">
            <Container>
                <Row className = "align-items-center">
                    <Col size = {12} md = {6} >
                        <h2>Contact</h2>
                        <form ref = {form}  onSubmit={sendEmail}>
                            <Row>
                                <Col sm = {6} className = "px-1">
                                    <input type = "text" name = "firstName"  placeholder= "First Name" />
                                </Col>
                                <Col sm = {6} className = "px-1">
                                    <input type = "text" name = "lastName"  placeholder= "Last Name" />
                                </Col>
                                <Col sm = {6} className = "px-1">
                                    <input type = "text" name = "email"  placeholder= "Email" />
                                </Col>
                                <Col sm = {6} className = "px-1">
                                    <input type = "tel" name = "phone"  placeholder= "Phone No." />
                                </Col>
                                <Col>
                                    <textarea row = "6" name = "message" />
                                    <button type = "submit"><span>{buttonText}</span></button>
                                </Col>

                            </Row>


                        </form>
                    </Col>
                    <Col size = {12} md = {6}>
                        <img  src={dragonImg} alt =""/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Contact;