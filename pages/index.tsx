import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { BsPersonCircle } from "react-icons/bs"
import videoCall from "../public/media/videoCall.png"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Face Connect</title>
        <meta name="description" content="Let's Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen bg-navy overflow-hidden">
        <span className="blob w-96 -top-24 -left-12  bg-lightBlue" />
        <span className="blob w-96 -bottom-32 left-56  bg-lightYellow" />
        <span className="blob w-96 top-32 -right-32  bg-purple" />
        <div className="overlay "></div>
        <main className="w-full h-full z-10 relative">
          <header className=" w-full p-10  flex justify-between items-center">
            <h1 className="text-white text-4xl">Face Connect</h1>
            <button className="rounded-3xl p-3 flex gap-4 bg-darkBlue justify-between items-center text-white text-lg">
              <BsPersonCircle />
              <span>Login/ Signup</span>
            </button>
          </header>

          <div className="absolute top-1/2 left-10 -translate-y-1/3 w-5/12 flex flex-col items-start justify-between  gap-8">
            <h2 className="text-white text-6xl">Let&apos;s Connect</h2>
            <p className="text-white text-xl leading-loose">
              Vel sed pulvinar mi aliquam varius et egestas dictum. Sit at
              dictum tortor vitae blandit. Porttitor nec ac sed ac sagittis
              pulvinar porta.
            </p>
            <div>
              <button className="bg-lightBlue p-4 rounded-md text-white min-w-1/4">
                CREATE NEW
              </button>
              <button className="bg-yellow p-4 px-8 rounded-md ml-4">
                JOIN
              </button>
            </div>
          </div>
          <div className="absolute top-1/2 -right-36 -translate-y-1/3 scale-75   ">
            <Image src={videoCall} className=" " alt="" />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
