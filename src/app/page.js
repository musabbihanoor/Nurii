import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <div className="bg-[url('/images/background1.png')] bg-contain bg-no-repeat bg-center h-[100vh] w-full absolute top-0 left-0 z-[-1]"></div>
      <p className="md:text-5xl text-3xl sm:flex hidden font-bold flex-col">
        <span>Nurii is a catalyst for innovation, a </span>
        <span>bridge between traditional finance </span>
        <span>and the blockchain future.</span>
      </p>
      <p className="text-xl sm:hidden block font-bold px-10">
        Nurii is a catalyst for innovation, a bridge between traditional finance
        and the blockchain future.
      </p>
      <p className="mt-20 texl-xl">Coming soon!</p>
    </main>
  );
}
