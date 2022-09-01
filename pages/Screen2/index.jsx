import { StyleSheet, Text, View } from 'react-native'

const Screen2 = ({route}) => {
    const {message, number} = route.params

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
            <Text style={styles.text}>Screen number {number}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15
    }
})

export default Screen2