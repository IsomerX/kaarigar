import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import SearchCard from "../../components/SearchCard/SearchCard";
import Data from "../../public/DATA.json";
import Image from "next/image"

const Search = () => {
    const r = useRouter();
    const name = r.query.query;
    const heading = name.charAt(0).toUpperCase() + name.slice(1);
    const other = Data.filter((item) => {
        return item.tags.includes(name.toLowerCase()) || item.name == name;
    });
    let putter = other.map((item) => {
        return <SearchCard key={item.profile} data={item} />;
    });

    if(other.length == 0)
    {
        putter = <h1 className="mt-4 text-lg font-bold">No Results Found!</h1>
    }

    return (
        <Layout>
            <div className="font-mont px-16 py-16">
                <div className="text-2xl">
                    Search Results for{" "}
                    <span className="text-[#ED821F] font-bold">{heading}</span>
                </div>
                <div className="grid gap-4 w-full lg:w-2/3">{putter}</div>
            </div>
            <div className="fixed right-[5%] top-1/2 -translate-y-1/2 hidden xl:block">
                <Image src="/images/gifts.png" width={373} height={296}  alt="gifts"/>
            </div>
        </Layout>
    );
};

export default Search;
