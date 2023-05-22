import { useState } from "react";
import Note from './Note'

export default function AddNotes(){
    const [note, setNote] = useState({
        title: '',
        body: ''
    })
    const [Notes, setNotes] = useState([]);

    function handleChange(event){
        const {value, name} = event.target;
        setNote(prev=>{
            return{
                ...prev,
                [name]: value
            }
        })
    }

    function sub(){
        if(note.title !== '' && note.body !== ''){
            setNotes(prev=>{
                return[
                    ...prev,
                    note
                ]
            })
        }
        setNote({
            title:'',
            body: ''
        })
    }

    function delette(id){
        setNotes(prev=>{
            return prev.filter((nt, index)=>{
                return index !== id
            })
        })
    }
    return(
        <>
            <div className="w-72 md:w-96 mt-4 rounded-md md:w-2/3 lg:w-1/2 mx-auto bg-white">
                <form action="" className="flex flex-col w-full px-4 text-gray-900 relative" onSubmit={(e)=>{
                    e.preventDefault()
                }}>
                    <input type="text" placeholder="Title" className="mt-2 focus:outline-none font-bold" value={note.title} name="title" onChange={handleChange}/>
                    <textarea name="body" value={note.body} id="" cols="30" rows="10" placeholder="Take a Note.." className="mt-2 focus:outline-none font-semibold" onChange={handleChange}></textarea>
                    <button className="bg-yellow-400 hover:bg-yellow-300 w-1/6 lg:w-1/12  p-2 absolute bottom-[-10px] right-0 rounded-full text-white" onClick={sub}>Add</button>
                </form>
            </div>
            <div className="flex flex-col items-center md:flex-row md:flex-wrap container text-center mx-auto mt-4">
                {Notes.map((nt, index)=> <Note 
                    key={index}
                    ondelete = {delette}
                    id={index}
                    title= {nt.title}
                    body = {nt.body}
                />)}
            </div>
        </>
    );
}