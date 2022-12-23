const e = require("express");
const pool = require("../../db");
const queries = require("./queries");

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUser = (req, res) => {
    const { id, username, password } = req.body;

    //check if username exists
    pool.query(queries.checkUsernameExists, [username], (error, results) => {
        if (error) throw error;
        if(results.rows.length) {
            res.status(200).send("User already exists");
        }
        else{
            pool.query(queries.addUser, [username, password], (error, results) => {
                if (error) throw error;
                res.status(201).send("Student created successfully");
            });
        };
    });

}

const updateUserById = (req, res) => {
    const { id, username, password } = req.body

    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        const noUserFound = !results.rows.length;
        if (noUserFound){
            res.send("User does not exist!")
        }
        else{
            pool.query(queries.updateUserById, [id, password], (error, results) => {
                if (error) throw error;
                res.status(200).send("User password updated");
            });    
        };
    });
};

const removeUserById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        const noUserFound = !results.rows.length;
        if (noUserFound){
            res.send("User does not exist!")
        }
        else{
            pool.query(queries.removeUserById, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send("User deleted");
            });    
        };
    });
};

module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUserById,
    removeUserById
}