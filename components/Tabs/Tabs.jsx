import React from "react";
import { useRouter } from "next/router";

const Tabs = ({ text }) => {
    const router = useRouter();
    const submitHandler = (e) => {
        e.preventDefault();
        router.push({
            pathname: `/search/${text.toLowerCase()}`,
        });
    };
    return (
        <div className="px-8 py-4 bg-[#E5E5E5] text-[#3d3d3d] rounded-3xl text-xl font-mont hover:cursor-pointer hover:bg-[#a1a1a1] transition-all hover:text-[#111]" onClick={submitHandler}>
            {text}
        </div>
    );
};

export default Tabs;
