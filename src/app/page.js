import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="fixed">
        <h1>Nurii</h1>
        <ul>
          <li>Whitepaper</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <p>
        Nurii is a catalyst for innovation, a bridge between traditional finance
        and the blockchain future.
      </p>
      <p>Coming soon!</p>
    </main>
  );
}
