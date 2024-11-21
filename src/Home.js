import Cupcake from "./img/pinkcup.png";
import Cake from "./img/cake-trans.png";
import Cookies from "./img/cookies-trans.png";
import Cupcakes from "./img/cupcake-trans.png";
import Creampuff from "./img/creampuff.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img src={Cupcake} alt="banner" width="100%"></img>

      <div className="banner-content">
        <p>
          Try our <br />
          cupcakes
        </p>
        <button>Order Now</button>
      </div>
      <div className="dots">
        <span class="dot" id="active-dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>

      <p className="featured-banner">
        Our Featured Treats
        <NavLink to="/shop" activeClassName="active">
          <span>View All</span>
        </NavLink>
      </p>

      <div className="grid-container">
        <div className="grid-item">
          <div className="overlay-cont">
            <img src={Cake} alt="cake" />

            <div className="overlay">
              <NavLink to="/shop" activeClassName="active">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </NavLink>
            </div>
          </div>
          <span>Cakes</span>
          <p>Starting at $6</p>
        </div>

        <div className="grid-item">
          <div className="overlay-cont">
            <img src={Creampuff} alt="cupcakes" />

            <div className="overlay">
              <NavLink to="/shop" activeClassName="active">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </NavLink>
            </div>
          </div>
          <span>Creampuffs</span>
          <p>Starting at $4.50</p>
        </div>

        <div className="grid-item">
          <div className="overlay-cont">
            <img src={Cookies} alt="cookies" />

            <div className="overlay">
              <NavLink to="/shop" activeClassName="active">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </NavLink>
            </div>
          </div>
          <span>Cookies</span>
          <p>Starting at $8</p>
        </div>

        <div className="grid-item">
          <div className="overlay-cont">
            <img src={Cupcakes} alt="cupcakes" />

            <div className="overlay">
              <NavLink to="/shop" activeClassName="active">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </NavLink>
            </div>
          </div>
          <span>Cupcakes</span>
          <p>Starting at $6</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
