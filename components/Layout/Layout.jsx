import Image from "next/image";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
    const router = useRouter();
    const clickHandler = (e) => {
        e.preventDefault();
        router.push({
            pathname: `/`,
        });
    };

    return (
        <div>
            <header className="w-full flex items-center justify-between px-6 text-[#3D3D3D] font-hk">
                <div className="flex items-center gap-2 flex-col hover:cursor-pointer" onClick={clickHandler}>
                    <Image
                        src="/images/logo.png"
                        width={212}
                        height={100}
                        alt="logo"
                    />
                    <div className="flex flex-col text-lg font-bold">
                        <div>Ab Har Kaarigar Bechega</div>
                    </div>
                </div>
                <div className="flex gap-2 text-lg">
                    <Image
                        src="/images/log-in.png"
                        alt="login"
                        height={20}
                        width={27}
                    />
                    Login as Kaarigar / Ghrahak
                </div>
            </header>
            {children}
        </div>
    );
};

export default Layout;
