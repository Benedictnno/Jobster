import React from "react";
import {Logo} from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Farm-to-table polaroid voluptate street art laborum, est sus jean
            shorts neutra portland ut fanny pack hell of paleo. Heirloom salvia
            cray, intelligentsia plaid esse migas laboris adipisicing taiyaki
            deep v pickled ad food truck. Gentrify paleo fixie bushwick aute
            edison bulb viral glossier PBR&B velit narwhal kogi anim selfies.{" "}
          </p>

          <Link to={'/register'} className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};


export default Landing;
