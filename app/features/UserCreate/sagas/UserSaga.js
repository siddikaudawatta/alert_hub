
import { call, put, select } from 'redux-saga/effects';
import api from '../../../services/index';



export function* alertHubAPI() {

    let request = {
        category: "Siddika",
        name: "company name 1",
        description: "we provide services 01, service 02",
        address: "address 01 lane number, distric",
        rate: 0,
        imageUrl: "https://iamgeurl.com",
        latitude: 1.01,
        longitude: -3.03,
        contactNo: "755783206",
        otherContactNo: "755783203"
    }

    yield api(

        'POST',
        'https://alert-hub-1c6fe6f73b0a.herokuapp.com/api/business/register',
        request,

    );
    // console.log('alertHubAPI->', response);

}


