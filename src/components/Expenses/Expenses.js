import React, { useState } from "react";


import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filtredYear, setFiltredYear] = useState('2020');

  const filterChnageHandler = selectedYear => {
    setFiltredYear(selectedYear);
  };

  const filteredList = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filtredYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filtredYear}
          onChangeFilter={filterChnageHandler}
        />
        <ExpensesChart expenses={filteredList} />
        <ExpensesList items={filteredList} />
      </Card>
    </div>
  );
};

export default Expenses;