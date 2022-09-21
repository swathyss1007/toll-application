import React from 'react'
import {nanoid} from "nanoid";

export default function AddToll(props) {

   const [tollDetails,setTollDetails] = React.useState({
        tollName:"",
        vehicleType1:"",
        type1Single:"",
        type1Return:"",
        vehicleType2:"",
        type2Single:"",
        type2Return:"",
        vehicleType3:"",
        type3Single:"",
        type3Return:"",
        vehicleType4:"",
        type4Single:"",
        type4Return:"",
   })

  function closeToll(){
    document.querySelector(".main").style.opacity = "1";
    document.querySelector(".nav").style.opacity = "1";
    document.querySelector(".my-table").style.opacity = "1";
    props.closeTollClick(false);
  }

  function handleChange(event){

    const {name,value} = event.target

    setTollDetails(prevState =>(
        {
            ...prevState,
            [name]:value
        }
    ))
  }


  function handleSubmit(event){
    event.preventDefault();
    closeToll();

    let cjvFare;
    
    if(tollDetails.vehicleType1 === "Car/Jeep/Van"){
        cjvFare=tollDetails.type1Single+"/"+tollDetails.type1Return;
    }
    else if(tollDetails.vehicleType2 === "Car/Jeep/Van"){
        cjvFare=tollDetails.type2Single+"/"+tollDetails.type2Return;
    }
    else if(tollDetails.vehicleType3 === "Car/Jeep/Van"){
        cjvFare=tollDetails.type3Single+"/"+tollDetails.type3Return;
    }
    else if(tollDetails.vehicleType4 === "Car/Jeep/Van"){
        cjvFare=tollDetails.type4Single+"/"+tollDetails.type4Return;
    }
    else{
        cjvFare="--/--";
    }

    let lcvFare;

    if(tollDetails.vehicleType1 === "LCV"){
        lcvFare=tollDetails.type1Single+"/"+tollDetails.type1Return;
    }
    else if(tollDetails.vehicleType2 === "LCV"){
        lcvFare=tollDetails.type2Single+"/"+tollDetails.type2Return;
    }
    else if(tollDetails.vehicleType3 === "LCV"){
        lcvFare=tollDetails.type3Single+"/"+tollDetails.type3Return;
    }
    else if(tollDetails.vehicleType4 === "LCV"){
        lcvFare=tollDetails.type4Single+"/"+tollDetails.type4Return;
    }
    else{
        lcvFare="--/--";
    }

    let tbFare;

    if(tollDetails.vehicleType1 === "Truck/Bus"){
        tbFare=tollDetails.type1Single+"/"+tollDetails.type1Return;
    }
    else if(tollDetails.vehicleType2 === "Truck/Bus"){
        tbFare=tollDetails.type2Single+"/"+tollDetails.type2Return;
    }
    else if(tollDetails.vehicleType3 === "Truck/Bus"){
        tbFare=tollDetails.type3Single+"/"+tollDetails.type3Return;
    }
    else if(tollDetails.vehicleType4 === "Truck/Bus"){
        tbFare=tollDetails.type4Single+"/"+tollDetails.type4Return;
    }
    else{
        tbFare="--/--";
    }

    let hvFare;

    if(tollDetails.vehicleType1 === "Heavy vehicle"){
        hvFare=tollDetails.type1Single+"/"+tollDetails.type1Return;
    }
    else if(tollDetails.vehicleType2 === "Heavy vehicle"){
        hvFare=tollDetails.type2Single+"/"+tollDetails.type2Return;
    }
    else if(tollDetails.vehicleType3 === "Heavy vehicle"){
        hvFare=tollDetails.type3Single+"/"+tollDetails.type3Return;
    }
    else if(tollDetails.vehicleType4 === "Heavy vehicle"){
        hvFare=tollDetails.type4Single+"/"+tollDetails.type4Return;
    }
    else{
        hvFare="--/--";
    }

    const myObj = {
        id:nanoid(),
        tollName:tollDetails.tollName,
        cjvFare:cjvFare ,
        lcvFare:lcvFare ,
        tbFare: tbFare,
        hvFare:hvFare
    };

    props.setTollArr(prevState => ([...prevState,myObj]));

    props.setTempTollArr(prevState => ([...prevState,myObj]));

  }

  return (
    <div className='modal-BG'>
        <div className='add-modal-toll'>
            <span className='close-symbol' onClick={closeToll}>X</span>
            <div className='add-header'>
                <h3>Add new toll</h3>
            </div>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='toll-name-div'>
                        <p>Toll name<span className='red-star'>*</span></p>
                        <input type="text" className='toll-name input-box' name='tollName'  placeholder="Enter toll name" onChange={handleChange} value={tollDetails.tollName} required></input>
                    </div>
                    
                    <div className='toll-fare'>
                        <p>Vehicle fare details<span className='red-star'>*</span></p>
                        <div className='vehicle-fare-details'>
                            <select className='select-box' name='vehicleType1' onChange={handleChange} value={tollDetails.vehicleType1} required>
                                <option value="">Select vehicle type</option>
                                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                                <option value="LCV">LCV</option>
                                <option value="Truck/Bus">Truck/Bus</option>
                                <option value="Heavy vehicle">Heavy vehicle</option>
                            </select>
                            <input type="number" name='type1Single' className='single-journey input-box' placeholder="Single Journey" onChange={handleChange} value={tollDetails.type1Single} required></input>
                            <input type="number" name='type1Return' className='return-journey input-box' placeholder='Return Journey' onChange={handleChange} value={tollDetails.type1Return} required></input>
                        </div>
                        <div className='vehicle-fare-details'>
                            <select className='select-box' name='vehicleType2' onChange={handleChange} value={tollDetails.vehicleType2} required>
                                <option value="">Select vehicle type</option>
                                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                                <option value="LCV">LCV</option>
                                <option value="Truck/Bus">Truck/Bus</option>
                                <option value="Heavy vehicle">Heavy vehicle</option>
                            </select>
                            <input type="number" name='type2Single' className='single-journey input-box' placeholder="Single Journey" onChange={handleChange} value={tollDetails.type2Single} required></input>
                            <input type="number" name='type2Return' className='return-journey input-box' placeholder='Return Journey' onChange={handleChange} value={tollDetails.type2Return} required></input>
                        </div>
                        <div className='vehicle-fare-details'>
                            <select className='select-box' name='vehicleType3' onChange={handleChange} value={tollDetails.vehicleType3} required>
                                <option value="">Select vehicle type</option>
                                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                                <option value="LCV">LCV</option>
                                <option value="Truck/Bus">Truck/Bus</option>
                                <option value="Heavy vehicle">Heavy vehicle</option>
                            </select>
                            <input type="number" name='type3Single' className='single-journey input-box' placeholder="Single Journey" onChange={handleChange} value={tollDetails.type3Single} required></input>
                            <input type="number" name='type3Return' className='return-journey input-box' placeholder='Return Journey' onChange={handleChange} value={tollDetails.type3Return} required></input>
                        </div>
                        <div className='vehicle-fare-details'>
                            <select className='select-box' name='vehicleType4' onChange={handleChange} value={tollDetails.vehicleType4} required>
                                <option value="">Select vehicle type</option>
                                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                                <option value="LCV">LCV</option>
                                <option value="Truck/Bus">Truck/Bus</option>
                                <option value="Heavy vehicle">Heavy vehicle</option>
                            </select>
                            <input type="number" name='type4Single' className='single-journey input-box' placeholder="Single Journey" onChange={handleChange} value={tollDetails.type4Single} required></input>
                            <input type="number" name='type4Return' className='return-journey input-box' placeholder='Return Journey' onChange={handleChange} value={tollDetails.type4Return} required></input>
                        </div>
                        <button className='modal-submit'>Add details</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

