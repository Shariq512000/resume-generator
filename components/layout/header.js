import Link from "next/link"
import { Card, Dropdown } from "react-bootstrap"
import { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
// import { GlobalContext } from '../context/Context';
import { useRouter } from "next/router";
import moment from "moment";
// import axios from "axios";
import { Avatar, Badge } from "@mui/material";
import { basePath } from "@/next.config";
import Head from "next/head";
// import parse from 'html-react-parser';

const Header = () => {

  // let { state, dispatch, reloadSetTime } = useContext(GlobalContext);
  const router = useRouter();

  const [openPopup , setOpenPopup] = useState(false);
  const [notificationLoad , setNotificationLoad] = useState(false);

  // const auth = () => {

  //   let token = localStorage.getItem("token")

  //   if (token) {

  //   } else {
  //     router.replace("/login");
  //   }
  // }

  // auth()

  //// CHECK IP ////


  const [userNotifications , setUserNotifications] = useState([]);
  const [pageLoad , setPageLoad] = useState(false);
  const [users , setUsers] = useState([]);
  const [lastNotice , setLastNotice] = useState({});
  const [searchText , setSearchText] = useState("");
  const [isLayout , setIsLayout] = useState(false);
  const [isChangingMode , setIsChangingMode] = useState(false);
  const [currentLocation , setCurrentLocation] = useState("")

  // useEffect(() => {
  //   setTimeout(() => {
  //     location.reload();
  //   } , state?.reloadTime)
  // } , [state?.reloadTime])

  // const timeoutRef = useRef(null);

  // useEffect(() => {

  //   console.log("state?.reloadTime" , state?.reloadTime)
  //   // Clear any existing timeout before setting a new one
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }

  //   if (state?.reloadTime) {
  //     timeoutRef.current = setTimeout(() => {
  //       console.log("location.reload()");
  //       dispatch({type: "CANCEL_RELOAD_TIME"});
  //       location.reload();
  //     }, state.reloadTime);
  //   }

  //   // Cleanup function to clear timeout when component unmounts
  //   return () => {
  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current);
  //     }
  //   };
  // }, [state?.reloadTime, state?.reloadToggle]);

  return (
    <>
      <Head>
        <link rel="prefetch" href="../font/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2" as="font" type="font/woff2" crossorigin></link>
      </Head>
      <header className={`border-bottom border-DD bg-white position-sticky top-0 w-100 transition4 ${(currentLocation != "/hr-dashboard-full" && currentLocation != "hr-dashboard-full/") ? "headerMargin" : ""}`} onClick={() => {isLayout ? setIsLayout(false) : null }}>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/dragula/3.6.6/dragula.js"></script> */}
        <div className="top-header w-100 h-100 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            {(currentLocation == "/hr-dashboard-full" || currentLocation == "hr-dashboard-full/") ?
              null :
              <div className="menu-Bar me-3 position-relative" style={{display: "none"}}>
                <span className="transition4 rounded-2 d-flex align-items-center justify-content-center fg-66"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#666666"><path d="M498.08-623.46v286.92L641.92-480 498.08-623.46ZM212.31-140q-29.92 0-51.12-21.19Q140-182.39 140-212.31v-535.38q0-29.92 21.19-51.12Q182.39-820 212.31-820h535.38q29.92 0 51.12 21.19Q820-777.61 820-747.69v535.38q0 29.92-21.19 51.12Q777.61-140 747.69-140H212.31ZM320-200v-560H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85H320Zm60 0h367.69q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H380v560Zm-60 0H200h120Z"/></svg></span>
                <span className="transition4 rounded-2 d-flex align-items-center justify-content-center fg-66 position-absolute top-0 bottom-0 start-0 end-0"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#666666"><path d="M140-254.62v-59.99h680v59.99H140ZM140-450v-60h680v60H140Zm0-195.39v-59.99h680v59.99H140Z"/></svg></span>
              </div>
            }
            <div className="search-header">
              {/* <form> */}
                {/* {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user?.department == "14" || state.user?.department == "6" || state.user?.department == 13) ?
                  <button className="border-0 bg-transparent position-absolute top-0 bottom-0 start-0 fg-99 transition4">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666666"><path d="M781.69-136.92 530.46-388.16q-30 24.77-69 38.77-39 14-80.69 14-102.55 0-173.58-71.01-71.03-71.01-71.03-173.54 0-102.52 71.01-173.6 71.01-71.07 173.54-71.07 102.52 0 173.6 71.03 71.07 71.03 71.07 173.58 0 42.85-14.38 81.85-14.39 39-38.39 67.84l251.23 251.23-42.15 42.16ZM380.77-395.38q77.31 0 130.96-53.66 53.66-53.65 53.66-130.96t-53.66-130.96q-53.65-53.66-130.96-53.66t-130.96 53.66Q196.15-657.31 196.15-580t53.66 130.96q53.65 53.66 130.96 53.66Z"/></svg></span>
                  </button>
                  :
                  null
                } */}
                <button className="border-0 bg-transparent position-absolute top-0 bottom-0 start-0 fg-99 transition4">
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666666"><path d="M781.69-136.92 530.46-388.16q-30 24.77-69 38.77-39 14-80.69 14-102.55 0-173.58-71.01-71.03-71.01-71.03-173.54 0-102.52 71.01-173.6 71.01-71.07 173.54-71.07 102.52 0 173.6 71.03 71.07 71.03 71.07 173.58 0 42.85-14.38 81.85-14.39 39-38.39 67.84l251.23 251.23-42.15 42.16ZM380.77-395.38q77.31 0 130.96-53.66 53.66-53.65 53.66-130.96t-53.66-130.96q-53.65-53.66-130.96-53.66t-130.96 53.66Q196.15-657.31 196.15-580t53.66 130.96q53.65 53.66 130.96 53.66Z"/></svg></span>
                </button>
                {/* <input type="text" onClick={() => {router.push(`/user/search-user/${""}`)}} onKeyUp={(e) => { router.push(`/user/search-user/${e.target.value}`)}} name="gsearch" placeholder="Search" className="w-100 fs-14 lh-normal fg-33 fw-6 bg-F2 border border-EE rounded-1"/> */}
                <div className="userSearchBar">
                  {/* {(state.user.user_role == "1" || state.user.user_role == "2" || state.user.user_role == "3" || state.user?.department == "14" || state.user?.department == "6" || state.user?.department == 13 ) ?
                    <input type="text" name="gsearch" id="userSearch" placeholder="Search" onChange={(e) => {setSearchText(e?.target?.value)}} className="w-100 fs-14 lh-normal fg-33 fw-6 bg-F2 border border-EE rounded-1"/>
                    :
                    null
                  } */}
                  <input type="text" name="gsearch" id="userSearch" placeholder="Search" onChange={(e) => {setSearchText(e?.target?.value)}} className="w-100 fs-14 lh-normal fg-33 fw-6 bg-F2 border border-EE rounded-1"/>
                  {(users?.length) ?
                    <>
                      <div className="bg-white d-flex flex-column gap-2 userDropdown">
                        {users?.map((eachUser , i) => {
                          return(
                            <div key={i} className="userDirectory-card mb-0">
                              <Card className='rounded-2 py-2 px-2'>
                                <Card.Header className='bg-white border-0'>
                                    <div className="d-flex align-items-center gap-3">
                                      <div className="flex-shrink-0" role="button" onClick={() => {
                                        document.getElementById("userSearch").value = ""
                                        setUsers([])
                                        router.push(`/user/user-detail?id=${eachUser?.user_id}`)}
                                      }>
                                        <Avatar src={eachUser?.user_profile_picture} sx={{ width: 75, height: 75 }} className="avatarImgs">{eachUser?.user_name?.slice(0,1)}</Avatar>
                                      </div>

                                      <div className="">
                                        <h6 className='fg-green fs-16 fw-7 lh-normal pb-1' role="button" onClick={() => {
                                          document.getElementById("userSearch").value = ""
                                          setUsers([])
                                          router.push(`/user/user-detail?id=${eachUser?.user_id}`)}
                                        }>{eachUser?.user_name}</h6>
                                        <h5 className='fg-22 fs-14 fw-6 lh-normal pb-1'>{eachUser?.user_designation} - {eachUser?.user_department_name}</h5>
                                        <h4 className='fg-88 fs-14 fw-4 lh-normal'>{eachUser?.user_email}</h4>
                                      </div>
                                    </div>
                                </Card.Header>
                              </Card>
                            </div>
                          )
                        })}
                      </div>
                      <div className="searchModalLayout" onClick={() => {setUsers([])}}>

                      </div>
                    </>
                    :null
                  }
                </div>
            </div>
          </div>
          
          <div className="d-flex align-items-center">

            {/* <button onClick={changeTheme}>Dark Mode</button> */}

            {/* <button className="popup-open" onClick={() => {setOpenPopup(true)}}><span>open_in_new</span></button> */}

            <div className="chat-header me-3">
              <Dropdown className={`${(currentLocation != "" && currentLocation?.slice(-11) != "/dashboard2" && currentLocation?.slice(-11) != "dashboard2/" && currentLocation?.slice(-18) != "hr-dashboard-full/" && currentLocation?.slice(-18) != "/hr-dashboard-full") ? "" : "dash"} notification`}>
                <div className="d-inline" onClick={() => {setIsLayout(!isLayout);}}>
                  <Dropdown.Toggle
                    className="p-0 border-0 bg-white h-100 px-2 d-flex align-items-center justify-content-center"
                    id="dropdown-basic"
                  >
                    <Badge badgeContent={userNotifications?.length} color="error">
                      <span comp="div" className="theam-hover fg-99 rounded-1 d-grid place-center"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#999999"><path d="M250-410h300v-60H250v60Zm0-120h460v-60H250v60Zm0-120h460v-60H250v60ZM100-118.46v-669.23Q100-818 121-839q21-21 51.31-21h615.38Q818-860 839-839q21 21 21 51.31v455.38Q860-302 839-281q-21 21-51.31 21H241.54L100-118.46ZM216-320h571.69q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-455.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v523.08L216-320Zm-56 0v-480 480Z"/></svg></span>
                    </Badge>
                  </Dropdown.Toggle>
                </div>

                <Dropdown.Menu>

                  {(!userNotifications?.length) ?
                    <Dropdown.Item className="d-flex align-items-center column-gap-2 customNotification customNotification2 card">
                      <div>
                        <p className="fg-66 fs-14">No Unread Notification</p>
                        {/* <span className="text-end fg-99 fs-12">{moment(e?.created_at).format("DD-MM-YYYY")}</span> */}
                      </div>
                    </Dropdown.Item>:null
                  }

                  {(userNotifications?.length) ?
                    <Dropdown.Item href={''} onClick={(event) => {
                      event.preventDefault();
                      setIsLayout(!isLayout);
                      readAllNoti()
                    }} className="d-flex align-items-center justify-content-end my-1 py-2 column-gap-2">
                      <div className="text-end">
                        <p className="fg-66 fs-15 fw-6">Read All</p>
                        {/* <span className="text-end fg-99 fs-12">{moment(e?.created_at).format("DD-MM-YYYY")}</span> */}
                      </div>
                    </Dropdown.Item>:null
                  }

                  {userNotifications?.map((e, i) => {
                    return(
                      <Dropdown.Item key={i} href={e?.notificationlink} onClick={(event) => {
                        event.preventDefault();
                        setIsLayout(!isLayout);
                        readNoti(e?.id , e?.notificationlink)
                      }} className="d-flex align-items-center column-gap-2 customNotification bg-light-blue2 mb-2 card">
                        <div className="d-flex flex-column w-100">
                          <p className="fg-66 fs-14">{e?.notificationtext}</p>
                          <span className="text-end fg-white fw-6 fs-10">{moment(e?.created_at).format("DD-MMM")}</span>
                        </div>
                      </Dropdown.Item>
                    )
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="more-header">
              <Dropdown>
                <Dropdown.Toggle
                  className="p-0 border-0 bg-white h-100 px-2 d-flex align-items-center justify-content-center"
                  id="dropdown-basic"
                >
                  <span comp="div" className="theam-hover fg-99 rounded-1 d-grid place-center"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#999999"><path d="M203.84-386q-38.84 0-66.34-27.66t-27.5-66.5q0-38.84 27.66-66.34t66.5-27.5q38.84 0 66.34 27.66t27.5 66.5q0 38.84-27.66 66.34t-66.5 27.5Zm276 0q-38.84 0-66.34-27.66t-27.5-66.5q0-38.84 27.66-66.34t66.5-27.5q38.84 0 66.34 27.66t27.5 66.5q0 38.84-27.66 66.34t-66.5 27.5Zm276 0q-38.84 0-66.34-27.66t-27.5-66.5q0-38.84 27.66-66.34t66.5-27.5q38.84 0 66.34 27.66t27.5 66.5q0 38.84-27.66 66.34t-66.5 27.5Z"/></svg></span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link href={`/profile`} className="d-flex align-items-center column-gap-2 px-3 moreSetting py-1">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--color333)"><path d="M563.85-516.15h272.3v-192.31h-272.3v192.31ZM700-563.85l-99.23-69.23v-37.69L700-601.54l99.23-69.23v37.69L700-563.85ZM92.31-147.69q-30.31 0-51.31-21-21-21-21-51.31v-520q0-30.31 21-51.31 21-21 51.31-21h775.38q30.31 0 51.31 21 21 21 21 51.31v520q0 30.31-21 51.31-21 21-51.31 21H92.31Zm521.38-60h254q4.62 0 8.46-3.85Q880-215.39 880-220v-520q0-4.61-3.85-8.46-3.84-3.85-8.46-3.85H92.31q-4.62 0-8.46 3.85Q80-744.61 80-740v520q0 4.61 3.85 8.46 3.84 3.85 8.46 3.85h14q42-64.62 109.08-102.31 67.07-37.69 144.61-37.69 77.54 0 144.61 37.69 67.08 37.69 109.08 102.31ZM360-395.38q45.77 0 77.88-32.12Q470-459.61 470-505.38q0-45.77-32.12-77.89-32.11-32.11-77.88-32.11-45.77 0-77.88 32.11Q250-551.15 250-505.38t32.12 77.88q32.11 32.12 77.88 32.12ZM182-207.69h356q-34.38-38-80.69-59-46.31-21-97.31-21t-97 21q-46 21-81 59Zm178-247.69q-20.85 0-35.42-14.58Q310-484.54 310-505.38q0-20.85 14.58-35.43 14.57-14.57 35.42-14.57t35.42 14.57Q410-526.23 410-505.38q0 20.84-14.58 35.42-14.57 14.58-35.42 14.58ZM480-480Z"/></svg></span>
                    My Profile
                  </Link>
                  <Dropdown.Divider />
                  <Link href={`/setting`} className="d-flex align-items-center column-gap-2 px-3 moreSetting py-1">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="var(--color333)"><path d="m387.69-100-15.23-121.85q-16.07-5.38-32.96-15.07-16.88-9.7-30.19-20.77L196.46-210l-92.3-160 97.61-73.77q-1.38-8.92-1.96-17.92-.58-9-.58-17.93 0-8.53.58-17.34t1.96-19.27L104.16-590l92.3-159.23 112.46 47.31q14.47-11.46 30.89-20.96t32.27-15.27L387.69-860h184.62l15.23 122.23q18 6.54 32.57 15.27 14.58 8.73 29.43 20.58l114-47.31L855.84-590l-99.15 74.92q2.15 9.69 2.35 18.12.19 8.42.19 16.96 0 8.15-.39 16.58-.38 8.42-2.76 19.27L854.46-370l-92.31 160-112.61-48.08q-14.85 11.85-30.31 20.96-15.46 9.12-31.69 14.89L572.31-100H387.69ZM440-160h78.62L533-267.15q30.62-8 55.96-22.73 25.35-14.74 48.89-37.89L737.23-286l39.39-68-86.77-65.38q5-15.54 6.8-30.47 1.81-14.92 1.81-30.15 0-15.62-1.81-30.15-1.8-14.54-6.8-29.7L777.38-606 738-674l-100.54 42.38q-20.08-21.46-48.11-37.92-28.04-16.46-56.73-23.31L520-800h-79.38l-13.24 106.77q-30.61 7.23-56.53 22.15-25.93 14.93-49.47 38.46L222-674l-39.38 68L269-541.62q-5 14.24-7 29.62t-2 32.38q0 15.62 2 30.62 2 15 6.62 29.62l-86 65.38L222-286l99-42q22.77 23.38 48.69 38.31 25.93 14.92 57.31 22.92L440-160Zm40.46-200q49.92 0 84.96-35.04 35.04-35.04 35.04-84.96 0-49.92-35.04-84.96Q530.38-600 480.46-600q-50.54 0-85.27 35.04T360.46-480q0 49.92 34.73 84.96Q429.92-360 480.46-360ZM480-480Z"/></svg></span>Settings
                  </Link>
                  <Dropdown.Divider />
                  <Dropdown.Item href="" role="button" className="d-flex align-items-center column-gap-2 px-3 moreSetting py-1">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="var(--color333)"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h268.07v60H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h268.07v60H212.31Zm436.92-169.23-41.54-43.39L705.08-450H363.85v-60h341.23l-97.39-97.38 41.54-43.39L820-480 649.23-309.23Z"/></svg></span>Log out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {(currentLocation != "" && currentLocation?.slice(-11) != "/dashboard2" && currentLocation?.slice(-11) != "dashboard2/" && currentLocation?.slice(-18) != "hr-dashboard-full/" && currentLocation?.slice(-18) != "/hr-dashboard-full") ? 
              <div className={`clockingHeaderBtnBox transition4 `}>
                <div className="chbb_menu-Bar nonActive transition4">
                  <span className="d-flex align-items-center justify-content-center rounded-2 transition4 fg-66"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#666"><path d="M641.92-336.54v-286.92L498.08-480l143.84 143.46ZM212.31-140q-29.92 0-51.12-21.19Q140-182.39 140-212.31v-535.38q0-29.92 21.19-51.12Q182.39-820 212.31-820h535.38q29.92 0 51.12 21.19Q820-777.61 820-747.69v535.38q0 29.92-21.19 51.12Q777.61-140 747.69-140H212.31ZM320-200v-560H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85H320Zm60 0h367.69q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H380v560Zm-60 0H200h120Z"/></svg></span>
                </div>
              </div>
              :
              null
            }

          </div>
        </div>
      </header>
    </>
  )
}

export default Header