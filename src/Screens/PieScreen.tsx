import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PieGraph from '../Components/PieGraph'

const PieScreen = ({ route }: any) => {
    const { data } = route.params

    return (
        <View style={styles.container}>
            <Text>{data[0]}</Text>
            <PieGraph data={data} />
        </View>
    )
}

export default PieScreen

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
})