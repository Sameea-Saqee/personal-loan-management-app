import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center font-serif bg-gray-100 text-xl mt-10 rounded-xl p-8 mx-15 ">
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold mb-6 text-center">This is my Home page</h1>
        <p className="mt-8 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum ipsa repellendus magni, <br></br>officia fugit nulla officiis ex qui nihil minus ea sint laboriosam quibusdam voluptates<br></br> delectus quod! Ad, magnam!</p>
        <Link href="/todolist" className="rounded-xl bg-black text-white mt-8 p-2">
          Go to todolist
        </Link>
      </div>
    </div>
  );
}

