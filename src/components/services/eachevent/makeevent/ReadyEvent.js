import React from 'react';

import { useDispatch } from 'react-redux';
import { openModal } from '../../../../redux/modal.slice';
import ModalsEnum from '../../../../enums/modal.enums';

const ReadyEvent = () => {
    const dispatch = useDispatch();

    const closeReadyEvent = () => {
        dispatch(openModal(ModalsEnum.CLOSE))
    }

    return (
        <div id="makeEventId" onClick={closeReadyEvent}>
            <div className="readyEvent">
                <p><strong>Thank you</strong> for choosing us for your event.<br/> Our administrator will contact you within the next <br /> 24 hours. We hope you will have fun, and we look<br/> forward to 
                    helping you with further events.<br/> ''Event Planner''  truly appreciates your trust. Please<br/> let
                     us know if you have any questions.</p>
            </div>
        </div>
    )
}

export default ReadyEvent
