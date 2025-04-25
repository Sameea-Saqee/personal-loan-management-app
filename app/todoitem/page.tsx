import Link from "next/link";
export default function TodoItem() {
    return (
        <div className="flex flex-col items-center font-serif bg-gray-100 text-xl mt-10 rounded-xl p-8 mx-15">
            <h1 className="text-3xl font-bold mb-6 text-center">Todo Item</h1>
            <p className="mt-8 p-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat <br></br>repudiandae incidunt voluptate non aperiam quod. 
            </p>
            <Link href="/" className="rounded-xl bg-black text-white mt-8 p-2">
                Back to home
            </Link>
        </div>
    );
}