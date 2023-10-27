'use client'
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import Link from "next/link";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const handleAddItem = (newItem) =>{
        setItems( prevItems => [...prevItems, newItem] );
    };

    const handleItemSelect = (selectedItem) => {
        const cleanedName = selectedItem.name.split(',')[0].trim().replace(/🍗|🍞|🥚|🍌|🥦|🧻|🍽️|🧼|🥛|,/g, '');
        setSelectedItemName(cleanedName);
      };

    return(
        <main>
            
            <div className="flex p-5">
                <div className="flex-1">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>

                <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
                </div>
        </main>
    );
}