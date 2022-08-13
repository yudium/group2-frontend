import React from 'react'
import Truck from '../../api/Truck';

const NewUnit = () => {
  
  const handleTruck = (e) => {
    e.preventDefault();
    let licenseNumber = document.getElementById('licenseNumber').value;
    let licenseType = document.getElementById('licenseType').value;
    let truckType = document.getElementById('truckType').value;
    let productionYear = document.getElementById('production').value;
    let stnk = document.getElementById('stnk').value;
    let kir = document.getElementById('kir').value;
    if(licenseNumber === null || licenseType === null || truckType === null ) {
      alert('Please fill the mandatory fields')
    } else {
      let newTruck = new Truck({
        licenseNumber: licenseNumber,
        licenseType: licenseType,
        truckType: truckType,
        productionYear: productionYear,
        stnk: stnk,
        kir: kir
      });
      newTruck.addTruck()
      .then(res => {
        console.log(res)
        window.location.href = '/truck'
        alert('Unit successfully saved!')
      }).catch(err => {
        console.log(err)
      })
    }
    //   const newData = new FormData()
    //   newData.append('licenseNumber', licenseNumber)
    //   newData.append('licenseType', licenseType)
    //   newData.append('truckType', truckType)
    //   newData.append('productionYear', productionYear)
    //   newData.append('stnk', stnk)
    //   newData.append('kir', kir)
    //   axios.post(`${api}/truck`, newData, {
    //   }).then(res => {
    //     console.log(res)
    //     window.location.href = '/truck'
    //     alert('Unit successfully saved!')
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // }
  }
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
        <h1 className='text-3xl'>Add New Unit</h1>
        <div className='flex flex-row w-1/3 justify-start items-center rounded-lg mt-12'>
            <form className='flex flex-col justify-start items-start' onSubmit={handleTruck}>
              <div className='flex-row justify-start items-start ml-10 my-2'>
                <label>License Number</label>
                <input id='licenseNumber' className='border-2 rounded-md ml-10 w-1/2' type="text" placeholder='ex. B 1133 AD'/>
              </div>
              <div className='flex-row justify-start items-start ml-12 my-2'>
                <label>License Type</label>
                <select defaultValue={'Yellow'} id='licenseType' className='rounded-md border-2 ml-16'>
                  <option value='Yellow' >Yellow</option>
                  <option value='Black' >Black</option>
                </select>
              </div>
              <div className='flex-row justify-start items-start ml-12 my-2'>
                <label>Truck Type</label>
                <select defaultValue={'Tronton'} id='truckType' className='rounded-md border-2 ml-20'>
                  <option value='Tronton' >Tronton</option>
                  <option value='Fuso' >Fuso</option>
                  <option value='Van' >Van</option>
                  <option value='MPV' >MPV</option>
                </select>
              </div>
              <div className='flex-row justify-start items-start ml-10 my-2'>
                <label>Production Year</label>
                <input id='productionYear' className='border-2 rounded-md ml-10 w-1/2' type="number" placeholder='ex. 2020'/>
              </div>
              <div className='flex-row justify-start items-start ml-12  my-2'>
                <label>stnk</label>
                <input id='stnk' type='file' className='ml-20'/>
              </div>
              <div className='flex-row justify-start items-start ml-12 my-2'>
                <label>kir</label>
                <input id='kir' type='file' className='ml-24'/>
              </div>
              <div className='flex-row justify-end items-end text-rig ml-12 my-2'>
                <button className= 'flex justify-center text-lg rounded-lg'>Add Unit</button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default NewUnit