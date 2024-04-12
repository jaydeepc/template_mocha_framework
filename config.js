let baseUrl;

if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://reqres.in/api';
} else if (process.env.NODE_ENV === 'development') {
    baseUrl = 'https://staging.reqres.in/api';
} else {
    baseUrl = 'https://default.reqres.in/api';
}

export default baseUrl;