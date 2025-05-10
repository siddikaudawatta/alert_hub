import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { launchImageLibrary } from 'react-native-image-picker';

export default class BusinessRegScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            name: '',
            description: '',
            address: '',
            rate: '',
            imageUrl: null,
            contactNo: '',
            otherContactNo: '',
        };
    }

    handleImagePick = () => {
        launchImageLibrary(
            { mediaType: 'photo', selectionLimit: 1 },
            (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.errorCode) {
                    console.error('Image Picker Error: ', response.errorMessage);
                } else {
                    const uri = response.assets[0].uri;
                    this.setState({ imageUrl: uri });
                }
            }
        );
    };

    handleSubmit = () => {
        const {
            category, name, description, address, rate, imageUrl, contactNo, otherContactNo
        } = this.state;

        const businessData = {
            category,
            name,
            description,
            address,
            rate,
            imageUrl,
            contactNo,
            otherContactNo,
        };

        console.log('Business Data:', businessData);
        Alert.alert('Business Registered!', JSON.stringify(businessData, null, 2));
    };

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/store.png' }}
                    style={styles.logo}
                />

                <Text style={styles.title}>Register Business</Text>
                <Text style={styles.subtitle}>Fill your details to get started</Text>

                <RNPickerSelect
                    onValueChange={(value) => this.setState({ category: value })}
                    items={[
                        { label: 'Salon', value: 'salon' },
                        { label: 'Cleaning', value: 'cleaning' },
                        { label: 'Repair', value: 'repair' },
                    ]}
                    placeholder={{ label: 'Select a category...', value: null }}
                    style={pickerSelectStyles}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Company Name"
                    onChangeText={(text) => this.setState({ name: text })}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    onChangeText={(text) => this.setState({ description: text })}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    onChangeText={(text) => this.setState({ address: text })}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Rate"
                    keyboardType="numeric"
                    onChangeText={(text) => this.setState({ rate: text })}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Contact No"
                    keyboardType="phone-pad"
                    onChangeText={(text) => this.setState({ contactNo: text })}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Other Contact No"
                    keyboardType="phone-pad"
                    onChangeText={(text) => this.setState({ otherContactNo: text })}
                />

                <TouchableOpacity style={styles.imagePicker} onPress={this.handleImagePick}>
                    <Text style={styles.imagePickerText}>Upload Image</Text>
                </TouchableOpacity>

                {this.state.imageUrl && (
                    <Image source={{ uri: this.state.imageUrl }} style={styles.imagePreview} />
                )}

                <TouchableOpacity style={styles.submitButton} onPress={this.handleSubmit}>
                    <Text style={styles.submitButtonText}>Register</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    logo: {
        width: 60,
        height: 60,
        marginVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#333',
    },
    subtitle: {
        fontSize: 14,
        color: '#777',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        backgroundColor: '#f9f9f9',
    },
    imagePicker: {
        backgroundColor: '#f0f0f0',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        width: '100%',
        alignItems: 'center',
    },
    imagePickerText: {
        color: '#444',
        fontSize: 16,
    },
    imagePreview: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 12,
    },
    submitButton: {
        backgroundColor: '#3D85C6',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
        marginTop: 8,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

const pickerSelectStyles = {
    inputIOS: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        borderRadius: 8,
        color: 'black',
        backgroundColor: '#f9f9f9',
        marginBottom: 12,
    },
    inputAndroid: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        borderRadius: 8,
        color: 'black',
        backgroundColor: '#f9f9f9',
        marginBottom: 12,
    },
};
