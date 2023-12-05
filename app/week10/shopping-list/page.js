'use client'
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import { dbAddItem } from "../_services/shopping-list-service";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const handleAddItem = (newItem) =>{
        setItems( prevItems => [...prevItems, newItem] );
    };

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    const handleItemSelect = (selectedItem) => {
        const cleanedName = selectedItem.name.split(',')[0].trim().replace(/🍗|🍞|🥚|🍌|🥦|🧻|🍽️|🧼|🥛|,/g, '');
        setSelectedItemName(cleanedName);
      };
    
      let itemObj = {
        name: 'apple',
        category: 'produce',
        quantity: 3
    }

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }
 

    

    return(
        <main>
            {
                user? <div className="flex p-5">
                    <p> {user.displayName}. You are signed in!</p>
                    <button onClick={()=> dbAddItem(user.uid, itemObj)}>Add Test Item</button>
                <div className="flex-1">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>

                <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
                </div>: <p>Your need to be signed in to view this page.</p>
            }
            
        </main>
    );
}