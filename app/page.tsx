import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is my Home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum ipsa repellendus magni, officia fugit nulla officiis ex qui nihil minus ea sint laboriosam quibusdam voluptates delectus quod! Ad, magnam!</p>
      <Link href="/todolist">
        Go to todolist
      </Link>
     
    </div>
  );
}

