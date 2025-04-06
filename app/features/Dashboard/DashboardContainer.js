import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';


class DashboardContainer extends Component {
    renderServiceCard = (title, icon) => (
        <TouchableOpacity style={styles.serviceCard}>
            <Icon name={icon} size={30} color="#555" />
            <Text style={styles.serviceText}>{title}</Text>
        </TouchableOpacity>
    );

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.welcomeText}>Welcome Back,</Text>
                        <Text style={styles.userName}>Manoj Weerasinghe</Text>
                    </View>
                    <View style={styles.notificationContainer}>
                        <Icon name="notifications-outline" size={28} color="#000" />
                        <View style={styles.notificationBadge}>
                            <Text style={styles.badgeText}>2</Text>
                        </View>
                    </View>
                </View>

                <TextInput
                    placeholder="Search Service"
                    style={styles.searchInput}
                    placeholderTextColor="#999"
                />

                <View style={styles.mapContainer}>
                    <MapView
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: 6.9271,
                            longitude: 79.8612,
                            latitudeDelta: 0.05,
                            longitudeDelta: 0.05,
                        }}
                    />
                </View>

                <ScrollView style={styles.scrollContainer}>
                    <Text style={styles.sectionTitle}>Home Services</Text>
                    <View style={styles.grid}>
                        {this.renderServiceCard('Plumbers', 'build-outline')}
                        {this.renderServiceCard('Electricians', 'flash-outline')}
                        {this.renderServiceCard('Cleaning', 'broom-outline')}
                        {this.renderServiceCard('Pest Control', 'bug-outline')}
                    </View>

                    <Text style={styles.sectionTitle}>Auto & Vehicle Services</Text>
                    <View style={styles.grid}>
                        {this.renderServiceCard('Garage', 'car-outline')}
                        {this.renderServiceCard('Car Repair', 'car-sport-outline')}
                        {this.renderServiceCard('Bike Repair', 'bicycle-outline')}
                        {this.renderServiceCard('Towing', 'barbell-outline')}
                    </View>

                    <Text style={styles.sectionTitle}>Food & Restaurants</Text>
                    <View style={styles.grid}>
                        {this.renderServiceCard('Restaurants', 'restaurant-outline')}
                        {this.renderServiceCard('Takeaway', 'fast-food-outline')}
                        {this.renderServiceCard('Groceries', 'cart-outline')}
                        {this.renderServiceCard('Pest Control', 'bug-outline')}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default DashboardContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    welcomeText: {
        fontSize: 14,
        color: '#888',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    notificationContainer: {
        position: 'relative',
    },
    notificationBadge: {
        position: 'absolute',
        top: -4,
        right: -6,
        backgroundColor: 'red',
        borderRadius: 8,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    searchInput: {
        margin: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    mapContainer: {
        height: 180,
        marginHorizontal: 16,
        borderRadius: 12,
        overflow: 'hidden',
    },
    scrollContainer: {
        paddingHorizontal: 16,
    },
    sectionTitle: {
        marginTop: 24,
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    serviceCard: {
        width: '23%',
        aspectRatio: 1,
        backgroundColor: '#f4f7fb',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    serviceText: {
        marginTop: 8,
        fontSize: 12,
        textAlign: 'center',
        color: '#555',
    },
});
