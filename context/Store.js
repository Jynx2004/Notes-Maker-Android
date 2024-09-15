import { createContext, useState } from "react";

export const NoteSt=createContext({
    notes:[],
    addnote:(note) => {},
    removenote:(note) => {},
    updatenote:(note,upnote) => {}

});


function NotesContextProvider({children}){

    const [notes,setnotes]=useState([]);

    function addnote(note){

        setnotes((currnotes) => {
          return [...currnotes,note];
        });

    }

    function removenote(note) {
        console.log(note);
        setnotes((currNotes) => {
            return currNotes.filter((nt) => nt !== note); // Return boolean expression
        });
    }

    function updatenote(note,upnote){
        console.log(note);
        console.log(upnote);
        setnotes((currNotes) => {
           return currNotes.map((nte) => {

            if(nte===note){
                return upnote;
            }

            else{
                return nte;
            }


           })
        })
    }

    const value={
        notes:notes,
        addnote:addnote,
        removenote:removenote,
        updatenote:updatenote

    };


    return <NoteSt.Provider value={value}>{children}</NoteSt.Provider>;
}


export default NotesContextProvider;




