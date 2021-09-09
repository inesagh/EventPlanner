import React from 'react';
import './asideVideos.css';

const AsideVideos = (props) => {
    return (
        <aside>
            <div className="videosAroundEvents">
                <video src={props.asideVideo} alt='Event Video' autoPlay='true' loop muted />
            </div>
        </aside>
    )
}

export default AsideVideos
