import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import * as dashboardAction from '../redux/actions';

const screenWidth = Dimensions.get('window').width;
const cardMargin = 8;
const numColumns = 4;
const cardSize = (screenWidth - (cardMargin * (numColumns + 1))) / numColumns;

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.props.getProductList();
    }

    renderServiceCard = ({ item }) => (
        <TouchableOpacity style={styles.serviceCard}>
            <Icon name={item.icon || 'build-outline'} size={30} color="#555" />
            <Text style={styles.serviceText}>{item.name}</Text>
        </TouchableOpacity>
    );

    renderServiceSection = (sectionTitle, services) => (
        <View key={sectionTitle}>
            <Text style={styles.sectionTitle}>{sectionTitle}</Text>
            <FlatList
                data={services}
                renderItem={this.renderServiceCard}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns}
                columnWrapperStyle={styles.grid}
                scrollEnabled={false}
            />
        </View>
    );

    render() {
        const { productlist } = this.props;

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
                    {productlist && Object.entries(productlist).map(
                        ([sectionTitle, services]) =>
                            this.renderServiceSection(sectionTitle, services)
                    )}
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        productlist: state.dashboardReducer.productlist,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        getProductList: () => dispatch(dashboardAction.getProductList()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardContainer);

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
        paddingBottom: 16,
    },
    sectionTitle: {
        marginTop: 24,
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: cardMargin,
    },
    serviceCard: {
        width: cardSize,
        aspectRatio: 1,
        backgroundColor: '#f4f7fb',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: cardMargin,
        marginRight: cardMargin,
    },
    serviceText: {
        marginTop: 8,
        fontSize: 12,
        textAlign: 'center',
        color: '#555',
    },
});
