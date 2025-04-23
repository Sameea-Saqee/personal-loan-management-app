import Link from "next/link";

export default function TodoList() {
    return (
        <div>
            <h1>Todo List</h1>
            <Link href="/todoitem">
                Go to todo item page
            </Link>
        </div>
    );
}