import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import "./Home.css"; // Importing the CSS file
import { Carousel } from 'react-bootstrap';


function Home() {
  return (
    <div style={{backgroundImage:"url(https://images8.alphacoders.com/124/1240078.jpg)" , backgroundSize:"cover", backgroundRepeat:"none"}}>
      <Navbar />
     
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
     
         <Carousel style={{ width: "500px", height: "300px" , }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fHww"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to our NutriPath App</h3>
            <p>Discover the path to a healthier lifestyle with our comprehensive nutrition tools.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t3.ftcdn.net/jpg/02/69/20/50/360_F_269205000_FAvWjPBVLruUEoVzmm3nNdch9mSFdzLj.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Track Your Progress</h3>
            <p>Monitor your dietary intake and progress towards your wellness goals.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://w0.peakpx.com/wallpaper/654/542/HD-wallpaper-healthy-food-heart-of-fruits-and-vegetables-good-nutrition-diet-slimming-weight-loss.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Personalized Nutrition Plans</h3>
            <p>Receive customized meal plans tailored to your individual needs and preferences.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
        <section className="features text-center" style={{backgroundImage:"url(https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-042.jpg)" , backgroundSize:"cover", backgroundRepeat:"none"}}>
  <div className="container">
    <h2 className="features-title">Discover Our Exclusive Features</h2>
    <div className="feature-cards">
      <div className="feature-card">
        <h3>Advanced Nutritional Analysis</h3>
        <p>Unlock deep insights into your nutritional intake, meticulously analyzing macronutrients (carbohydrates, proteins, fats) and micronutrients (vitamins, minerals).</p>
      </div>
      <div className="feature-card">
        <h3>Personalized Goal Management</h3>
        <p>Empower yourself with tailored nutrition objectives, meticulously crafted to align with your dietary preferences and health aspirations, on a daily basis.</p>
      </div>
      <div className="feature-card">
        <h3>Comprehensive Food Repository</h3>
        <p>Explore an extensive repository of culinary delights, simplifying the process of discovering and logging your meals effortlessly.</p>
      </div>
      <div className="feature-card">
        <h3>Seamless Progress Monitoring</h3>
        <p>Embark on a journey of self-discovery, seamlessly monitoring your evolution over time and uncovering invaluable trends in your dietary habits to propel you toward your wellness zenith.</p>
      </div>
    </div>
  </div>
</section>
     
      <Footer />
    
    </div>
  );
}

export default Home;
