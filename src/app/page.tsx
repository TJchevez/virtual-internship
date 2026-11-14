import Image from "next/image";
import logo from "./assets/logo.png";
import landing from "./assets/landing.png";
import document from "./assets/file-lines-solid-full.svg";
import lightbulb from "./assets/lightbulb-solid-full.svg";
import microphone from "./assets/microphone-solid-full.svg";

export default function Home() {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center px-8 py-2 max-w-[1200px] mx-auto">
          <figure className="w-40">
            <Image src={logo} alt="logo" />
          </figure>
          <ul className="flex justify-between space-x-4 list-none">
            <li className="hover:text-[#2bd97c] cursor-pointer">Login</li>
            <li className="cursor-not-allowed">About</li>
            <li className="cursor-not-allowed">Contact</li>
            <li className="cursor-not-allowed">Help</li>
          </ul>
        </div>
      </nav>
      <section>
        <div className="flex gap-72 px-8 py-16 max-w-[1200px] mx-auto">
          <div>
            <h1 className="text-4xl font-bold pb-6">
              Gain more knowledge <br />
              in less time
            </h1>
            <p className="pb-6 text-xl">
              Great summaries for busy people, <br />
              individuals who barely have time to read, <br />
              and even people who don’t like to read.
            </p>
            <button className="bg-[#2bd97c] py-2 px-40 rounded cursor-pointer hover:bg-green-700">
              Login
            </button>
          </div>
          <div>
            <figure className="w-full max-w-md">
              <Image
                src={landing}
                alt="Illustration of a person reading a summary"
              />
            </figure>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center text-4xl font-bold tracking-tight text-[#002b40] px-8 py-2 max-w-[1200px] mx-auto">
          Understand books in few minutes
        </h2>
        <div className="flex gap-64 justify-between items-center px-8 py-2 max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <Image className="w-20 h-20 mb-2" src={document} alt="document" />
            <h3 className="text-xl font-bold tracking-tight text-[#002b40] mb-2">
              Read or listen
            </h3>
            <p className="text-[#002b40]">
              Save time by getting the core ideas from the best books.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image className="w-20 h-20 mb-2" src={lightbulb} alt="lightbulb" />
            <h3 className="text-xl font-bold tracking-tight text-[#002b40] mb-2">
              Find your next read
            </h3>
            <p className="text-[#002b40]">
              Explore book lists and personalized recommendations.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              className="w-20 h-20 mb-2"
              src={microphone}
              alt="microphone"
            />
            <h3 className="text-xl font-bold tracking-tight text-[#002b40] mb-2">
              Briefcasts
            </h3>
            <p className="text-[#002b40]">
              Gain valuable insights from briefcasts
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center px-8 py-2 max-w-[1200px] mx-auto my-8">
          <div>
            <p className="text-3xl font-bold text-[#6b757b] mb-4">Enhance your knowledge</p>
            <p className="text-3xl font-bold text-[#6b757b] mb-4">Achieve greater success</p>
            <p className="text-3xl font-bold text-[#6b757b] mb-4">Improve your health</p>
            <p className="text-3xl font-bold text-[#6b757b] mb-4">Develop better parenting skills</p>
            <p className="text-3xl font-bold text-[#6b757b] mb-4">Increase happiness</p>
            <p className="text-3xl font-bold text-[#6b757b]">Be the best version of yourself!</p>
          </div>
          <div className="flex w-full max-w-[560px] flex-col gap-6 bg-[#f0f5f4] my-4 px-8 py-12">
              <div className="flex gap-4 mb-2 mx-2 max-w-[400px]">
                <p className="text-xl text-[#0365f2] font-bold">93%</p>
                <p className="text-xl">
                  of Summarist members <span className="font-bold ">significantly increase</span> reading frequency.
                </p>
              </div>
              <div className="flex gap-4 mb-2 mx-2 max-w-[400px]">
                <p className="text-xl text-[#0365f2] font-bold">96%</p>
                <p className="text-xl">of Summarist members <span className="font-bold">establish better</span> habits.</p>
              </div>
              <div className="flex gap-4 mb-2 mx-2 max-w-[400px]">
                <p className="text-xl text-[#0365f2] font-bold">90%</p>
                <p className="text-xl">have made <span className="font-bold">significant positive</span> change to their lives.</p>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
