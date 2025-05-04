// Router
import React, { Component } from 'react';
import { View } from 'react-native';
import NavigationService from './navigations/NavigationService';
import { connect } from 'react-redux';

class Router extends Component {
    componentDidMount() {
        console.log('Router-mounted');
        setTimeout(() => {
            this.props.access_token ?
                NavigationService.fullReset('DashboardContainer') :
                NavigationService.fullReset('LanguageSelectContainer');
        }, 0);
    }

    render() {
        return <View />;
    }
}

Router.propTypes = {};

function mapStateToProps(state) {
    return {
        access_token: state.appReducer.access_token
    };
}



export default connect(
    mapStateToProps
)(Router);