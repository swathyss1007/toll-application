import React from 'react'
import {nanoid} from "nanoid";

export default function AddVehicle(props) {

  const [vehicleDetails,setVehicleDetails] = React.useState({
      tollName :"",
      vehicleType:"",
      vehicleNumber:"",
      tariff:""
  });


  function closeVehicle(){
    document.querySelector(".main").style.opacity = "1";
    document.querySelector(".nav").style.opacity = "1";
    document.querySelector(".my-table").style.opacity = "1";
    props.closeVehicleClick(false);
  }

  function handleChange(event){

    const {name,value} = event.target;

    setVehicleDetails(prevState => (
      {
        ...prevState,
        [name] : value
      }
    ));
  }
  
  // console.log(vehicleDetails);  

  function handleBlur() {
    
    if(vehicleDetails.tollName !== "" && vehicleDetails.vehicleType !== "" && vehicleDetails.vehicleNumber !== ""){
      let tariff = calculateTariff();
      setVehicleDetails(prevState => (
        {
          ...prevState,
          tariff : tariff
        }
      ))
    }

  }
 
  function calculateTariff() {
    let myVehicleType = vehicleDetails.vehicleType;
    let myVehicleNumber = vehicleDetails.vehicleNumber;
    let myTollName = vehicleDetails.tollName;
    let fare;

    for(let i = 0; i < props.tollArr.length; i++){
      if(props.tollArr[i].tollName === myTollName){
        if(myVehicleType === "Car/Jeep/Van"){
          fare = props.tollArr[i].cjvFare;
        }
        else if(myVehicleType === "LCV"){
          fare = props.tollArr[i].lcvFare;
        }
        else if(myVehicleType === "Truck/Bus"){
          fare = props.tollArr[i].tbFare;
        }
        else{
          fare = props.tollArr[i].hvFare;
        }
      }
    }

    let slashIndex = fare.indexOf("/");

    let singleFare = fare.slice(0, slashIndex);
    let returnFare = fare.slice(slashIndex+1);

    let myCount = 0; // starts from 0
    let oldDate = "";
    let oldToll = "";

    for(let i = 0; i < props.vehicleArr.length; i++){
      if(myVehicleNumber === props.vehicleArr[i].vehicleNumber && myTollName === props.vehicleArr[i].tollName){
        myCount = myCount + 1;
        oldDate = props.vehicleArr[i].date;
        oldToll = props.vehicleArr[i].tollName;
      }
    }

    // console.log(oldDate);

    if(myCount % 2 === 0){
      return singleFare;
    }
    else if(myCount % 2 !== 0){

      if(isLessThanOneHour(oldDate) && myTollName === oldToll){
        return returnFare;
      }

        return singleFare;
    }
    else{
      return 0;
    }

  }

  function isLessThanOneHour(dateString) {
    // console.log(dateString);
    if(dateString === "") return false;

    // 19/09/2022, 22:47:07 => YYYY-MM-DD hh:mm:ss

    let ISODateString = dateString.slice(6, 10) + "-" + dateString.slice(3, 5) + "-" + dateString.slice(0,2) + " " + dateString.slice(12);

    // console.log(ISODateString);

    const ISODate = new Date(ISODateString);

    // console.log(new Date());

    const milliseconds = Math.abs(new Date() - ISODate);
    const hours = milliseconds / 36e5;

    // console.log(hours);

    if((hours) <= 1.00){
      return true;
    }

    return false;

  }

  function handleSubmit(event){
    event.preventDefault();
    closeVehicle();

    const myObj = {
      id:nanoid(),
      vehicleType :vehicleDetails.vehicleType,
      vehicleNumber:vehicleDetails.vehicleNumber,
      date:dateTime(),
      tollName:vehicleDetails.tollName,
      tariff:vehicleDetails.tariff
    }

    props.setVehicleArr(prevArr => ([...prevArr,myObj]));
    props.setTempVehicleArr(prevArr => ([...prevArr,myObj]));
  }

  // Get date in YYYY-MM-DD hh:mm:ss format
  function dateTime(){

    const newDate = new Date();

    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    if(date < 10){
      date="0"+date;
    }

    if(month < 10){
      month="0"+month;
    }
     
    let today = date+"/"+month+"/"+year;
    
    let hour = newDate.getHours();
    let min = newDate.getMinutes();
    let sec = newDate.getSeconds();

    if(hour < 10){
      hour="0"+hour;
    }

    if(min < 10){
      min="0"+min;
    }

    if(sec < 10){
      sec="0"+sec;
    }


    let time = hour+":"+min+":"+sec;

    return today+", "+time;

  }

  const arr = props.tollArr.map(i => <option key={i.id} value={i.tollName}>{i.tollName}</option>);

  return (
    <div className='modal-BG'>
      <div className='add-modal-vehicle'>
          <span className='close-symbol' onClick={closeVehicle}>X</span>
          <div className='add-header'>
              <h3>Add new entry</h3>
          </div>
          <div className='form'>
              <form onSubmit={handleSubmit}>
                  <p>Select toll name<span className='red-star'>*</span></p>
                  <select className='select-box' name="tollName" onBlur={handleBlur} onChange={handleChange} value={vehicleDetails.tollName} required>
                      <option value="">Select Toll Name</option>
                      {arr}
                  </select>
                  <p>Select vehicle type<span className='red-star'>*</span></p>
                  <select className='select-box' name="vehicleType" onBlur={handleBlur} onChange={handleChange} value={vehicleDetails.vehicleType} required>
                      <option value="">Select Vehicle Type</option>
                      <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                      <option value="LCV">LCV</option>
                      <option value="Truck/Bus">Truck/Bus</option>
                      <option value="Heavy vehicle">Heavy vehicle</option>
                  </select>
                  <p>Vehicle Number<span className='red-star'>*</span></p>
                  <input type="text" id="vehicleNumber" name="vehicleNumber" className='input-box' placeholder='Enter your login id' onChange={handleChange} onBlur={handleBlur} value={vehicleDetails.vehicleNumber} required></input>
                  <p>Tariff<span className='red-star'>*</span></p>
                  <input type="text" name="tariff" className='input-box' value={vehicleDetails.tariff} placeholder='Tariff amount' disabled></input> 
                  <button className='modal-submit'>Add Entry</button>
              </form>
          </div>
      </div>
    </div>
  )
}

