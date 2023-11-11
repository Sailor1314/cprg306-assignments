'use client'

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

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
                        <p>Welcome, {user.email}</p>
                        <button className="text-lg m-2 hover:underline" onClick={handleSignOut}>
                            Sign Out
                        </button>
                        <li><Link href="week8/shopping-list">Shopping List</Link></li>
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