module.exports = async function (context, req) {
    const person = req.body;

    context.bindings.person = person;

    context.res = {
        body: person
    };
}