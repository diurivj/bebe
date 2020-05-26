import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const client = new MongoClient(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect()
  req.dbClient = client
  req.db = client.db('baby')
  return next()
}

const middleware = nextConnect()
middleware.use(database)

const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res) => {
  const { answer } = JSON.parse(req.body)
  const { result } = await req.db.collection('answers').insertOne({ answer })
  res.status(201).json(result)
})

export default handler
