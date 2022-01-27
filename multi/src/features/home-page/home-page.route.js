const gql = require("graphql-tag");

const GET_PUBLIC_USERS = gql`
    query getUsers {
        users { 
            name 
        }
    }
`;

console.log(GET_PUBLIC_USERS);

const homePageRoute = async (req, reply) => {

    const res = await req.apollo.query({
        query: GET_PUBLIC_USERS,
        fetchPolicy: "no-cache"
    });

    const names = res.data.users 
        .map(user => user.name)
        .join(', ');

    //console.log(req);
    reply.send("hello world: " + names);
}

module.exports = homePageRoute;