import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typography, Paper } from "@mui/material";
import Button from "../components/Button";
import { makeStyles } from "@mui/styles";
import CardLayout from "../components/CardLayout";
import TextField from "../components/Input";
import { useForm } from "react-hook-form";
import BackgroundCard from "../components/BackgroundCard";
import Background1 from "../components/Background";
import { Grid, Avatar, Stack } from "@mui/material";
import ActionButton from "../components/Button";
import BannerSideIMG from "../../assests/BannerSideIMG.jpg"
import productIMG from "../../assests/productIMG.jpg"
import CustomModal from "../components/CustomModal"

const useStyles = makeStyles((theme) => ({
  bannerStyle: {
    position: "relative",
    width: "100%",
    height: "600px",
  },
  bannerImageStyle: {
    width: "100%",
    height: "600px",
    objectFit: "cover",
  },
  bannerContentStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
    padding: "5%",
    background: "linear-gradient(to bottom, #007bff 0%, #0056b3 100%)",
  },
  bannerHeadingStyle: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  newBannerStyle: {
    backgroundColor: "#f2f2f2",
    padding: "60px",
    textAlign: "center",
  },
  newBannerHeadingStyle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  newBannerContentStyle: {
    fontSize: "18px",
  },
  productCardStyle: {
    width: "200px",
    borderRadius: "4px",
    padding: "16px",
    margin: "16px",
    textAlign: "center",
  },
  imageStyle: {
    width: "100%",
    marginBottom: "8px",
  },
  titleStyle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  priceStyle: {
    marginBottom: "8px",
  },
  buttonStyle: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
  },
  productCardHeading: {
    opacity: 0,
    transform: "translateY(50px)",
    transition: "opacity 0.3s ease, transform 0.3s ease",
  },
  productCardAnimation: {
    opacity: 1,
    transform: "translateY(0)",
  },
}));

