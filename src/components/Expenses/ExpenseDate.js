import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const monthFormat = date.toLocaleString("it-IT", { month: "long" });
  const dayFormat = date.toLocaleString("it-IT", { day: "2-digit" });
  const yearFormat = date.toLocaleString("it-IT", { year: "numeric" });

  return (
    <div className="expense_data col-2">
      <div className='data_container'>   
        <div>{dayFormat}</div>
        <div className='month'>{monthFormat}</div>
        <div>{yearFormat}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
