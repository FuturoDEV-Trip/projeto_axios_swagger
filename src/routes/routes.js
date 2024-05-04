const { Router } = require("express");
const alunoRoutes = require("./alunos.route.");
const cursoRoutes = require("./cursos.route");
const loginRoutes = require("./login.route");

const routes = Router()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc.swagger.json');

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.use('/alunos', alunoRoutes)
routes.use('/cursos', cursoRoutes)
routes.use('/login', loginRoutes)

module.exports = routes