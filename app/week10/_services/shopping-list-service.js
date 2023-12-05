import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function dbAddItem(userId){
    try{
        let collectionReference = collection(db, "users", userId, "items");
        const addedItemPromise = await addDoc(collectionReference, itemObj);
        console.log(addedItemPromise.id);
    } catch (error) {
        console.error(error);
    }
}