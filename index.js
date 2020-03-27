const express = require ('express');

const app = express ( );

app.get('/', (request, response) => {
   return response.json({
       evento: 'Semana OmniStack',
       aluno: 'Emily Jenifer'
   });
});

app.listen(3333);