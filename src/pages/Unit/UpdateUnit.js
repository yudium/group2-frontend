import React,{useState,useEffect} from 'react'
import Truck from '../../api/Truck';

const UpdateUnit = () => {
    const [unit,setUnit] = useState({});

    useEffect(() => {
        async () => {
            const unit = await Truck.getTruck();
            setUnit(unit);
        }
    }, [])

    const handleTruck = (e) => {
        e.preventDefault();
        let licenseNumber = document.getElementById('licenseNumber').value;
        let licenseType = document.getElementById('licenseType').value;
        let truckType = document.getElementById('truckType').value;
        let productionYear = document.getElementById('production').value;
        const updatedData = new FormData()
        updatedData.append('licenseNumber', licenseNumber)
        updatedData.append('licenseType', licenseType)
        updatedData.append('truckType', truckType)
        updatedData.append('productionYear', productionYear)
        Truck.updateTruck(updatedData)
        .then(res => {
            console.log(res)
            window.location.href = '/transporter'
            alert('Unit successfully updated!')
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
                    <input id='licenseNumber' value={unit.licenseNumber} className='border-2 rounded-md ml-10 w-1/2' type="text" placeholder='ex. B 1133 AD'/>
                  </div>
                  <div className='flex-row justify-start items-start ml-12 my-2'>
                    <label>License Type</label>
                    <select defaultValue={unit.licenseType} id='licenseType' className='rounded-md border-2 ml-16'>
                      <option value='Yellow' >Yellow</option>
                      <option value='Black' >Black</option>
                    </select>
                  </div>
                  <div className='flex-row justify-start items-start ml-12 my-2'>
                    <label>Truck Type</label>
                    <select defaultValue={unit.truckType} id='truckType' className='rounded-md border-2 ml-20'>
                      <option value='Tronton' >Tronton</option>
                      <option value='Fuso' >Fuso</option>
                      <option value='Van' >Van</option>
                      <option value='MPV' >MPV</option>
                    </select>
                  </div>
                  <div className='flex-row justify-start items-start ml-10 my-2'>
                    <label>Production Year</label>
                    <input id='productionYear' value={unit.productionYear} className='border-2 rounded-md ml-10 w-1/2' type="number" placeholder='ex. 2020'/>
                  </div>
                  <div className='flex-row justify-start items-start ml-12  my-2'>
                    <label>stnk</label>
                    <input id='stnk' type='text' value={unit.stnk} className='ml-20' disabled/>
                  </div>
                  <div className='flex-row justify-start items-start ml-12 my-2'>
                    <label>kir</label>
                    <input id='kir' type='text' value={unit.kir} className='ml-20' disabled/>
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