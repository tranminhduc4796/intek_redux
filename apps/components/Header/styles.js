import {
    StyleSheet
} from 'react-native'
import Dimension from 'Dimension'
const {height, width} = Dimensions.get('window');


export default StyleSheet.create({
    header_view: {
        width: '100%',
        backgroundColor: '#33bbff',
        marginBottom: height * 0.05
    },
    header_text: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
    },
});