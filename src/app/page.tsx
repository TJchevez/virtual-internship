import Image from "next/image";
import logo from "./assets/logo.png";
import landing from "./assets/landing.png";


export default function Home() {
  return (
    <>
    <nav>
      <div className="flex justify-between items-center px-8 py-2">
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
      <div className="flex">
        <div>
      <div>
        Gain more knowledge in less time
      </div>
      <div>
        Great summaries for busy people, individuals who barely have time to read, and even people who don’t like to read.
      </div>
      <button>
        Login
      </button>
        </div>
        <div>
          <figure>
            <Image src={landing} alt="logo"/>
          </figure>
        </div>
      </div>
    </section>
    </>
  );
}
