import Link from "next/link";
export default function TodoItem() {
    return (
        <div>
            <h1>Todo Item</h1>
            <Link href="/">
                Back to home
            </Link>
        </div>
    );
}