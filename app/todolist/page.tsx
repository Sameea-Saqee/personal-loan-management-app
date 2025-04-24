import Link from "next/link";

export default function TodoList() {
    return (
        <div>
            <h1>Todo List</h1>
            <p>This is para</p>
            <Link href="/todoitem">
                Go to todo-item
            </Link>
        </div>
    );
}