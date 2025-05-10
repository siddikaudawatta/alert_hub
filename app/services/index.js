import { fetch } from 'react-native-ssl-pinning';

export default async function api(
    method,
    url,
    body,
    token,
    isLogin
) {

    let bodydata = body
        ? JSON.stringify(body)
        : method === 'GET'
            ? undefined
            : '';


    let headerPayload = isLogin ?
        {
            Accept: "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
        }
        :
        {
            Accept: "application/json; charset=utf-8",
        }

    console.log(
        'CALLING APIs:: ',
        url,
        ' METHOD:: ',
        method,
        'body :',
        body,
        'token', token,
        'header', headerPayload
    );

    return new Promise(async (resolve, reject) => {
        let resp = {};
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
            headers: headerPayload
        })
            .then(response => {
                if (
                    url === 'https://alert-hub.onrender.com/api/profile/validate/otp' ||
                    url === 'https://alert-hub.onrender.com/api/profile/otp/send' ||
                    url === 'https://alert-hub.onrender.com/auth/login'

                ) {
                    resolve(response);
                } else {

                    resp = response;
                    if (response.status !== 200) {
                        reject(recallError);
                    }
                    resp.data = JSON.parse(response.bodyString);
                    console.log('apiRecall-->', resp);
                    resolve(resp);
                }


            })
            .catch(err => {
                console.log('API ERROR:::', err);
                reject(err);
                // console.log('url->', err);
                // console.log(`error: ${err}`)
            })

    });


}
