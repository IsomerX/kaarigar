const FormInput = ({ text, type }) => {
    return (
        <div className="flex flex-col">
            <label className="text-xl">{text}</label>
            <input className="bg-[#F8F8F8] py-2 pl-2 pr-16 rounded-lg" type={type}/>
        </div>
    );
};

export default FormInput;
