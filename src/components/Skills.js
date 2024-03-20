import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/skill1.svg';
import meter2 from '../assets/img/skill2.svg';
import meter3 from '../assets/img/skill3.svg';
const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className = "skill" id = "skills">

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>
                                Technical Skills
                            </h2>
                            <p>
                                These are the Programming skills that I have acquired over the years.
                            </p>
                            <Carousel responsive = {responsive} infinite = {true} className = "skill-slider">
                                <div className = "item">
                                    <img src = {meter1} alt = "Image" />
                                    <h5>C++</h5>
                                </div>
                                <div className = "item">
                                    <img src = {meter2} alt = "Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className = "item">
                                    <img src = {meter3} alt = "Image" />
                                    <h5>Java</h5>
                                </div>
                                <div className = "item">
                                    <img src = {meter2} alt = "Image" />
                                    <h5>ReactJS</h5>
                                </div>
                                <div className = "item">
                                    <img src = {meter1} alt = "Image" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className = "item">
                                    <img src = {meter2} alt = "Image" />
                                    <h5>Vanilla JavaScript</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}
export default Skills;