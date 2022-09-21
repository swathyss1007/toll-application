import React from "react";
import AddVehicle from "./AddVehicle";
import AddToll from "./AddToll";
import TollList from "./TollList";

export default function MainToll(props){

    const [vehicleClick,setVehicleClick] = React.useState(false);

    const [tollClick,setTollClick] = React.useState(false);

    function vehiclePage(){
        if(props.tollArr.length === 0){
            alert('No Tolls Found. Add new toll by clicking "Add new toll"!');
        }else{
            document.querySelector(".main").style.opacity = "0.4";
            document.querySelector(".nav").style.opacity = "0.4";
            document.querySelector(".my-table").style.opacity = "0.4";
            setVehicleClick(true);
        }
    }

    function tollPage(){
        document.querySelector(".main").style.opacity = "0.4";
        document.querySelector(".nav").style.opacity = "0.4";
        document.querySelector(".my-table").style.opacity = "0.4";
        setTollClick(true);
    }

    function togglePage(){       
        props.setToggle(prevState => !prevState);    
    }

    function handleTollSearch(event){
        if(event.target.value === ""){
            props.setTollArr(props.tempTollArr);
        }
        else{
            const filterData = props.tempTollArr.filter(i => i.tollName.toLowerCase().includes(event.target.value.toLowerCase()));
            props.setTollArr(filterData);
        }
    }

    return(
        <main>
            <div className="main">
                <div className="main-div-1">
                    <p className="main-title">Tollgate List <span className="pipe-symbol">| </span> </p>
                    <input 
                        type="text" 
                        placeholder="Search a toll" 
                        className="search-input"
                        onChange={handleTollSearch}
                        name="searchTollText"
                    />
                </div>
                <div className="main-div-2">
                    <button className="main-button" onClick={vehiclePage}>Add vehicle entry</button>
                    <button className="main-button" onClick={tollPage}>Add new toll</button>
                    <button className="main-button" onClick={togglePage}>Back to vehicle logs</button>
                </div>
            </div> 
            {vehicleClick && 
            <AddVehicle 
                closeVehicleClick={setVehicleClick}
                setVehicleArr={props.setVehicleArr}
                tollArr={props.tollArr}
                vehicleArr={props.vehicleArr}
                setTempVehicleArr = {props.setTempVehicleArr}
            />}
            {tollClick && 
            <AddToll 
                closeTollClick = {setTollClick} 
                setTollArr={props.setTollArr}
                setTempTollArr={props.setTempTollArr}
            />}
            <TollList tollArr={props.tollArr} setTollArr={props.setTollArr} setTempTollArr={props.setTempTollArr} />
        </main>
    )
}