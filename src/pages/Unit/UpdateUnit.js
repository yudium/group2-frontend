import React from 'react'
import Truck from '../../api/Truck';

const UpdateUnit = () => {
    const handleTruck = (e) => {
        e.preventDefault();
        let licenseNumber = document.getElementById('licenseNumber').value;
        let licenseType = document.getElementById('licenseType').value;
        let truckType = document.getElementById('truckType').value;
        let productionYear = document.getElementById('production').value;
        let updateTruck = new Truck({
            licenseNumber: licenseNumber,
            licenseType: licenseType,
            truckType: truckType,
            productionYear: productionYear
        })
        updateTruck.updateTruck()
        .then(res => {
            console.log(res)
            alert('Unit successfully updated')
        })
        .catch(err => {
            console.log(err)
        })
      }
      return (
        <div className='flex flex-col w-full h-screen justify-center items-center'>
            <h1 className='text-3xl'>Update Unit</h1>
            <div className='flex flex-row w-1/3 justify-start items-center rounded-lg mt-12'>
                <form className='flex flex-col justify-start items-start' onSubmit={handleTruck}>
                  <div className='flex-row justify-start items-start ml-10 my-2'>
                    <label>License Number</label>
                    <input id='licenseNumber' value={licenseNumber} className='border-2 rounded-md ml-10 w-1/2' type="text" placeholder='ex. B 1133 AD'/>
                  </div>
                  <div className='flex-row justify-start items-start ml-12 my-2'>
                    <label>License Type</label>
                    <select defaultValue={licenseType} id='licenseType' className='rounded-md border-2 ml-16'>
                      <option value='Yellow' >Yellow</option>
                      <option value='Black' >Black</option>
                    </select>
                  </div>
                  <div className='flex-row justify-start items-start ml-12 my-2'>
                    <label>Truck Type</label>
                    <select defaultValue={truckType} id='truckType' className='rounded-md border-2 ml-20'>
                      <option value='Tronton' >Tronton</option>
                      <option value='Fuso' >Fuso</option>
                      <option value='Van' >Van</option>
                      <option value='MPV' >MPV</option>
                    </select>
                  </div>
                  <div className='flex-row justify-start items-start ml-10 my-2'>
                    <label>Production Year</label>
                    <input id='productionYear' value={productionYear} className='border-2 rounded-md ml-10 w-1/2' type="number" placeholder='ex. 2020'/>
                  </div>
                  <div className='flex-row justify-start items-start ml-12  my-2'>
                    <label>stnk</label>
                    <input id='stnk' type='text' value={stnkTruck} className='ml-20' disabled/>
                  </div>
                  <div className='flex-row justify-start items-start ml-12 my-2'>
                    <label>kir</label>
                    <input id='kir' type='text' value={kirTruck} className='ml-20' disabled/>
                  </div>
                  <div className='flex-row justify-end items-end text-rig ml-12 my-2'>
                    <button className= 'flex justify-center text-lg rounded-lg'>Save Unit</button>
                  </div>
                </form>
            </div>
        </div>
  )
}

export default UpdateUnit