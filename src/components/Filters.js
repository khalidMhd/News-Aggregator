import React, { useState } from "react";

const Filters = ({ articles, filter, onFilter }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilter(name, value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const sourceArray = articles.filter(
    (obj, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.source === obj.source &&
          t.source !== null &&
          t.source !== undefined &&
          t.source.trim() !== ""
      )
  );

  const authorArray = articles.filter(
    (obj, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.author === obj.author &&
          t.source !== null &&
          t.source !== undefined &&
          t.source.trim() !== ""
      )
  );

  const categoryArray = articles.filter(
    (obj, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.category === obj.category &&
          t.source !== null &&
          t.source !== undefined &&
          t.source.trim() !== ""
      )
  );

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3 className="card-title">
          Filters{" "}
          <i
            className={`fa fa-filter ${showFilters ? "open" : ""}`}
            onClick={toggleFilters}
          ></i>
        </h3>
        {showFilters && (
          <div className="row">
            <div className="col-4 col-md-4 col-sm-12 mb-3">
              <label htmlFor="category" className="form-label">
                Category:
              </label>
              <select
                id="category"
                name="category"
                className="form-select"
                onChange={handleFilterChange}
                value={filter.category}
              >
                <option value="" disabled>
                  Select Category
                </option>
                {categoryArray.map((item, index) => (
                  <option key={index} value={item.category}>
                    {item.category}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-4 col-md-4  col-sm-12 mb-3">
              <label htmlFor="source" className="form-label">
                Source:
              </label>
              <select
                id="source"
                name="source"
                className="form-select"
                onChange={handleFilterChange}
                value={filter.source}
              >
                <option value="" disabled>
                  Select Source
                </option>

                {sourceArray.map((item, index) => (
                  <option key={index} value={item.source}>
                    {item?.source}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-4 col-md-4 col-sm-12 mb-3">
              <label htmlFor="author" className="form-label">
                Authors:
              </label>
              <select
                id="author"
                name="author"
                className="form-select"
                onChange={handleFilterChange}
                value={filter?.author}
              >
                <option value="" disabled>
                  Select Authors
                </option>
                {authorArray.map((item, index) => (
                  <option key={index} value={item.author}>
                    {item.author}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
