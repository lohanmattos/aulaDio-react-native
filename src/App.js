import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Image, Pressable, Linking } from "react-native";

const colorGitHub = '#010409';
const colorFont = '#c9d1d9';
const colorDark = '#4f565e';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/61159959?v=4';
const urlGitHub = 'https://github.com/lohanmattos';

const handlePressGoToGitHub = async () => {
    const response = await Linking.canOpenURL(urlGitHub);
    console.log("Verificando o link");
    if(response){
        console.log("Link Aprovado");
        console.log("Abrindo Link ...");
        await Linking.openURL(urlGitHub);
    }
}


const App = () => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle="ligth-content"/>
            <View style={styles.content}> 
                <Image 
                accessibilityLabel="Imagem de perfil"
                style={styles.avatar} 
                source={{uri:imageProfileGitHub}}
                />
                <Text 
                accessibilityLabel="Lohan Amendola"
                style={[styles.defaultText, styles.name]}>
                Lohan Amendola
                </Text>
                <Text 
                accessibilityLabel="lohanmattos"
                style={[styles.defaultText, styles.nickname]}>
                lohanmattos
                </Text>
                <Text 
                accessibilityLabel="Desenvolvedor Full Stack | NodeJS | ReactJS"
                style={[styles.defaultText, styles.description]}>
                Desenvolvedor Full Stack | NodeJS | ReactJS
                </Text>
                <Pressable onPressIn={handlePressGoToGitHub}>
                <View style={styles.button}>
                    <Text style={[styles.defaultText, styles.textButton ]}>
                        Open in GitHub
                    </Text>
                </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}



export default App;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colorGitHub,
        justifyContent: 'center',
        //flexDirection: 'row',
    },

    content:{
    alignItems: 'center',
    padding: 20,
    },

    avatar:{
        height:200,
        width:200,
        borderRadius:100,
        borderColor:'white',
        borderWidth:2,
    },


    defaultText:{
        color:colorFont,

    },

    name:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop:20,
    },

    nickname:{
        fontSize: 25,
        color:colorDark,
    },

    description:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    button:{
        backgroundColor: colorDark,
        borderRadius: 10,
        padding:10,
        margin: 20,

    },
    textButton:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    
});