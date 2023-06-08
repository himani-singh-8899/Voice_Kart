import { useState } from 'react'
import Header from '../components/Header';
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';

export default function Customlayout (props) {
  
  return (
    <div>
      <Header Redirectpath={props.Redirectpath}/>
      <Outlet/>
      <Footer Redirectpath={props.Redirectpath}/>
    </div>
  )
}