import React from 'react';
import './Pictures.css';
import pic from '../../media/eventpic.jpg';
import pic1 from '../../media/eventpic4.jpg';
import pic2 from '../../media/eventpic2.jpg';
import video from '../../media/eventvideo.mp4';
import video1 from '../../media/eventvideo1.mp4';
import pic3 from '../../media/eventpic1.jpg';
import pic4 from '../../media/eventpic7.jpg';
import pic5 from '../../media/image.jpg';
import pic6 from '../../media/eventpic88.jpg';
import video2 from '../../media/eventvideo2.mp4';
import pic7 from '../../media/eventpic9.jpg';
import pic8 from '../../media/eventpic11.jpg';
import pic9 from '../../media/eventpic3.jpg';



const Pictures = () => {
    return (
        <article className='articleDiv' id="homeScroll">
            <img src={pic} alt='Event Picture' className='pic'/>
            <video src={video} alt='Event Video' autoPlay='true' loop muted className='video' />
            <img src={pic1} alt='Event Picture' className='pic1'/>
            <img src={pic2} alt='Event Picture' className='pic2'/>
            <img src={pic3} alt='Event Picture' className='pic3'/>
            <video src={video1} alt='Event Video' autoPlay='true' loop muted className='video1' />
            <img src={pic4} alt='Event Picture' className='pic4'/>
            <img src={pic5} alt='Event Picture' className='pic5'/>
            <img src={pic6} alt='Event Picture' className='pic6'/>
            <video src={video2} alt='Event Video' autoPlay='true' loop muted className='video2' />
            <img src={pic7} alt='Event Picture' className='pic7'/>
            <img src={pic8} alt='Event Picture' className='pic8'/>
            <img src={pic9} alt='Event Picture' className='pic9'/>
        </article>
    )
}

export default Pictures
