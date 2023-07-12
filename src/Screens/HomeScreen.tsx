import { ActivityIndicator, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { apiCall } from '../ApiCalls/ApiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { selectSheetsData } from '../Store/SheetsData/SheetsSelectors';
import { setSheetsData } from '../Store/SheetsData/SheetsActionCreators';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const dispatch = useDispatch()
    const spreadData = useSelector(selectSheetsData)
    const nav = useNavigation()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiCall();
                dispatch(setSheetsData(response.values))
            } catch (error) {
                console.error('API error:', error);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 0.05 * 60 * 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, []);




    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <ScrollView contentContainerStyle={styles.container} horizontal showsHorizontalScrollIndicator={false}>
                {spreadData.length > 0 ? (
                    <>
                        <View style={styles.headersCont}>
                            {
                                spreadData[0].map((val: any, idx: React.Key) => (
                                    <Text style={styles.dataTexts} key={idx}>{val}</Text>
                                ))
                            }
                        </View>
                        <View style={styles.bodyCont}>
                            {
                                spreadData.map((val: any, index: React.Key) => {
                                    if (index > 0) {
                                        return (
                                            <TouchableOpacity onPress={() => nav.navigate('Pie', { data: val })} style={styles.headersCont} key={index}>
                                                {val.length > 0 ? (val.map((v: any, id: React.Key) => (
                                                    <Text style={styles.dataTexts} key={id}>{v}</Text>

                                                ))) : null}
                                            </TouchableOpacity>
                                        )
                                    }
                                })
                            }
                        </View>
                    </>
                )

                    : <ActivityIndicator size="large" />}

            </ScrollView>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'column',
    },
    headersCont: {
        display: 'flex',
        flexDirection: 'row',
    },
    bodyCont: {
        display: 'flex',
        flexDirection: 'column',
    },
    dataTexts: {
        width: 70,
        height: 30,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Verdana',
        ...Platform.select({
            android: {
                fontFamily: 'Roboto',
            }
        }),
        textAlign: 'center',

    },
    noDataText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Verdana',
        ...Platform.select({
            android: {
                fontFamily: 'Roboto',
            }
        })
    },
})