import Aside from '@/components/layout/aside';
import Header from '@/components/layout/header';
import Timer from '@/components/layout/timer';
import '@/styles/style.css';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

export default function App({ Component, pageProps }) {
  const [currentLocation , setCurrentLocation] = useState("");
  return <Component {...pageProps} />;
  // return(
  //   <>
  //     {(currentLocation?.slice(-6) == "/login" || currentLocation?.slice(-6) == "login/" || currentLocation?.slice(0 , 16) == "/payroll/details" || currentLocation?.slice(0 , 21) == "/hrms/payroll/details")?
  //       <Component {...pageProps} />:

  //       <Container fluid className="p-0">
  //       {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/dragula/3.6.6/dragula.js"></script>
  //       <NextTopLoader color="#8CB846" height={3} /> */}
  //       <Header />
  //       <div className="mainPage position-relative bg-white">
  //         <Aside />

  //         <div 
  //           // className={(currentLocation != "" && currentLocation?.slice(-11) != "/dashboard2" && currentLocation?.slice(-11) != "dashboard2/" && currentLocation?.slice(-18) != "hr-dashboard-full/" && currentLocation?.slice(-18) != "/hr-dashboard-full") ? 'mainBody' : (currentLocation?.slice(-18) != "hr-dashboard-full/" && currentLocation?.slice(-18) != "/hr-dashboard-full") ? 'mainBody dashboardCopy' : 'mainBody hrDashboardCopy'}
  //           className='mainBody dashboardCopy'
  //         >
  //           <Component {...pageProps} />
  //         </div>
  //         {/* {(currentLocation != "" && currentLocation?.slice(-11) != "/dashboard2" && currentLocation?.slice(-11) != "dashboard2/")? */}
  //           {/* <Timer /> */}
  //         {/* } */}
  //       </div>
  //     </Container>
  //     }
  //   </>
  // )
}
