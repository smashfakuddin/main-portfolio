import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className='section-title'>
                <h2>ABOUT ME</h2>
            </div>
            <div>
                <div class="row d-flex align-items-center ">
                    <div class="col col-sm ms-5 ps-3 ">
                        <h3>Howdey!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate molestiae ducimus at facere eius explicabo consectetur, tenetur repellat nobis deserunt necessitatibus repellendus quos esse.</p>
                        <button className="btn lg-button bg-color text-light">Download My Resume</button>
                    </div>
                    <div class=" col col-sm w-75">
                        <span>HTML 5</span>
                        <div class="progress mt-2 mb-3">
                            <div class="progress-bar background" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                        </div>
                        <span>CSS 3</span>
                        <div class="progress mt-2 mb-3">
                            <div class="progress-bar background" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                        </div>
                        <span>JAVASCRIPT</span>
                        <div class="progress mt-2 mb-3">
                            <div class="progress-bar background" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                        </div>
                        <span>BOOTSTRAP</span>
                        <div class="progress mt-2 mb-3">
                            <div class="progress-bar background" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                        </div>
                        <span>REACT</span>
                        <div class="progress mt-2 mb-3">
                            <div class="progress-bar background" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;