import React from "react";
import "./App.css";
import Hours from "./Hours";
export default function HourlyWeather(props) {
  return (
    <div
      className="container extend"
      style={{ backgroundColor: props.backgroundPicker(props.nbID) }}
    >
      <div className="hourly-title"></div>
      <div className="row">
        {props.list.map(list => (
          <Hours
            time={list.dt_txt.split(" ")[1]}
            temp={list.main.temp}
            nbId={list.weather[0].id}
            icon={props.icon}
          />
        ))}
      </div>
    </div>
  );
}
