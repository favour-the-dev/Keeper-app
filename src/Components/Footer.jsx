import { Fragment } from "react";

const Footer = ()=>{
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();


    return(
        <Fragment >
            <footer className="text-center w-full bottom-[-1%] mx-auto absolute p-4 text-gray-500">
                <h1>Copright {currentYear} &copy;</h1>
            </footer>
        </Fragment>
    );
}

export default Footer