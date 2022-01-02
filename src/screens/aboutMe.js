import React, {Component}  from "react";
import {View, Text, StyleSheet, Button, Image,ScrollView} from "react-native";

export default class AboutMe extends Component {
    
    render() {
        return (
            // <View>
            //     <Text>darova</Text>
            // </View>
            <View style={localStyles.body}>
                <View>
                    <View style={localStyles.head}>
                        <Text>AboutMe</Text>
                    </View>
                    <View style={localStyles.content}>
                    <Text style={localStyles.name}>Timur Kazdayev SE2017</Text>
                    <Image source={require('../../assets/star.png')} style={localStyles.image}/>
                    </View>
                    
                </View>
                <ScrollView>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis orci a. Ut sem viverra aliquet eget sit. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Risus feugiat in ante metus dictum at tempor commodo. Nec dui nunc mattis enim ut tellus. Facilisi cras fermentum odio eu feugiat pretium nibh. Vel quam elementum pulvinar etiam non quam lacus. Turpis in eu mi bibendum neque egestas congue quisque. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis orci a. Ut sem viverra aliquet eget sit. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Risus feugiat in ante metus dictum at tempor commodo. Nec dui nunc mattis enim ut tellus. Facilisi cras fermentum odio eu feugiat pretium nibh. Vel quam elementum pulvinar etiam non quam lacus. Turpis in eu mi bibendum neque egestas congue quisque. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget.

Non odio euismod lacinia at quis risus sed. Nunc faucibus a pellentesque sit amet. Feugiat vivamus at augue eget. Pulvinar etiam non quam lacus suspendisse faucibus. Vulputate ut pharetra sit amet aliquam id. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Risus nec feugiat in fermentum posuere urna. Sed cras ornare arcu dui. Erat velit scelerisque in dictum non consectetur. Vitae tortor condimentum lacinia quis. Dictum sit amet justo donec enim. Amet aliquam id diam maecenas ultricies mi eget. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Ut consequat semper viverra nam libero justo laoreet. Urna molestie at elementum eu facilisis sed odio morbi quis. Pretium lectus quam id leo in vitae turpis massa. Volutpat maecenas volutpat blandit aliquam. Augue neque gravida in fermentum. In est ante in nibh mauris cursus.

Et netus et malesuada fames ac turpis egestas. Sed adipiscing diam donec adipiscing. Interdum velit euismod in pellentesque. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Nec dui nunc mattis enim ut tellus elementum. Orci eu lobortis elementum nibh tellus molestie nunc. Cursus vitae congue mauris rhoncus. Sagittis id consectetur purus ut. Amet tellus cras adipiscing enim eu turpis egestas. Eu turpis egestas pretium aenean pharetra. Nulla pellentesque dignissim enim sit amet venenatis urna. Tellus orci ac auctor augue mauris augue. Aliquam vestibulum morbi blandit cursus. Tristique senectus et netus et malesuada fames. Ipsum dolor sit amet consectetur adipiscing. Pulvinar etiam non quam lacus suspendisse.

Diam sit amet nisl suscipit. Ac turpis egestas maecenas pharetra convallis posuere morbi. Eros donec ac odio tempor. Lorem donec massa sapien faucibus. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Quis hendrerit dolor magna eget. Tempus urna et pharetra pharetra massa. Vel fringilla est ullamcorper eget nulla facilisi. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Feugiat nisl pretium fusce id velit ut. Eros in cursus turpis massa. Volutpat consequat mauris nunc congue. Lacus sed viverra tellus in. Dictum varius duis at consectetur lorem donec massa sapien. Cursus sit amet dictum sit amet justo donec. Eget arcu dictum varius duis. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit.

Curabitur vitae nunc sed velit dignissim sodales ut eu. Euismod nisi porta lorem mollis. Feugiat nibh sed pulvinar proin. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Ut faucibus pulvinar elementum integer. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Tellus orci ac auctor augue mauris augue neque gravida in. Ultrices vitae auctor eu augue ut lectus arcu. Elementum eu facilisis sed odio morbi. Diam donec adipiscing tristique risus nec. Dolor sit amet consectetur adipiscing. Porttitor leo a diam sollicitudin tempor id eu nisl. Varius quam quisque id diam vel. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Vitae proin sagittis nisl rhoncus. Vulputate dignissim suspendisse in est ante. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis orci a. Ut sem viverra aliquet eget sit. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Risus feugiat in ante metus dictum at tempor commodo. Nec dui nunc mattis enim ut tellus. Facilisi cras fermentum odio eu feugiat pretium nibh. Vel quam elementum pulvinar etiam non quam lacus. Turpis in eu mi bibendum neque egestas congue quisque. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget.

Non odio euismod lacinia at quis risus sed. Nunc faucibus a pellentesque sit amet. Feugiat vivamus at augue eget. Pulvinar etiam non quam lacus suspendisse faucibus. Vulputate ut pharetra sit amet aliquam id. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Risus nec feugiat in fermentum posuere urna. Sed cras ornare arcu dui. Erat velit scelerisque in dictum non consectetur. Vitae tortor condimentum lacinia quis. Dictum sit amet justo donec enim. Amet aliquam id diam maecenas ultricies mi eget. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Ut consequat semper viverra nam libero justo laoreet. Urna molestie at elementum eu facilisis sed odio morbi quis. Pretium lectus quam id leo in vitae turpis massa. Volutpat maecenas volutpat blandit aliquam. Augue neque gravida in fermentum. In est ante in nibh mauris cursus.

Et netus et malesuada fames ac turpis egestas. Sed adipiscing diam donec adipiscing. Interdum velit euismod in pellentesque. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Nec dui nunc mattis enim ut tellus elementum. Orci eu lobortis elementum nibh tellus molestie nunc. Cursus vitae congue mauris rhoncus. Sagittis id consectetur purus ut. Amet tellus cras adipiscing enim eu turpis egestas. Eu turpis egestas pretium aenean pharetra. Nulla pellentesque dignissim enim sit amet venenatis urna. Tellus orci ac auctor augue mauris augue. Aliquam vestibulum morbi blandit cursus. Tristique senectus et netus et malesuada fames. Ipsum dolor sit amet consectetur adipiscing. Pulvinar etiam non quam lacus suspendisse.

Diam sit amet nisl suscipit. Ac turpis egestas maecenas pharetra convallis posuere morbi. Eros donec ac odio tempor. Lorem donec massa sapien faucibus. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Quis hendrerit dolor magna eget. Tempus urna et pharetra pharetra massa. Vel fringilla est ullamcorper eget nulla facilisi. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Feugiat nisl pretium fusce id velit ut. Eros in cursus turpis massa. Volutpat consequat mauris nunc congue. Lacus sed viverra tellus in. Dictum varius duis at consectetur lorem donec massa sapien. Cursus sit amet dictum sit amet justo donec. Eget arcu dictum varius duis. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit.

Curabitur vitae nunc sed velit dignissim sodales ut eu. Euismod nisi porta lorem mollis. Feugiat nibh sed pulvinar proin. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Ut faucibus pulvinar elementum integer. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Tellus orci ac auctor augue mauris augue neque gravida in. Ultrices vitae auctor eu augue ut lectus arcu. Elementum eu facilisis sed odio morbi. Diam donec adipiscing tristique risus nec. Dolor sit amet consectetur adipiscing. Porttitor leo a diam sollicitudin tempor id eu nisl. Varius quam quisque id diam vel. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Vitae proin sagittis nisl rhoncus. Vulputate dignissim suspendisse in est ante. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean.
                        </Text>
                </ScrollView>
                
            </View>

        )
    }
}
const localStyles= StyleSheet.create({
    body:{
        backgroundColor: '#fff',
        top:20
    },
    head:{
        width: '100%',
        height:50,
        backgroundColor:'green',
        alignItems: 'center',
        justifyContent:'center'
    },
    content:{
        width: '100%',
        height:250,
        backgroundColor:'gray',
        alignItems: 'center',
        justifyContent:'center'
    },
    name:{
        // position:'absolute',
        // right:5,
        // top:20
    },
    image:{
        width:200,
        height:200
    }
})
