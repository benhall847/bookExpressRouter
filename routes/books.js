const Router = require('express').Router
const {
    create,
    retrieveAll,
    update,
    deleter
} = require('../controllers/books')

const thisRoute = Router();

thisRoute.get('/', retrieveAll);

thisRoute.post('/', create);

thisRoute.put('/', update);

thisRoute.delete('/',deleter);

module.exports = thisRoute