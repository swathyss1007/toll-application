import React from 'react'

export default function VehicleList(props) {

    const arr = props.vehicleArr.map((i) =>{
        return(
            <tr key={i.id}>
                <td className='first-col'>{i.vehicleType}</td>
                <td>{i.vehicleNumber}</td>
                <td>{i.date}</td>
                <td>{i.tollName}</td>
                <td>{i.tariff}</td>
            </tr>
        )
    });

  return (
    <div className='my-table'>
        <table>
            <colgroup>
                <col style={{width:"30%"}}></col>
                <col style={{width:"15%"}}></col>
                <col style={{width:"20%"}}></col>
                <col style={{width:"20%"}}></col>
                <col style={{width:"15%"}}></col>
            </colgroup>
            <thead>
                <tr>
                    <th>VEHICLE TYPE</th>
                    <th>VEHICLE NUMBER</th>
                    <th>DATE/TIME</th>
                    <th>TOLL NAME</th>
                    <th>TARIFF</th>
                </tr>
            </thead>
            <tbody>
               {arr}
            </tbody>
        </table>
    </div>
  )
}

