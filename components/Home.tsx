import useFetch from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Card } from './Card';

export function Home({ navigation }) {

    const pageLimit = 10;
    const [limit, setLimit] = useState(pageLimit);
    const [offset, setOffset] = useState(0);

    const { list, loading, error } = useFetch(limit, offset);

    useEffect(() => {
        console.log(list, loading, error?.message);
    }, [loading]);

    function handleClick() {
        setLimit(pageLimit);
    }

    return (
    <View style={styles.background}>
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {list.map((element, index) => (
                    <Card key={index} data={element} navigation={navigation} />
                ))}
            </View>
        </View>
    </View>
    );
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#DC1313',
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});