import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex:1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopLeftRightRadius: 30,     
        paddingTop:30,
    },
    form: {
        width: "100%",
        
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    buttonCalculator: {
        borderRadius:50,
        width:"90%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ff0043",
        paddingTop:14,
        paddingBottom: 14,
        marginLeft:12,
        margin:30
    },
    textButtonCalculator: {
        fontSize: 12,
        color: "white"
    },
    errorMessage: {
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
    },
    exhibitionResultImc:{
        width:"100%",
        height:"50%",
    },
    listImcs:{
        marginTop:20,
    },
    resultImcItem:{
        fontSize:2,
        color:"red",
        height:50,
        width:"100%",
        paddingRight:20,
        
    },
    textResultItemList:{
        fontSize:23
    }
});


export default styles