import React from 'react'
import './CarouselHeader.scss';
import Carousel, {slidesToShowPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function CarouselHeader() {
    let img = "https://baza-knig.xyz/uploads/posts/2021-05/1620797978_1618905032_415.jpg";
    let img2 = "https://baza-knig.xyz/uploads/posts/2021-05/1620905267_64325611-aleksandr-arkadevich-deorse-nu-vot-opyat-slomal.jpg";
    let img3 = "https://baza-knig.xyz/uploads/posts/2021-05/1621149591_63422756-aleksey-osadchuk-labirint-straha.jpg";

    return (
        <div className="header-carousel">
            <Carousel
                plugins={[
                    'infinite',
                    'arrows',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 8
                        }
                    },
                ]}
                breakpoints={{
                    640: {
                        plugins: [
                            'infinite',
                            'clickToChange',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 2
                                }
                            },
                        ]
                    },
                    900: {
                        plugins: [
                            'infinite',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 5
                                }
                            },
                        ]
                    }
                }}
            >
                <img className="head-c-img" src={img}/>
                <img className="head-c-img" src={img2}/>
                <img className="head-c-img" src={img3}/>
                <img className="head-c-img" src={img}/>
                <img className="head-c-img" src={img2}/>
                <img className="head-c-img" src={img3}/>
                <img className="head-c-img" src={img}/>
                <img className="head-c-img" src={img2}/>
                <img className="head-c-img" src={img3}/>
            </Carousel>
        </div>
    );
}


export default CarouselHeader;
