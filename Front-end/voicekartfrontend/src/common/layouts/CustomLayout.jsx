import { useState } from 'react'
import Header from '../components/Header';
import { Outlet } from "react-router-dom";

export default function Customlayout (props) {
  
  return (
    <div>
      <Header Redirectpath={props.Redirectpath}/>
      <Outlet/>
    </div>
  )
}