


import { Images } from '../../config/Images';
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Platform,
    Text
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
const { width, height } = Dimensions.get('window');
const requestLocationPermission = async () => {
    try {
        const permission =
            Platform.OS === 'android'
                ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
                : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
        console.log('requestLocationPermission->', permission);
        const result = await request(permission);
        console.log('requestLocationPermission->', result);
        switch (result) {
            case RESULTS.GRANTED:
                console.log('Location permission granted');
                return true;
            case RESULTS.DENIED:
                console.warn('Location permission denied');
                return false;
            case RESULTS.BLOCKED:
                console.warn('Location permission blocked — open settings');
                return false;
            default:
                return false;
        }
    } catch (error) {
        console.error('Permission request error:', error);
        return false;
    }
};


class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: null,
            markers: [
                { id: 1, latitude: 37.78825, longitude: -122.4324 },
                { id: 2, latitude: 37.78925, longitude: -122.4334 },
            ],
        };
    }

    async componentDidMount() {
        console.log('componentDidMount');
        const hasPermission = await requestLocationPermission();
        console.log('componentDidMount->', hasPermission);
        if (hasPermission) {
            this.getCurrentLocation();
        }
    }



    getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log('getCurrentLocation->', position);
                const { latitude, longitude } = position.coords;
                this.setState({ latitude, longitude });
            },
            (error) => {
                console.warn('Location error:', error.message);
                this.setState({ error: error.message });
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
            }
        );
    };

    // Render custom markers
    renderMarkers = () => {
        return this.state.markers.map((marker) => (
            <Marker
                key={marker.id}
                coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                }}
            >
                <Image
                    source={Images.icons.location_icon} // 👈 Put your icon here
                    style={{ width: 40, height: 40 }}
                    resizeMode="contain"
                />
            </Marker>
        ));
    };

    render() {
        const { region } = this.state;

        // if (!region) {
        //     return <View style={styles.container} />; // Don't render map until ready
        // }

        return (
            <View style={styles.container} >
                <MapView
                    style={styles.map}
                    region={region}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                >
                    {this.renderMarkers()}
                </MapView>

            </View>
        );
    }
}

export default MapContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width,
        height,
    },
});
