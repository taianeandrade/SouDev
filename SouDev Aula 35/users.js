const users = [
    "usuário 1",
    "usuário 2",
    "usuário 3"];

    function createUser () {
        console.log("Usuário criado")
    }

    function updateUser () {
        console.log("Usuário atualizado")
    }

    function listUser () {
        return "Lista de usuarios";
    }

    function deleteUser () {
        console.log("Usuário deletado")
    }

module.exports = {
    users,
    createUser,
    updateUser,
    listUser,
    deleteUser
}
