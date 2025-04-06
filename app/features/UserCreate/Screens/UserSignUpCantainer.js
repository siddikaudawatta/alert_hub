import React, { Component } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { connect } from 'react-redux';
import * as userCreateActions from '../redux/actions';

class UserSignUpContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignUpSelected: false,
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            phone: '',
            isPasswordVisible: false,
            isConfirmPasswordVisible: false,
        };

        // Input Refs
        this.lastNameRef = React.createRef();
        this.emailRef = React.createRef();
        this.phoneRef = React.createRef();
        this.passwordRef = React.createRef();
        this.confirmPasswordRef = React.createRef();
        this.loginPasswordRef = React.createRef();
    }

    togglePasswordVisibility = () => {
        this.setState(prev => ({
            isPasswordVisible: !prev.isPasswordVisible,
        }));
    };

    toggleConfirmPasswordVisibility = () => {
        this.setState(prev => ({
            isConfirmPasswordVisible: !prev.isConfirmPasswordVisible,
        }));
    };

    login = () => {
        // NavigationService.navigate('OTPContainer');
        let userDATA = {
            userName: 'Siddika',
            password: '123456'
        }
        this.props.alertHubRequest(userDATA);

    }

    renderLoginForm = () => {
        const { email, password, isPasswordVisible } = this.state;

        return (
            <>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    returnKeyType="next"
                    onChangeText={(text) => this.setState({ email: text })}
                    onSubmitEditing={() => this.loginPasswordRef.current?.focus()}
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        ref={this.loginPasswordRef}
                        style={[styles.input, { flex: 1, marginBottom: 0 }]}
                        placeholder="Set Password"
                        secureTextEntry={!isPasswordVisible}
                        value={password}
                        returnKeyType="done"
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                    <TouchableOpacity onPress={this.togglePasswordVisibility}>
                        <Text style={styles.eyeIcon}>{isPasswordVisible ? '🙈' : '👁️'}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </>
        );
    };

    renderSignUpForm = () => {
        const {
            firstName,
            lastName,
            email,
            phone,
            password,
            confirmPassword,
            isPasswordVisible,
            isConfirmPasswordVisible,
        } = this.state;

        return (
            <>
                {/* Avatar Placeholder */}
                <View style={styles.avatarWrapper}>
                    <View style={styles.avatarCircle}>
                        <Text style={{ fontSize: 28 }}>👤</Text>
                    </View>
                    <View style={styles.addIcon}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>+</Text>
                    </View>
                </View>

                <View style={styles.nameContainer}>
                    <TextInput
                        style={[styles.input, { flex: 1, marginRight: 8 }]}
                        placeholder="First Name"
                        returnKeyType="next"
                        value={firstName}
                        onChangeText={(text) => this.setState({ firstName: text })}
                        onSubmitEditing={() => this.lastNameRef.current?.focus()}
                    />
                    <TextInput
                        ref={this.lastNameRef}
                        style={[styles.input, { flex: 1 }]}
                        placeholder="Last Name"
                        returnKeyType="next"
                        value={lastName}
                        onChangeText={(text) => this.setState({ lastName: text })}
                        onSubmitEditing={() => this.emailRef.current?.focus()}
                    />
                </View>

                <TextInput
                    ref={this.emailRef}
                    style={styles.input}
                    placeholder="Email"
                    returnKeyType="next"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => this.setState({ email: text })}
                    onSubmitEditing={() => this.phoneRef.current?.focus()}
                />

                <View style={styles.phoneContainer}>
                    <Text style={{ fontSize: 18, marginRight: 8 }}>🇬🇧</Text>
                    <TextInput
                        ref={this.phoneRef}
                        style={[styles.input, { flex: 1, marginBottom: 0 }]}
                        placeholder="Phone Number"
                        keyboardType="phone-pad"
                        returnKeyType="next"
                        value={phone}
                        onChangeText={(text) => this.setState({ phone: text })}
                        onSubmitEditing={() => this.passwordRef.current?.focus()}
                    />
                </View>

                <View style={styles.passwordContainer}>
                    <TextInput
                        ref={this.passwordRef}
                        style={[styles.input, { flex: 1, marginBottom: 0 }]}
                        placeholder="Password"
                        secureTextEntry={!isPasswordVisible}
                        returnKeyType="next"
                        value={password}
                        onChangeText={(text) => this.setState({ password: text })}
                        onSubmitEditing={() => this.confirmPasswordRef.current?.focus()}
                    />
                    <TouchableOpacity onPress={this.togglePasswordVisibility}>
                        <Text style={styles.eyeIcon}>{isPasswordVisible ? '🙈' : '👁️'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.passwordContainer}>
                    <TextInput
                        ref={this.confirmPasswordRef}
                        style={[styles.input, { flex: 1, marginBottom: 0 }]}
                        placeholder="Confirm Password"
                        secureTextEntry={!isConfirmPasswordVisible}
                        returnKeyType="done"
                        value={confirmPassword}
                        onChangeText={(text) => this.setState({ confirmPassword: text })}
                    />
                    <TouchableOpacity onPress={this.toggleConfirmPasswordVisibility}>
                        <Text style={styles.eyeIcon}>{isConfirmPasswordVisible ? '🙈' : '👁️'}</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </>
        );
    };

    render() {
        const { isSignUpSelected } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    style={{ flex: 1 }}
                >
                    <ScrollView
                        contentContainerStyle={{ paddingBottom: 32 }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <Text style={styles.logoText}>
                            <Text style={{ color: '#007BFF' }}>⚡ Alert</Text>
                            <Text style={{ color: '#000' }}>Hub</Text>
                        </Text>

                        <Text style={styles.headerText}>Get Started now</Text>
                        <Text style={styles.subHeaderText}>
                            Create an account or log in to explore{'\n'}about our app
                        </Text>

                        {/* Tabs */}
                        <View style={styles.tabContainer}>
                            <TouchableOpacity
                                style={[styles.tab, !isSignUpSelected && styles.tabActive]}
                                onPress={() => this.setState({ isSignUpSelected: false })}
                            >
                                <Text style={styles.tabText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.tab, isSignUpSelected && styles.tabActive]}
                                onPress={() => this.setState({ isSignUpSelected: true })}
                            >
                                <Text style={styles.tabText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Forms */}
                        {isSignUpSelected ? this.renderSignUpForm() : this.renderLoginForm()}
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

UserSignUpContainer.propTypes = {};

function mapStateToProps(state) {
    return {

    };
}

export function mapDispatchToProps(dispatch) {
    return {
        alertHubRequest: (payload) => dispatch(userCreateActions.alertHubRequest(payload)),

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSignUpContainer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    subHeaderText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#888',
        marginVertical: 8,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        overflow: 'hidden',
        marginVertical: 16,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    tabActive: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    tabText: {
        fontSize: 16,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 14,
        backgroundColor: '#fff',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingRight: 12,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingLeft: 12,
        paddingRight: 12,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    eyeIcon: {
        fontSize: 16,
        color: '#999',
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: '#1877F2',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    avatarWrapper: {
        alignSelf: 'center',
        marginVertical: 16,
    },
    avatarCircle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addIcon: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        backgroundColor: '#00C853',
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
