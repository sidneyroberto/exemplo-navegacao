import { StyleSheet, Text, View } from 'react-native'

const Screen1 = ({route}) => {
    const {message} = route.params

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
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

export default Screen1