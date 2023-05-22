import { Fragment } from "react";


const Note = function ({title, body, ondelete, id}){
    return(
        <Fragment>
            <div className=" shadow-md bg-white h-fit rounded mxw-12 text-wrap text-left p-4 overflow-y-hidden md:ml-4 mt-2 relative">
                <div className="shadow-inset w-full h-full overflow-y-hidden">
                    <h1 className="font-bold capitalize text-lg">{title}</h1>
                    <p className="font-semibold overflow-y-hidden text-sm md:text-lg">{body}</p>
                    <button className="text-sm absolute right-1 bottom-[1px] uppercase text-yellow-400" onClick={()=>{
                        ondelete(id)
                    }}>Delete</button>
                </div>
            </div>
        </Fragment>
    )
}



export default Note;