import { Fragment } from "react";

const Navbar = ()=>{
    const logoName = 'Keeper'

    return(
        <Fragment>
            <div className="w-full p-4 bg-yellow-400 text-white text-2xl font-bold shadow-md">
                <h1>{logoName}</h1>
            </div>
        </Fragment>
    );
}

export default Navbar;