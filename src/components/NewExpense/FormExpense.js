import React, { useState } from "react";
import "./FormExpense.css";

const FormExpense = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDate, setInputDate] = useState("");

  const [visibilityForm, setVisibilityForm] = useState(false);

  const changeName = (e) => {
    setInputName(e.target.value);
  };
  const changePrice = (e) => {
    setInputPrice(e.target.value);
  };
  const changeDate = (e) => {
    setInputDate(e.target.value);
  };

  const saveDataForm = (e) => {
    e.preventDefault();

    const dataForm = {
      id: Math.random(),
      name: inputName,
      price: +inputPrice,
      date: new Date(inputDate),
    };

    props.saveDataFormExpense(dataForm);

    setInputName("");
    setInputPrice("");
    setInputDate("");

    setVisibilityForm(false);
  };

  function changeVisForm() {
    setVisibilityForm(!visibilityForm);
  }

  var form = (
    <div className='button_add_expense'>
      <button onClick={changeVisForm}>Aggiungi spesa</button>
    </div>
  );

  if (visibilityForm === true) {
    form = (
      <form className="form_expense" onSubmit={saveDataForm}>
        <div className="row">
          <div className="col-3">
            <div>
              <label>Spesa</label>
            </div>
            <div>
              <input
                type="text"
                name="expense_name"
                value={inputName}
                onChange={changeName}
              />
            </div>
          </div>
          <div className="col-3">
            <div>
              <label>Prezzo</label>
            </div>
            <div>
              <input
                type="number"
                name="expense_price"
                min="0.1"
                step="0.1"
                value={inputPrice}
                onChange={changePrice}
              />
            </div>
          </div>
          <div className="col-3">
            <div>
              <label>Data</label>
            </div>
            <div>
              <input
                type="date"
                name="expense_date"
                min="2019-01-01"
                max="2022-12-31"
                value={inputDate}
                onChange={changeDate}
              />
            </div>
          </div>
          <div className="col-3 input_container">
            <button onClick={changeVisForm}>Annulla</button>
            <button type="submit">Aggiungi spesa</button>
          </div>
        </div>
      </form>
    );
  }

  return form;
};

export default FormExpense;