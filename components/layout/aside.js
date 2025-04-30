import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import $ from "jquery"
import { useEffect, useState, useContext } from "react";
import { Accordion } from 'react-bootstrap';
import { useRouter } from 'next/router';
// import { GlobalContext } from '../context/Context';
import { Avatar, Divider } from '@mui/material';
// import axios from 'axios';
// import { basePath } from '@/next.config';

const Aside = () => {

    const router = useRouter();

    // const auth = () => {

    //     let token = localStorage.getItem("token")
    
    //     if (token) {
    
    //     } else {
    //       router.push("/login");
    //     }
    // }
    
    // auth();

    // let { state, dispatch } = useContext(GlobalContext);
    const [currentLocation , setCurrentLocation] = useState("");

    useEffect(() => {
        // Header and Aside Bar
        function addasideclasses() {
            $('aside').addClass("showAside");
            $('aside').removeClass("hideAside");
            // $('header').addClass('headerMargin')
        }
        function removeasideclasses() {
            $('aside').addClass("hideAside");
            // $('header').removeClass('headerMargin')
            $('aside').removeClass("showAside");
        }
        // On click buger menu 
        $(document).on('click', 'aside .menu-Bar', function () {
            $('.menu-Bar').show();
            $(this).hide();
            $('.menu-Bar').addClass('open');
            $(this).removeClass('open');
            $('aside').addClass('closedBar');
            $('header').addClass('closedBar');
            $('header').removeClass("headerMargin");
            setTimeout(removeasideclasses, 500);
            if(location?.pathname?.slice(-11) != "/dashboard2"  && location?.pathname?.slice(-11) != "dashboard2/"){
                $('.timerAsideBar').addClass('timerIsOpen');
            }
            
            
            $('.chbb_menu-Bar').removeClass('nonActive')
            $('.chbb_menu-Bar').addClass('active');
        });
        $(document).on('click', "header .menu-Bar", function () {
            $('.menu-Bar').show();
            $(this).hide();
            $('.menu-Bar').addClass('open');
            $(this).removeClass('open');
            $('aside').removeClass('closedBar');
            $('header').removeClass('closedBar');
            $('header').addClass("headerMargin");
            setTimeout(addasideclasses, 10);
            if(location?.pathname?.slice(-11) != "/dashboard2"  && location?.pathname?.slice(-11) != "dashboard2/"){
                $('.timerAsideBar').removeClass('timerIsOpen');
            }
            
            $('.chbb_menu-Bar').addClass('nonActive')
            $('.chbb_menu-Bar').removeClass('active');
        });
        // Hover header buger menu show and hover out not show menu
        $("header .menu-Bar").hover(function () {
            if ($(this).hasClass("open")) {
                addasideclasses();
            }
        }, function () {
            if ($(this).hasClass("open")) {
                removeasideclasses();
            }
        });
        $("aside").hover(function () {
            if ($(this).hasClass("closedBar")) {
                addasideclasses();
            }
        }, function () {
            if ($(this).hasClass("closedBar")) {
                removeasideclasses();
            }
        });

        $(document).on('click', '.chbb_menu-Bar.active', function () {
            $(this).addClass('nonActive')
            $(this).removeClass('active');
            $('.timerAsideBar').removeClass('timerIsOpen');

            $('.menu-Bar').show();
            $("header .menu-Bar").hide();
            $('.menu-Bar').addClass('open');
            $("header .menu-Bar").removeClass('open');
            $('header').addClass("headerMargin");
            $('aside').removeClass('closedBar');
            $('header').removeClass('closedBar');
            setTimeout(addasideclasses, 10);            
        });

        $(document).on('click', '.chbb_menu-Bar.nonActive', function () {
            $(this).addClass('active');
            $(this).removeClass('nonActive');
            $('.timerAsideBar').addClass('timerIsOpen');

            $('.menu-Bar').show();
            $('aside .menu-Bar').hide();
            $('.menu-Bar').addClass('open');
            $('aside .menu-Bar').removeClass('open');
            $('aside').addClass('closedBar');
            $('header').removeClass("headerMargin");
            $('header').addClass('closedBar');
            setTimeout(removeasideclasses, 500);
            
        });
        
        return () => {
            
        };
    })
    useEffect(() => {
        let pathName = location?.pathname;
        if(pathName?.slice(0,5) == "/hrms"){
            let filteredPath = pathName?.slice(5)
            if(pathName.charAt(pathName.length - 1) == "/"){
                setCurrentLocation(filteredPath.slice(0 , -1));
            }else{
                setCurrentLocation(filteredPath);
            }
        }else{
            setCurrentLocation(pathName)
        }
        return () => {
            
        };
    })

    let state = {
        user:{
            user_role: "1"
        }
    }

    return (
        <>
            <aside className={(currentLocation == "/hr-dashboard-full" || currentLocation == "hr-dashboard-full/") ? "closedBar hideAside" : ""}>
                <div className="top-headerLeft border-end border-bottom border-EE transition4">
                    <div className='d-flex asideTop align-items-center justify-content-between w-100 h-100 theam-hover'>
                        <div className="header-profile">
                            <div className="header-profileAvatar2">
                                {/* <Avatar className='bg-green avatarImgs' alt="Remy Sharp" sx={{width:30, height:30} } src={state?.user?.profile_picture} >{state?.user?.name?.slice(0, 1)}</Avatar> */}
                                {/* <Avatar className='rounded-0 bg-green2' sx={{height:28 , width: 104}} alt="Remy Sharp"  src={`${basePath}/dino.png`} >{"Shariq"?.slice(0, 1)}</Avatar> */}
                            </div>
                            {/* <div className="header-profileName"> */}
                                {/* <h6>{((state.user.name?.length > 15) ? `${state.user.name.slice(0, 15)}...` : state.user.name )}</h6> */}
                                {/* <Avatar className='rounded-0' alt="Remy Sharp" sx={{height:30 , width: 120}} src={`${basePath}/people.png`}></Avatar> */}
                            {/* </div> */}
                        </div>

                        {/* <div className="menu-Bar transition4">
                            <span><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="#666666"><path d="M629.92-340.54v-278.92L478.08-480l151.84 139.46ZM223.31-164q-24.56 0-41.94-17.37Q164-198.75 164-223.31v-513.38q0-24.56 17.37-41.94Q198.75-796 223.31-796h513.38q24.56 0 41.94 17.37Q796-761.25 796-736.69v513.38q0 24.56-17.37 41.94Q761.25-164 736.69-164H223.31ZM336-216v-528H228.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v503.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85H336Zm52 0h343.69q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-503.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H388v528Zm-52 0H216h120Z"/></svg></span>
                        </div> */}
                    </div>
                </div>

                <ul className="aside-nav overflow-hidden overflow-y-auto">
                    
                    <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/dashboard2' || currentLocation == '') ? "active" : ""}`}>
                        <Link href={'/dashboard2'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center text theam-hover text-nowrap'>
                            <div className="nav-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h240v-560H200v560Zm320 0h240v-280H520v280Zm0-360h240v-200H520v200Z"/></svg>
                            </div>
                            <span className="text-nowrap" >Dashboard</span>
                        </Link>
                    </li>

                    {(state.user.employee_id == 23414 || state.user.employee_id == 23724 || state.user.employee_id == 23422) ? 
                        <Accordion>
                            <li className='d-flex align-items-center justify-content-between mb-2'>
                                <Accordion.Item eventKey="200" className='shadow-none border-0 p-0 w-100 '>
                                    <Accordion.Header>
                                        <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                            <div className="nav-icon" >
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h240v-560H200v560Zm320 0h240v-280H520v280Zm0-360h240v-200H520v200Z"/></svg>
                                            </div>
                                            <span>Management Dashboard</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body className='bg-white'>
                                        <ul>
                                            <li className={`${(currentLocation == '/management-dashboard/employee-overview') ? "active" : ""}`}>
                                                <Link href={'/management-dashboard/employee-overview'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M690-480h60v-68l59 34 30-52-59-34 59-34-30-52-59 34v-68h-60v68l-59-34-30 52 59 34-59 34 30 52 59-34v68ZM80-120q-33 0-56.5-23.5T0-200v-560q0-33 23.5-56.5T80-840h800q33 0 56.5 23.5T960-760v560q0 33-23.5 56.5T880-120H80Zm556-80h244v-560H80v560h4q42-75 116-117.5T360-360q86 0 160 42.5T636-200ZM360-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM182-200h356q-34-38-80.5-59T360-280q-51 0-97 21t-81 59Zm178-280q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560q17 0 28.5 11.5T400-520q0 17-11.5 28.5T360-480Zm120 0Z"/></svg>
                                                    </div>
                                                    <span>Employee overview</span>
                                                </Link>
                                            </li>

                                            <li className={`${(currentLocation == '/management-dashboard/attendance-leave-management') ? "active" : ""}`}>
                                                <Link href={'/management-dashboard/attendance-leave-management'} className='nested-link mb-2 gap-3 fs-15 lh-16 fw-5 fg-66 d-flex theam-hover '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M791-55 686-160H160v-112q0-34 17.5-62.5T224-378q45-23 91.5-37t94.5-21L55-791l57-57 736 736-57 57ZM240-240h366L486-360h-6q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm496-138q29 14 46 42.5t18 61.5L666-408q18 7 35.5 14t34.5 16ZM568-506l-59-59q23-9 37-29.5t14-45.5q0-33-23.5-56.5T480-720q-25 0-45.5 14T405-669l-59-59q23-34 58-53t76-19q66 0 113 47t47 113q0 41-19 76t-53 58Zm38 266H240h366ZM457-617Z"/></svg>
                                                    </div>
                                                    <span>Attendance & Leave Management</span>
                                                </Link>
                                            </li>

                                            <li className={`${(currentLocation == '/management-dashboard/travel-expense') ? "active" : ""}`}>
                                                <Link href={'/management-dashboard/travel-expense'} className='nested-link mb-2 gap-3 fs-15 lh-16 fw-5 fg-66 d-flex theam-hover '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/></svg>
                                                    </div>
                                                    <span>Travel & Expense Management</span>
                                                </Link>
                                            </li>

                                            <li className={`${(currentLocation == '/management-dashboard/payroll-compensation') ? "active" : ""}`}>
                                                <Link href={'/management-dashboard/payroll-compensation'} className='nested-link mb-2 gap-3 fs-15 lh-16 fw-5 fg-66 d-flex theam-hover '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M160-200v-440 440-15 15Zm0 80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v171q-18-13-38-22.5T800-508v-132H160v440h283q3 21 9 41t15 39H160Zm240-600h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm20-208v-112h-40v128l86 86 28-28-74-74Z"/></svg>
                                                    </div>
                                                    <span>Payroll & Compensation</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </li>

                            <li className='d-flex align-items-center justify-content-between mb-2'>
                                <Accordion.Item eventKey="201" className='shadow-none border-0 p-0 w-100 '>
                                    <Accordion.Header>
                                        <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                            <div className="nav-icon" >
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h240v-560H200v560Zm320 0h240v-280H520v280Zm0-360h240v-200H520v200Z"/></svg>
                                            </div>
                                            <span>Fleet Dashboard</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body className='bg-white'>
                                        <ul>
                                            <li className={`${(currentLocation == '/fleet-dashboard/car-overview') ? "active" : ""}`}>
                                                <Link href={'/fleet-dashboard/car-overview'} className='nested-link mb-2 gap-3 fs-15 lh-16 fw-5 fg-66 d-flex theam-hover '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M80-80q-17 0-28.5-11.5T40-120v-320l85-203q7-17 22-27t33-10h360q18 0 33 10t22 27l85 203v320q0 17-11.5 28.5T640-80h-40q-17 0-28.5-11.5T560-120v-40H160v40q0 17-11.5 28.5T120-80H80Zm72-440h415l-33-80H186l-34 80Zm-32 280h480v-200H120v200Zm100-40q25 0 42.5-17.5T280-340q0-25-17.5-42.5T220-400q-25 0-42.5 17.5T160-340q0 25 17.5 42.5T220-280Zm280 0q25 0 42.5-17.5T560-340q0-25-17.5-42.5T500-400q-25 0-42.5 17.5T440-340q0 25 17.5 42.5T500-280Zm220 80v-344l-73-176H227l18-43q7-17 22-27t33-10h360q18 0 33 10t22 27l85 203v320q0 17-11.5 28.5T760-200h-40Zm120-120v-344l-73-176H347l18-43q7-17 22-27t33-10h360q18 0 33 10t22 27l85 203v320q0 17-11.5 28.5T880-320h-40Zm-480-20Z"/></svg>
                                                    </div>
                                                    <span>Car Overview</span>
                                                </Link>
                                            </li>

                                            <li className={`${(currentLocation == '/fleet-dashboard/financials') ? "active" : ""}`}>
                                                <Link href={'/fleet-dashboard/financials'} className='nested-link mb-2 gap-3 fs-15 lh-16 fw-5 fg-66 d-flex theam-hover '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
                                                    </div>
                                                    <span>Car Expense Overview</span>
                                                </Link>
                                            </li>

                                            <li className={`${(currentLocation == '/fleet-dashboard/cases') ? "active" : ""}`}>
                                                <Link href={'/fleet-dashboard/cases'} className='nested-link mb-2 gap-3 fs-15 lh-16 fw-5 fg-66 d-flex theam-hover '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M156-144q-45 0-76.5-31.48T48-251.92Q48-287 68-315t52-39v-252q-32-11-52-38.92t-20-63.05Q48-753 79.5-784.5T156-816q45 0 76.5 31.48t31.5 76.44Q264-673 244-645t-52 39v90h228v-90q-32-11-52-38.92t-20-63.05q0-45.03 31.5-76.53T456-816q45 0 76.5 31.48t31.5 76.44Q564-673 544-645t-52 39v90h192q15.3 0 25.65-10.35Q720-536.7 720-552v-54q-32-11-52-38.92t-20-63.05q0-45.03 31.5-76.53T756-816q45 0 76.5 31.48t31.5 76.44Q864-673 844-645t-52 39v54q0 45-31.5 76.5T684-444H492v90q32 11 52 38.92t20 63.05q0 45.03-31.5 76.53T456-144q-45 0-76.5-31.48T348-251.92Q348-287 368-315t52-39v-90H192v90q32 11 52 38.92t20 63.05q0 45.03-31.5 76.53T156-144Zm-.21-72q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm0-456q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm300 456q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm0-456q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm300 0q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM156-252Zm0-456Zm300 456Zm0-456Zm300 0Z"/></svg>
                                                    </div>
                                                    <span>Car Incidents & License Alerts</span>
                                                </Link>
                                            </li>

                                            <li className={`${(currentLocation == '/fleet-dashboard/van-overview') ? "active" : ""}`}>
                                                <Link href={'/fleet-dashboard/van-overview'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M647.74-144Q618-144 597-165.18q-21-21.17-21-50.91v-144.17Q576-390 597.18-411q21.17-21 50.91-21h144.17Q822-432 843-410.82q21 21.17 21 50.91v144.17Q864-186 842.82-165q-21.17 21-50.91 21H647.74Zm.26-72h144v-144H648v144ZM96-252v-72h384v72H96Zm551.74-276Q618-528 597-549.18q-21-21.17-21-50.91v-144.17Q576-774 597.18-795q21.17-21 50.91-21h144.17Q822-816 843-794.82q21 21.17 21 50.91v144.17Q864-570 842.82-549q-21.17 21-50.91 21H647.74Zm.26-72h144v-144H648v144ZM96-636v-72h384v72H96Zm624 348Zm0-384Z"/></svg>
                                                    </div>
                                                    <span>Van Overview</span>
                                                </Link>
                                            </li>

                                            <li className={`${(currentLocation == '/fleet-dashboard/van') ? "active" : ""}`}>
                                                <Link href={'/fleet-dashboard/van'} className='nested-link mb-2 gap-3 fs-15 lh-16 fw-5 fg-66 d-flex theam-hover '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M264-192q-50 0-85-35t-35-85H48v-360q0-29.7 21.15-50.85Q90.3-744 120-744h552l240 240v192h-96q0 50-35 85t-85 35q-50 0-85-35t-35-85H384q0 50-35 85t-85 35Zm288-360h210L642-672h-90v120Zm-216 0h144v-120H336v120Zm-216 0h144v-120H120v120Zm143.89 288Q284-264 298-277.89q14-13.88 14-34Q312-332 298.11-346q-13.88-14-34-14Q244-360 230-346.11q-14 13.88-14 34Q216-292 229.89-278q13.88 14 34 14Zm432 0Q716-264 730-277.89q14-13.88 14-34Q744-332 730.11-346q-13.88-14-34-14Q676-360 662-346.11q-14 13.88-14 34Q648-292 661.89-278q13.88 14 34 14ZM120-384h48q18-23 42.5-35.5T264-432q29 0 54 12.5t42 35.5h240q17-23 42-35.5t54-12.5q29 0 53.5 12.5T792-384h48v-96H120v96Zm720-96H120h720Z"/></svg>
                                                    </div>
                                                    <span>Van Expense Overview</span>
                                                </Link>
                                            </li>

                                            <li className={`${(currentLocation == '/fleet-dashboard/van-financials') ? "active" : ""}`}>
                                                <Link href={'/fleet-dashboard/van-financials'} className='nested-link mb-2 gap-3 fs-15 lh-16 fw-5 fg-66 d-flex theam-hover '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/></svg>
                                                    </div>
                                                    <span>Van Incidents & License Alerts</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </li>
                        </Accordion>
                        :
                        null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ?  
                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/hr-dashboard') ? "active" : ""}`}>
                            <Link href={'/hr-dashboard'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center text theam-hover text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h240v-560H200v560Zm320 0h240v-280H520v280Zm0-360h240v-200H520v200Z"/></svg>
                                </div>
                                <span className="text-nowrap">HR Dashboard</span>
                            </Link>
                        </li>
                        :
                        null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ?  
                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/hr-dashboard-full') ? "active" : ""}`}>
                            <Link href={'/hr-dashboard-full'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center text theam-hover text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h240v-560H200v560Zm320 0h240v-280H520v280Zm0-360h240v-200H520v200Z"/></svg>
                                </div>
                                <span className="text-nowrap">HR Dashboard New</span>
                            </Link>
                        </li>
                        :
                        null
                    }

                    <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/calender') ? "active" : ""}`}>
                        <Link href={'/calender'}  prefetch={false} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                            <div className="nav-icon" >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm67-105 28-28-75-75v-112h-40v128l87 87Zm-547 65q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v250q-18-13-38-22t-42-16v-212h-80v120H280v-120h-80v560h212q7 22 16 42t22 38H200Zm280-640q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
                            </div>
                            <span>My Attendance</span>
                        </Link>
                    </li>

                    <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/notice') ? "active" : ""}`}>
                        <Link href={'/notice'} prefetch={false} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                            <div className="nav-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M260-640h40v-40q0-17-11.5-28.5T260-720q-17 0-28.5 11.5T220-680q0 17 11.5 28.5T260-640Zm180 0q17 0 28.5-11.5T480-680q0-17-11.5-28.5T440-720q-17 0-28.5 11.5T400-680v40h40Zm62 300ZM419-80q-28 0-52.5-12T325-126L107-403l19-20q20-21 48-25t52 11l74 45v-168h-40q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 20.5 2t19.5 5v-47q0-17 11.5-28.5T340-880q17 0 29 11.5t12 28.5v56q14-8 28.5-12t30.5-4q50 0 85 35t35 85q0 50-35 85t-85 35h-59v312l-97-60 104 133q6 7 14 11t17 4h221q33 0 56.5-23.5T720-240v-160q0-17-11.5-28.5T680-440H461v-80h219q50 0 85 35t35 85v160q0 66-47 113T640-80H419Z"/></svg>
                            </div>
                            <span className="text-nowrap">Notice</span>
                        </Link>
                    </li>

                    <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/policy/all') ? "active" : ""}`}>
                        <Link href={'/policy/all'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                            <div className="nav-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 85-29 163.5T688-214L560-342q-18 11-38.5 16.5T480-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 22-5.5 42.5T618-398l60 60q20-41 31-86t11-92v-189l-240-90-240 90v189q0 121 68 220t172 132q26-8 49.5-20.5T576-214l56 56q-33 27-71.5 47T480-80Zm0-320q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm8-77Z"/></svg>
                            </div>
                            <span className="text-nowrap">Legendesk Policies</span>
                        </Link>
                    </li>

                    <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/payroll/my-payroll') ? "active" : ""}`}>
                        <Link href={'/payroll/my-payroll'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                            <div className="nav-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                            </div>
                            <span className="text-nowrap">My Financials</span>
                        </Link>
                    </li>

                    <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/user/my-team') ? "active" : ""}`}>
                        <Link href={'/user/my-team'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                            <div className="nav-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm440-160q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z"/></svg>
                            </div>
                            <span className="text-nowrap">Team Members</span>
                        </Link>
                    </li>

                    <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/user/user-directory') ? "active" : ""}`}>
                        <Link href={'/user/user-directory'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                            <div className="nav-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
                            </div>
                            <span className="text-nowrap">User Directory</span>
                        </Link>
                    </li>

                    {/* {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ?

                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/jobs/my-assign-jobs') ? "active" : ""}`}>
                            <Link href={'/jobs/my-assign-jobs'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                                <div className="nav-icon">
                                    <span>assignment_turned_in</span>
                                </div>
                                <span className="text-nowrap">Assigned Jobs</span>
                            </Link>
                        </li>
                        :null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ?
                    <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/my-interviews') ? "active" : ""}`}>
                        <Link href={'/my-interviews'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                            <div className="nav-icon">
                                <span>meeting_room</span>
                            </div>
                            <span className="text-nowrap">My Interviews</span>
                        </Link>
                    </li>
                    :null} */}

                    <li className='d-flex align-items-center justify-content-between mb-2 bg-white'>
                        <h6 className='fs-12 lh-normal fw-4 fg-99'>ORGANIZATION</h6>
                    </li>
                    <Accordion>

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user.department == 13) ? 
                        <li className='d-flex align-items-center justify-content-between mb-2'>
                            <Accordion.Item eventKey="2" className='shadow-none border-0 p-0 w-100 '>
                                <Accordion.Header>
                                    <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                        <div className="nav-icon" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                                        </div>
                                        <span>Employee</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='bg-white'>
                                    <ul>

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                                            <li className={`${(currentLocation == '/user/directory') ? "active" : ""}`}>
                                                <Link href={'/user/directory'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M690-480h60v-68l59 34 30-52-59-34 59-34-30-52-59 34v-68h-60v68l-59-34-30 52 59 34-59 34 30 52 59-34v68ZM80-120q-33 0-56.5-23.5T0-200v-560q0-33 23.5-56.5T80-840h800q33 0 56.5 23.5T960-760v560q0 33-23.5 56.5T880-120H80Zm556-80h244v-560H80v560h4q42-75 116-117.5T360-360q86 0 160 42.5T636-200ZM360-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM182-200h356q-34-38-80.5-59T360-280q-51 0-97 21t-81 59Zm178-280q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560q17 0 28.5 11.5T400-520q0 17-11.5 28.5T360-480Zm120 0Z"/></svg>
                                                    </div>
                                                    <span>Employees</span>
                                                </Link>
                                            </li>
                                            :null
                                        }

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                                            <li className={`${(currentLocation == '/user/inActive-employee') ? "active" : ""}`}>
                                                <Link href={'/user/inActive-employee'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M791-55 686-160H160v-112q0-34 17.5-62.5T224-378q45-23 91.5-37t94.5-21L55-791l57-57 736 736-57 57ZM240-240h366L486-360h-6q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm496-138q29 14 46 42.5t18 61.5L666-408q18 7 35.5 14t34.5 16ZM568-506l-59-59q23-9 37-29.5t14-45.5q0-33-23.5-56.5T480-720q-25 0-45.5 14T405-669l-59-59q23-34 58-53t76-19q66 0 113 47t47 113q0 41-19 76t-53 58Zm38 266H240h366ZM457-617Z"/></svg>
                                                    </div>
                                                    <span>Inactive Employees</span>
                                                </Link>
                                            </li>
                                            :null
                                        }

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user.department == 13) ? 
                                            <li className={`${(currentLocation == '/user/add') ? "active" : ""}`}>
                                                <Link href={'/user/add'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/></svg>
                                                    </div>
                                                    <span>Add Employee</span>
                                                </Link>
                                            </li>
                                            :null
                                        }

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user?.department == "6"|| state.user.department == 13) ? 

                                            <li className={`${(currentLocation == '/user/pending-joining' || currentLocation == '/user/pending-joining') ? "active" : ""}`}>
                                                <Link href={'/user/pending-joining'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M160-200v-440 440-15 15Zm0 80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v171q-18-13-38-22.5T800-508v-132H160v440h283q3 21 9 41t15 39H160Zm240-600h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm20-208v-112h-40v128l86 86 28-28-74-74Z"/></svg>
                                                    </div>
                                                    <span>Pending Joining</span>
                                                </Link>
                                            </li>
                                            :null
                                        }

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3"|| state.user.department == 13) ? 
                                            <li className={`${(currentLocation == '/user/evaluation-list') ? "active" : ""}`}>
                                                <Link href={'/user/evaluation-list'} className='nested-link gap-3 fs-15 lh-1 fw-5 mb-2 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M440-560q33 0 56.5-23.5T520-640q0-33-23.5-56.5T440-720q-33 0-56.5 23.5T360-640q0 33 23.5 56.5T440-560Zm0 160q45 0 84.5-19t68.5-54q-35-23-73.5-35T440-520q-41 0-79.5 12T287-473q29 35 68.5 54t84.5 19Zm384 280L636-308q-41 32-90.5 50T440-240q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 56-18 105.5T692-364l188 188-56 56ZM440-320q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm0-240Z"/></svg>
                                                    </div>
                                                    <span>Evaluation List</span>
                                                </Link>
                                            </li>
                                            :null
                                        }

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3"|| state.user.department == 13) ? 
                                            <li className={`${(currentLocation == '/this-month-birthday') ? "active" : ""}`}>
                                                <Link href={'/this-month-birthday'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M160-80q-17 0-28.5-11.5T120-120v-200q0-33 23.5-56.5T200-400v-160q0-33 23.5-56.5T280-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T760-560v160q33 0 56.5 23.5T840-320v200q0 17-11.5 28.5T800-80H160Zm120-320h400v-160H280v160Zm-80 240h560v-160H200v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H200h560Z"/></svg>
                                                    </div>
                                                    <span>Birthdays</span>
                                                </Link>
                                            </li>
                                            :null
                                        }

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                                            <li className={`${(currentLocation == '/this-month-anniversary') ? "active" : ""}`}>
                                                <Link href={'/this-month-anniversary'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M480-80q-66 0-127.5-20.5T240-160l58-58q42 29 88 43.5t94 14.5q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480H80q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80ZM159-243l163-163 120 100 198-198v104h80v-240H480v80h104L438-414 318-514 117-313q11 23 19.5 37.5T159-243Zm321-237Z"/></svg>
                                                    </div>
                                                    <span>Anniversaries</span>
                                                </Link>
                                            </li>
                                            :null
                                        }

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                                            <li className={`${(currentLocation == '/bank-accounts') ? "active" : ""}`}>
                                                <Link href={'/bank-accounts'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg>
                                                    </div>
                                                    <span>Bank Account</span>
                                                </Link>
                                            </li>
                                            :null
                                        }

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                                            <li className={`${(currentLocation == '/bank-details') ? "active" : ""}`}>
                                                <Link href={'/bank-details'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm179-80h442L480-830 259-720ZM80-120v-80h482q2 21 5 40.5t9 39.5H80Zm600-310v-130h80v90l-80 40ZM800 0q-69-17-114.5-79.5T640-218v-102l160-80 160 80v102q0 76-45.5 138.5T800 0Zm-29-120 139-138-42-42-97 95-39-39-42 43 81 81ZM259-720h442-442Z"/></svg>
                                                    </div>
                                                    <span>Bank Details</span>
                                                </Link>
                                            </li>
                                            :null
                                        }

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user.department == 13) ? 
                                            <li className={`${(currentLocation == '/expired-cnic') ? "active" : ""}`}>
                                                <Link href={'/expired-cnic'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M680-932q33 0 56.5 23.5T760-852v460h-28l-52-52v-408H273l-53-53q11-13 26.5-20t33.5-7h400Zm-91 396L485-639q9-23 29-38t46-15q33 0 56.5 23.5T640-612q0 26-14 46.5T589-536Zm-269 86v-242l118 118q-7 57-32 90.5T343-450h-23ZM160-212h527l-40-40H160v40ZM819-80l-52-52H80v-120q0-33 23.5-56.5T160-332h407L280-620v228h-80v-308L28-872l56-56 792 791-57 57ZM424-212Zm52-436Zm-82 142Z"/></svg>
                                                    </div>
                                                    <span>Expired CNIC</span>
                                                </Link>
                                            </li>
                                            :null
                                        }

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                                            <li className={`${(currentLocation == '/expired-license') ? "active" : ""}`}>
                                                <Link href={'/expired-license'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M822-26 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80h-80v480h446l-80-80H240v-80h206L26-822l56-56L878-82l-56 56Zm48-178-70-70v-446H354l-80-80h526q33 0 56.5 23.5T880-720v476q0 11-2 21t-8 19ZM594-480l-80-80h206v80H594Zm-354 0v-80h80v80h-80Zm337-17Zm-194 34Z"/></svg>
                                                    </div>
                                                    <span>Expired License</span>
                                                </Link>
                                            </li>
                                            :null
                                        }

                                        {/* {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                                            <li className={`${(currentLocation == '/screen-shot') ? "active" : ""}`}>
                                                <Link href={'/screen-shot'} className='nested-link gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z"/></svg>
                                                    </div>
                                                    <span>Screenshot</span>
                                                </Link>
                                            </li>
                                            :null
                                        } */}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li>
                        :
                        null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user.department == 13) ? 
                        <li className='d-flex align-items-center justify-content-between mb-2'>
                            <Accordion.Item eventKey="200" className='shadow-none border-0 p-0 w-100 '>
                                <Accordion.Header>
                                    <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                        <div className="nav-icon" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm320 440H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v160q0 33-23.5 56.5T800-160Zm0-80v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"/></svg>
                                        </div>
                                        <span>Confirmations</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='bg-white'>
                                    <ul>

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3"|| state.user.department == 13) ? 
                                            <li className={`${(currentLocation == '/user/probation') ? "active" : ""}`}>
                                                <Link href={'/user/probation'} className='nested-link gap-3 fs-15 lh-1 fw-5 mb-2 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M440-560q33 0 56.5-23.5T520-640q0-33-23.5-56.5T440-720q-33 0-56.5 23.5T360-640q0 33 23.5 56.5T440-560Zm0 160q45 0 84.5-19t68.5-54q-35-23-73.5-35T440-520q-41 0-79.5 12T287-473q29 35 68.5 54t84.5 19Zm384 280L636-308q-41 32-90.5 50T440-240q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 56-18 105.5T692-364l188 188-56 56ZM440-320q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm0-240Z"/></svg>
                                                    </div>
                                                    <span>Probation User</span>
                                                </Link>
                                            </li>
                                            :null
                                        }

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3"|| state.user.department == 13) ? 
                                            <li className={`${(currentLocation == '/user/evaluation-list') ? "active" : ""}`}>
                                                <Link href={'/user/evaluation-list'} className='nested-link gap-3 fs-15 lh-1 fw-5 mb-2 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M440-560q33 0 56.5-23.5T520-640q0-33-23.5-56.5T440-720q-33 0-56.5 23.5T360-640q0 33 23.5 56.5T440-560Zm0 160q45 0 84.5-19t68.5-54q-35-23-73.5-35T440-520q-41 0-79.5 12T287-473q29 35 68.5 54t84.5 19Zm384 280L636-308q-41 32-90.5 50T440-240q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 56-18 105.5T692-364l188 188-56 56ZM440-320q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm0-240Z"/></svg>
                                                    </div>
                                                    <span>Evaluation List</span>
                                                </Link>
                                            </li>
                                            :null
                                        }

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                                            <li className={`${(currentLocation == '/family-details') ? "active" : ""}`}>
                                                <Link href={'/family-details'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M480-60q-63 0-106.5-43.5T330-210q0-52 31-91.5t79-53.5v-85H200v-160H100v-280h280v280H280v80h400v-85q-48-14-79-53.5T570-750q0-63 43.5-106.5T720-900q63 0 106.5 43.5T870-750q0 52-31 91.5T760-605v165H520v85q48 14 79 53.5t31 91.5q0 63-43.5 106.5T480-60Zm240-620q29 0 49.5-20.5T790-750q0-29-20.5-49.5T720-820q-29 0-49.5 20.5T650-750q0 29 20.5 49.5T720-680Zm-540 0h120v-120H180v120Zm300 540q29 0 49.5-20.5T550-210q0-29-20.5-49.5T480-280q-29 0-49.5 20.5T410-210q0 29 20.5 49.5T480-140ZM240-740Zm480-10ZM480-210Z"/></svg>
                                                    </div>
                                                    <span>Family Details</span>
                                                </Link>
                                            </li>
                                            :null
                                        }
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li>
                        :
                        null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user.department == 13) ? 
                        <li className='d-flex align-items-center justify-content-between mb-2'>
                            <Accordion.Item eventKey="4" className='shadow-none border-0 p-0 w-100 '>
                                <Accordion.Header>
                                    <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                        <div className="nav-icon" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M521-878q143 14 243.5 114.5T879-520H593q-9-26-27.5-45.5T521-594v-284Zm80 102v136q11 9 21 19t19 21h136q-24-60-70-106t-106-70ZM441-878v284q-36 13-58 44.5T361-480q0 38 22 68.5t58 43.5v286Q287-97 184-211T81-480q0-155 103-269t257-129Zm-80 102q-91 35-145.5 116T161-480q0 99 54.5 180T361-182v-138q-38-29-59-70.5T281-480q0-48 21-89.5t59-70.5v-136Zm232 336h286q-14 143-114.5 243.5T521-82v-286q26-9 44.5-27.5T593-440Zm48 80q-8 11-18.5 21T601-320v136q60-24 106-70t70-106H641ZM281-479Zm360-121Zm0 240Z"/></svg>
                                        </div>
                                        <span>Attendance Report</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='bg-white'>
                                    <ul>
                                        <li className={`${(currentLocation == '/reports/attendance') ? "active" : ""}`}>
                                            <Link href={'/reports/attendance'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M320-480v-80h320v80H320Zm0-160v-80h320v80H320Zm-80 240h300q29 0 54 12.5t42 35.5l84 110v-558H240v400Zm0 240h442L573-303q-6-8-14.5-12.5T540-320H240v160Zm480 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80Zm-480-80v-640 640Zm0-160v-80 80Z"/></svg>
                                                </div>
                                                <span>This Month</span>
                                            </Link>
                                        </li>

                                        <li className={`${(currentLocation == '/reports/daily') ? "active" : ""}`}>
                                            <Link href={'/reports/daily'} className='nested-link fs-15 gap-3 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M440-120q-75 0-140.5-28T185-225q-49-49-77-114.5T80-480q0-75 28-140.5T185-735q49-49 114.5-77T440-840q21 0 40.5 2.5T520-830v82q-20-6-39.5-9t-40.5-3q-118 0-199 81t-81 199q0 118 81 199t199 81q118 0 199-81t81-199q0-11-1-20t-3-20h82q2 11 2 20v20q0 75-28 140.5T695-225q-49 49-114.5 77T440-120Zm112-192L400-464v-216h80v184l128 128-56 56Zm168-288v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"/></svg>
                                                </div>
                                                <span>Today</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li>
                        :null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user.department == 7) ?
                        <li className='d-flex align-items-center justify-content-between mb-2'>
                            <Accordion.Item eventKey="114" className='shadow-none border-0 p-0 w-100 '>
                                <Accordion.Header>
                                    <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                        <div className="nav-icon" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m521-500 59-43 58 43-23-68 59-43h-72l-22-69-22 69h-73l59 43-23 68Zm-41 220q83 0 141.5-58T680-480q0-8-.5-16t-2.5-16q-11 47-49 77.5T539-404q-60 0-101-41t-41-101q0-46 26-82.5t68-51.5h-11q-84 0-142 58.5T280-480q0 84 58 142t142 58Zm0 252L346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/></svg>
                                        </div>
                                        <span>Ramzan</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='bg-white'>
                                    <ul>
                                        <li className={`${(currentLocation == '/forms/ramzan-feedback') ? "active" : ""}`}>
                                            <Link href={'/forms/ramzan-feedback'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z"/></svg>
                                                </div>
                                                <span>Feedback</span>
                                            </Link>
                                        </li>

                                        <li className={`${(currentLocation == '/forms/ramzan-servey') ? "active" : ""}`}>
                                            <Link href={'/forms/ramzan-servey'} className='nested-link gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M320-480v-80h320v80H320Zm0-160v-80h320v80H320Zm-80 240h300q29 0 54 12.5t42 35.5l84 110v-558H240v400Zm0 240h442L573-303q-6-8-14.5-12.5T540-320H240v160Zm480 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80Zm-480-80v-640 640Zm0-160v-80 80Z"/></svg>
                                                </div>
                                                <span>Daily Data</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li>
                        :
                        null
                    }

                    {(state.user.employee_role == "6" || state.user.employee_role == "5" || state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user?.employee_id == 23580 || state.user?.employee_id == 23439) ? 
                        <li className='d-flex align-items-center justify-content-between mb-2'>
                            <Accordion.Item eventKey="44" className='shadow-none border-0 p-0 w-100 '>
                                <Accordion.Header>
                                    <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                        <div className="nav-icon" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M80-680v-120q0-33 23.5-56.5T160-880h120v80H160v120H80ZM280-80H160q-33 0-56.5-23.5T80-160v-120h80v120h120v80Zm400 0v-80h120v-120h80v120q0 33-23.5 56.5T800-80H680Zm120-600v-120H680v-80h120q33 0 56.5 23.5T880-800v120h-80ZM540-580q-33 0-56.5-23.5T460-660q0-33 23.5-56.5T540-740q33 0 56.5 23.5T620-660q0 33-23.5 56.5T540-580Zm-28 340H352l40-204-72 28v136h-80v-188l158-68q35-15 51.5-19.5T480-560q21 0 39 11t29 29l40 64q26 42 70.5 69T760-360v80q-66 0-123.5-27.5T540-380l-28 140Z"/></svg>
                                        </div>
                                        <span>Activity Report</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='bg-white'>
                                    <ul>
                                        {(state.user?.employee_id != 23580) ?
                                            <li className={`${(currentLocation == '/break') ? "active" : ""}`}>
                                                <Link href={'/break'} className={`nested-link ${(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user?.employee_id == 23439) ? "mb-2" : ""} gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap`}>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600H120Zm160-640v560-560Zm160 320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-200h240v-560H280v560Z"/></svg>
                                                    </div>
                                                    <span>Break Report</span>
                                                </Link>
                                            </li>
                                            :
                                            null
                                        }

                                        {/* <li className={`d-flex align-items-center justify-content-between ${(currentLocation == '/break') ? "active" : ""}`}>
                                            <Link href={'/break'} className='nested-link fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                                                <div className="nav-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600H120Zm160-640v560-560Zm160 320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-200h240v-560H280v560Z"/></svg>
                                                </div>
                                                <span className="text-nowrap">Break Report</span>
                                            </Link>
                                        </li> */}

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user?.employee_id == 23580 || state.user?.employee_id == 23439) ? 
                                            <li className={`${(currentLocation == '/screen-shot') ? "active" : ""}`}>
                                                <Link href={'/screen-shot'} className='nested-link gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z"/></svg>
                                                    </div>
                                                    <span>Screenshot</span>
                                                </Link>
                                            </li>
                                            :null
                                        }

                                        {/* <li className={`${(currentLocation == '/reports/daily') ? "active" : ""}`}>
                                            <Link href={'/reports/daily'} className='nested-link fs-15 gap-3 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M440-120q-75 0-140.5-28T185-225q-49-49-77-114.5T80-480q0-75 28-140.5T185-735q49-49 114.5-77T440-840q21 0 40.5 2.5T520-830v82q-20-6-39.5-9t-40.5-3q-118 0-199 81t-81 199q0 118 81 199t199 81q118 0 199-81t81-199q0-11-1-20t-3-20h82q2 11 2 20v20q0 75-28 140.5T695-225q-49 49-114.5 77T440-120Zm112-192L400-464v-216h80v184l128 128-56 56Zm168-288v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"/></svg>
                                                </div>
                                                <span>Today</span>
                                            </Link>
                                        </li> */}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li>
                        :null
                    }

                    {/* {(state.user.employee_role == "6" || state.user.employee_role == "5" || state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/break') ? "active" : ""}`}>
                            <Link href={'/break'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600H120Zm160-640v560-560Zm160 320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-200h240v-560H280v560Z"/></svg>
                                </div>
                                <span className="text-nowrap">Break Report</span>
                            </Link>
                        </li>
                        :
                        null
                    } */}
                    
                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ?  
                        <li className='d-flex align-items-center justify-content-between mb-2'>
                            <Accordion.Item eventKey="0" className='shadow-none border-0 p-0 w-100 '>
                                <Accordion.Header>
                                    <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                        <div className="nav-icon" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M660-160h40v-160h-40v160Zm20-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-800v640-640 200-200Zm80 400h147q11-23 25.5-43t32.5-37H280v80Zm0 160h123q-3-20-3-40t3-40H280v80ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h320l240 240v92q-19-6-39-9t-41-3v-40H480v-200H200v640h227q11 23 25.5 43T485-80H200Zm480-400q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480Z"/></svg>
                                        </div>
                                        <span>Discrepancies</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='bg-white'>
                                    <ul>
                                        
                                        <li className={`${(currentLocation == '/forms/salary-list') ? "active" : ""}`}>
                                            <Link href={'/forms/salary-list'} className='nested-link gap-2 mb-2 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z"/></svg>
                                                </div>
                                                <span>Employee Salary List</span>
                                            </Link>
                                        </li>

                                        <li className={`${(currentLocation == '/discrepancies/filled') ? "active" : ""}`}>
                                            <Link href={'/discrepancies/filled'} className='nested-link mb-2 gap-2 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm0-80h640v-560H160v560Zm40-80h200v-80H200v80Zm382-80 198-198-57-57-141 142-57-57-56 57 113 113Zm-382-80h200v-80H200v80Zm0-160h200v-80H200v80Zm-40 400v-560 560Z"/></svg>
                                                </div>
                                                <span>Filled</span>
                                            </Link>
                                        </li>

                                        <li className={`${(currentLocation == '/discrepancies/all') ? "active" : ""}`}>
                                            <Link href={'/discrepancies/all'} className='nested-link gap-2 mb-2 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/></svg>
                                                </div>
                                                <span>All</span>
                                            </Link>
                                        </li>

                                        <li className={`${(currentLocation == '/discrepancies/time-out') ? "active" : ""}`}>
                                            <Link href={'/discrepancies/time-out'} className='nested-link gap-2 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm67-105 28-28-75-75v-112h-40v128l87 87Zm-547 65q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v250q-18-13-38-22t-42-16v-212h-80v120H280v-120h-80v560h212q7 22 16 42t22 38H200Zm280-640q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
                                                </div>
                                                <span>Time Out</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li> : null
                    }

                    <li className='d-flex align-items-center justify-content-between mb-2'>
                        <Accordion.Item eventKey="5" className='shadow-none border-0 p-0 w-100 '>
                            <Accordion.Header>
                                <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                    <div className="nav-icon" >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
                                    </div>
                                    <span>Forms</span>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className='bg-white'>
                                <ul>
                                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                                        <li className={`${(currentLocation == '/forms/report') ? "active" : ""}`}>
                                            <Link href={'/forms/report'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M521-878q143 14 243.5 114.5T879-520H593q-9-26-27.5-45.5T521-594v-284Zm80 102v136q11 9 21 19t19 21h136q-24-60-70-106t-106-70ZM441-878v284q-36 13-58 44.5T361-480q0 38 22 68.5t58 43.5v286Q287-97 184-211T81-480q0-155 103-269t257-129Zm-80 102q-91 35-145.5 116T161-480q0 99 54.5 180T361-182v-138q-38-29-59-70.5T281-480q0-48 21-89.5t59-70.5v-136Zm232 336h286q-14 143-114.5 243.5T521-82v-286q26-9 44.5-27.5T593-440Zm48 80q-8 11-18.5 21T601-320v136q60-24 106-70t70-106H641ZM281-479Zm360-121Zm0 240Z"/></svg>
                                                </div>
                                                <span>Report</span>
                                            </Link>
                                        </li>
                                        :null
                                    }

                                    <li className={`${(currentLocation == '/forms/add') ? "active" : ""}`}>
                                        <Link href={'/forms/add'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                            <div className="nav-icon" >
                                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm120-160v-80h320v80H320Zm0-120v-80h320v80H320Zm0-120v-80h320v80H320Zm360-80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>
                                            </div>
                                            <span>Create</span>
                                        </Link>
                                    </li>

                                    <li className={`${(currentLocation == '/forms/my-forms') ? "active" : ""}`}>
                                        <Link href={'/forms/my-forms'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                            <div className="nav-icon" >
                                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M96-720v-192h192v72H168v120H96Zm696 0v-120H672v-72h192v192h-72ZM96-48v-192h72v120h120v72H96Zm576 0v-72h120v-120h72v192H672ZM312-264h336v-432H312v432Zm-3 72q-30 0-49.5-21.5T240-264v-432q0-29 19.5-50.5T309-768h342q29 0 49 21.5t20 50.5v432q0 29-20 50.5T651-192H309Zm75-360h192v-72H384v72Zm0 108h192v-72H384v72Zm0 108h192v-72H384v72Zm-72 72v-432 432Z"/></svg>
                                            </div>
                                            <span>My Submissions</span>
                                        </Link>
                                    </li>

                                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user.department == 13) ? 
                                        <li className={`${(currentLocation == '/forms/assign-form') ? "active" : ""}`}>
                                            <Link href={'/forms/assign-form'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="m438-240 226-226-58-58-169 169-84-84-57 57 142 142ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
                                                </div>
                                                <span>My Assignments</span>
                                            </Link>
                                        </li>
                                        :null
                                    }

                                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                                        <li className={`${(currentLocation == '/forms/loan-list') ? "active" : ""}`}>
                                            <Link href={'/forms/loan-list'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M760-400v-260L560-800 360-660v60h-80v-100l280-200 280 200v300h-80ZM560-800Zm20 160h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Z"/></svg>
                                                </div>
                                                <span>Salary Loan</span>
                                            </Link>
                                        </li>
                                        :null
                                    }

                                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state?.user?.department == 14 || state?.user?.department == 6 || state.user.department == 13) ? 
                                        <li className={`${(currentLocation == '/forms/resignation-list') ? "active" : ""}`}>
                                            <Link href={'/forms/resignation-list'} className='nested-link gap-3 fs-15 mb-2 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="m864-216-72-72v-312H480l-72-72v-72h-72l-72-72h216v144h384v456ZM803-74l-71-70H96v-637l-40-40 51-51 746 747-50 51ZM168-216h72v-72h-72v72Zm0-153h72v-72h-72v72Zm0-151h72v-72h-72v72Zm168 304h72v-72h-72v72Zm0-153h72v-72h-72v72Zm144 153h180l-80-81H480v81Zm240-232h-72v-72h72v72Z"/></svg>
                                                </div>
                                                <span>Resignations</span>
                                            </Link>
                                        </li>
                                        :null
                                    }

                                    {(state?.user?.department == 14 || state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                                        <>
                                            <li className={`${(currentLocation == '/forms/reimbursement-form') ? "active" : ""}`}>
                                                <Link href={'/forms/reimbursement-form'} className='nested-link gap-3 fs-15 mb-2 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M240-384h113l209-209q7-7.17 10.5-16.32 3.5-9.16 3.5-17.92 0-8.76-3.89-17.16T562-660l-45-45q-6-7-14.8-11t-18.4-4q-8.8 0-18.14 3.5Q456.31-713 449-706L240-496v112Zm288-243-45-45 45 45ZM288-432v-45l130-129 21 21 23 24-129 129h-45Zm151-153 23 24-44-45 21 21Zm-19 201h300v-72H492l-72 72ZM96-96v-696q0-29.7 21.15-50.85Q138.3-864 168-864h624q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H240L96-96Zm114-216h582v-480H168v522l42-42Zm-42 0v-480 480Z"/></svg>
                                                    </div>
                                                    <span>Reimbursement</span>
                                                </Link>
                                            </li>
                                            <li className={`${(currentLocation == '/forms/payslip-verification') ? "active" : ""}`}>
                                                <Link href={'/forms/payslip-verification'} className='nested-link gap-3 fs-15 mb-2 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z"/></svg>
                                                    </div>
                                                    <span>Payslip Verification</span>
                                                </Link>
                                            </li>
                                            <li className={`${(currentLocation == '/forms/advance-salary-form') ? "active" : ""}`}>
                                                <Link href={'/forms/advance-salary-form'} className='nested-link gap-3 fs-15 mb-2 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M336-120q-91 0-153.5-62.5T120-336q0-38 13-74t37-65l142-171-97-194h530l-97 194 142 171q24 29 37 65t13 74q0 91-63 153.5T624-120H336Zm144-200q-33 0-56.5-23.5T400-400q0-33 23.5-56.5T480-480q33 0 56.5 23.5T560-400q0 33-23.5 56.5T480-320Zm-95-360h190l40-80H345l40 80Zm-49 480h288q57 0 96.5-39.5T760-336q0-24-8.5-46.5T728-423L581-600H380L232-424q-15 18-23.5 41t-8.5 47q0 57 39.5 96.5T336-200Z"/></svg>
                                                    </div>
                                                    <span>Advance Salary</span>
                                                </Link>
                                            </li>
                                        </>
                                        
                                        :null
                                    }

                                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                                        <li className={`${(currentLocation == '/forms/resourses-form') ? "active" : ""}`}>
                                            <Link href={'/forms/resourses-form'} className='nested-link gap-3 fs-15 mb-2 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
                                                </div>
                                                <span>Team Submissions</span>
                                            </Link>
                                        </li>
                                        :null
                                    }

                                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                                        <li className={`${(currentLocation == '/forms/referral-list') ? "active" : ""}`}>
                                            <Link href={'/forms/referral-list'} className='nested-link gap-3 fs-15 mb-2 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M264-96v-175q-57-48-88.5-115.57T144-529q0-139.58 98.29-237.29Q340.58-864 481-864q109 0 196 58.5T792-653l66 223q5 17.48-5.5 31.74Q842-384 824-384h-56v120q0 29.7-21.15 50.85Q725.7-192 696-192h-96v96h-72v-168h168v-192h80l-52-173q-22-72-89.5-117.5T481-792q-111 0-188 76.63T216-529q0 58.93 25 111.96Q266-364 311-326l25 22v208h-72Zm232-348Zm-16 108q17 0 27.5-11.1 10.5-11.09 10.5-27.5 0-16.4-10.5-27.4T480-413q-17 0-27.5 10.92Q442-391.15 442-375q0 16.58 10.5 27.79T480-336Zm-29-122h58q0-30 7-45.5t30-35.5q23-21 34-40.5t11-42.5q0-41.16-32-69.58T482-720q-39 0-69.5 21.5T370-640l52 22q6.67-21.1 23.35-34.05Q462.02-665 482.04-665q20.96 0 35.46 13.5T532-618q0 20-14.5 34.5T488-555q-22 21-29.5 40.5T451-458Z"/></svg>
                                                </div>
                                                <span>Referrals</span>
                                            </Link>
                                        </li>
                                        :null
                                    }

                                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 
                                        <li className={`${(currentLocation == '/forms/feedback-list') ? "active" : ""}`}>
                                            <Link href={'/forms/feedback-list'} className='nested-link gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M479.79-360q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM444-480h72v-264h-72v264ZM96-96v-696q0-29.7 21.15-50.85Q138.3-864 168-864h624q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H240L96-96Zm114-216h582v-480H168v522l42-42Zm-42 0v-480 480Z"/></svg>
                                                </div>
                                                <span>Feedback</span>
                                            </Link>
                                        </li>
                                        :null
                                    }
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </li>

                    <li className='d-flex align-items-center justify-content-between mb-2'>
                        <Accordion.Item eventKey="3" className='shadow-none border-0 p-0 w-100 '>
                            <Accordion.Header>
                                <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                    <div className="nav-icon" >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z"/></svg>
                                    </div>
                                    <span>Ticket</span>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className='bg-white'>
                                <ul>
                                    
                                    <li className={`${(currentLocation == '/ticket/open') ? "active" : ""}`}>
                                        <Link href={'/ticket/open'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                            <div className="nav-icon" >
                                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M120-96q-29 0-50.5-21.5T48-168v-504h72v504h600v72H120Zm432-312L264-574v262h576v-262L552-408ZM264-240q-29 0-50.5-21.5T192-312v-351q0-21 9.5-36.5T228-725l324-187 72 42-360 210 288 167 288-167q12.07-7 24.53-6.5Q877-666 888-660q11 6 17.5 17.05Q912-631.91 912-618v306q0 29-21.5 50.5T840-240H264Zm288-336L450-678l51-51 51 51 119-119 51 51-170 170Zm0 264h288-576 288Z"/></svg>
                                            </div>
                                            <span>Create</span>
                                        </Link>
                                    </li>

                                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user?.department == "6" || state.user?.department == "7") ? 
                                        <li className={`${(currentLocation == '/ticket/all') ? "active" : ""}`}>
                                            <Link href={'/ticket/all'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M144-288v-72h528v72H144Zm0-156v-72h528v72H144Zm0-156v-72h528v72H144Zm635.5 312q-14.5 0-25-10.35T744-324q0-14 10.35-25T780-360q14 0 25 11t11 25.5q0 14.5-11 25T779.5-288Zm0-156q-14.5 0-25-10.35T744-480q0-14 10.35-25T780-516q14 0 25 11t11 25.5q0 14.5-11 25T779.5-444Zm0-156q-14.5 0-25-10.35T744-636q0-14 10.35-25T780-672q14 0 25 11t11 25.5q0 14.5-11 25T779.5-600Z"/></svg>
                                                </div>
                                                <span>All</span>
                                            </Link>
                                        </li>
                                        :null
                                    }

                                    <li className={`${(currentLocation == '/ticket/my-ticket') ? "active" : ""}`}>
                                        <Link href={'/ticket/my-ticket'} className={`nested-link ${(state.user?.department == "6" || state.user?.department == "7") ? "mb-2" : "" }  gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap`}>
                                            <div className="nav-icon" >
                                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M479.79-312q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm0-132q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm0-132q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM792-192H168q-29.7 0-50.85-21.15Q96-234.3 96-264v-144q29.7 0 50.85-21.21 21.15-21.21 21.15-51t-21.15-50.94Q125.7-552.3 96-552.3v-144q0-29.7 21.15-50.7 21.15-21 50.85-21h624q29.7 0 50.85 21.15Q864-725.7 864-696v144q-29.7 0-50.85 21.21-21.15 21.21-21.15 51t21.15 50.94Q834.3-407.7 864-407.7v144q0 29.7-21.15 50.7-21.15 21-50.85 21Zm0-72v-91q-32-19-52-52t-20-73q0-40 20-73t52-52v-91H168v91q32 19 52 52t20 73q0 40-20 73t-52 52v91h624ZM480-480Z"/></svg>
                                            </div>
                                            <span>My Ticket</span>
                                        </Link>
                                    </li>

                                    {(state.user?.department == "6" || state.user?.department == "7") ? 
                                        <li className={`${(currentLocation == '/ticket/assigned-ticket') ? "active" : ""}`}>
                                            <Link href={'/ticket/assigned-ticket'} className='nested-link gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="m362-343 331-89q15-5 22.5-17.5T719-476q-4-14-16.86-22-12.85-8-27.14-4l-91 25-151-140-52 15 90 155-89.42 24L335-460l-35 9 62 108Zm430 151H168q-29.7 0-50.85-21.15Q96-234.3 96-264v-144q29.7 0 50.85-21.21 21.15-21.21 21.15-51t-21.15-50.94Q125.7-552.3 96-552.3v-144q0-29.7 21.15-50.7 21.15-21 50.85-21h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192Zm0-72v-432H168v91q32 19 52 52t20 73q0 40-20 73t-52 52v91h624ZM480-480Z"/></svg>
                                                </div>
                                                <span>Assigned Ticket</span>
                                            </Link>
                                        </li>
                                        :null
                                    }

                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </li>

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user?.department == 13) ? 

                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/tasks/list') ? "active" : ""}`}>
                            <Link href={'/tasks/list'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m438-240 226-226-58-58-169 169-84-84-57 57 142 142ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
                                </div>
                                <span className="text-nowrap">Task List</span>
                            </Link>
                        </li>
                        :
                        null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 

                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/leave/quota') ? "active" : ""}`}>
                            <Link href={'/leave/quota'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                                </div>
                                <span className="text-nowrap">Leave Quota</span>
                            </Link>
                        </li>
                        :
                        null
                    }
                    
                    <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/leave/all-list') ? "active" : ""}`}>
                        <Link href={'/leave/all-list'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                            <div className="nav-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M280-320q17 0 28.5-11.5T320-360q0-17-11.5-28.5T280-400q-17 0-28.5 11.5T240-360q0 17 11.5 28.5T280-320Zm-40-120h80v-200h-80v200Zm160 80h320v-80H400v80Zm0-160h320v-80H400v80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>
                            </div>
                            <span className="text-nowrap">Leave List</span>
                        </Link>
                    </li>

                    {(state.user.department == 38) ?
                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/reports/daily') ? "active" : ""}`}>
                            <Link href={'/reports/daily'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                                </div>
                                <span className="text-nowrap">Attendance Report</span>
                            </Link>
                        </li>
                        :
                        null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ? 

                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/leave/filled-list') ? "active" : ""}`}>
                            <Link href={'/leave/filled-list'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                                </div>
                                <span className="text-nowrap">Filled Leave</span>
                            </Link>
                        </li>
                        :
                        null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ?
                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/benefit') ? "active" : ""}`}>
                            <Link href={'/benefit'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex theam-hover align-items-center text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m520-260 140-140q11-11 17.5-26t6.5-32q0-34-24-58t-58-24q-19 0-37.5 11T520-492q-30-28-47-38t-35-10q-34 0-58 24t-24 58q0 17 6.5 32t17.5 26l140 140Zm336-130L570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM513-160l286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Z"/></svg>
                                </div>
                                <span className="text-nowrap">Benefits</span>
                            </Link>
                        </li>
                        : null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ?
                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/leave') ? "active" : ""}`}>
                            <Link href={'/leave'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex theam-hover align-items-center text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M480-80Q315-220 237.5-339T160-570q0-137 96.5-223.5T480-880q127 0 223.5 89T800-552l84-84 56 56-180 180-180-180 56-56 84 84q0-109-69.5-178.5T480-800q-101 0-170.5 67T240-569q0 83 59 177t181 206q20-18 37-35l34-34q-5-11-8-22t-3-23q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29q-8 0-14.5-1t-13.5-3q-29 30-61.5 61T480-80Z"/></svg>
                                </div>
                                <span className="text-nowrap">Public Holidays</span>
                            </Link>
                        </li>
                        : null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state?.user?.department == 14) ?
                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/payroll/payroll-month') ? "active" : ""}`}>
                            <Link href={'/payroll/payroll-month'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex theam-hover align-items-center text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg>
                                </div>
                                <span className="text-nowrap">Payroll</span>
                            </Link>
                        </li>
                        : null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user?.department == "6" || state.user?.department == "13") ? 

                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/mac') ? "active" : ""}`}>
                            <Link href={'/mac'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M720-320H575q-7-21-15.5-41.5T542-400h98v-160H413q-29-25-62.5-45T281-640h439v320ZM480-480ZM80-160v-120q50 0 85 35t35 85H80Zm200 0q0-83-58.5-141.5T80-360v-80q117 0 198.5 81.5T360-160h-80Zm160 0q0-75-28.5-140.5t-77-114q-48.5-48.5-114-77T80-520v-80q91 0 171 34.5T391-471q60 60 94.5 140T520-160h-80Zm360 0H600q0-20-1.5-40t-4.5-40h206v-480H160v46q-20-3-40-4.5T80-680v-40q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Z"/></svg>
                                </div>
                                <span className="text-nowrap">User Mac Address</span>
                            </Link>
                        </li>
                        :
                        null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user?.department == "6") ?
                        <li className='d-flex align-items-center justify-content-between mb-2'>
                            <Accordion.Item eventKey="21" className='shadow-none border-0 p-0 w-100 '>
                                <Accordion.Header>
                                    <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                        <div className="nav-icon" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
                                        </div>
                                        <span>Inventory</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='bg-white'>
                                    <ul>
                                        <li className={`${(currentLocation == '/system-list') ? "active" : ""}`}>
                                            <Link href={'/system-list'} className='nested-link gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap mb-2'>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z"/></svg>
                                                </div>
                                                <span>Computers</span>
                                            </Link>
                                        </li>

                                        <li className={`${(currentLocation == '/seat-list') ? "active" : ""}`}>
                                            <Link href={'/seat-list'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M200-120q-17 0-28.5-11.5T160-160v-40q-50 0-85-35t-35-85v-200q0-50 35-85t85-35v-80q0-50 35-85t85-35h400q50 0 85 35t35 85v80q50 0 85 35t35 85v200q0 50-35 85t-85 35v40q0 17-11.5 28.5T760-120q-17 0-28.5-11.5T720-160v-40H240v40q0 17-11.5 28.5T200-120Zm-40-160h640q17 0 28.5-11.5T840-320v-200q0-17-11.5-28.5T800-560q-17 0-28.5 11.5T760-520v160H200v-160q0-17-11.5-28.5T160-560q-17 0-28.5 11.5T120-520v200q0 17 11.5 28.5T160-280Zm120-160h400v-80q0-27 11-49t29-39v-112q0-17-11.5-28.5T680-760H280q-17 0-28.5 11.5T240-720v112q18 17 29 39t11 49v80Zm200 0Zm0 160Zm0-80Z"/></svg>
                                                </div>
                                                <span>Seats</span>
                                            </Link>
                                        </li>

                                        <li className={`${(currentLocation == '/seat-bind-list') ? "active" : ""}`}>
                                            <Link href={'/seat-bind-list'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M480-280q-73 0-127.5-45.5T284-440H80v-80h204q14-69 68.5-114.5T480-680q73 0 127.5 45.5T676-520h204v80H676q-14 69-68.5 114.5T480-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
                                                </div>
                                                <span>Bind List</span>
                                            </Link>
                                        </li>
                        
                                        <li className={`${(currentLocation == '/inventory-requisition/list') ? "active" : ""}`}>
                                            <Link href={'/inventory-requisition/list'} className='nested-link gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M440-200h80v-40h40q17 0 28.5-11.5T600-280v-120q0-17-11.5-28.5T560-440H440v-40h160v-80h-80v-40h-80v40h-40q-17 0-28.5 11.5T360-520v120q0 17 11.5 28.5T400-360h120v40H360v80h80v40ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-560v-160H240v640h480v-480H520ZM240-800v160-160 640-640Z"/></svg>
                                                </div>
                                                <span>Requisition</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li>
                        :
                        null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user?.department == "6" || state.user?.department == "43") ?
                        <li className='d-flex align-items-center justify-content-between mb-2'>
                            <Accordion.Item eventKey="121" className='shadow-none border-0 p-0 w-100 '>
                                <Accordion.Header>
                                    <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                        <div className="nav-icon" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
                                        </div>
                                        <span>Assets Management</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='bg-white'>
                                    <ul>
                                        <li className={`${(currentLocation == '/stock/inv-type-list') ? "active" : ""}`}>
                                            <Link href={'/stock/inv-type-list'} className='nested-link gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap mb-2'>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M120-120v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Z"/></svg>
                                                </div>
                                                <span>Categories & Types</span>
                                            </Link>
                                        </li>

                                        <li className={`${(currentLocation == '/stock/list') ? "active" : ""}`}>
                                            <Link href={'/stock/list'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm0-520v440h560v-440H200Zm-40-80h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z"/></svg>
                                                </div>
                                                <span>Stock Overview</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li>
                        :
                        null
                    }

                    {((state.user.user_role != "1" && state.user.user_role != "2" && state.user.user_role != "3" && state.user?.department != "6") && (state.user?.department == "14" || state.user?.department == "7"))?
                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/inventory-requisition/list') ? "active" : ""}`}>
                            <Link href={'/inventory-requisition/list'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                                <div className="nav-icon" >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M440-200h80v-40h40q17 0 28.5-11.5T600-280v-120q0-17-11.5-28.5T560-440H440v-40h160v-80h-80v-40h-80v40h-40q-17 0-28.5 11.5T360-520v120q0 17 11.5 28.5T400-360h120v40H360v80h80v40ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-560v-160H240v640h480v-480H520ZM240-800v160-160 640-640Z"/></svg>
                                </div>
                                <span>Inventory Requisition</span>
                            </Link>
                        </li>
                        :
                        null
                    }

                    {(state.user?.department == "6" || state.user?.department == "14") ? 

                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/user/pending-joining') ? "active" : ""}`}>
                            <Link href={'/user/pending-joining'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M160-200v-440 440-15 15Zm0 80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v171q-18-13-38-22.5T800-508v-132H160v440h283q3 21 9 41t15 39H160Zm240-600h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm20-208v-112h-40v128l86 86 28-28-74-74Z"/></svg>
                                </div>
                                <span className="text-nowrap">Pending Employee</span>
                            </Link>
                        </li>
                        :
                        null
                    }

                    {(state.user?.department == "6") ? 

                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/discrepancies/time-out') ? "active" : ""}`}>
                            <Link href={'/discrepancies/time-out'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm67-105 28-28-75-75v-112h-40v128l87 87Zm-547 65q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v250q-18-13-38-22t-42-16v-212h-80v120H280v-120h-80v560h212q7 22 16 42t22 38H200Zm280-640q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
                                </div>
                                <span className="text-nowrap">Time Out Discrepancies</span>
                            </Link>
                        </li>
                        :
                        null
                    }

                    {(state.user?.department == 13 || state.user?.department == 14 || state.user?.user_role == 1 || state.user?.user_role == 2 || state.user?.user_role == 3) ? 

                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/user/cnic-list') ? "active" : ""}`}>
                            <Link href={'/user/cnic-list'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-640h400v-40H280v40Zm200 480q-54 0-105 15.5T280-260v20h400v-20q-44-29-95-44.5T480-320Zm0-80q54 0 104.5 12.5T680-352v-368H280v368q45-23 95.5-35.5T480-400Zm0-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-80q-17 0-28.5-11.5T440-560q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560q0 17-11.5 28.5T480-520Zm0 280h200-400 200Zm0-320Zm0-240Zm0 640Z"/></svg>
                                </div>
                                <span className="text-nowrap">User CNIC</span>
                            </Link>
                        </li>
                        :
                        null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user.department == 43 || state?.user?.is_car_assigned == 1 || ((state.user.employee_role == "5" || state.user.employee_role == "6") && state.user?.department == "7")) ?

                        <li className='d-flex align-items-center justify-content-between mb-2'>
                            <Accordion.Item eventKey="1" className='shadow-none border-0 p-0 w-100 '>
                                <Accordion.Header>
                                    <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                        <div className="nav-icon" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm-460 40h560v-200H200v200Z"/></svg>
                                        </div>
                                        <span>Fleet</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='bg-white'>
                                    <ul>
                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user.department == 43 || ((state.user.employee_role == "5" || state.user.employee_role == "6") && state.user?.department == "7")) ? 
                                            <>
                                                <li className={`${(currentLocation == '/fleet/all-vendors') ? "active" : ""}`}>
                                                    <Link href={'/fleet/all-vendors'} className='nested-link gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap mb-2'>
                                                        <div className="nav-icon" >
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M647.74-144Q618-144 597-165.18q-21-21.17-21-50.91v-144.17Q576-390 597.18-411q21.17-21 50.91-21h144.17Q822-432 843-410.82q21 21.17 21 50.91v144.17Q864-186 842.82-165q-21.17 21-50.91 21H647.74Zm.26-72h144v-144H648v144ZM96-252v-72h384v72H96Zm551.74-276Q618-528 597-549.18q-21-21.17-21-50.91v-144.17Q576-774 597.18-795q21.17-21 50.91-21h144.17Q822-816 843-794.82q21 21.17 21 50.91v144.17Q864-570 842.82-549q-21.17 21-50.91 21H647.74Zm.26-72h144v-144H648v144ZM96-636v-72h384v72H96Zm624 348Zm0-384Z"/></svg>
                                                        </div>
                                                        <span>Car Vendors List</span>
                                                    </Link>
                                                </li>

                                                <li className={`${(currentLocation == '/fleet/all-cars') ? "active" : ""}`}>
                                                    <Link href={'/fleet/all-cars'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                        <div className="nav-icon" >
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M80-80q-17 0-28.5-11.5T40-120v-320l85-203q7-17 22-27t33-10h360q18 0 33 10t22 27l85 203v320q0 17-11.5 28.5T640-80h-40q-17 0-28.5-11.5T560-120v-40H160v40q0 17-11.5 28.5T120-80H80Zm72-440h415l-33-80H186l-34 80Zm-32 280h480v-200H120v200Zm100-40q25 0 42.5-17.5T280-340q0-25-17.5-42.5T220-400q-25 0-42.5 17.5T160-340q0 25 17.5 42.5T220-280Zm280 0q25 0 42.5-17.5T560-340q0-25-17.5-42.5T500-400q-25 0-42.5 17.5T440-340q0 25 17.5 42.5T500-280Zm220 80v-344l-73-176H227l18-43q7-17 22-27t33-10h360q18 0 33 10t22 27l85 203v320q0 17-11.5 28.5T760-200h-40Zm120-120v-344l-73-176H347l18-43q7-17 22-27t33-10h360q18 0 33 10t22 27l85 203v320q0 17-11.5 28.5T880-320h-40Zm-480-20Z"/></svg>
                                                        </div>
                                                        <span>Car list</span>
                                                    </Link>
                                                </li>

                                                <li className={`${(currentLocation == '/fleet/van-vendors') ? "active" : ""}`}>
                                                    <Link href={'/fleet/van-vendors'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                        <div className="nav-icon" >
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M156-144q-45 0-76.5-31.48T48-251.92Q48-287 68-315t52-39v-252q-32-11-52-38.92t-20-63.05Q48-753 79.5-784.5T156-816q45 0 76.5 31.48t31.5 76.44Q264-673 244-645t-52 39v90h228v-90q-32-11-52-38.92t-20-63.05q0-45.03 31.5-76.53T456-816q45 0 76.5 31.48t31.5 76.44Q564-673 544-645t-52 39v90h192q15.3 0 25.65-10.35Q720-536.7 720-552v-54q-32-11-52-38.92t-20-63.05q0-45.03 31.5-76.53T756-816q45 0 76.5 31.48t31.5 76.44Q864-673 844-645t-52 39v54q0 45-31.5 76.5T684-444H492v90q32 11 52 38.92t20 63.05q0 45.03-31.5 76.53T456-144q-45 0-76.5-31.48T348-251.92Q348-287 368-315t52-39v-90H192v90q32 11 52 38.92t20 63.05q0 45.03-31.5 76.53T156-144Zm-.21-72q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm0-456q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm300 456q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm0-456q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm300 0q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM156-252Zm0-456Zm300 456Zm0-456Zm300 0Z"/></svg>
                                                        </div>
                                                        <span>Van Vendors List</span>
                                                    </Link>
                                                </li>

                                                <li className={`${(currentLocation == '/fleet/all-vans') ? "active" : ""}`}>
                                                    <Link href={'/fleet/all-vans'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                        <div className="nav-icon" >
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M264-192q-50 0-85-35t-35-85H48v-360q0-29.7 21.15-50.85Q90.3-744 120-744h552l240 240v192h-96q0 50-35 85t-85 35q-50 0-85-35t-35-85H384q0 50-35 85t-85 35Zm288-360h210L642-672h-90v120Zm-216 0h144v-120H336v120Zm-216 0h144v-120H120v120Zm143.89 288Q284-264 298-277.89q14-13.88 14-34Q312-332 298.11-346q-13.88-14-34-14Q244-360 230-346.11q-14 13.88-14 34Q216-292 229.89-278q13.88 14 34 14Zm432 0Q716-264 730-277.89q14-13.88 14-34Q744-332 730.11-346q-13.88-14-34-14Q676-360 662-346.11q-14 13.88-14 34Q648-292 661.89-278q13.88 14 34 14ZM120-384h48q18-23 42.5-35.5T264-432q29 0 54 12.5t42 35.5h240q17-23 42-35.5t54-12.5q29 0 53.5 12.5T792-384h48v-96H120v96Zm720-96H120h720Z"/></svg>
                                                        </div>
                                                        <span>Van list</span>
                                                    </Link>
                                                </li>
                                            </>
                                            :null
                                        }
                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user?.department == "7")?
                                            <li  className={`${(currentLocation == '/fleet/user-directory') ? "active" : ""}`}>
                                                <Link href={'/fleet/user-directory'} className='nested-link gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap mb-2'>
                                                    <div className="nav-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
                                                    </div>
                                                    <span className="text-nowrap">User List</span>
                                                </Link>
                                            </li>
                                            :
                                            null
                                        }

                                        {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user?.department == "7")?
                                            <li  className={`${(currentLocation == '/fleet/invoice-list') ? "active" : ""}`}>
                                                <Link href={'/fleet/invoice-list'} className='nested-link gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap mb-2'>
                                                    <div className="nav-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/></svg>
                                                    </div>
                                                    <span className="text-nowrap">Invoice List</span>
                                                </Link>
                                            </li>
                                            :
                                            null
                                        }

                                        {(state?.user?.is_car_assigned == 1) ? 
                                            <li className={`${(currentLocation == '/fleet/my-car') ? "active" : ""}`}>
                                                <Link href={'/fleet/my-car'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M336-624q-50 0-85-35t-35-85q0-50 35-85t85-35q40 0 71.5 23t42.5 61h270v72h-48v84h-72v-84H450q-11 38-42.5 61T336-624Zm0-72q20.4 0 34.2-13.8Q384-723.6 384-744q0-20.4-13.8-34.2Q356.4-792 336-792q-20.4 0-34.2 13.8Q288-764.4 288-744q0 20.4 13.8 34.2Q315.6-696 336-696Zm35.79 468q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm216 0q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM240-336l60-161q6-14 18.12-22.5Q330.24-528 345-528h271q14.76 0 26.88 9T661-496l59 160v216q0 10.5-6.75 17.25T696-96h-24q-10.5 0-17.25-6.75T648-120v-24H312v24q5 8-3 15.5T288-96h-24q-10 1-17-6.03T240-120v-216Zm95-48h291l-26-72H362l-27 72Zm-23 72v96-96Zm0 96h336v-96H312v96Z"/></svg>
                                                    </div>
                                                    <span>My Car</span>
                                                </Link>
                                            </li>:null
                                        }

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li>
                        :
                        null
                    }

                    {((state?.user?.department == 14 && state.user.user_role != "1" && state.user.user_role != "2" && state.user.user_role != "3")) ?
                        <li className='d-flex align-items-center justify-content-between mb-2'>
                            <Accordion.Item eventKey="14" className='shadow-none border-0 p-0 w-100 '>
                                <Accordion.Header>
                                    <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                        <div className="nav-icon" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm179-80h442L480-830 259-720ZM80-120v-80h482q2 21 5 40.5t9 39.5H80Zm600-310v-130h80v90l-80 40ZM800 0q-69-17-114.5-79.5T640-218v-102l160-80 160 80v102q0 76-45.5 138.5T800 0Zm-29-120 139-138-42-42-97 95-39-39-42 43 81 81ZM259-720h442-442Z"/></svg>
                                        </div>
                                        <span>Bank Data</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='bg-white'>
                                    <ul>
                                        <li className={`${(currentLocation == '/bank-accounts') ? "active" : ""}`}>
                                            <Link href={'/bank-accounts'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg>
                                                </div>
                                                <span>Bank Account</span>
                                            </Link>
                                        </li>

                                        <li className={`${(currentLocation == '/bank-details') ? "active" : ""}`}>
                                            <Link href={'/bank-details'} className='nested-link gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm179-80h442L480-830 259-720ZM80-120v-80h482q2 21 5 40.5t9 39.5H80Zm600-310v-130h80v90l-80 40ZM800 0q-69-17-114.5-79.5T640-218v-102l160-80 160 80v102q0 76-45.5 138.5T800 0Zm-29-120 139-138-42-42-97 95-39-39-42 43 81 81ZM259-720h442-442Z"/></svg>
                                                </div>
                                                <span>Bank Details</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li>
                        :
                        null
                    }

                    </Accordion>

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user?.department == 13) ? 
                        <li className='d-flex align-items-center justify-content-between mb-2 bg-white'>
                            <h6 className='fs-12 lh-normal fw-4 fg-99'>RECRUITMENT</h6>
                        </li>

                        : null
                    }

                    {/* {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ?
                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/jobs') ? "active" : ""}`}>
                            <Link href={'/jobs'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/></svg>
                                </div>
                                <span className="text-nowrap">Jobs</span>
                            </Link>
                        </li> 

                        : null
                    }

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ?
                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/all-candiate') ? "active" : ""}`}>
                            <Link href={'/all-candiate'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/></svg>
                                </div>
                                <span className="text-nowrap">Candidates</span>
                            </Link>
                        </li>
                        : null
                    } */}

                    {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state?.user?.employee_role == "6" || state.user?.department == 13) ?
                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/jobs/requisition') ? "active" : ""}`}>
                            <Link href={'/jobs/requisition'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex theam-hover align-items-center text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/></svg>
                                </div>
                                <span className="text-nowrap">Job Requisition</span>
                            </Link>
                        </li>
                        : null
                    }

                    {/* {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3") ?
                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/jobs/template') ? "active" : ""}`}>
                            <Link href={'/jobs/template'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex theam-hover align-items-center text-nowrap'>
                                <div className="nav-icon">
                                    <span>add_business</span>
                                </div>
                                <span className="text-nowrap">Job Add</span>
                            </Link>
                        </li>
                        : null
                    } */}

                    {((state.user.employee_role == "6" || state.user.employee_role == "5") && state.user.user_role != "1" && state.user.user_role != "2" && state.user.user_role != "3") ? 
                        <li className='d-flex align-items-center justify-content-between mb-2 bg-white'>
                            <h6 className='fs-12 lh-normal fw-4 fg-99'>RESOURCES</h6>
                        </li>
                        : null
                    }

                    {((state.user.employee_role == "6" || state.user.employee_role == "5") && state.user.user_role != "1" && state.user.user_role != "2" && state.user.user_role != "3") ?
                        <li className={`d-flex align-items-center justify-content-between mb-2 ${(currentLocation == '/user/probation') ? "active" : ""}`}>
                            <Link href={'/user/probation'} className='navLink fs-16 lh-1 fw-5 fg-66 d-flex theam-hover align-items-center text-nowrap'>
                                <div className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M440-560q33 0 56.5-23.5T520-640q0-33-23.5-56.5T440-720q-33 0-56.5 23.5T360-640q0 33 23.5 56.5T440-560Zm0 160q45 0 84.5-19t68.5-54q-35-23-73.5-35T440-520q-41 0-79.5 12T287-473q29 35 68.5 54t84.5 19Zm384 280L636-308q-41 32-90.5 50T440-240q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 56-18 105.5T692-364l188 188-56 56ZM440-320q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm0-240Z"></path></svg>
                                </div>
                                <span className="text-nowrap">Probation User</span>
                            </Link>
                        </li>
                        : null
                    }

                    <Accordion>

                    {((state.user.employee_role == "6" || state.user.employee_role == "5") && state.user.user_role != "1" && state.user.user_role != "2" && state.user.user_role != "3") ?
                        <li className='d-flex align-items-center justify-content-between mb-2'>
                            <Accordion.Item eventKey="0" className='shadow-none border-0 p-0 w-100 '>
                                <Accordion.Header>
                                    <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                        <div className="nav-icon" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"></path></svg>
                                        </div>
                                        <span>Forms</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='bg-white'>
                                    <ul>
                                        <li className={`${(currentLocation == '/forms') ? "active" : ""}`}>
                                            <Link href={'/forms'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M500-520h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm-80 160h240v-80H420v80ZM320-200q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h280l240 240v400q0 33-23.5 56.5T760-200H320Zm0-80h440v-360L560-840H320v560ZM160-40q-33 0-56.5-23.5T80-120v-560h80v560h440v80H160Zm160-240v-560 560Z"/></svg>
                                                </div>
                                                <span>Team Submissions</span>
                                            </Link>
                                        </li>

                                        {(state.user.department == 7)?
                                            <li className={`${(currentLocation == '/forms/resourses-form') ? "active" : ""}`}>
                                                <Link href={'/forms/resourses-form'} className='nested-link gap-3 fs-15 mb-2 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
                                                    </div>
                                                    <span>Add Resources Forms</span>
                                                </Link>
                                            </li>
                                            :
                                            null
                                        }

                                        {(state.user.department == 7)?
                                            <li className={`${(currentLocation == '/attendance/support-attendace') ? "active" : ""}`}>
                                                <Link href={'/attendance/support-attendace'} className='nested-link gap-3 fs-15 mb-2 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm67-105 28-28-75-75v-112h-40v128l87 87Zm-547 65q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v250q-18-13-38-22t-42-16v-212h-80v120H280v-120h-80v560h212q7 22 16 42t22 38H200Zm280-640q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
                                                    </div>
                                                    <span>Resources Attendance</span>
                                                </Link>
                                            </li>
                                            :
                                            null
                                        }

                                        <li className={`${(currentLocation == '/forms/resignation-list') ? "active" : ""}`}>
                                            <Link href={'/forms/resignation-list'} className='nested-link gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="m864-216-72-72v-312H480l-72-72v-72h-72l-72-72h216v144h384v456ZM803-74l-71-70H96v-637l-40-40 51-51 746 747-50 51ZM168-216h72v-72h-72v72Zm0-153h72v-72h-72v72Zm0-151h72v-72h-72v72Zm168 304h72v-72h-72v72Zm0-153h72v-72h-72v72Zm144 153h180l-80-81H480v81Zm240-232h-72v-72h72v72Z"></path></svg>
                                                </div>
                                                <span>Resignations</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li>
                        : null
                    }

                    {((state.user.employee_role == "6" || state.user.employee_role == "5") && state.user.user_role != "1" && state.user.user_role != "2" && state.user.user_role != "3") ? 
                        <li className='d-flex align-items-center justify-content-between mb-2'>
                            <Accordion.Item eventKey="1" className='shadow-none border-0 p-0 w-100 '>
                                <Accordion.Header>
                                    <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                        <div className="nav-icon" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M521-878q143 14 243.5 114.5T879-520H593q-9-26-27.5-45.5T521-594v-284Zm80 102v136q11 9 21 19t19 21h136q-24-60-70-106t-106-70ZM441-878v284q-36 13-58 44.5T361-480q0 38 22 68.5t58 43.5v286Q287-97 184-211T81-480q0-155 103-269t257-129Zm-80 102q-91 35-145.5 116T161-480q0 99 54.5 180T361-182v-138q-38-29-59-70.5T281-480q0-48 21-89.5t59-70.5v-136Zm232 336h286q-14 143-114.5 243.5T521-82v-286q26-9 44.5-27.5T593-440Zm48 80q-8 11-18.5 21T601-320v136q60-24 106-70t70-106H641ZM281-479Zm360-121Zm0 240Z"></path></svg>
                                        </div>
                                        <span>Report</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='bg-white'>
                                    <ul>
                                        <li className={`${(currentLocation == '/reports/attendance') ? "active" : ""}`}>
                                            <Link href={'/reports/attendance'} className='nested-link mb-2 gap-3 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                                                </div>
                                                <span>Attendance</span>
                                            </Link>
                                        </li>

                                        <li className={`${(currentLocation == '/reports/daily') ? "active" : ""}`}>
                                            <Link href={'/reports/daily'} className='nested-link fs-15 gap-3 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M440-120q-75 0-140.5-28T185-225q-49-49-77-114.5T80-480q0-75 28-140.5T185-735q49-49 114.5-77T440-840q21 0 40.5 2.5T520-830v82q-20-6-39.5-9t-40.5-3q-118 0-199 81t-81 199q0 118 81 199t199 81q118 0 199-81t81-199q0-11-1-20t-3-20h82q2 11 2 20v20q0 75-28 140.5T695-225q-49 49-114.5 77T440-120Zm112-192L400-464v-216h80v184l128 128-56 56Zm168-288v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"></path></svg>
                                                </div>
                                                <span>Daily</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li>
                        :null
                    }

                    {((state.user.employee_role == "6" || state.user.employee_role == "5") && state.user.user_role != "1" && state.user.user_role != "2" && state.user.user_role != "3") ?  
                        <li className='d-flex align-items-center justify-content-between mb-2'>
                            <Accordion.Item eventKey="2" className='shadow-none border-0 p-0 w-100 '>
                                <Accordion.Header>
                                    <div className='navLink fs-16 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                        <div className="nav-icon" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M660-160h40v-160h-40v160Zm20-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-800v640-640 200-200Zm80 400h147q11-23 25.5-43t32.5-37H280v80Zm0 160h123q-3-20-3-40t3-40H280v80ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h320l240 240v92q-19-6-39-9t-41-3v-40H480v-200H200v640h227q11 23 25.5 43T485-80H200Zm480-400q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480Z"></path></svg>
                                        </div>
                                        <span>Discrepancies</span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className='bg-white'>
                                    <ul>

                                        {(state.user?.department == 7) ?
                                            <li className={`${(currentLocation == '/discrepancies/all') ? "active" : ""}`}>
                                                <Link href={'/discrepancies/all'} className='nested-link gap-2 mb-2 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                    <div className="nav-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/></svg>
                                                    </div>
                                                    <span>All</span>
                                                </Link>
                                            </li>
                                            :
                                            null
                                        }


                                        <li className={`${(currentLocation == '/discrepancies/filled') ? "active" : ""}`}>
                                            <Link href={'/discrepancies/filled'} className='nested-link mb-2 gap-2 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm0-80h640v-560H160v560Zm40-80h200v-80H200v80Zm382-80 198-198-57-57-141 142-57-57-56 57 113 113Zm-382-80h200v-80H200v80Zm0-160h200v-80H200v80Zm-40 400v-560 560Z"></path></svg>
                                                </div>
                                                <span>Filled</span>
                                            </Link>
                                        </li>

                                        {/* <li className={`${(currentLocation == '/discrepancies/filled-leave') ? "active" : ""}`}>
                                            <Link href={'/discrepancies/filled-leave'} className='nested-link mb-2 gap-2 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm0-80h640v-560H160v560Zm40-80h200v-80H200v80Zm382-80 198-198-57-57-141 142-57-57-56 57 113 113Zm-382-80h200v-80H200v80Zm0-160h200v-80H200v80Zm-40 400v-560 560Z"></path></svg>
                                                </div>
                                                <span>Filled Leave</span>
                                            </Link>
                                        </li> */}

                                        <li className={`${(currentLocation == '/discrepancies/all-filled') ? "active" : ""}`}>
                                            <Link href={'/discrepancies/all-filled'} className='nested-link mb-2 gap-2 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm0-80h640v-560H160v560Zm40-80h200v-80H200v80Zm382-80 198-198-57-57-141 142-57-57-56 57 113 113Zm-382-80h200v-80H200v80Zm0-160h200v-80H200v80Zm-40 400v-560 560Z"></path></svg>
                                                </div>
                                                <span>Filled Leave</span>
                                            </Link>
                                        </li>

                                        {/* <li className={`${(currentLocation == '/discrepancies/all') ? "active" : ""}`}>
                                            <Link href={'/discrepancies/all'} className='nested-link gap-2 fs-15 lh-1 fw-5 fg-66 d-flex align-items-center theam-hover text-nowrap '>
                                                <div className="nav-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#666666"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"></path></svg>
                                                </div>
                                                <span>All</span>
                                            </Link>
                                        </li> */}

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </li> : null
                    }

                    </Accordion>

                </ul>

                <div onClick={() => {router.push('/setting')}} className="aside-setting bg-white">
                    <div className=' d-flex theam-hover align-items-center text-nowrap'>
                        <div className="nav-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>
                        </div>
                        <span className='fs-16 lh-1 fw-5 fg-66'>Settings</span>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Aside