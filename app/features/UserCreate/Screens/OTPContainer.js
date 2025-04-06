import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class OTPContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: ['', '', '', ''],
            isError: false,
        };
        this.inputs = [];
    }

    handleChange = (text, index) => {
        let otp = [...this.state.otp];
        otp[index] = text;

        this.setState({ otp, isError: false }, () => {
            if (text && index < this.inputs.length - 1) {
                this.inputs[index + 1].focus();
            }
        });
    };

    handleVerify = () => {
        const { otp } = this.state;
        const code = otp.join('');
        const correctCode = '5137'; // Sample correct OTP

        if (code === correctCode) {
            alert('OTP Verified!');
        } else {
            this.setState({ isError: true });
        }
    };

    render() {
        const { otp, isError } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>OTP Verification</Text>
                <Text style={styles.subtitle}>
                    Enter the verification code we just sent on your email address.
                </Text>

                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (this.inputs[index] = ref)}
                            value={digit}
                            onChangeText={(text) => this.handleChange(text, index)}
                            keyboardType="numeric"
                            maxLength={1}
                            style={[
                                styles.otpInput,
                                isError ? styles.otpInputError : styles.otpInputDefault,
                            ]}
                        />
                    ))}
                </View>

                {isError && <Text style={styles.errorText}>Invalid OTP</Text>}

                <TouchableOpacity style={styles.button} onPress={this.handleVerify}>
                    <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 80,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 32,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    otpInput: {
        width: 60,
        height: 60,
        fontSize: 22,
        textAlign: 'center',
        borderWidth: 1.5,
        borderRadius: 8,
    },
    otpInputDefault: {
        borderColor: '#1877f2',
    },
    otpInputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
        marginTop: -4,
        fontSize: 13,
    },
    button: {
        backgroundColor: '#1877f2',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
