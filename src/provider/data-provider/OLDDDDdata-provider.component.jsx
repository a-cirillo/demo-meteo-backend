import { fetchUtils, Admin, Resource } from 'react-admin';
import { stringify } from 'query-string';


const apiUrl = 'https://jsonplaceholder.typicode.com';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('X-Custom-Header', 'foobar');
    options.headers.set('Access-Control-Allow-Origin', '*');
    options.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    return fetchUtils.fetchJson(url, options);
};

// const httpClient = fetchUtils.fetchJson;

export default {
    getList: (resource, params) => {
        console.log(resource);
        console.log(params);
        if (resource === 'categories') {
            // const url = `${apiUrl}/${resource}`;
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const query = {
                sort: JSON.stringify([field, order]),
                range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
                filter: JSON.stringify(params.filter),
            };
            console.log(query);
            const url = `${apiUrl}/${resource}`;
            return httpClient(url).then(({headers, json}) => ({
                data: json,
                total: 10,
            }));
        }

        if(resource === 'webcams'){
            const url = `${apiUrl}`;
            return httpClient(url).then(({headers, json}) => ({
                data: [
                    { id: 126, lid: 34, title: "allo?"},
                    { id: 127, lid: 37, title: "bien le bonjour"},
                    { id: 124, lid: 3, title: "good day sunshine"},
                    { id: 123, lid: 54, title: "hello, world"},
                    { wid: 125, lid: 7, title: "howdy partner"},
                ],
                total: 5
            }));
        }
    }

}