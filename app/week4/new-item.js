'use client'

import { useState } from "react";

export default function NewItem(){
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = {
            name,
            quantity,
            category,
          };
          console.log(item);

          // Display an alert with the current state
          alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
      
          // Reset the state variables to their initial values
          setName('');
          setQuantity(1);
          setCategory('produce');
        };
    return (
        <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <label>
            Name:
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </label>

            {/* Quantity Field */}
            <label>
            Quantity:
            <input
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
            />
            </label>

            {/* Category Field */}
            <label>
            Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen-foods">Frozen Foods</option>
                <option value="canned-goods">Canned Goods</option>
                <option value="dry-goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>
            </label>

            {/* Submit Button */}
            <button type="submit">Submit</button>
        </form>
        );
}