import React,{useEffect} from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Avatar, Stack } from '@mui/material';
import Newbanner from '../../assests/Newbanner.svg';

const useStyles = makeStyles(theme => ({
  root: {
    // textAlign:"left",
    backgroundImage:`url(${Newbanner})`,
    padding:"3% 0px 0%",
    // backgroundRepeat:"no-repeat",
    // backgroundSize:"contain",
//    backgroundPosition:"right",
   background:"linear-gradient(90deg, #AB26A3 3.67%, #3147BA 114%)"
  },
  bannertitle:{
    fontSize:"61px",
  },
  titleColors:{
    color:"#3147BA",
  }
}))

export default function Background (props) {
  const classes = useStyles();
  const orderId=678;
  const applyHandler=()=>{
    props.scrollHandler()
  }
  return (
    <>
    <div style={{background:'#3775ae'}}>
    <div className={classes.root} style={{ backgroundImage:`url(${props.backgroundImage ?props.backgroundImage:Newbanner})`,backgroundSize:props.backgroundSize}} >   
    <div style={{padding:'3% 20px'}}>{props.bannerContent}</div> 
    </div> 
    </div>
    </>
  )
}
