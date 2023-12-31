import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app.listen({
  port:8000,  
}).then(() => {
  console.log('🚀 HTTP server running on <http://localhost:8000>')
})