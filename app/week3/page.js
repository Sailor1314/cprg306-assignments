import Link from "next/link";
import ItemList from "./item-list";

export default function Page(){
    return(
        <main>
            <h1>My Item</h1>
            <ItemList />
            <Link href="../">&lt;- Back</Link>
        </main>
    )
}