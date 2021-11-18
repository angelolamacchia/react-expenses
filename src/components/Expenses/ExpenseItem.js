import "./ExpenseItem.css";
import {Card} from "../UI/Card";
import ExpenseDate from './ExpenseDate';
import React from "react";

function ExpenseItem({ item }) {
  
  const { date, name, price } = item;

  return (
    <Card>
      <div className="container">
        <div className="expense_item">
          <div className="row">
            <ExpenseDate date={date}/>
            <div className="expense_thing col-8">{name}</div>
            <div className=" col-2 expense_price_container">
              <span className="expense_price">€{price}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export { ExpenseItem };
