import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css';
import ExpenseChart from "./ExpenseChart";

export function Expenses({ items }) {
  const [yearSelected, setYearSelected] = useState("all");

  const saveDataExpenseFilter = (data) => {
    const dataFilter = data;

    setYearSelected(dataFilter);
    console.log();
  };

  const filteredItems = items.filter((el) => {
    return (
      el.date.toLocaleString("it-IT", { year: "numeric" }) === yearSelected
    );
  });

  return (
    <>
      {yearSelected==='all' ? <ExpenseChart items={items}/> : <ExpenseChart items={filteredItems} />} 
      <ExpenseFilter
        saveDataExpenseFilter={saveDataExpenseFilter}
        yearSelected={yearSelected}
      />
      <ExpensesList yearSelected={yearSelected} filteredItems={filteredItems} items={items}/>
    </>
  );
}
