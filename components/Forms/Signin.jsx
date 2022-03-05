import FormInput from "../FormInput/FormInput";

const Signin = () => {
    return (
        <div className="w-1/2 flex flex-col gap-4">
            <FormInput text="Name" type="text" />
            <FormInput text="Email" type="email" />
            <FormInput text="Password" type="password" />
            <button className="bg-[#ED821F] text-center py-2 text-white rounded-lg w-full">
                Submit
            </button>
        </div>
    );
};

export default Signin;
