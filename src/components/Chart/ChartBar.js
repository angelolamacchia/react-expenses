import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let chartHeight = "0%";

  if (props.value > 0) {
    // console.log(props.maxVal);
    // console.log(props.value);
    chartHeight = Math.round((props.value / props.maxVal) * 100) + "%";
    //console.log(chartHeight)
  }

  return (
    <div className="chart_bar col-1">
      <div
        className="chart_content"
        style={{ height: chartHeight, background: "tomato" }}
      ></div>
      <div className="chart_lable">{props.label}</div>
    </div>
  );
};

export default ChartBar;
