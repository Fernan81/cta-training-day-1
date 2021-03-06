
const axios = require('axios');

const GET_PUBLIC_USERS = `
    query getUsers {
        users { 
            name 
        }
    }
`;

const nameRoute = async (req, reply) => {
    
    const targetUrl = req.getConfig('apollo.client.config.uri');

    const res = await axios.post(targetUrl, {
        query : GET_PUBLIC_USERS
    });

    const names = res.data.data.users 
        .map(user => user.name)
        .map(name => name.toUpperCase());

    reply.send({
        items: names
    });
} 

module.exports = nameRoute;