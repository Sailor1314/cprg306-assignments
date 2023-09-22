import Link from "next/link";
import MyComp from "../StudentInfo";

export default function Page(){
    return(
        <main>
            <h1 className="text-[50px] font-bold">My Shopping List</h1>
            <MyComp />
            <Link href="../">&lt;-Back</Link>
        </main>
    );
}