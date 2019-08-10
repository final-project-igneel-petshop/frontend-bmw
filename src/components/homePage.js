import React, { Component } from "react";
// import M from "materialize-css";
// import { Link } from "react-router-dom";
// import "materialize-css/dist/css/materialize.min.css";
import ImageOne from "../images/homepageCat.jpg";
import ImageTwo from "../images/homepageDog.jpg";
import { Carousel } from "antd";

class HomePage extends Component {
  onChange(a, b, c) {
    console.log(a, b, c);
  }
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div className="image-carousel">
            {/* <Link to="/shop"> */}
              <img src={ImageOne} alt="cat" />
            {/* </Link> */}
          </div>
          <div>
            <img src={ImageTwo} alt="cat" />
          </div>
        </Carousel>
        <div style={{ backgroundColor: "rgba(0,0,0,.10)", opacity: "0.5" }}>
          <h1
            style={{
              fontSize: "50px",
              display: "flex",
              justifyContent: "center",
              paddingTop: "25px",
              marginTop: "0px"
            }}
          >
            About Us
          </h1>
          <p
            style={{
              fontSize: "25px",
              display: "flex",
              justifyContent: "center",
              marginLeft: "100px",
              marginRight: "100px",
              paddingBottom: "50px"
            }}
          >
            Love the products sold at BWM Shop, but not Jakarta’s traffic? Or
            you live too far away to visit our stores? From the comfort of your
            home, select the products you’d like to buy, and we will ship them
            to you, to any location in Indonesia. The BWM online shop only
            includes a small selection of the wide pet supplies assortment
            available at the BWM stores. If you are looking for a specific
            product, please call the BWM stores and we will be happy to help.
          </p>
        </div>
      </div>
    );
  }
}

// class HomePage extends Component {
//   componentDidMount() {
//     const options = {
//       duration: 300,
//       onCycleTo: () => {
//         console.log("New Slide");
//       }
//     };
//     const test = {
//       fullWidth: true,
//       indicators: true
//     };
//     M.Carousel.init(this.Carousel, options, test);
//   }
//   render() {
//     return (
//       <div>
//         <div
//           ref={Carousel => {
//             this.Carousel = Carousel;
//           }}
//           className="carousel"
//           style={{ height: "75%" }}
//         >
//           <div
//             className="carousel carousel-slider"
//             style={{ height: "1000px" }}
//           >
//             <div className="carousel-fixed-item center" />
//             <div className="carousel-item red white-text" href="#one!">
//               <Link to="/shop">
//               <img src={ImageOne} alt="cutty-cat" />
//               </Link>
//               <div className="overlay">CATS</div>
//             </div>

//             <div className="carousel-item amber white-text" href="#two!">
//               {/* <h2>DOGS</h2> */}
//               <img src={ImageTwo} alt="cutty-dog" />
//             </div>
//           </div>
//         </div>
//
//       </div>
//     );
//   }
// }

export default HomePage;
