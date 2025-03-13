import { useLoaderData } from "react-router-dom";
import SingleRacipe from "./SingleRacipe/SingleRacipe";

const Racipe = () => {
    const louder=useLoaderData();
    const data=louder.categories
    console.log(data)
    return (
        <div className=" ">
            <h1 className="mb-5 text-3xl font-bold ml-3">categories:{data.length}</h1>
            <div className="grid md:grid-cols-3 gap-14 mx-3 md:mx-10">
                {
                    data.map(data=><SingleRacipe key={data.idCategory} data={data}></SingleRacipe>)
                }
            </div>
        </div>
    );
};

export default Racipe;