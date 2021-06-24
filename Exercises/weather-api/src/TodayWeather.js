import React from "react";
import "./App.css";
export default function TodayWeather(props) {
  const container = document.getElementsByClassName("container");
  return (
    <div
      className="container"
      style={{ backgroundColor: props.backgroundPicker(props.nbID) }}
    >
      <div className="today-container">
        <div className="today-icon">
          <img className="img" src={props.icon(props.nbID)} alt="storm icon" />
        </div>
        <div className="today-txt">{props.description}</div>
        <div className="mt-25">
          <span className="bold">Temperature</span>
          {props.tempMin}&#8451; to {props.tempMax}&#8451;
        </div>
        <div className="mt-25">
          <span className="bold">Humidity</span> {props.humidity}%
          <span className="bold2">Pressure</span> {props.pressure}
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}
