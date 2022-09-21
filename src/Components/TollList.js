import React from 'react'

export default function TollList(props) {

  const arr = props.tollArr.map((i)=>{
    return(
      <tr key={i.id}>
        <td className='first-col'>{i.tollName}</td>
        <td>{i.cjvFare}</td>
        <td>{i.lcvFare}</td>
        <td>{i.tbFare}</td>
        <td>{i.hvFare}</td>
        <td className='delete-row'>
          <div className='trash-icon-div' onClick={() => deleteRow(i.id)}>
            <i className="fa-solid fa-trash-can trash-icon"></i>
          </div>
        </td>
      </tr>
    )
  })

  function deleteRow(id) {
    props.setTollArr(prevArr => {
      let newArr = [];
      for(let i = 0; i < prevArr.length; i++){
        if(prevArr[i].id === id){
          continue;
        }
        newArr.push(prevArr[i]);
      }
      props.setTempTollArr(newArr);
      return newArr;
    })    
  }


  return (
    <div className='my-table'>
        <table>
            <colgroup>
                <col style={{width: "40%"}}></col>
                <col style={{width: "12%"}}></col>
                <col style={{width: "12%"}}></col>
                <col style={{width: "12%"}}></col>
                <col style={{width: "12%"}}></col>
                <col style={{width: "12%"}}></col>
            </colgroup>
            <thead>
                <tr>
                    <th>TOLL NAME</th>
                    <th>CAR/JEEP/VAN</th>
                    <th>LCV</th>
                    <th>TRUCK/BUS</th>
                    <th>HEAVY VEHICLE</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
               {arr.length !== 0 ? arr : <tr><td colSpan="6">NO TOLLS FOUND</td></tr>}
            </tbody>
        </table>
    </div>
  )
}

