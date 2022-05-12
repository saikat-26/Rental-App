/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image, ScrollView} from 'react-native';
import { useRef, useState, useEffect } from 'react';
import {Link} from 'react-router-native';

function Car() {
    const ref = useRef(null);
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        ref.current?.scrollToIndex({
            index,
            animated: true,
        });
    }, [index]);
    const products = [
        {
            id: 1,
            img: require('../assets/car1.jpg'),
        },
        {
            id: 2,
            img: require('../assets/car1.jpg'),
        },
        {
            id: 3,
            img: require('../assets/car1.jpg'),
        },
        {
            id: 4,
            img: require('../assets/car1.jpg'),
        },
        {
            id: 5,
            img: require('../assets/car1.jpg'),
        },
        {
            id: 6,
            img: require('../assets/car1.jpg'),
        },
    ];
    return (
        <ScrollView>
        <Text style={styles.message}>Choose from our range of cars!</Text>
        <View style={styles.container}>
            <View style={styles.directions}>
                <View style={styles.leftarrow}>
                <Text style={index === 0 ? styles.leftarrowdisable : styles.leftarrowenable }
                onPress={()=>{

                    if (index === 0){

                        return;
                    }
                    else {
                    setIndex(index - 1);
                    }
                }}
                > {'<'} </Text>
                </View>
                <View style={styles.rightarrow}>
                <Text style={ index === products.length - 1 ? styles.rightarrowdisable : styles.rightarrowenable }
                onPress={()=>{
                    if (index === products.length - 1){
                        return;
                    }
                    setIndex(index + 1);
                }}
                >
                {'>'}
                </Text>
                </View>


            </View>
            <FlatList data={products}
                ref={ref}
                initialScrollIndex={index}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(key) => {
                    return key.name;
                }}
                renderItem={({ item }) => {
                    return <TouchableOpacity style={styles.car}>
                        <Image source={item.img}
                            style={styles.img} />
                            </TouchableOpacity>;
                }}/>
                <TouchableOpacity>
                <Link to="/"><Text style={styles.message}>Go Home</Text></Link>
                </TouchableOpacity>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 450,
        marginTop: 175,
        backgroundColor: 'purple',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    directions:{
        flexDirection: 'row',
    },
    leftarrow:{
        display: 'flex',
        margin: 40,
        marginBottom: 0,
        marginTop: 0,
        padding: 40,
        paddingBottom: 0,
        paddingTop: 0,
    },
    leftarrowenable:{
        paddingTop: 20,
        marginRight: 30,
        color:'black',
        fontSize: 30,
    },
    leftarrowdisable:{
        paddingTop: 20,
        marginRight: 30,
        color: 'grey',
        fontSize: 30,
    },
    rightarrow:{
        display: 'flex',
        margin: 40,
        marginBottom: 0,
        marginTop: 0,
        padding: 40,
        paddingTop: 0,
        paddingBottom: 0,
    },
    rightarrowenable:{
        paddingLeft: 15,
        paddingTop: 20,
        color: 'black',
        fontSize: 30,
    },
    rightarrowdisable:{
        paddingLeft: 15,
        paddingTop: 20,
        color:'grey',
        fontSize: 30,
    },
    car:{
        height: 150,
        width: 150,
        margin: 10,
        padding: 10,
    },
    img:{
        height: '100%',
        width: '100%',
        marginTop: 50,
    },
    message:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
});
export default Car;
