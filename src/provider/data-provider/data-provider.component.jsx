import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';


const apiUrl = 'http://ws-spunto.bitdrome.com/api';
const httpClient = fetchUtils.fetchJson;

export default {
    getList: (resource, params) => {
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
    }
}