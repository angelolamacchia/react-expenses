import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  //console.log(props.items);
  // console.log(props.filteredItems);

  var dataChart = [
    { label: "Gen", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Mag", value: 0 },
    { label: "Giu", value: 0 },
    { label: "Lug", value: 0 },
    { label: "Ago", value: 0 },
    { label: "Set", value: 0 },
    { label: "Ott", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dic", value: 0 },
  ];

  props.items.forEach(item => {
      const monthItem = item.date.getMonth();
      dataChart[monthItem].value += item.price;
  });

  return <Chart dataChart={dataChart}/>;
};

export default ExpenseChart;
