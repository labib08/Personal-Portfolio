import { useEffect, useState } from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import emailImg from "../assets/img/email-svgrepo-com.svg";
import timeImg from "../assets/img/iconmonstr-clock-thin.svg";
import locationImg from "../assets/img/location-pin-svgrepo-com.svg";

const Banner = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleClick = () => {
        console.log("Let's connect");
    };
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    const showTime = formattedHours + ':' + formattedMinutes + ' ' + ampm;

    const [index, setIndex] = useState(0);
    const [render, setRender] = useState(false);
    const [invisible, setInvisible] = useState(false);
    const description = ["Software Engineer", "Full-Stack Developer", "University of Melbourne", "Melbourne Space Program"];
    const [text, setText] = useState('');
    const [timeGap, setTimeGap] = useState(50);
    const time = 1000;

    useEffect(() => {
        let helper_func = setInterval(() => {
            pause();
        }, timeGap)

        return () => {clearInterval(helper_func)};
    }, [text]);

    const pause = () => {
        let i = index % description.length;
        let renderText = description[i];
        let newText = render ? renderText.substring(0, text.length -1) : renderText.substring(0, text.length + 1);

        setText(newText);

        if (render) {
            setTimeGap(prevTimeGap => prevTimeGap/2);
        }

        if (!render && newText === renderText) {
            setRender(true);
            setTimeGap(time);

        }
        else if (render && newText === '') {
            setRender(false);
            setIndex(index +1);

            setTimeGap(50);

            setText('.');
        }
    }
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsVisible(!isVisible);
        }, 500);

        return () => clearTimeout(timer);
    }, [isVisible]);

    return (
        <section className = "banner" id = "home">
            <Container>
                <Row className = "align-items-center">

                    <Col xs = {12} md = {6} xl = {7}>

                        <h1> <span>{"Itmam Khan Labib "} </span></h1>
                        <h2>
                        <span>{text}</span>
                        <span id = "underscore" >_</span>
                        </h2>
                        <div className='loc-time-email-logo'>
                        <p><span><img src = {locationImg} className='location-logo' alt = ""/>   Melbourne, Victoria, Australia</span></p>
                        <p><span><img src = {timeImg} className='location-logo' alt = ""/>   {showTime}</span></p>
                        <p><span><img src = {emailImg} className='location-logo' alt = ""/>   iklabib49@gmail.com</span></p>
                        </div>
                        <p>Hi I am this this this, I do this this this, please insert text, or dont, idk lol man. I'm just tryna live womp womp</p>

                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Banner;