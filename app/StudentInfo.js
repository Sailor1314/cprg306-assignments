import Link from "next/link";

export default function MyComp(){
    return(
        <div>
            <p>Name: Zhongfeng Wu</p>
            <p>Course section: cprg 306 E</p>
            <Link href="https://github.com/Sailor1314/cprg306-assignments">GitHub repository</Link>
        </div>
    );
}