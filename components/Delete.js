import { Pressable , View , Text } from "react-native";
import { useContext } from "react";
import { NoteSt } from "../context/Store";

function Delete(props){

    const N=useContext(NoteSt);

    function phandler(){

        console.log(props.value);

        N.removenote(props.value);

    }

    return(

        <View>

        

          <Pressable onPress={phandler}>
            <Text>Delete</Text>
           </Pressable>


        </View>

    )


   

}


export default Delete;