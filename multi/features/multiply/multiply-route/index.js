const multiplyRoute = (req, reply) => {
    console.log(req.body);

    if (req.body.input.num1 === 5){
        reply.status(418).send({
            message: 'we do not like num 5',
            extension: {
                path: "$.input.num1",
                code:666
            }
        })
    }


    const result = req.body.input.num1 * req.body.input.num2;
    reply.send({result});
}

module.exports = multiplyRoute;