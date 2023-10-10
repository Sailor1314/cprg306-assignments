'use client'
import { useState } from "react";
import Item from "./item";
import listData from "./items";

export default function ItemList(){
    let listArray = listData.map( (list) => ({...list}) );

    let[filter, setFilter] = useState("all");
    let[sortBy, setSortBy] = useState("name");
    let[sortBy1, setSortBy1] = useState("name");

  // Function to handle sorting button click and update sortBy state
  const handleSortButtonClick = (value) => {
    setSortBy1(value);
  };

    listArray = listArray.sort( (a, b) => {
        if( isNaN( parseInt( a[sortBy1] ) ) ){

            let nameA = a[sortBy1].toUpperCase();
            let nameB = b[sortBy1].toUpperCase();
            if( nameA < nameB ){
                return -1;
            }
            if( nameA > nameB ){
                return 1;
            }
            return 0;

        } else {

            return a[sortBy] - b[sortBy]
        }
    } );

    if(filter != "all"){
        listArray = listArray.filter( (list) => list.category === filter)

    }
    
    console.log(filter);
    return(
        <div>
            <div className="flex pl-10 pt-5 pb-10 bg-blue-300">

                <div className="flex-1">
                    <label>Sort by:</label>
                    <select onChange={ (e) => setSortBy(e.target.value) }>
                        <option value="name">Name</option>
                        <option value="category">Category</option>
                    </select>
                </div>

                <div className="flex-1">
                    <label>Filter by:</label>
                    <select onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="household">Household</option>
                        <option value="produce">Produce</option>
                    </select>
                </div>
            </div>
            <div>
      {/* Render buttons with conditional styling based on sortBy */}
      <button
        onClick={() => handleSortButtonClick("name")}
        style={{
          backgroundColor: sortBy1 === "name" ? "lightblue" : "transparent",
        }}
      >
        Name
      </button>
      <button
        onClick={() => handleSortButtonClick("category")}
        style={{
          backgroundColor: sortBy1 === "category" ? "lightblue" : "transparent",
        }}
      >
        Category
      </button>

      {/* Render your list of items */}
      {/* ...
        Your item list rendering logic here, sorted based on the sortBy state.
      ... */}
    </div>

            <section className="grid grid-cols-3 gap-5 ">
                { listArray.map( (list) => ( <Item list={list} /> ) )}
            </section>
        </div>
    );
}