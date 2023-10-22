import Link from "next/link";
/*import NewItem from "./new-item";

export default function Page(){
    return(
        <main>
            <NewItem />
            <Link href="../">&lt;- Back</Link>
        </main>
    );
}*/

import NewItem from './new-item';

function Week4Page() {
  return (
    <div>
      <h1>Week 4: New Item</h1>
      <NewItem />
    </div>
  );
}

export default Week4Page;
