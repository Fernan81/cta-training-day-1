const multiplySchema = {
    body: {
        type: 'object',
        required: ['input'],
        properties: {
            input:{
                type: 'object',
                required: ['num1', 'num2'],
                properties: {
                    num1: {type: 'number'},
                    num2: {type: 'number'}
                },
            required: [ 'num1', 'num2' ]
            }
        },
        required: [ 'input' ]
    },
    response: {
        200: {
            type: 'object',
            properties: {
                result: { type: 'number' }
            },
            required: [ 'result' ]
        }
    }
}

module.exports = multiplySchema;