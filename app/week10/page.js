'use client'

import Link from "next/link";
import { dbAddItem } from "./_services/shopping-list-service";
import { useUserAuth } from "./_utils/auth-context";

export default function Page(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

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

    console.log(user);




    return(
        <main>
            <header>
                <hi>Login Page</hi>
            </header>
            <section>
                { user ? (
                    <div>
                        <p>Welcome, {user.displayName} | You are signed in!</p>
                        <button onClick={()=> dbAddItem(user.uid, itemObj)}>Add Test Item</button>
                        <button className="text-lg m-2 hover:underline" onClick={handleSignOut}>
                            Sign Out
                        </button>
                        <li><Link href="week10/shopping-list">Shopping List</Link></li>
                    </div>
                ): (
                    <div>
                        <button className="text-lg m-2 hover:underline" onClick={handleSignIn}>
                            Sign In
                        </button>
                    </div>
                )}
            </section>
        </main>
    )
}