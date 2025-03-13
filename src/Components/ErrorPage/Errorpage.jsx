import { useRouteError } from "react-router-dom";


const Errorpage = () => {
    const error=useRouteError();
    // console.log(error)
    return (
        <div className="text-center grid min-h-screen place-content-center">
            <h2 className="text-6xl font-bold my-5" ><span className="text-green-950 font-extrabold text-6xl">O</span>opss!<span className="text-red-700">!</span>!</h2>
            <h1 className="text-7xl font-extrabold my-5 text-gray-800"> {error.status || error.statusText}</h1>
            <h1 className="text-3xl font-bold my-5">{error.data}</h1>
        </div>
    );
};

export default Errorpage;