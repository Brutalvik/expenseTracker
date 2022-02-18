import "./ExpensesFilter.css";
const ExpenseFilter = ({ selectedYear, highlightedYear }) => {
  const years = ["2020", "2021", "2022", "2023", "2024", "2025"];
  const handleYearSelect = (e) => {
    selectedYear(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={highlightedYear} onChange={handleYearSelect}>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
