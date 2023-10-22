import Link from "next/link";
import MyComp from "./StudentInfo";

export default function Home() {
  return (
    <main>
      <h1 className="text-[50px] font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <MyComp />
      <ul>
        <li><Link href="week2">Week2</Link></li>
        <li><Link href="week3">week3</Link></li>
        <li><Link href="week4">week4</Link></li>
        <li><Link href="week5">week5</Link></li>
        <li><Link href="week6">week6</Link></li>
      </ul>
    </main>
  );
}
