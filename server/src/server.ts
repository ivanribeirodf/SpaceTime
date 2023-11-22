import fastify from 'fastify';

const app = fastify()

app.listen({
  port:8000,  
}).then(() => {
  console.log('🚀 HTTP server running on <http://localhost:8000>')
})