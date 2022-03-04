import Image from "next/image";

const SearchCard = ({data}) => {
    const {name, occ, profile, number, google} = data;
  return (
    <div className='p-8 shadow-lg rounded-xl'>
        <div className='flex flex-col'>
            <span className='text-2xl'>{name}</span>
            <span className='text-xl font-bold text-[#F8DA30]'>{occ}</span>
            <span>{profile}</span>
        </div>
        <div className='flex flex-col md:flex-row gap-2 justify-between'>
            <div className="flex items-center gap-4">
                <Image src="/images/phone.png" alt="phone" height={25} width={25}/>
                {number}
            </div>
            <div className='bg-[#F8DA30] px-5 py-3 rounded-xl'>
                Locate on Google Map
            </div>
        </div>
    </div>
  )
}

export default SearchCard