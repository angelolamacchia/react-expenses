import React from "react";
import { ExpenseItem } from "./ExpenseItem";

const ExpensesList = ({ yearSelected, filteredItems, items }) => {
  let expenseContent = <p className="no_expenses">Non ci sono spese</p>;

  if (filteredItems.length > 0) {
    expenseContent = filteredItems.map((el) => {
      return <ExpenseItem key={el.id} item={el} />;
    });
  }

  return yearSelected === "all"
    ? items.map((el) => {
        return <ExpenseItem key={el.id} item={el} />;
      })
    : expenseContent;
};

export default ExpensesList;
