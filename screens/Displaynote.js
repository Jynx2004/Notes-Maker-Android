import {Text , ScrollView,View} from "react-native";
import { useContext } from "react";
import { NoteSt } from "../context/Store";
import Delete from '../components/Delete';

function Displaynote({navigation}){

    const NotesPP=useContext(NoteSt);

    let notesarr=NotesPP.notes;

    console.log(notesarr);

    function uphandler(note){

        console.log("updating");
        console.log(note);

        navigation.navigate('update', note); // {}

    }


    return(
        <>
         <ScrollView>
            {notesarr!==undefined && notesarr.map((note,index) => (
                <View key={index}>
                <Text>{note}</Text>
                <Delete value={note} />
                <Text onPress={() => uphandler(note)}>Update</Text>
                </View>
            ))}

            {
                notesarr.length==0 && <Text>No Notes Found</Text>
            }
         </ScrollView>
        </>
    )
};

    



export default Displaynote;