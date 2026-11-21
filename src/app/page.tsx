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
        <div className="flex justify-between items-center px-24 py-4 max-w-[1200px] mx-auto">
          <figure className="w-50">
            <Image src={logo} alt="logo" />
          </figure>
          <ul className="flex justify-between space-x-6 list-none">
            <li className="hover:text-[#2bd97c] cursor-pointer">Login</li>
            <li className="hidden sm:block cursor-not-allowed">About</li>
            <li className="hidden sm:block cursor-not-allowed">Contact</li>
            <li className="hidden sm:block cursor-not-allowed">Help</li>
          </ul>
        </div>
      </nav>
      <section>
        <div className="flex flex-row gap-4 lg:gap-48 px-24 py-10 max-w-[1200px] mx-auto">
          <div className="text-center md:text-left m-2">
            <h1 className="text-[40px] font-bold pb-8 leading-[1.2]">
              Gain more knowledge 
              in less time
            </h1>
            <p className="pb-6 text-xl font-light">
              Great summaries for busy people, <br />
              individuals who barely have time to read, <br />
              and even people who don’t like to read.
            </p>
            <button className="bg-[#2bd97c] py-2 px-32 rounded cursor-pointer hover:bg-green-700">
              Login
            </button>
          </div>
          <div>
            <figure className="hidden md:block w-[400px] h-[400px]">
              <Image
                src={landing}
                alt="Illustration of a person reading a summary"
              />
            </figure>
          </div>
        </div>
      </section>
      
<section className="py-12 md:py-6">
  <h2 className="text-center text-3xl md:text-[32px] font-bold tracking-tight text-[#002b40] px-8 max-w-[1200px] mx-auto mb-8">
    Understand books in few minutes
  </h2>

  <div className="flex flex-col px-24 md:flex-row gap-10 md:gap-10 justify-between items-center md:items-start px-8 max-w-[1200px] mx-auto pb-8">
    {/* First feature */}
    <div className="flex flex-col items-center text-center flex-1">
      <Image
        className="w-16 h-16 mb-2"
        src={document}
        alt="document"
      />
      <h3 className="text-[24px] font-medium tracking-tight text-[#002b40] mb-2">
        Read or listen
      </h3>
      <p className="text-[#002b40] font-light text-[18px]">
        Save time by getting the core ideas from the best books.
      </p>
    </div>

    {/* Second feature */}
    <div className="flex flex-col items-center text-center flex-1">
      <Image
        className="w-16 h-16 mb-2"
        src={lightbulb}
        alt="lightbulb"
      />
      <h3 className="text-[24px] font-medium tracking-tight text-[#002b40] mb-2">
        Find your next read
      </h3>
      <p className="text-[#002b40] font-light text-[18px]">
        Explore book lists and personalized recommendations.
      </p>
    </div>

    {/* Third feature */}
    <div className="flex flex-col items-center text-center flex-1">
      <Image
        className="w-16 h-16 mb-2"
        src={microphone}
        alt="microphone"
      />
      <h3 className="text-[24px] font-medium tracking-tight text-[#002b40] mb-2">
        Briefcasts
      </h3>
      <p className="text-[#002b40] font-light text-[18px]">
        Gain valuable insights from briefcasts
      </p>
    </div>
  </div>
</section>

      <section>
  {/* FIRST STATISTICS SECTION */}
 <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8 px-24 py-2 max-w-[1200px] mx-auto my-8">
    {/* Gray text */}
    <div className="flex flex-col items-start text-center md:items-start md:text-left gap-4">
      <p className="text-3xl lg:text-4xl font-medium text-[#6b757b] mb-4">
        Enhance your knowledge
      </p>
      <p className="text-3xl lg:text-4xl font-medium text-[#6b757b] mb-4">
        Achieve greater success
      </p>
      <p className="text-3xl lg:text-4xl font-medium text-[#6b757b] mb-4">
        Improve your health
      </p>
      <p className="text-3xl lg:text-4xl font-medium text-[#6b757b] mb-4">
        Develop better parenting skills
      </p>
      <p className="text-3xl lg:text-4xl font-medium text-[#6b757b] mb-4">
        Increase happiness
      </p>
      <p className="text-3xl font-medium text-[#6b757b]">
        Be the best version of yourself!
      </p>
    </div>

    {/* Statistics box */}
    <div className="flex w-full max-w-[500px] flex-col justify-evenly gap-6 bg-[#f0f5f4] px-8 py-12">
      <div className="flex gap-4 mb-2 mx-2 max-w-[400px]">
        <p className="text-xl text-[#0365f2] font-bold">93%</p>
        <p className="text-xl">
          of Summarist members{" "}
          <span className="font-bold">significantly increase</span>{" "}
          reading frequency.
        </p>
      </div>

      <div className="flex gap-4 mb-2 mx-2 max-w-[400px]">
        <p className="text-xl text-[#0365f2] font-bold">96%</p>
        <p className="text-xl">
          of Summarist members{" "}
          <span className="font-bold">establish better</span> habits.
        </p>
      </div>

      <div className="flex gap-4 mb-2 mx-2 max-w-[400px]">
        <p className="text-xl text-[#0365f2] font-bold">90%</p>
        <p className="text-xl">
          have made{" "}
          <span className="font-bold">significant positive</span> change
          to their lives.
        </p>
      </div>
    </div>
  </div>


{/* SECOND STATISTICS SECTION */}
<div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8 px-24 py-2 max-w-[1200px] mx-auto my-8">

  {/* Statistics box */}
  <div className="order-2 md:order-1 flex w-full max-w-[500px] flex-col justify-evenly gap-6 bg-[#f0f5f4] px-8 py-12">
    <div className="flex gap-4 mb-2 mx-2 max-w-[400px]">
      <p className="text-xl text-[#0365f2] font-bold">91%</p>
      <p className="text-xl">
        of Summarist members{" "}
        <span className="font-bold">
          report feeling more productive
        </span>{" "}
        after incorporating the service into their daily routine.
      </p>
    </div>

    <div className="flex gap-4 mb-2 mx-2 max-w-[400px]">
      <p className="text-xl text-[#0365f2] font-bold">94%</p>
      <p className="text-xl">
        of Summarist members have{" "}
        <span className="font-bold">noticed an improvement</span>{" "}
        in their overall comprehension and retention of information.
      </p>
    </div>

    <div className="flex gap-4 mb-2 mx-2 max-w-[400px]">
      <p className="text-xl text-[#0365f2] font-bold">88%</p>
      <p className="text-xl">
        of Summarist members{" "}
        <span className="font-bold">feel more informed</span> about
        current events and industry trends since using the platform.
      </p>
    </div>
  </div>

  {/* Gray text */}
  <div className="order-1 md:order-2 flex flex-col items-start text-center md:items-end md:text-right gap-4">
    <p className="text-3xl lg:text-4xl font-medium text-[#6b757b] mb-4">
      Expand your learning
    </p>
    <p className="text-3xl lg:text-4xl font-medium text-[#6b757b] mb-4">
      Accomplish your goals
    </p>
    <p className="text-3xl lg:text-4xl font-medium text-[#6b757b] mb-4">
      Strengthen your vitality
    </p>
    <p className="text-3xl lg:text-4xl font-medium text-[#6b757b] mb-4">
      Become a better caregiver
    </p>
    <p className="text-3xl lg:text-4xl font-medium text-[#6b757b] mb-4">
      Improve your mood
    </p>
    <p className="text-3xl lg:text-4xl font-medium text-[#6b757b]">
      Maximize your abilities
    </p>
  </div>
</div>
</section>
    </>
  );
}
