import { NextRequest } from 'next/server'

const ERROR_MESSAGE = 'Wrong user name or password'

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()
    // console.log('body:',body)
    // TO-DO: await connect to DB
    // TO-DO: verify user
    return new Response(JSON.stringify({message: ERROR_MESSAGE}), { status: 401 })
  } catch (error) {
    return new Response('Failed to fetch menu', { status: 500 })
  }
}
