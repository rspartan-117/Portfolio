import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import Link from "next/link";
import gemini_thumbnail from "../public/gemini_thumbnail.png";
import quote_thumbnail from "../public/quote_thumbnail.png";
import youtube_thumbnail from "../public/youtube_thumbnail.png"
import weather_thumbnail from "../public/weather_thumbnail.png"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen w-full sm:w-full">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">PORTFOLIO WEBSITE</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1ardCJviRSlKovEuEEoIb1g6XAtBEn_zX/view?usp=drivesdk"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Ritek Sharma
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Front-End Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Frontend developer with a passion for building beautiful and functional web interfaces.Skilled in crafting engaging and user-friendly interfaces that bring ideas to life. 
            
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <Link href="https://www.linkedin.com/in/ritik-sharma-cse/">
              <AiFillLinkedin className="cursor-pointer"/>
              </Link>
              <Link href="https://github.com/rspartan-117">
              <AiFillGithub  className="cursor-pointer"/>
              </Link>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="Icon"/>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Skills</h3>
           
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer a wide range of services, including responsive web design, 
            interactive front-end development, and optimized code solutions
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-500 flex-1">
              <Image src={design} width={100} height={100} alt="Icon" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
              High-Quality Development
              </h3>
              <p className="py-2">
              Building efficient and scalable code to create seamless user experiences.&apos;
              </p>
              <h4 className="py-4 text-teal-500  dark:text-teal-200">Technologies I Work With</h4>
              <p className="text-gray-900 py-1">HTML & CSS</p>
              <p className="text-gray-900 py-1">JavaScript/Typescript</p>
              <p className="text-gray-900 py-1">React</p>
              <p className="text-gray-900 py-1">NextJs</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-500  flex-1">
              <Image src={code} width={100} height={100} alt="Icon" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
              User-Centric Experiences
              </h3>
              <p className="py-2">
              Designing and developing intuitive interfaces that prioritize user experience and accessibility.
              </p>
              <h4 className="py-4 text-teal-500  dark:text-teal-200">Key Frontend Practices</h4>
              <p className="text-gray-900 py-1">Responsive Design</p>
              <p className="text-gray-900 py-1">Accessible Components</p>
              <p className="text-gray-900 py-1">Interactive Animations</p>
              <p className="text-gray-900 py-1">Cross-Browser Compatibility</p>
            </div>
            
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white "> MY PROJECTS</h3>
           
           
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <Link href="https://comfy-hummingbird-67bcac.netlify.app">
            <div>
            <h1 className="text-xl font-bold mt-4 text-cyan-50 cursor-pointer">Gemini Clone</h1>
              <Image
                className="rounded-lg object-contain  cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={gemini_thumbnail}
                alt="Gemini Clone"
              
                
              />
              </div>
              
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
            <Link href="https://capable-donut-8b0645.netlify.app">
            <div>
            <h1 className="text-xl font-bold mt-4 text-cyan-50 cursor-pointer">Youtube Clone</h1>
              <Image
                className="rounded-lg object-contain  cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={youtube_thumbnail}
                alt="Youtube Clone"
              />
              </div>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
            <Link href="https://super-sherbet-2c13ad.netlify.app">
            <div>
            <h1 className="text-xl font-bold mt-4 text-cyan-50 cursor-pointer">Weather App</h1>
              <Image
                className="rounded-lg object-contain  cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={weather_thumbnail}
               alt="Weather App"
              />
              </div>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
            <h1 className="text-xl font-bold mt-4 text-cyan-50 cursor-pointer">Quote Generator</h1>
            <Link href="https://fastidious-cocada-889604.netlify.app">
            <div>
              <Image
                className="rounded-lg object-contain  cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={quote_thumbnail}
                alt="Quote_Generator"
                
              />
              </div>
              </Link>
            </div>
            
           
          </div>
        </section>
      </main>
    </div>
  );
}
