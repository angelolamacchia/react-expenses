import React from "react";
import FormExpense from "./FormExpense.js";

const NewExpense = (props) => {
  const saveDataFormExpense = (data) => {
    const dataForm = {
      ...data,
      id: Math.random().toString(),
    };
    // console.log(dataForm);
    props.saveDataExpense(dataForm);
  };

  return (
    <div className="container-fluid">
      <FormExpense saveDataFormExpense={saveDataFormExpense}/>
    </div>
  );
};

export default NewExpense;
