import { fetchUtils} from 'react-admin';
import { stringify } from 'query-string';


const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// const httpClient = (url, options = {}) => {
//     if (!options.headers) {
//         options.headers = new Headers({ Accept: 'application/json' });
//     }
//     // add your own headers here
//     options.headers.set('X-Custom-Header', 'foobar');
//     options.headers.set('Access-Control-Allow-Origin', '*');
//     options.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     return fetchUtils.fetchJson(url, options);
// };

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

const webcamFakeData = [
    {
        id: 126,
        lid: 34,
        name: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet. Qui illo aliquid et aliquid numquam aut voluptates sequi hic corrupti voluptate vel quidem numquam qui eligendi molestiae? Qui illum eligendi 33 deserunt sint non exercitationem voluptatem eum autem quia eos officiis adipisci.",
        url: "https://www.bitdrome.com",
        image: 'http://www.webcam-meteo-roma.it/webcam/current.jpg',
        source: 'Manual',
        status: 'HTTP Error: 500'
    },
    {
        id: 127,
        lid: 37,
        name: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet. Qui illo aliquid et aliquid numquam aut voluptates sequi hic corrupti voluptate vel quidem numquam qui eligendi molestiae? Qui illum eligendi 33 deserunt sint non exercitationem voluptatem eum autem quia eos officiis adipisci.",
        url: "https://www.bitdrome.com",
        image: 'http://meteo.viamar.org/jpgwebcam.jpg',
        source: 'User reported',
        status: 'HTTP Error: 400'
    },
    {
        id: 124,
        lid: 3,
        name: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet. Qui illo aliquid et aliquid numquam aut voluptates sequi hic corrupti voluptate vel quidem numquam qui eligendi molestiae? Qui illum eligendi 33 deserunt sint non exercitationem voluptatem eum autem quia eos officiis adipisci.",
        url: "https://www.bitdrome.com",
        image: 'http://www.meteocentocelle.it/weather/video.jpg',
        source: 'Feratel',
        status: 'Content is not image'
    },
    {
        id: 123,
        lid: 54,
        name: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet. Qui illo aliquid et aliquid numquam aut voluptates sequi hic corrupti voluptate vel quidem numquam qui eligendi molestiae? Qui illum eligendi 33 deserunt sint non exercitationem voluptatem eum autem quia eos officiis adipisci.",
        url: "https://www.bitdrome.com",
        image: 'http://www.meteocentocelle.it/weather/video.jpg',
        source: 'Manual',
        status: 'HTTP Error: 500'
    },
    {
        id: 125,
        lid: 7,
        name: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet. Qui illo aliquid et aliquid numquam aut voluptates sequi hic corrupti voluptate vel quidem numquam qui eligendi molestiae? Qui illum eligendi 33 deserunt sint non exercitationem voluptatem eum autem quia eos officiis adipisci.",
        url: "https://www.bitdrome.com",
        image: 'http://meteo.viamar.org/jpgwebcam.jpg',
        source: 'User reported',
        status: 'HTTP Error: 400'
    },
];

const webcamReportFakeData = [
    {
        id: 126,
        lid: 54,
        url_webcam: 'http://www.webcam-meteo-roma.it/webcam/current.jpg',
        url_site: 'http://www.webcam-meteo-roma.it/webcam/current.jpg',
        description: "Lorem ipsum dolor sit amet. Qui illo aliquid et aliquid numquam aut voluptates sequi hic corrupti voluptate vel quidem numquam qui eligendi molestiae? Qui illum eligendi 33 deserunt sint non exercitationem voluptatem eum autem quia eos officiis adipisci.",
        locality: "Rome",
        email: 'a.cirillo@bitdrome.com'
    },
    {
        id: 127,
        lid: 37,
        url_webcam: 'http://meteo.viamar.org/jpgwebcam.jpg',
        url_site: 'http://meteo.viamar.org/jpgwebcam.jpg',
        description: "Lorem ipsum dolor sit amet. Qui illo aliquid et aliquid numquam aut voluptates sequi hic corrupti voluptate vel quidem numquam qui eligendi molestiae? Qui illum eligendi 33 deserunt sint non exercitationem voluptatem eum autem quia eos officiis adipisci.",
        locality: "Naples",
        email: 'l.ciuccio@bitdrome.com'
    },
    {
        id: 130,
        lid: 3,
        url_webcam: 'http://www.meteocentocelle.it/weather/video.jpg',
        url_site: 'http://www.meteocentocelle.it/weather/video.jpg',
        description: "Lorem ipsum dolor sit amet. Qui illo aliquid et aliquid numquam aut voluptates sequi hic corrupti voluptate vel quidem numquam qui eligendi molestiae? Qui illum eligendi 33 deserunt sint non exercitationem voluptatem eum autem quia eos officiis adipisci.",
        locality: "Milan",
        email: 's.iodice@bitdrome.com'
    }
];


