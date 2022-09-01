import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Home = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.push('Screen1', {
                    message: 'This is the first screen'
                })}>
                <Text style={styles.cardText}>Screen 1</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.card}
                onPress={() => navigation.push('Screen2', {
                    message: 'This is the second screen',
                    number: 2
                })}>
                <Text style={styles.cardText}>Screen 2</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    card: {
        backgroundColor: '#2b2caa',
        width: '100%',
        marginBottom: 20,
        padding: 20,
    },
    cardText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default Home