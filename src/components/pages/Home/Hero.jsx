import { HashLink } from "react-router-hash-link";
import restaurantFoodImage from "./assets/restaurant-food.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            A cozy corner where Mediterranean flavors meet modern creativity.
            Taste the tradition, stay for the vibes.
          </p>
          <HashLink className="button-primary" to="/reservations">
            Reserve a table
          </HashLink>
        </div>
        <img
          className="hero-image"
          src={restaurantFoodImage}
          alt="Restaurant food"
        />
      </div>
    </section>
  );
};

export default Hero;