const httpClient = fetchUtils.fetchJson;


export default {
    getList: (resource, params) => {
        console.log(resource);
        console.log(params.filter);
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
            let current_object = webcamFakeData;
            if(isEmpty(params.filter)){
            }else{
                let filter_name = params.filter.name;
                let filter_lid = params.filter.lid;
                let filter_source = params.filter.source;
                if(filter_name !== undefined){
                    current_object = current_object.filter(items => items.name.toLowerCase().indexOf(filter_name.toLowerCase()) !== -1)
                }
                if(filter_lid !== undefined){
                    current_object = current_object.filter(items => items.lid == parseInt(filter_lid))
                }
                if(filter_source !== undefined){
                    current_object = current_object.filter(items => items.source.toLowerCase().indexOf(filter_source.toLowerCase()) !== -1)
                }
            }

            const url = `${apiUrl}`;
            return httpClient(url).then(({headers, json}) => ({
                data: current_object,
                total: current_object.length
            }));
        }

        if(resource === 'housekeeping'){
            let current_object = webcamFakeData;
            if(isEmpty(params.filter)){
            }else{
                let filter_name = params.filter.name;
                let filter_lid = params.filter.lid;
                let filter_source = params.filter.source;
                let filter_status = params.filter.status;
                if(filter_name !== undefined){
                    current_object = current_object.filter(items => items.name.toLowerCase().indexOf(filter_name.toLowerCase()) !== -1)
                }
                if(filter_lid !== undefined){
                    current_object = current_object.filter(items => items.lid == parseInt(filter_lid))
                }
                if(filter_source !== undefined){
                    current_object = current_object.filter(items => items.source.toLowerCase().indexOf(filter_source.toLowerCase()) !== -1)
                }
                if(filter_status !== undefined){
                    current_object = current_object.filter(items => items.status.toLowerCase().indexOf(filter_status.toLowerCase()) !== -1)
                }
            }

            const url = `${apiUrl}`;
            return httpClient(url).then(({headers, json}) => ({
                data: current_object,
                total: current_object.length
            }));
        }

        if(resource === 'webcam-reports'){
            let current_object = webcamReportFakeData;
            if(isEmpty(params.filter)){
            }else{
                let filter_uw = params.filter.url_webcam;
                let filter_us = params.filter.url_site;
                let filter_lid = params.filter.lid;
                let filter_locality = params.filter.locality;
                let filter_email = params.filter.email;
                if(filter_uw !== undefined){
                    current_object = current_object.filter(items => items.url_webcam.toLowerCase().indexOf(filter_uw.toLowerCase()) !== -1)
                }
                if(filter_us !== undefined){
                    current_object = current_object.filter(items => items.url_site.toLowerCase().indexOf(filter_us.toLowerCase()) !== -1)
                }
                if(filter_lid !== undefined){
                    current_object = current_object.filter(items => items.lid == parseInt(filter_lid))
                }
                if(filter_locality !== undefined){
                    current_object = current_object.filter(items => items.locality.toLowerCase().indexOf(filter_locality.toLowerCase()) !== -1)
                }
                if(filter_email !== undefined){
                    current_object = current_object.filter(items => items.email.toLowerCase().indexOf(filter_email.toLowerCase()) !== -1)
                }
            }

            const url = `${apiUrl}`;
            return httpClient(url).then(({headers, json}) => ({
                data: current_object,
                total: current_object.length
            }));
        }
    },
    create: (resource, params) => {
        if(resource === 'webcams') {
            params.id = 150;
            webcamFakeData.includes(params);
            const url = `${apiUrl}`;
            return httpClient(url).then(({headers, json}) => ({
                data: webcamFakeData,
                id: 150
            }));
        }
    },
    getOne: (resource, params) => {
        if(resource === 'webcams' || resource === 'housekeeping') {
            const url = `${apiUrl}`;
            return httpClient(url).then(({headers, json}) => ({
                data: webcamFakeData.filter(id => params.id),
            }));
        }
    }
}