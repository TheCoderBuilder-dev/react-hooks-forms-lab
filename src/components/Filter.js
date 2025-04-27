import React from "react";

function Filter({ search, onSearchChange, selectedCategory, onCategoryChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search for items..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        name="categoryFilter"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
