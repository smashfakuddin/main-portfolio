import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg  navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold ms-5 fs-2" href="#">Ash</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav fs-6 ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">PORTFOLIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">BLOG</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link active" aria-current="page" href="#">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;