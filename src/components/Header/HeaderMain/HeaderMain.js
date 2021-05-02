import React from 'react';
import samplePicture from '../../../img/sample picture.png';

const HeaderMain = () => {
    return (

        <div class="row ps-5 d-flex align-items-center bg-light">
            <div class="col ps-4">
                <h6 className='text-secondary'>HELLO,MY NAME IS</h6>
                <h1 className='color'>S M Ashfak Uddin</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sit doloribus impedit hic, ea dolorum! Lorem ipsum dolor sit amet cons</p>
                <a class="btn lg-btn bg-color text-white" href='#my-work'>MY WORK</a>
            </div>
            <div class="col ms-5 ps-5">
               <img className='img-fluid' src={samplePicture} alt="" width='350'/>
            </div>
        </div>

    );
};

export default HeaderMain;