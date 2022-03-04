import { useState } from "react";
import { useRouter } from "next/router";
const InputBox = ({ text }) => {
    const [value, setValue] = useState("");
    const router = useRouter();
    const submitHandler = (e) => {
        e.preventDefault();
        router.push({
            pathname: `/search/${value}`,
        })
    };

    return (
        <div>
            <input
                className="bg-[#F8F8F8] h-16 border-0 text-md px-5 rounded-xl w-96  font-mont focus:outline-orange-400"
                placeholder={text}
                onChange={(e) => setValue(e.target.value.toLowerCase())}
            />
            <button
                className="bg-[#F8DA30] h-16 px-8 rounded-xl text-white text-xl  font-mont ml-3"
                onClick={submitHandler}
            >
                Search
            </button>
        </div>
    );
};

export default InputBox;
