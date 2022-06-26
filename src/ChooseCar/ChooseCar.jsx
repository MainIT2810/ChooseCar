import React, { Component } from "react";
import blackCar from "../assets/products/black-car.jpg";
import steelCar from "../assets/products/steel-car.jpg";
import silverCar from "../assets/products/silver-car.jpg";
import redCar from "../assets/products/red-car.jpg";

import blackIcon from "../assets/icons/icon-black.jpg";
import steelIcon from "../assets/icons/icon-steel.jpg";
import silverIcon from "../assets/icons/icon-silver.jpg";
import redIcon from "../assets/icons/icon-red.jpg";
export default class ChooseCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgProduct: blackCar,
    };
  }

  renderCar = (newImgProduct) => {
    return () => {
      this.setState({
        imgProduct: newImgProduct,
      });
    };
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              src={this.state.imgProduct}
              alt="imgCar"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-5">
            <div className="card text-dark">
              <div className="card-header">Exterior Color</div>
              <div className="card-body">
                <div
                  className="row border border-link pt-2 pb-2"
                  style={{ cursor: "pointer" }}
                  onClick={this.renderCar(blackCar)}
                >
                  <img className="col-2" src={blackIcon} alt="blackIcon" />
                  <div className="col-10">
                    <h3>Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>

                <div
                  className="row border border-link pt-2 pb-2"
                  style={{ cursor: "pointer" }}
                  onClick={this.renderCar(steelCar)}
                >
                  <img className="col-2" src={steelIcon} alt="steelIcon" />
                  <div className="col-10">
                    <h3>Modern Steel</h3>
                    <p>Metallic</p>
                  </div>
                </div>

                <div
                  className="row border border-link pt-2 pb-2"
                  style={{ cursor: "pointer" }}
                  onClick={this.renderCar(silverCar)}
                >
                  <img className="col-2" src={silverIcon} alt="silverIcon" />
                  <div className="col-10">
                    <h3>Lunar Sliver</h3>
                    <p>Metallic</p>
                  </div>
                </div>

                <div
                  className="row border border-link pt-2 pb-2"
                  style={{ cursor: "pointer" }}
                  onClick={this.renderCar(redCar)}
                >
                  <img className="col-2" src={redIcon} alt="redIcon" />
                  <div className="col-10">
                    <h3>Rallye Red</h3>
                    <p>Metallic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
