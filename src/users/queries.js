const getUsers = "SELECT * FROM Users";
const getUserById = "SELECT * FROM Users WHERE id = $1";
const addUser = "INSERT INTO Users (username, password) VALUES ($1, $2)";
const updateUserById = "UPDATE Users SET password = $2 WHERE id = $1";
const removeUserById = "DELETE FROM Users WHERE id = $1";
const checkUsernameExists = "SELECT u FROM Users u WHERE u.username = $1";

module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUserById,
    removeUserById,
    checkUsernameExists,
}