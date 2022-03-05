import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
import InputBox from "../components/InputBox/InputBox";
import Tabs from "../components/Tabs/Tabs";

export default function Home() {
  
    return (
        <Layout>
            <Head>
                <title>Kaarigar</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="grid lg:grid-cols-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full font-hk">
                <div className="flex flex-col gap-8 text-center">
                    <span className="text-4xl text-[#3D3D3D] ">
                        Find Your Kaarigar
                    </span>
                    <InputBox text="Search across 50+ kaarigar in your area" />
                    <span className="text-[#ED821F] text-xl font-bold">OR</span>
                    <span className="text-[#3D3D3D] font-extrabold text-xl">
                        Choose from the most popular ones
                    </span>
                    <div className="flex items-center justify-center gap-4">
                        <Tabs text="Florist" />
                        <Tabs text="Potter" />
                        <Tabs text="Handicrafts" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image
                        src="/images/home-man.png"
                        height={430}
                        width={537}
                        alt="home-man"
                    />
                </div>
            </div>
        </Layout>
    );
}
