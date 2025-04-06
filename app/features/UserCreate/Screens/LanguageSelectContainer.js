import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NavigationService from '../../../navigations/NavigationService';
export default class LanguageSelectContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: '',
        };
    }

    handleLanguageSelect = (language) => {
        this.setState({ selectedLanguage: language });

    };

    handleProceed = () => {
        const { selectedLanguage } = this.state;
        if (selectedLanguage) {
            // alert(`You selected ${selectedLanguage}`);
            // Navigate or store language preference
            NavigationService.navigate('UserSignUpContainer');
        }
    };

    renderLanguageButton = (language) => {
        const { selectedLanguage } = this.state;
        const isSelected = selectedLanguage === language;
        return (
            <TouchableOpacity
                key={language}
                onPress={() => this.handleLanguageSelect(language)}
                style={[
                    styles.languageButton,
                    isSelected ? styles.languageButtonSelected : styles.languageButtonUnselected,
                ]}
            >
                <Text style={[styles.languageText, isSelected && styles.languageTextSelected]}>
                    {language}
                </Text>
            </TouchableOpacity>
        );
    };

    render() {
        const languages = ['English', 'Sinhala', 'Tamil'];

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Language</Text>
                <Text style={styles.subtitle}>Choose your preferred language</Text>

                <View style={styles.languageGrid}>
                    {languages.map(this.renderLanguageButton)}
                </View>

                <TouchableOpacity
                    style={[
                        styles.proceedButton,
                        !this.state.selectedLanguage && styles.proceedButtonDisabled,
                    ]}
                    onPress={this.handleProceed}
                    disabled={!this.state.selectedLanguage}
                >
                    <Text style={styles.proceedText}>Proceed</Text>
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
    languageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 32,
    },
    languageButton: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 10,
        borderWidth: 1.5,
        minWidth: '30%',
        alignItems: 'center',
        marginBottom: 12,
    },
    languageButtonSelected: {
        borderColor: '#1877f2',
    },
    languageButtonUnselected: {
        borderColor: '#eee',
    },
    languageText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111',
    },
    languageTextSelected: {
        color: '#1877f2',
    },
    proceedButton: {
        backgroundColor: '#1877f2',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    proceedButtonDisabled: {
        opacity: 0.5,
    },
    proceedText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
