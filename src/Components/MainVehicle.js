import React from "react";
import filterImg from "../Images/filter.png";
import AddVehicle from "./AddVehicle";
import AddToll from "./AddToll";
import VehicleList from "./VehicleList";


export default function MainVehicle(props){

    const [vehicleClick,setVehicleClick] = React.useState(false);

    const [tollClick,setTollClick] = React.useState(false);
    
    const arr = props.tollArr.map(i => {
        return(
            <li className="item" key={i.id} onClick={filterOut}>
                <span className="item-text" onClick={filterOut}>{i.tollName}</span>
                <span className="checkbox" >
                    <i className="fa-solid fa-check check-icon"></i>
                </span>
            </li>
        );
    });


    function vehiclePage(){

        if(props.tollArr.length === 0){
            alert('No Tolls Found. Add new toll by clicking "Add new toll"!');
        }
        else{        
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


    window.addEventListener("mouseup", function(event){
        const filterBox = this.document.querySelector(".list-items");
        if(event.target !== filterBox && event.target.parentNode !== filterBox && event.target.nextElementSibling !== filterBox){
            filterBox.style.display = "none";
        }
    })

    

    function showFilters() {

        let x = document.querySelector(".list-items").style.display;
        
        if(x === "block"){
            document.querySelector(".list-items").style.display = "none";
        }
        else{
            document.querySelector(".list-items").style.display = "block";
        } 
    }

    function filterOut(event) {

        event.target.classList.toggle("checked");

        const checkedItems = document.querySelectorAll(".item.checked");

        const tollNameArr = Array.from(checkedItems).map(i => i.firstElementChild.innerText);

        if(tollNameArr[0] === "All" || tollNameArr.length === 0){
            props.setVehicleArr(props.tempVehicleArr);
        }
        else{
            const filterData = props.tempVehicleArr.filter(i => tollNameArr.indexOf(i.tollName) !== -1);
            props.setVehicleArr(filterData);
        }

    }

    function handleVehicleSearch(event) {

        if(event.target.value === ""){
            props.setVehicleArr(props.tempVehicleArr);
        }
        else{
            const filterData = props.tempVehicleArr.filter(i => i.vehicleNumber.toLowerCase().includes(event.target.value.toLowerCase()));
            props.setVehicleArr(filterData);
        }
 
    }

    return(
        <main>
            <div className="main">
                <div className="main-div-1">
                    <p className="main-title">Toll entries/Vehicle entries <span className="pipe-symbol">| </span> </p>
                    <div className="filter-container">
                        <img src={filterImg} alt="" className="filter-img" onClick={showFilters}></img>
                        <ul className="list-items">
                            <li className="item" onClick={filterOut}>
                                <span className="item-text" onClick={filterOut}>All</span>
                                <span className="checkbox">
                                    <i className="fa-solid fa-check check-icon"></i>
                                </span>
                            </li>
                            {arr}
                        </ul>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search vehicle" 
                        className="search-input"
                        onChange={handleVehicleSearch}  
                        name="searchVehicleText"
                    />
                </div>
                <div className="main-div-2">
                    <button className="main-button" onClick={vehiclePage}>Add vehicle entry</button>
                    <button className="main-button" onClick={tollPage}>Add new toll</button>
                    <button className="main-button" onClick={togglePage}>View all tolls</button>
                </div>
            </div> 
            {vehicleClick && 
            <AddVehicle 
                closeVehicleClick={setVehicleClick} 
                tollArr={props.tollArr}
                vehicleArr={props.vehicleArr}
                setVehicleArr={props.setVehicleArr} 
                setTempVehicleArr={props.setTempVehicleArr} 
            />}

            {tollClick && 
            <AddToll 
                closeTollClick = {setTollClick} 
                setTollArr={props.setTollArr} 
                setTempTollArr={props.setTempTollArr}
            />}
            <VehicleList vehicleArr = {props.vehicleArr} />
        </main>
    )
}