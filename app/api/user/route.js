import getUsers from '../../data'

export async function GET(req, res) {
    const data = await getUsers();
    return new Response(JSON.stringify(data))
}