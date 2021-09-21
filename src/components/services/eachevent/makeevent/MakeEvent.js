import React, { useState } from 'react';
import './makeEvent.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../redux/modal.slice';
import ModalsEnum from '../../../../enums/modal.enums';
import { useSelector } from 'react-redux';
import axios from 'axios';


const MakeEvent = () => {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.typesOfEvents.types);
    const makeEvent = useSelector((state) => state.makeEventFromService.makeEvent);
    const [totalPriceForMakingEvent, setTotalPriceForMakingEvent] = useState(0);

    const [eventDetails, setEventDetails] = useState({
        type: null,
        date: null,
        serialNumber: null,
        description: null,
        florist: null,
        photographervideographer: null,
        dj: null,
        hairstylist: null,
        makeupArtist: null,
        cakeBaker: null,
        buffet: null,
        decorator: null,
        totalPriceOfEvent: null
    });

    const closeLogin = async () => {
        return await dispatch(openModal(ModalsEnum.CLOSE));
    }

    const [error, setError] = useState("");
    const funcForMakingEvent = async () => {
        const res = await axios.put("https://backend.eventplanner.inchvorban.space/account/makeevent", {
            type: eventDetails.type,
            date: eventDetails.date,
            price: eventDetails.totalPriceOfEvent,
            description: eventDetails.description,
            employeeIds: [eventDetails.florist, eventDetails.photographervideographer, eventDetails.dj,
            eventDetails.decorator, eventDetails.buffet, eventDetails.hairstylist, eventDetails.makeupArtist,
            eventDetails.cakeBaker]
        });
        if (res.data) {
            await dispatch(openModal(ModalsEnum.READYEVENT));
        } else {
            setError("There has been going something wrong. Please try again later or contact us for more information. ");
        }
    }

    const funcForEventDetails = async () => {
        const res = await axios.get("https://backend.eventplanner.inchvorban.space/account/myevents/eventname",
            localStorage.getItem("clickedEventName"));
        setEventDetails({ ...eventDetails, ['type']: res.data.type });
        setEventDetails({ ...eventDetails, ['description']: res.data.description });
        setEventDetails({ ...eventDetails, ['date']: res.data.date });
        setEventDetails({ ...eventDetails, ['serialNumber']: res.data.serialNumber });
        setEventDetails({ ...eventDetails, ['totalPriceOfEvent']: res.data.totalPriceOfEvent });
        res.data.florist ? setEventDetails({ ...eventDetails, ['florist']: res.data.florist })
            : setEventDetails({ ...eventDetails, ['florist']: null });
        res.data.dj ? setEventDetails({ ...eventDetails, ['dj']: res.data.dj })
            : setEventDetails({ ...eventDetails, ['dj']: null });
        res.data.photographervideographer ? setEventDetails({ ...eventDetails, ['photographervideographer']: res.data.photographervideographer })
            : setEventDetails({ ...eventDetails, ['photographervideographer']: null });
        res.data.hairstylist ? setEventDetails({ ...eventDetails, ['hairstylist']: res.data.hairstylist })
            : setEventDetails({ ...eventDetails, ['hairstylist']: null });
        res.data.makeupArtist ? setEventDetails({ ...eventDetails, ['makeupArtist']: res.data.makeupArtist })
            : setEventDetails({ ...eventDetails, ['makeupArtist']: null });
        res.data.cakeBaker ? setEventDetails({ ...eventDetails, ['cakeBaker']: res.data.cakeBaker })
            : setEventDetails({ ...eventDetails, ['cakeBaker']: null });
        res.data.buffet ? setEventDetails({ ...eventDetails, ['buffet']: res.data.buffet })
            : setEventDetails({ ...eventDetails, ['buffet']: null });
        res.data.decorator ? setEventDetails({ ...eventDetails, ['decorator']: res.data.decorator })
            : setEventDetails({ ...eventDetails, ['decorator']: null });
    }

    const funcForEachOccupationEmployees = async (occupations) => {
        const url = `https://backend.eventplanner.inchvorban.space/account/employee/${occupations}`;
        const res = await axios.get(url);
        return res.data;
    }

    const funcForPrices = async (id, occupations) => {
        funcForEachOccupationEmployees(occupations).map(each => {
            if (each.id == id) {
                setTotalPriceForMakingEvent(totalPriceForMakingEvent + each.price);
            }
        });
    }

    return (
        <div id="makeEventId">
            <div>
                <div className="iconpart"><i class="fas fa-times" onClick={closeLogin}></i></div>
                {
                    makeEvent ?
                        <>
                            <h2>Make your event</h2>
                            <div className="pairsForMakingEvent">
                                <p>Type</p>
                                {
                                    types === 'Custom' ?
                                        <select onChange={(e) => {
                                            setEventDetails({ ...eventDetails, ['type']: e.target.value });
                                        }}>
                                            <option>Custom</option>
                                            <option>Wedding</option>
                                            <option>Birthday</option>
                                            <option>Engagement</option>
                                            <option>Baptism</option>
                                        </select>
                                        :
                                        <select disabled="true" className="disabledSelect" onChange={(e) => {
                                            setEventDetails({ ...eventDetails, ['type']: types });
                                        }}>
                                            <option>{types}</option>
                                        </select>
                                }

                                <label htmlFor="name">Name</label>
                                <input type="text" maxLength="20" id="name" name="name" onChange={(e) => {
                                    setEventDetails({ ...eventDetails, ['description']: e.target.value });
                                }} />

                                <label htmlFor="date">Date</label>
                                <input type="date" name="date" onChange={(e) => {
                                    setEventDetails({ ...eventDetails, ['date']: e.target.value });
                                }} />

                                <p>Florist</p>
                                <select onChange={(e) => {
                                    setEventDetails({ ...eventDetails, ['florist']: e.target.value });
                                }} >
                                    {
                                        funcForEachOccupationEmployees("Florist").map(each => {
                                            return <option value={each.id}>{each.companyName} / {each.price} /</option>
                                        })
                                    }
                                </select>
                                {funcForPrices(eventDetails.florist, "Florist")}


                                <p>Photographer and/or <br /> videographer</p>
                                <select onChange={(e) => {
                                    setEventDetails({ ...eventDetails, ['photographervideographer']: e.target.value });
                                }} >
                                    {
                                        funcForEachOccupationEmployees("Photographer/Videographer").map(each => {
                                            return <option value={each.id}>{each.companyName} / {each.price} /</option>
                                        })
                                    }
                                </select>
                                {funcForPrices(eventDetails.photographervideographer, "Photographer/Videographer")}

                                <p>DJ</p>
                                <select onChange={(e) => {
                                    setEventDetails({ ...eventDetails, ['dj']: e.target.value });
                                }} >
                                    {
                                        funcForEachOccupationEmployees("DJ").map(each => {
                                            return <option value={each.id}>{each.companyName} / {each.price} /</option>
                                        })
                                    }
                                </select>
                                {funcForPrices(eventDetails.dj, "DJ")}


                                <p>Hairstylist</p>
                                <select onChange={(e) => {
                                    setEventDetails({ ...eventDetails, ['hairstylist']: e.target.value });
                                }} >
                                    {
                                        funcForEachOccupationEmployees("Hairstylist").map(each => {
                                            return <option value={each.id}>{each.companyName} / {each.price} /</option>
                                        })
                                    }
                                </select>
                                {funcForPrices(eventDetails.hairstylist, "Hairstylist")}


                                <p>Makeup artist</p>
                                <select onChange={(e) => {
                                    setEventDetails({ ...eventDetails, ['makeupArtist']: e.target.value });
                                }} >
                                    {
                                        funcForEachOccupationEmployees("Makeup artist").map(each => {
                                            return <option value={each.id}>{each.companyName} / {each.price} /</option>
                                        })
                                    }
                                </select>
                                {funcForPrices(eventDetails.makeupArtist, "Makeup artist")}

                                <p>Cake baker</p>
                                <select onChange={(e) => {
                                    setEventDetails({ ...eventDetails, ['cakeBaker']: e.target.value });
                                }} >
                                    {
                                        funcForEachOccupationEmployees("Cake Baker").map(each => {
                                            return <option value={each.id}>{each.companyName} / {each.price} /</option>
                                        })
                                    }
                                </select>
                                {funcForPrices(eventDetails.cakeBaker, "Cake Baker")}

                                <p>Buffet</p>
                                <select onChange={(e) => {
                                    setEventDetails({ ...eventDetails, ['buffet']: e.target.value });
                                }} >
                                    {
                                        funcForEachOccupationEmployees("Buffet").map(each => {
                                            return <option value={each.id}>{each.companyName} / {each.price} /</option>
                                        })
                                    }
                                </select>
                                {funcForPrices(eventDetails.buffet, "Buffet")}

                                <p>Decorator</p>
                                <select onChange={(e) => {
                                    setEventDetails({ ...eventDetails, ['decorator']: e.target.value });
                                }} >
                                    {
                                        funcForEachOccupationEmployees("Decorator").map(each => {
                                            return <option value={each.id}>{each.companyName} / {each.price} /</option>
                                        })
                                    }
                                </select>
                                {funcForPrices(eventDetails.decorator, "Decorator")}
                            </div>
                            <br />
                            <div className="line"></div>
                            <div className="pairsForMakingEvent">
                                <p className="totalPrice">Total Price</p>
                                <p>{totalPriceForMakingEvent}֏</p>
                            </div>
                            <p style={{ color: "red", fontSize: "1rem", fontWeight: "600" }}>{error ? error : null}</p>
                            <button onClick={funcForMakingEvent}>Make Event</button>
                        </>
                        :
                        <>
                            {funcForEventDetails()}
                            <h2>{localStorage.getItem("clickedEventName")}</h2>
                            <div className="pairsForMakingEvent">

                                <p>Description</p>
                                <p>{eventDetails.description}</p>

                                <p>Type</p>
                                <p>{eventDetails.type}</p>

                                <p>Date</p>
                                <p>{eventDetails.date}</p>

                                <p>Serial Number</p>
                                <p>{eventDetails.serialNumber}</p>

                                {
                                    eventDetails.florist ?
                                        <>
                                            <p>Florist</p>
                                            <p>{eventDetails.florist}</p>
                                        </>
                                        : null
                                }

                                {
                                    eventDetails.photographervideographer ?
                                        <>
                                            <p>Photographer and/or <br /> videographer</p>
                                            <p>{eventDetails.photographervideographer}</p>
                                        </>
                                        : null
                                }

                                {
                                    eventDetails.dj ?
                                        <>
                                            <p>DJ</p>
                                            <p>{eventDetails.dj}</p>
                                        </>
                                        : null
                                }

                                {
                                    eventDetails.hairstylist ?
                                        <>
                                            <p>Hairstylist</p>
                                            <p>{eventDetails.hairstylist}</p>
                                        </>
                                        : null
                                }

                                {
                                    eventDetails.makeupArtist ?
                                        <>
                                            <p>Makeup artist</p>
                                            <p>{eventDetails.makeupArtist}</p>
                                        </>
                                        : null
                                }

                                {
                                    eventDetails.cakeBaker ?
                                        <>
                                            <p>Cake baker</p>
                                            <p>{eventDetails.cakeBaker}</p>
                                        </>
                                        : null
                                }

                                {
                                    eventDetails.buffet ?
                                        <>
                                            <p>Buffet</p>
                                            <p>{eventDetails.buffet}</p>
                                        </>
                                        : null
                                }

                                {
                                    eventDetails.decorator ?
                                        <>
                                            <p>Decorator</p>
                                            <p>{eventDetails.decorator}</p>
                                        </>
                                        : null
                                }
                            </div>
                            <br />
                            <div className="line"></div>
                            <div className="pairsForMakingEvent">
                                <p className="totalPrice">Total Price</p>
                                <p>{eventDetails.totalPriceOfEvent}֏</p>
                            </div>
                        </>
                }
            </div>

        </div >
    )
}

export default MakeEvent
