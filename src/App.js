import React, { useState } from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { Card } from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const itemsInit = [
    {
      id: Math.random(),
      date: new Date(Date.UTC(2020, 5, 21)),
      name: "Bolletta Vodafone",
      price: 85.0,
    },
    {
      id: Math.random(),
      date: new Date(Date.UTC(2021, 0, 21)),
      name: "Pizza",
      price: 18.5,
    },
    {
      id: Math.random(),
      date: new Date(Date.UTC(2021, 11, 20)),
      name: "Benzina",
      price: 50.0,
    },
    {
      id: Math.random(),
      date: new Date(Date.UTC(2021, 10, 11)),
      name: "PC",
      price: 550.0,
    },
    {
      id: Math.random(),
      date: new Date(Date.UTC(2021, 9, 23)),
      name: "Smartphone",
      price: 430.0,
    },
  ];
  const [items, setItems] = useState(itemsInit);

  const saveDataExpense = (data) => {
    // console.log(data.date);
    setItems((prev) => {
      //console.log(prev)
      return [data, ...prev];
    });
  };

  return (
    <div className="App">
      <h1 className="big_title">Calcola le spese giornaliere</h1>

      <Card className="expenses">
        <NewExpense saveDataExpense={saveDataExpense} />
        <Expenses items={items} />
      </Card>
    </div>
  );
}

export default App;
