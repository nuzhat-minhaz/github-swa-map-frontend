module.exports = async function (context, req) {
    const user = req.user;
    
    if (!user?.username) {
        context.res = {
            status: 401,
        }
        return;
    }

    const person = req.body;
    person.id = user.username;

    context.bindings.person = person;

    context.res = {
        body: person
    };
}