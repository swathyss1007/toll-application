import React from "react";
import Navbar from "./Components/Navbar";
import MainVehicle from "./Components/MainVehicle";
import MainToll from "./Components/MainToll";
import "./style.css";
import "./table.css";
import "./modal.css";

export default function App(){

    const [toggle,setToggle] = React.useState(false);

    const [vehicleArr,setVehicleArr] = React.useState([
        {
            id:1,
            vehicleType:"Car/Jeep/Van",
            vehicleNumber:"TN24AQ4644",
            date:"09/09/2022, 16:43:48",
            tollName:"Chengalpattu",
            tariff:"60"
        },
        {
            id:2,
            vehicleType:"Car/Jeep/Van",
            vehicleNumber:"TN19QQ1234",
            date:"09/09/2022, 15:30:34",
            tollName:"Kappalur",
            tariff:"75"
        },
        {
            id:3,
            vehicleType:"Heavy Vehicle",
            vehicleNumber:"TN24AA1234",
            date:"09/09/2022, 12:12:34",
            tollName:"Kappalur",
            tariff:"400"
        }
    ]);

    const [tollArr,setTollArr] = React.useState([
        {
            id:1,
            tollName:"Chengalpattu",
            cjvFare:"60/30" ,
            lcvFare:"95/50" ,
            tbFare: "205/100",
            hvFare:"320/160"
        },
        {
            id:2,
            tollName:"Kappalur",
            cjvFare:"75/50" ,
            lcvFare:"125/80" ,
            tbFare: "260/120",
            hvFare:"400/200"
        },
        {
            id:3,
            tollName:"Krishnagiri",
            cjvFare:"70/40" ,
            lcvFare:"110/65" ,
            tbFare: "235/130",
            hvFare:"365/200"
        }
    ]);

    // Temporary states for holding data while search filtering 
    const [tempVehicleArr,setTempVehicleArr] = React.useState(vehicleArr);
    const [tempTollArr,setTempTollArr] = React.useState(tollArr);
    

    return(
        <div>
            <Navbar />
            {!toggle && <MainVehicle
                setToggle={setToggle}
                vehicleArr={vehicleArr}
                setVehicleArr={setVehicleArr}
                tempVehicleArr={tempVehicleArr}
                setTempVehicleArr={setTempVehicleArr}
                tollArr={tollArr}
                setTollArr={setTollArr}
                setTempTollArr={setTempTollArr}
            />}
            {toggle && <MainToll
                setToggle={setToggle} 
                vehicleArr={vehicleArr}
                setVehicleArr={setVehicleArr}
                tollArr={tollArr}
                setTollArr={setTollArr} 
                tempTollArr={tempTollArr}
                setTempTollArr={setTempTollArr}
                setTempVehicleArr={setTempVehicleArr}  
            />}
        </div>
    );
}