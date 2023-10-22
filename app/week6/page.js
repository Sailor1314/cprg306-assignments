'use client'
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import Link from "next/link";

export default function Page(){
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) =>{
        setItems( prevItems => [...prevItems, newItem] );
    }
    return(
        <main>
            <h2 className="text-4xl text-center p-5">Shopping List</h2>
            <NewItem onAddItem = {handleAddItem} />
            <ItemList items={items} />
            <Link href="../">&lt;- Back</Link>
        </main>
    );
}