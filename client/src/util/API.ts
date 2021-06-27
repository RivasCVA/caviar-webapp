/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:4000/';
const TIMEOUT = 5000;

const Endpoints = {
    contacts: '/api/contact',
};

export default class API {
    private static instance = axios.create({ baseURL: BASE_URL, timeout: TIMEOUT });

    public static post = (
        endpoint: keyof typeof Endpoints,
        data: any
    ): Promise<AxiosResponse<any>> => {
        return API.instance.post(Endpoints[endpoint], data);
    };
}
