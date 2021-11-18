import React from "react";
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  
  const pickYear = (e) => {
    const year = e.target.value;

    props.saveDataExpenseFilter(year);
  };

  return (
    <div className='year_selector'>
      <div>
        <label className='year_label'>Filter by year</label>
        <select onChange={pickYear} defaultValue={props.yearSelected}>
          <option value="all"></option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
