import React from 'react';
import './Header.scss';
import './carousel/CarouselHeader';
import CarouselHeader from "./carousel/CarouselHeader";

function Header() {
    return (
        <div className="header">
            <div className="row">
                <div className="logo">
                <a href="/" className="logo-img"/>
                </div>
                <CarouselHeader/>
            </div>
        </div>
    );
}

export default Header;
