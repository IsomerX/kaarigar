import FormInput from "../FormInput/FormInput";

const Kaarigar = () => {
    return (
        <div className="w-1/2 flex flex-col gap-4">
            <FormInput text="Name" type="text" />
            <FormInput text="Email" type="email" />
            <FormInput text="Password" type="password" />
            <FormInput text="Number" type="text" />
            <FormInput text="Brief Intro" type="text" />
            <FormInput text="Address" type="text" />
            <button className="bg-[#ED821F] text-center py-2 text-white rounded-lg w-full">
                Submit
            </button>
        </div>
    );
};

export default Kaarigar;
