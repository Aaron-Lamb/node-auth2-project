const db = require('../data/config');

function getUsers(){
    return db('users')
    .select('id', 'username', 'department')
}

function getUserBy(filter){
    return db('users')
    .select(
        'id',
        'username', 
        'password', 
        'department')
    .where(filter)
}

function getUserById(id){
    return db('users')
    .select('id', 'username')
    .where('id', id)
    .first()
}

async function addUser(user){
    const [id] = await db('users').insert(user);
    return getUserById(id);
}

module.exports = {
    getUsers,
    getUserBy,
    getUserById,
    addUser
}