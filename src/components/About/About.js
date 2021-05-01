import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className='section-title'>
                <h2>ABOUT ME</h2>
            </div>
            <div>
                <div class="row ">
                    <div class="col">
                        <h3>Howdey!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate molestiae ducimus at facere eius explicabo consectetur, tenetur repellat nobis deserunt necessitatibus repellendus quos esse.</p>
                        <button className="btn lg-button">Download Resume</button>
                    </div>
                    <div class="col">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                        <span>JAVASCRIPT</span>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                        <span>JAVASCRIPT</span>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;