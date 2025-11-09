import Fastify from 'fastify';
import quoteRoutes from './routes/quotes.js';

const fastify = Fastify({
    logger: true
});

fastify.register(quoteRoutes, {prefix:'/api'});

const start = async () => {
    try {
        await fastify.listen({port:3000});
        console.log("server is listening on localhost:3000/api/random");
    } catch(err) {
        fastify.log.error(err);
        process,exit(1);
    }
};

start();