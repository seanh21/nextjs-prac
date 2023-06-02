import getUsers from '../../data'

export async function GET(req, res) {
    const urlParams = new URLSearchParams(req.url);
    const page = urlParams.get('page');
    console.log(page);
    console.log(typeof(req.url));
    const data = await getUsers(2);
    return new Response(JSON.stringify(data))
}