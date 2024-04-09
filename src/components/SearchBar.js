import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [date, setDate] = useState(getYesterdayDate());

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  function getYesterdayDate() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const year = yesterday.getFullYear();
    const month = String(yesterday.getMonth() + 1).padStart(2, "0");
    const day = String(yesterday.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(keyword, date);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          required
          type="text"
          value={keyword}
          onChange={handleChange}
          className="form-control"
          placeholder="Search articles..."
        />
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          max={getYesterdayDate()}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
