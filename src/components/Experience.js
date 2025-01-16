import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import unimelb from '../assets/img/UoM_Logo.png';
import msp from '../assets/img/melbourne_space_program_logo.jpeg';
import misc from '../assets/img/misc_logo.jpeg';
import think_tank from '../assets/img/think_tank_logo.jpeg';
import urt from '../assets/img/urt.png';
import wehi from '../assets/img/wehi_logo.jpeg';

const Experience = () => {

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
        <section className = "experience" id = "experience">

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>
                                Experience
                            </h2>
                            <p>
                                These are the places that I have worked on till now.
                            </p>
                            <Carousel responsive = {responsive} infinite = {true} className = "skill-slider">
                            <div className = "item">
                                    <img src = {urt} alt = "" className='work_logo'/>
                                    <h5 className='work_name'>Unimelb Rover Team</h5>
                                </div>
                                <div className = "item">
                                    <img src = {msp} alt = "" className='work_logo'/>
                                    <h5 className='work_name'>Melbourne Space Program</h5>
                                </div>
                                <div className = "item">
                                    <img src = {misc} alt = "" className='work_logo' />
                                    <h5 className='work_name'>MISC</h5>
                                </div>
                                <div className = "item">
                                    <img src = {wehi} alt = "" className='work_logo'/>
                                    <h5 className='work_name'>WEHI</h5>
                                </div>
                                <div className = "item">
                                    <img src = {think_tank} alt = "" className='work_logo'/>
                                    <h5 className='work_name'>Think Tank</h5>
                                </div>
                                <div className = "item">
                                    <img src = {unimelb} alt = "" className='work_logo'/>
                                    <h5 className='work_name'>University of Melbourne</h5>
                                </div>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}
export default Experience;