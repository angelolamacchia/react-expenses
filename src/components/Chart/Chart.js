import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const itemsVal = props.dataChart.map((val) => val.value);
  const maxVal = Math.max(...itemsVal);
  // console.log(maxVal);
  // console.log(itemsVal);

  return (
    <div className="container">
      <div className="row chart_row">
        {props.dataChart.map((dataBar) => {
          return (
            <ChartBar
              key={dataBar.label}
              label={dataBar.label}
              value={dataBar.value}
              maxVal={maxVal}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
