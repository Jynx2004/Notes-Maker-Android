import { useContext , useState } from "react";
import { Text , View , Pressable, TextInput , Alert} from "react-native";
import { NoteSt } from "../context/Store";

function Input({navigation}){

    const NotesP=useContext(NoteSt);




    const [inputdata,setinputdata] = useState('');


    function chhandler(text){
        setinputdata(text);
    }




    function pressHandler(){
        navigation.navigate('display');
    }

    function addhandler(){

        if(inputdata==='')
        {
            Alert.alert("Empty note");
            return ;

        }

        console.log(inputdata);


        console.log("Now adding");


        NotesP.addnote(inputdata);

        setinputdata('');

        Alert.alert("Note added !");







    }


    return (
        <View>

           <Text>Hello!</Text>
           <TextInput placeholder="Enter a note" multiline={true} keyboardType="default" onChangeText={chhandler} value={inputdata}/>
           <Pressable onPress={addhandler}>
             <View>
                <Text>Add Notes</Text>
             </View>
           </Pressable>
           <Pressable onPress={pressHandler}>


              <Text>View All Notes</Text>
            
            
            </Pressable>



        </View>
    
    )

};

export default Input;