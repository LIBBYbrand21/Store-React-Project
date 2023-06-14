import React, { useState } from 'react';
import { FaChevronCircleUp } from 'react-icons/fa';
import { Button } from '../css/Styles';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button>
            <FaChevronCircleUp onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' , width:60, height:60}} />
        </Button>
    );
}

export default ScrollButton;
