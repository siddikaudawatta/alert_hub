import { fetch } from 'react-native-ssl-pinning';

export default async function api(
    method,
    url,
    body
) {
    let bodydata = body
        ? JSON.stringify(body)
        : method === 'GET'
            ? undefined
            : '';
    console.log('url->', bodydata);
    fetch(url, {
        method: method,
        timeoutInterval: 40000, // milliseconds
        body: bodydata,
        disableAllSecurity: true,
        // your certificates array (needed only in android) ios will pick it automatically
        // pkPinning: false,
        // sslPinning: {
        //     certs: ["cert1", "cert2"] // your certificates name (without extension), for example cert1.cer, cert2.cer
        // },
        headers: {
            Accept: "application/json; charset=utf-8",
        }
    })
        .then(response => {
            console.log('url->', response);
            // console.log(`response received ${response}`)
        })
        .catch(err => {
            console.log('url->', err);
            // console.log(`error: ${err}`)
        })
}
