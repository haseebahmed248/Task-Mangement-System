import React, { useEffect } from 'react'
import Layout from './Layout'
import { UserContext } from '../utils/Context/UserContext'
import axios from 'axios';


function ListTask() {
    const { user } = React.useContext(UserContext);
    useEffect(()=>{
        axios.get(`http://localhost:4000/api/task/getTasks/${user.userId}`)
        .then(res => {
            console.log(res.data)
        })
    })

  return (
    <Layout>
      <div className='h-auto overflow-hidden p-8 text-center'>
        <h1 className='text-4xl'>Tasks List</h1>
        <div className='flex justify-between items-stretch dark:bg-gray-800 bg-gray-300 p-3 rounded-md mt-10 min-h-[70px] mb-6'>
          <div className='flex items-center space-x-6'>
            <h3 className='text-xl text-white mr-3'>TaskName</h3>
            <div className='self-stretch w-0.5 bg-gray-600 mr-3'></div>
            <p>Description</p>
          </div>
          <div className='flex items-center space-x-6'>
            <div className='self-stretch w-0.5 bg-gray-600 mr-3'></div>
            <img src='/src/images/edit.svg' alt='edit' className='w-8 h-8 mr-3 p-1 cursor-pointer hover:bg-gray-600 rounded-md transition-all duration-300'/>
            <img src='/src/images/delete.svg' alt='delete' className='w-8 h-8 mr-3 p-1 cursor-pointer hover:bg-gray-600 rounded-md transition-all duration-300'/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ListTask