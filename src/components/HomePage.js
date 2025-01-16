import { useCallback, useEffect, useMemo, useState } from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import emailImg from "../assets/img/email-svgrepo-com.svg";
import timeImg from "../assets/img/iconmonstr-clock-thin.svg";
import locationImg from "../assets/img/location-pin-svgrepo-com.svg";
const HomePage = () => {

    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    const showTime = formattedHours + ":" + formattedMinutes + " " + ampm;

    const [index, setIndex] = useState(0);
    const [render, setRender] = useState(false);
    const [text, setText] = useState("");
    const [timeGap, setTimeGap] = useState(50);
    const time = 1000;

    const description = useMemo(
        () => ["Software Engineer", "Full-Stack Developer", "University of Melbourne", "Melbourne Space Program"],
        []
    );

    const pause = useCallback(() => {
        let i = index % description.length;
        let renderText = description[i];
        let newText = render ? renderText.substring(0, text.length - 1) : renderText.substring(0, text.length + 1);

        setText(newText);

        if (render) {
            setTimeGap((prevTimeGap) => prevTimeGap / 2);
        }

        if (!render && newText === renderText) {
            setRender(true);
            setTimeGap(time);
        } else if (render && newText === "") {
            setRender(false);
            setIndex((prevIndex) => prevIndex + 1);

            setTimeGap(50);

            setText(".");
        }
    }, [index, description, render, text.length, time]);

    useEffect(() => {
        const getTime = () => {
        };

        const interval = setInterval(getTime, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const helperFunc = setInterval(() => {
            pause();
        }, timeGap);

        return () => clearInterval(helperFunc);
    }, [pause, timeGap]);

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible((prevIsVisible) => !prevIsVisible);
        }, 500);

        return () => clearTimeout(timer);
    }, [isVisible]);

    return (
        <section className = "homePage" id = "home">

            <Container>

                <Row className = "align-items-center">

                    <Col >

                        <h1> <span>Itmam Khan Labib </span></h1>
                        <h2>
                        <span>{text}</span>
                        <span id = "underscore" >_</span>
                        </h2>
                        <div className='loc-time-email-logo'>
                        <p><span><img src = {locationImg} className='location-logo' alt = ""/>   Melbourne, Victoria, Australia</span></p>
                        <p><span><img src = {timeImg} className='location-logo' alt = ""/>   {showTime}</span></p>
                        <p><span><img src = {emailImg} className='location-logo' alt = ""/>   iklabib49@gmail.com</span></p>
                        </div>
                        <p>Hi I am currently studying Computer Science at the University of Melbourne. <br/>My interests lie in watching Cricket and Football. I have an obsession <br/>for wrist watches. </p>

                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default HomePage;