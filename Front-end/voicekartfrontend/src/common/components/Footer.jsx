import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import walmart from "../../assests/walmart.jpg"


const useStyles = makeStyles((theme) => ({
  cardLayout: {
    padding: '4% 4% 0% 6%',
    background: '#011229',
    color: '#FFF',
    // height: 'auto',
     zIndex: '1200',
     position: 'absolute',
  },
  copyRight: {
    textAlign: 'center',
    padding: '1% 0px',
    fontSize: '14px',
    fontWeight: '700',
    background: '#011229',
    color: '#FFF',
    borderTop:"1px solid #e1e1e10d",
  },
  menuStyle: {
    color: '#808894',
    cursor: 'pointer',
    padding: '0px',
    marginTop: '27px',
    fontSize: '16px',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(0.9)',
      color: 'white',
    },
    '&:active': {
      color: 'white',
      borderRadius: '7px',
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  const AboutUsHandler = () => {
    props.Redirectpath('/AboutUs');
  };
  const AboutUsHandler1 = () => {
    props.Redirectpath('/');
  };
  const downloadHandler = () => {
    props.Redirectpath('/Download');
  };
  return (
    // <div
    //   style={{
    //     display:
    //       window.location.pathname == '/Dashboard' ||
    //       window.location.pathname == '/Dashboard/Profile' ||
    //       window.location.pathname == '/Dashboard/termsAndConditions' ||
    //       window.location.pathname == '/Dashboard/paymentMethods'
    //         ? 'none'
    //         : ' ',
    //   }}
    // >
      <div className={classes.cardLayout}>
        <Grid
            item
            container
            spacing={2}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
             style={{paddingRight:'20px'}}
            >
             <div style={{ paddingBottom: '20px'}}>
                <img width={'80%'} src={walmart} />
              </div>
              <div
                style={{
                  color: '#808894',
                  fontSize: '16px',
                  paddingBottom: '5px',
                }}
              >
             Walmart is a multinational retail corporation based in the United States. It is one of the largest retail chains in the world, operating a chain of hypermarkets, discount department stores, and grocery stores.
              </div>
            </Grid> 
          
             <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
            >
                 {/* <div style={{paddingLeft:'10px',marginBottom:'27px',fontWeight: '700',color:'#808894'}}>Available App’s</div> */}
             <div style={{padding:'10px'}}>
               
              </div>
              <div style={{padding:'10px'}}>
               
              </div>
            </Grid> 
             <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
            > <div style={{ fontWeight: '700' }}>
            <div style={{ fontSize: '18px',color:'#808894' }}> Contact Us </div>
            <div
              style={{
                marginTop: '27px',
                display: 'flex',
                
              }}
            >
             
              <p
                style={{
                  marginTop: '0px',
                  color: '#808894',
                  fontSize: '16px',
                  fontWeight: '500',
                  paddingLeft: '9px',
                }}
              >
               Building 11, SEZ Cessna Business Park, Kadubeesanahalli Village, Varthur Hobli, Outer Ring Rd, Bengaluru, 560087
              </p>
            </div>
            <div
              style={{
                marginTop: '8px',
                display: 'flex',
               
              }}
            >
             
             
            </div>
            <div
              style={{
                marginTop: '8px',
                display: 'flex',
                paddingBottom: '15px',
              }}
            >
            
              <p
                style={{
                  marginTop: '0px',
                  color: '#808894',
                  fontSize: '16px',
                  fontWeight: '500',
                  paddingLeft: '9px',
                }}
              >
               91 804035XXXX{' '}
              </p>
            </div>
            <div style={{ marginTop: '27px' }}></div>
          </div></Grid> 
          </Grid>
          <div className={classes.copyRight}>
            Copyright &#169; all Right Reserved.{' '}
          </div>
        </div>
    // </div>
  );
}
