import Image from "next/image";
import logo from "./assets/logo.png";
import landing from "./assets/landing.png";


export default function Home() {
  return (
    <>
    <nav>
      <div className="flex justify-between items-center px-8 py-2 max-w-[1200px] mx-auto">
        <figure className="w-40">
          <Image src={logo} alt="logo" />
        </figure>
        <ul className="flex justify-between space-x-4 list-none">
          <li>Login</li>
          <li>About</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </div>
    </nav>
    <section>
      <div className="flex gap-72 px-8 py-16 max-w-[1200px] mx-auto">
        <div>
      <h1 className="text-4xl font-bold pb-6">
        Gain more knowledge <br/>in less time
      </h1>
      <p className="pb-6 text-xl">
        Great summaries for busy people, <br/>
        individuals who barely have time to read, <br/>
        and even people who don’t like to read.
      </p>
      <button className="bg-[#2bd97c] py-2 px-40 rounded">
        Login
      </button>
        </div>
        <div>
          <figure className="w-full max-w-md">
            <Image src={landing} alt="Illustration of a person reading a summary"/>
          </figure>
        </div>
      </div>
    </section>
    </>
  );
}
