import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import Kaarigar from "../../components/Forms/Kaarigar";
import Ghrahak from "../../components/Forms/Ghrahak";
import Signin from "../../components/Forms/Signin";
const Login = () => {
    const [kaarigar, setKaarigar] = useState(true);
    const clickHandler = () => {
        setKaarigar((kaarigar) => {
            return !kaarigar;
        });
    };
    return (
        <Layout>
            <div className="grid lg:grid-cols-2 font-mont pt-16">
                <div className="flex items-center flex-col gap-4">
                    <span className="text-xl font-bold">Sign In</span>
                    {<Signin />}
                </div>
                <div className="flex items-center flex-col gap-4">
                    <span className="text-xl font-bold">Sign up</span>
                    <div className="flex text-xl w-full justify-center text-center">
                        <div
                            className={`w-1/4 py-4 ${
                                !kaarigar && "bg-[#C4C4C4]"
                            } ${kaarigar && "bg-[#ED821F] text-white"}`}
                            onClick={clickHandler}
                        >
                            Kaarigar
                        </div>
                        <div
                            className={`w-1/4 py-4  ${
                                kaarigar && "bg-[#C4C4C4]"
                            } ${!kaarigar && "bg-[#ED821F] text-white"}`}
                            onClick={clickHandler}
                        >
                            Ghrahak
                        </div>
                    </div>
                    {kaarigar && <Kaarigar />}
                    {!kaarigar && <Ghrahak />}
                </div>
            </div>
        </Layout>
    );
};

export default Login;