function HomePage() {
  const classes = useStyles();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();
  const [modalOpen, setModalOpen] = useState(false);
  const [status,setStatus] = useState('');
  const handleCustommodal = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
    

  };
  const handleModal = () => {
    // setOpenModal(true);
    setModalOpen(false);
  };

  const banners = [
    {
      id: 1,
      image: "banner1.jpg",
      heading: "Banner 1",
      content: "This is the content for banner 1.",
    },
    {
      id: 2,
      image: "banner2.jpg",
      heading: "Banner 2",
      content: "This is the content for banner 2.",
    },
    {
      id: 3,
      image: "banner3.jpg",
      heading: "Banner 3",
      content: "This is the content for banner 3.",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Product 1",
      image: productIMG,
      price: 19.99,
    },
    {
      id: 2,
      name: "Product 2",
      image: productIMG,
      price: 29.99,
    },
    {
      id: 3,
      name: "Product 3",
      image: productIMG,
      price: 39.99,
    },
  ];

  const [showBanner, setShowBanner] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productName) => {
    const selectedProduct = products.find(
      (product) => product.name === productName
    );
    setCartItems([...cartItems, selectedProduct]);
    alert(`${productName} added to cart!`); // Show an alert message
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleBannerClick = () => {
    setShowBanner(false);
    // Perform additional logic or navigation here
  };

  const handleFormSubmit = (data) => {
    console.log(data); // Log form data to the console
  };
  const onSubmit=(data)=>{
   handleCustommodal()
  }
  return (
    <div>
      {showBanner ? (
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
        >
          {banners.map((banner, index) => (
            <Background1
              bannerContent={
                <div
                  style={{
                    margin: " 0 auto",
                    padding: " 0 15px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 60px",
                    }}
                  >
                    <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div style={{ display: "block" }}>
                          <div style={{ width: "70%", paddingBottom: "4%" }}>
                            <h6
                              style={{
                                fontSize: "22px",
                                paddingTop: "13%",
                                color: "#ffffffe6",
                                margin: "0",
                                fontSize: "30px",
                                fontWeight: "300",
                              }}
                            >
                              The Right Website for you.
                            </h6>
                            <h1
                              style={{
                                fontSize: "47px",
                                color: "#ffffffe6",
                                fontWeight: "200",
                                margin: "17px 0px",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "47px",
                                  fontWeight: "700",
                                  color: "#ab26a3",
                                }}
                              >
                                Buy,
                              </span>{" "}
                              The
                              <br /> Smart Way.
                            </h1>
                            <p
                              style={{
                                fontSize: "17px",
                                color: "#ffffffe6",
                                marginTop: "0",
                              }}
                            >
                              An eCommerce shopping site is a platform that
                              allows businesses to sell their products or
                              services online to customers. It serves as a
                              virtual marketplace where buyers can browse,
                              select, and purchase items conveniently from their
                              devices.
                            </p>
                            {/* <a href="#Policies" class="btn-find">
                      Find Insurance
                    </a> */}
                            <ActionButton
                  buttonText="THE PRODUCTS"
                //   handleSubmit={handleSubmit(onSubmit)}
                  backgroundImage={
                    'linear-gradient(90deg, #AB26A3 3.67%, #3147BA 114%)'
                  }
                  //   borderRadius={'30px'}
                  color={'#fff'}
                  width="fit-content"
                  padding="20px 30px"
                  boxShadow="0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
                />
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        style={{
                          padding: "15px",
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <img src={BannerSideIMG} style={{ position: "relative",
    width: 500,
    height: 400,}}   />
                      </Grid>
                    </Grid>
                  </div>
                </div>
              }
            />
          ))}
        </Carousel>
      ) : (
        <div className={classes.newBannerStyle}>
          <h2 className={classes.newBannerHeadingStyle}>New Banner Content</h2>
          <p className={classes.newBannerContentStyle}>
            This is the new banner that opens on click.
          </p>
        </div>
      )}
        <div
                style={{
                //   margin: '0',
                  textTransform: 'uppercase',
                  display: 'flex',
                  justifyContent: 'center',
                //   margin: '10px',
                  fontSize: '20px',
                  fontWeight: '500',
                  color:'black',
                  marginTop: "10%",
                }}
              
              >
                Our Products{' '}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontSize: '42px',
                  fontWeight: '600',
                  marginBottom: "5%",
                }}
              >
                We’re covering all the
                <br />  PRODUCTS
              </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "10%",
        }}
      >
       
        {products.map((product, index) => (
          <CardLayout
            key={product.id}
            cardContent={
                <div
                className={`${classes.productCardStyle} ${
                  showBanner
                    ? classes.productCardAnimation
                    : classes.productCardHeading
                }`}
              >
                <img
                  src={product.image}
                //   alt={product.name}
                  className={classes.imageStyle}
                />
                <h2 className={classes.titleStyle}>{product.name}</h2>
                <p className={classes.priceStyle}>
                  Price: ${product.price.toFixed(2)}
                </p>
                <ActionButton
                    style={classes.buttonStyle}
                    marginRight="10px"
                    buttonText="Add to Cart"
                    handleSubmit={handleSubmit(onSubmit)}
                  />
              </div>
            }
          />
        ))}
      </div>

      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
       <CustomModal
          paddingTop={'0px'}
          modalContent={
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                {' '}
                <img  height="100%" />{' '}
              </div>
              <div
                style={{
                  padding: '20px',
                  fontSize: '21px',
                  fontWeight: '900',
                  display: 'flex',
                  justifyContent: 'space-around',
                  color: 'black',
                }}
              >
                Product Added Successfully
              </div>
              <div
                style={{
                  padding: '19px',
                  fontSize: '20px',
                  color: 'black',
                  textAlign: 'center',
                }}
              >
                Thank You!! Your Products has been successfully Added
                {' '}
                
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  paddingTop: '10px',
                }}
              >
                <ActionButton
                  buttonText="CLOSE"
                  handleSubmit={handleModal}
                  backgroundImage={
                    'linear-gradient(90deg, #AB26A3 3.67%, #3147BA 114%)'
                  }
                  //   borderRadius={'30px'}
                  color={'#fff'}
                  width="fit-content"
                  padding="20px 30px"
                  boxShadow="0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
                />
              </div>
            </div>
          }
          modalTitle=" "
          handleClose={handleModalClose}
          open={modalOpen}
          disableWidth={true}
        />
    </div>
  );
}

export default HomePage;
