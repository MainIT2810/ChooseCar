import React, { Component } from "react";
import data from "../data/Car.json";
export default class ChooseCar extends Component {
  state = {
    carProduct: {
      id: 1,
      name: "Crystal Black",
      desc: "Pearl",
      price: 1000,
      img: "./products/black-car.jpg",
      icon: "./icons/icon-black.jpg",
    },
  };

  renderCar = () => {
    return data.map((carItem, index) => {
      return (
        <div
          key={index}
          className="row border border-link pt-2 pb-2"
          onClick={() => {
            this.ChangeCar(carItem);
          }}
          style={{ cursor: "pointer" }}
        >
          <img className="col-2" src={carItem.icon} alt="black_icon" />
          <div className="col-10">
            <h3>{carItem.name}</h3>
            <p>{carItem.desc}</p>
          </div>
        </div>
      );
    });
  };

  ChangeCar = (newCar) => {
    this.setState({
      carProduct: newCar,
    });
  };

  render() {
    const { img } = this.state.carProduct;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img src={img} alt="imgCar" style={{ width: "100%" }} />
          </div>

          <div className="col-5">
            <div className="card text-dark">
              <div className="card-header">Exterior Color</div>
              <div className="card-body">{this.renderCar()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
