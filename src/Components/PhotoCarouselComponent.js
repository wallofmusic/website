import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import '../App.css';


const Photography = props => {
    const {photos, loading, setLoading} = props
    const NextArrow=({onClick})=>{
        return(
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight/>
            </div>
        )
    }

    const PrevArrow=({onClick})=>{
        return(
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft/>
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0)
    const [imageLoads, setImageLoads] = useState(()=>(
        photos.map(i=>false)
    ))
    const settings={
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 3,
        
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setImageIndex(next)
    }


    // const loadImage = index => {
    //     let copy = [...imageLoads];
    //     copy[index] = true;
    //     setImageLoads(copy);
        
    // }

    const [size, setSize] = useState({
        width: 0,
        height: 0
      });

    const imageSize = e => {
        setSize({
            width: e.target.width,
            height: e.target.height
        });
        const thisImage = e.target;
        if(thisImage.height > thisImage.width){
            thisImage.classList.replace("landscape", "portrait")
        };
    }   

    return (
        <>
        <div className="PhotoCarousel">
            <Slider {...settings}>
                    {photos.map((image, idx)=>{
                        return (
                            <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx} id="slide">
                                <img onLoad={imageSize} id="myImage" src={image} alt={image}  className="landscape"/>
                            </div>
                        )
                    })
                    }
            </Slider>
        </div>
        </>
    );
}

export default Photography

// style={imageLoads[idx] ? {}: {display:'none'}} 