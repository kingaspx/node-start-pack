const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        version: '50.61.30',      // by default: '1.0.0'
        title: 'ASKDJKSALJDL',        // by default: 'REST API'
        description: 'ASKLDJLKSAJ',  // by default: ''
    },
    host: 'localhost:21598',
    schemes: ['http'],
    definitions: {
        InserirUsuario:{
            "nome": "Abner",
            "idade": 24,
            "phone": "xxxxxxx"
        }
    }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./src/routes.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);