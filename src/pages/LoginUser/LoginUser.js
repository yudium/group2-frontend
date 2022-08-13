import React from 'react'

const LoginUser = () => {
  const handleLogin = (value) => {
    (value === 'transporter') ? window.location.href = '/transporter' : window.location.href = '/shipper'
  }
  return (
    <div className='flex w-full h-screen justify-center items-center'>
        <div className='flex flex-row w-1/6 h-1/6 justify-center items-center rounded-lg border-2 mt-12'>
            <div className='flex items-center justify-center w-1/2 h-full bg-blue-100 text-xl shadow-xl rounded-l-lg'>Login as</div>
            <div className='flex flex-col w-1/2 h-full'>
                <div className='flex justify-center items-center h-1/2 border-2 rounded-tr-lg'>
                    <button className='h-full' value={'transporter'} onClick={handleLogin(value)}>Transporter</button>
                </div>
                <div className='flex justify-center items-center h-1/2 border-2 rounded-br-lg'>
                    <button className='h-full' value={'shipper'} onClick={handleLogin(value)}>Shipper</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginUser