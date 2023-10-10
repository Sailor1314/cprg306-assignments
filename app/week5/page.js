import ItemList from "./item-list";

export default function Page(){
    return(
        <main>
            <h2 className="text-4xl text-center p-5">Shopping List</h2>
            <ItemList />
        </main>
    );
}