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
      image: "product1.jpg",
      price: 19.99,
    },
    {
      id: 2,
      name: "Product 2",
      image: "product2.jpg",
      price: 29.99,
    },
    {
      id: 3,
      name: "Product 3",
      image: "product3.jpg",
      price: 39.99,
    },
  ];

  const [showBanner, setShowBanner] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productName) => {
    const selectedProduct = products.find((product) => product.name === productName);
    setCartItems([...cartItems, selectedProduct]);
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
             <BackgroundCard 
             backgroundContent={
            <div key={banner.id} className={classes.bannerStyle}>
              <img
                src={banner.image}
                alt={banner.heading}
                className={classes.bannerImageStyle}
              />
              <div className={classes.bannerContentStyle}>
                <h2 className={classes.bannerHeadingStyle}>{banner.heading}</h2>
                <p>{banner.content}</p>
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
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {products.map((product, index) => (
          <CardLayout
            key={product.id}
            cardContent={
              <div className={classes.productCardStyle}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={classes.imageStyle}
                />
                <h2 className={classes.titleStyle}>{product.name}</h2>
                <p className={classes.priceStyle}>
                  Price: ${product.price.toFixed(2)}
                </p>
                <Button
                  style={classes.buttonStyle}
                  marginRight="10px"
                  buttonText="Add to Cart"
                  onClick={() => handleAddToCart(product.name)}
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
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
