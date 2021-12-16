import axios from 'axios';
import * as cookie from 'cookie';
import * as setCookie from 'set-cookie-parser';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const defaultOptions = {
  baseURL: process.env.NEXT_PUBLIC_ENV_API_URL,
};

const client = axios.create(defaultOptions);

createAuthRefreshInterceptor(client, (failedRequest) =>
  client.get('/api/refreshToken').then((resp) => {
    if (client.defaults.headers.setCookie) {
      delete client.defaults.headers.setCookie;
    }
    const {accessToken} = resp.data;

    const bearer = `Bearer ${accessToken}`;
    client.defaults.headers.Authorization = bearer;

    const responseCookie = setCookie.parse(resp.headers['set-cookie'])[0];
    client.defaults.headers.setCookie = resp.headers['set-cookie'];
    client.defaults.headers.cookie = cookie.serialize(
      responseCookie.name,
      responseCookie.value,
    );

    failedRequest.response.config.headers.Authorization = bearer;

    return Promise.resolve();
  }),
);

export default client;
