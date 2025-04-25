import Link from "next/link";

export default function TodoList() {
    return (
        <div className="flex flex-col items-center font-serif bg-gray-100 text-xl mt-10 rounded-xl p-8 mx-15 ">
            <div className="text-center mt-4">
                <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
                <p className="mt-8 p-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto qui, necessitatibus<br></br> vero unde consectetur perferendis labore fugit quis minus corporis? </p>
                <Link href="/todoitem" className="rounded-xl bg-black text-white mt-8 p-2">
                    Go to todo-item
                </Link>
            </div>
        </div>
    );
}