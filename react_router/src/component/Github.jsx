import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const[data,setdata]=useState()
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sambitbinakar')
    //     .then((resp)=>(resp.json()))
    //     .then(data=>setdata(data))
    // },[])
    const data = useLoaderData()
  return (
    <div className=' text-center text-2xl font-medium'>Github followers: </div>
  )
}

export default Github
export const infoLoader =async()=>{
    const data = await fetch('https://api.github.com/user/sambitbianakar')
    return data.json()
}