import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import * as userCreateActions from '../redux/actions';

class UserSignUpContainer extends Component {
    constructor(props) {
        super(props);
        console.log('UserSignUpContainer Mounted');
    }



    render() {
        console.log('Rendering UserSignUpContainer');
        return (
            <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.props.alertHubRequest()}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Alert Hub</Text>
                </TouchableOpacity>

            </View>
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
        alertHubRequest: () => dispatch(userCreateActions.alertHubRequest()),

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSignUpContainer);


