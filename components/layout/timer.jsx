import { Avatar, CircularProgress, Badge } from '@mui/material'
import React, { useEffect, useState, useContext } from 'react'
import { Button, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap'
// import { GlobalContext } from '../context/Context';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroller';
// import { basePath } from '@/next.config';
import { useRouter } from 'next/router';
import { Card, Dropdown } from "react-bootstrap"
import moment from 'moment';
import Link from 'next/link';
// import { slideDown, slideUp } from '@/pages/animation';
// import { useFormik } from 'formik';
// import { FileUploader } from 'react-drag-drop-files';
// import Swal from 'sweetalert2';

const Timer = () => {

    // let { state, dispatch, reloadSetTime } = useContext(GlobalContext);

    const router = useRouter();

    const [isLogedin , setIsLogedin] = useState(null);
    const [isLoading , setIsLoading] = useState(false);
    const [timeActivity , setTimeActivity] = useState([]);
    const [myTeam , setMyTeam] = useState([]);
    const [allUser , setAllUser] = useState([]);
    const [btnLoad , setBtnLoad] = useState(false);
    const [nextPage , setNextPage] = useState("");
    const [eof , setEof] = useState(false);
    const [showTimePopup , setShowTimePopup] = useState(false);
    const [cancelTime , setCancelTime] = useState(false);
    const [timeLoad , setTimeLoad] = useState(false);
    const [currentLocation, setCurrentLocation] = useState("")
    const [pageLoad , setPageLoad] = useState(false);

    const [isBreak , setIsBreak] = useState(false)
    const [teamVisible , setTeamVisible] = useState(true);
    const [timeResponse , setTimeResponse] = useState(false);
    const [marked , setMarked] = useState(false);

    const [timeInResponse,  setTimeInResponse] = useState({})
    const [ramzanModalCont , setRamzanModalCont] = useState({})
    const [ramzanFeedbackCont , setRamzanFeedbackCont] = useState({});

    const [reloadPopup , setReloadPopup] = useState(false);

    const [isPopupLoad , setIsPopupLoad] = useState(false);
    const [isFeedbackLoad , setIsFeedbackLoad] = useState(false);

    const [initialSehriValue , setInitialSehriValue] = useState({});
    const [initialIftariValue , setInitialIftariValue] = useState({});
    const [isValueInit, setIsValueInit] = useState(false);

    let state = {
        user:{
            user_role: "1"
        }
    }

    return (
        <>
            <div className={(currentLocation != "" && currentLocation?.slice(-11) != "/dashboard2" && currentLocation?.slice(-11) != "dashboard2/") ? 'timerAsideBar' : 'timerAsideBar timerIsOpen border-start-0'}>                
                
                <div className="clockingBox w-100 bg-white pt-4 d-flex flex-column gap-4 justify-content-between">
                    <div className="flex-shrink-0 px-2">
                        <div className="text-center">
                            <Avatar src={state?.user?.profile_picture} sx={{ width: 60, height: 60 }} className='m-auto avatarImgs'>{state?.user?.name?.slice(0, 1)}</Avatar>
                        </div>
                        <div className="text-center pt-2 timerUserDetailBox">
                            <h6 className="fg-33 fs-16 fw-7 lh-normal timerUserName">
                                {state?.user?.name}
                            </h6>
                            <p className="fg-33 fs-12 fw-4 lh-14 pb-2 timerUserDepartment">{state?.user?.designation}</p>
                            
                                {(timeResponse)?
                                    (isLogedin) ? 
                                    <span className="fw-6 fs-16 lh-normal fg-green timerUserActionHd">Last Time In: 
                                        {` ${timeActivity[1]?.slice(0 , -3)} ${timeActivity[2]?.toUpperCase()}`}
                                    </span> 
                                    : 
                                    <span className="fw-6 fs-16 lh-normal fg-red timerUserActionHd">Last Time Out: 
                                    {` ${timeActivity[1]?.slice(0 , -3)} ${timeActivity[2]?.toUpperCase()}`}
                                    </span>
                                    :
                                    "-"
                                }
                        </div>

                        {/* {(state?.user?.is_cnic_expired == "1" || state?.user?.is_document_upload == "1" || state?.user?.is_emp_data_filled == "1") ?
                            
                            <div className="pt-2 mt-3 d-flex align-items-center justify-content-center exp-warn">
                                <Link href="/user/update-user" className='link fg-red fs-16 fw-6 text-center'>{(state?.user?.is_emp_data_filled == "1") ? "Fill your all Personal & Family Information" : (state?.user?.is_cnic_expired == "1") ? "Upload Your New CNIC & Update CNIC Date" : "Upload Your Documents"}</Link>
                            </div>
                            :
                            (location?.pathname?.slice(-12) != "/servey-form" && location?.pathname?.slice(-12) != "servey-form/")?
                            <>
                                <div className="text-center pt-2 timerUserDetailBox2">
                                    <p className="fg-33 fs-12 fw-4 lh-14 pb-2 timerUserDepartment2"></p>
                                    {(isLogedin) ? 
                                        <span className="fw-6 fs-16 lh-normal fg-green timerUserActionHd2">{`${timeActivity[1]?.slice(0 , -3)}`}
                                        </span> 
                                        : 
                                        <span className="fw-6 fs-16 lh-normal fg-red timerUserActionHd2">{`${timeActivity[1]?.slice(0 , -3)}`}
                                        </span>
                                    }
                                    {(isLogedin) ?
                                        <div role='button' className="outerBreak link mt-2" title='break' onClick={markBreak}>
                                            <div className="innerBreak">
                                                <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="M445-255.39q-110.08 0-187.54-75.34Q180-406.08 180-515.38V-760q0-24.54 17.73-42.27Q215.46-820 240-820h495q51.78 0 88.39 35.81T860-696.92q0 52.58-36.39 89.75Q787.23-570 735-570h-28.85v54.62q0 108.64-76.11 184.32-76.12 75.67-185.04 75.67ZM240-630h406.15v-130H240v130Zm205 314.62q83.77 0 142.46-58.31 58.69-58.31 58.69-141.69V-570H240v54.62q0 83.77 60.23 141.88 60.23 58.12 144.77 58.12ZM706.15-630H735q27.31 0 46.15-19.52Q800-669.04 800-696.92q0-26.54-19.23-44.81Q761.54-760 735-760h-28.85v130ZM180-140v-60h600v60H180Zm263.08-430Z"/></svg></span>
                                            </div>
                                        </div>
                                        :
                                        null
                                    }
                                </div>

                                {(isLogedin == null) ?  
                                    null:
                                    (isLogedin) ? 
                                    <div className="d-flex align-items-center justify-content-between gap-2 mt-3 loginTimer">
                                        <span className="btn-switch w-100">
                                            <input type="radio" name="switch" value="time_in" 
                                                onClick={checking} 
                                                id="yes" className="btn-switch__radio btn-switch__radio_yes" defaultChecked={(isLogedin) ? true : false} 
                                            />
                                            <input type="radio" name="switch" value="time_out" 
                                                onClick={checking} 
                                                id="no" 
                                                className="btn-switch__radio btn-switch__radio_no" 
                                                defaultChecked={(!isLogedin) ? true : false} 
                                            />
                                            <label htmlFor="yes" className="btn-switch__label btn-switch__label_yes"><span className="btn-switch__txt fs-14">Slide to Time Out</span></label>
                                            <label htmlFor="no" className="btn-switch__label btn-switch__label_no"><span className="btn-switch__txt  fs-14">Slide to Time In</span></label>
                                        </span>
                                        <div role='button' className="outerBreak link" title='break' onClick={markBreak}>
                                            <div className="innerBreak">
                                                <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="M445-255.39q-110.08 0-187.54-75.34Q180-406.08 180-515.38V-760q0-24.54 17.73-42.27Q215.46-820 240-820h495q51.78 0 88.39 35.81T860-696.92q0 52.58-36.39 89.75Q787.23-570 735-570h-28.85v54.62q0 108.64-76.11 184.32-76.12 75.67-185.04 75.67ZM240-630h406.15v-130H240v130Zm205 314.62q83.77 0 142.46-58.31 58.69-58.31 58.69-141.69V-570H240v54.62q0 83.77 60.23 141.88 60.23 58.12 144.77 58.12ZM706.15-630H735q27.31 0 46.15-19.52Q800-669.04 800-696.92q0-26.54-19.23-44.81Q761.54-760 735-760h-28.85v130ZM180-140v-60h600v60H180Zm263.08-430Z"/></svg></span>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <span className="btn-switch w-100 mt-3">
                                        <input type="radio" name="switch" value="time_in" 
                                            onClick={checking} 
                                            id="yes" className="btn-switch__radio btn-switch__radio_yes" defaultChecked={(isLogedin) ? true : false} 
                                        />
                                        <input type="radio" name="switch" value="time_out" 
                                            onClick={checking} 
                                            id="no" 
                                            className="btn-switch__radio btn-switch__radio_no" 
                                            defaultChecked={(!isLogedin) ? true : false} 
                                        />
                                        <label htmlFor="yes" className="btn-switch__label btn-switch__label_yes"><span className="btn-switch__txt fs-14">Slide to Time Out</span></label>
                                        <label htmlFor="no" className="btn-switch__label btn-switch__label_no"><span className="btn-switch__txt  fs-14">Slide to Time In</span></label>
                                    </span>
                                }
                            </>
                            :
                            null

                        } */}

                    </div>

                    <div className="position-relative timerOnlineUser overflow-y-scroll">

                        <div className=" px-2 h-100 pb-0 mb-4">

                            <h6 role='button' className="d-flex justify-content-between gap-3 fg-33 fs-14 lh-normal fw-7 pb-3 timerUserhd">
                                <em>
                                    {(teamVisible) ?
                                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#1d1d1d"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#1d1d1d"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                                    }
                                    My Team 
                                </em> 
                                <span>({myTeam?.length})</span>
                            </h6>

                            <ul className='timerUserList' id="teamList">
                                {myTeam?.map((e , i) => {
                                    return(
                                        <li key={i} className="d-flex align-items-center justify-content-between gap-3 w-100 py-2">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="onlineUsers">
                                                    <Avatar src={e?.profile_picture} sx={{ width: 30, height: 30 }} title={e?.name} className='avatarImgs'>{e?.name.slice(0 , 1)}</Avatar>
                                                    {/* <span className={`p-1 rounded-5 bg-green`} title={e?.timein}></span> */}
                                                    <span className={`p-1 rounded-5 bg-${(e?.attendace_status == "active") ? "green" : "red"}`} title={e?.timein}></span>
                                                </div>
                                                <h6 className="fg-33 fs-14 lh-normal fw-6 timerUserTeamName timerUserTeamName">{e?.name}</h6>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>

                            <h6 className="d-flex justify-content-between gap-3 fg-33 fs-14 lh-normal fw-7 py-3 timerUserhd">Online Users <span>({allUser?.length})</span></h6>

                            <ul className='timerUserList' id='myUL'>
                            {/* <InfiniteScroll
                                pageStart={1}
                                loadMore={getAllUser}
                                hasMore={!eof}
                                loader={<center><div className="loader" key={0}><CircularProgress /></div></center>}
                            > */}
                                {allUser?.map((e , i) => {
                                    return(
                                        <li key={i} className="d-flex align-items-center justify-content-between gap-3 w-100 py-2">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="onlineUsers">
                                                    <Avatar src={e?.profile_picture} sx={{ width: 30, height: 30 }} title={e?.name} className='avatarImgs'>{e?.name.slice(0 , 1)}</Avatar>
                                                    <span className={`p-1 rounded-5 bg-green`} title={e?.timein}></span>
                                                </div>
                                                <h6 className="fg-33 fs-14 lh-normal fw-6 timerUserTeamName timerUserTeamName">{e?.name}</h6>
                                            </div>
                                        </li>
                                    )
                                })}
                            {/* </InfiniteScroll> */}
                            </ul>
                        </div>
                    </div>
                </div>
                
                {(timeLoad) ?
                    <div className="timeLoader">
                        <span className="loader"></span>
                    </div>
                    :
                    null
                }
                {(showTimePopup) ?
                    <div className="timeOutPop">
                        <div className="mood">
                            <div className="closePop btn" onClick={() => {
                                setShowTimePopup(false);
                                document.getElementById("yes").click();
                            }}>
                                X
                            </div>
                            {/* <form>
                                <h4 className='text-center pt-2 fs-20 fg-33 fw-5'> How Was Your Day?</h4>
                                <div className="rating">
                                    <div className="field">
                                        <input type="radio" id="VeryUnhappy" name="rating" value="Very Unhappy" required="" onChange={() => {timeOut("Very Unhappy")}}/>
                                        <label for="VeryUnhappy" title="Very Unhappy"> <img src={`${basePath}/mood/very_unhappy.png`} /> <span className='fs-12 fg-66 fw-4'> Very Unhappy </span> </label>
                                    </div>
                                    
                                    <div className="field">
                                        <input type="radio" id="Unhappy" name="rating" value="Unhappy" onChange={() => {timeOut("Unhappy")}} />
                                        <label for="Unhappy" title="Unhappy"> <img src={`${basePath}/mood/unhappy.png`} /> <span className='fs-12 fg-66 fw-4'> Unhappy </span>  </label>
                                    </div>

                                    <div className="field">
                                        <input type="radio" id="neutral" name="rating" value="Neutral" onChange={() => {timeOut("Neutral")}} />
                                        <label for="neutral" title="Neutral"> <img src={`${basePath}/mood/neutral.png`} />  <span className='fs-12 fg-66 fw-4 text-center'> Neutral </span> </label>
                                    </div>
                                    
                                    <div className="field">
                                        <input type="radio" id="Happy" name="rating" value="Happy" onChange={() => {timeOut("Happy")}} />
                                        <label for="Happy" title="Happy"> <img src={`${basePath}/mood/happy.png`} /> <span className='fs-12 fg-66 fw-4 text-center'> Happy </span>  </label>
                                    </div>
                                    
                                    <div className="field">
                                        <input type="radio" id="VeryHappy" name="rating" value="Very Happy" onChange={() => {timeOut("Very Happy")}} />
                                        <label for="VeryHappy" title="Very Happy"> <img src={`${basePath}/mood/very_happy.png`} /> <span className='fs-12 fg-66 fw-4 text-center'> Very Happy</span> </label>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </div>
                    :
                    null
                }

                {(isBreak) ?
                    <div className="break-layout">
                        <div className="onlineStatusModel">
                            <div className="insideModel">
                                <div className="TxtHeader p-2">
                                    <h3 className='d-flex align-items-center gap-2'><img src={`${basePath}/break/breakicon2.jpg`} alt="-" /> Are you online?</h3>
                                </div>
                                <div className="bodyPopup">
                                    <img src={`${basePath}/break/officebreak.png`} alt="-" className="img-responsive" />
                                </div>
                                <div className="btn btn-onlineagain btn-primary markmeonline" onClick={removeBreak}>Return from break?</div>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </>
    )
}

export default Timer