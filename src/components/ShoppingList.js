import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function onSearchChange(event) {
    setSearch(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item => {
    if(search === ''){
      return true
    } else {
      const name = item.name.toUpperCase()
      return name.includes(search.toUpperCase())
    }
  });


  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
