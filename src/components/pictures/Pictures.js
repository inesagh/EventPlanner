import React from 'react';
import './pictures.css';
import pic from '../../media/eventpic.jpg';
import pic1 from '../../media/eventpic4.jpg';
import pic2 from '../../media/eventpic2.jpg';
import video from '../../media/eventvideo.mp4';
import video1 from '../../media/eventvideo1.mp4';
import pic3 from '../../media/eventpic1.jpg';
import pic4 from '../../media/Web_Photo_Editor.jpg';
import pic5 from '../../media/image.jpg';
import pic6 from '../../media/eventpic88.jpg';
import video2 from '../../media/eventvideo2.mp4';
import pic7 from '../../media/eventpic9.jpg';
import pic8 from '../../media/eventpic11.jpg';
import pic9 from '../../media/eventpic3.jpg';

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";



const Pictures = () => {
    return (
        <article className='articleDiv' id="homeScroll">

            <Masonry columnsCount={5}>
                <img src={pic} alt='Event Picture' />
                <video src={video} alt='Event Video' autoPlay='true' loop muted />
                <img src={pic1} alt='Event Picture' />
                <img src={pic2} alt='Event Picture' />
                <img src={pic3} alt='Event Picture' />
                <video src={video1} alt='Event Video' autoPlay='true' loop muted />
                <img src={pic4} alt='Event Picture' />
                <img src={pic9} alt='Event Picture' />
                <video src={video2} alt='Event Video' autoPlay='true' loop muted />
                <img src={pic7} alt='Event Picture' />
                <img />
                <img src={pic6} alt='Event Picture' />
                <img src={pic5} alt='Event Picture' />
                <img />
                <img src={pic8} alt='Event Picture' />
            </Masonry>
        </article>
    )
}

export default Pictures
