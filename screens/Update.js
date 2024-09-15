import { Pressable, TextInput, Text,View} from "react-native";
import { useState } from "react";
import { useContext } from "react";
import { NoteSt } from "../context/Store";

function Update({route,navigation}){

    const nts=useContext(NoteSt);

    const n=route.params; //{}

    const [indata,setindata]=useState(n);

    function cuhandler(uptext){
        setindata(uptext);
    }

    function uhandler(){

        console.log(n);
        console.log(indata);
        console.log("In uhandler function in Update component");

        nts.updatenote(n,indata);


        navigation.goBack();



    }

    return(
        <View>
        <View>
            <TextInput  value={indata} onChangeText={cuhandler} placeholder={n} multiline={true} keyboardType="default"/>
        </View>
        <View>
            <Pressable onPress={uhandler}>
                <Text>Update</Text>
            </Pressable>

        </View> 
        
        </View>
    )


}


export default Update;