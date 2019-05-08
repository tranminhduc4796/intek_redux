import * as React from 'react';
import {Facebook} from 'expo';

import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';
import styles from './styles'

class FBButton extends React.Component {
    async logIn() {
        try {
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync('541891389551284', {
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(
                    `https://graph.facebook.com/me?access_token=${token}`
                );
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            } else {
                // type === 'cancel'
            }
        } catch ({message}) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.logIn.bind(this)}>
                    <View style={styles.facebook_button}>
                        <Image
                            source={{uri: 'https://img.icons8.com/cotton/2x/facebook.png'}}
                            style={styles.facebook_logo}
                        />
                        <View>
                            <Text style={styles.facebook_title}>Continue with Facebook</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default FBButton;