import getConnection from "../db/database.js";

const getConstructoras = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM constructoras");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const addConstructora = async (req, res) => {
    try {
        const {nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto} = req.body;
        const construction = {nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto};
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO constructoras SET ?", construction);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getConstructora = async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id);
        const connection = await getConnection();
        const result = await connection.query("SELECT id_constructora, nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto FROM constructoras WHERE id_constructora = ?", id);
        
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteConstructora = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM constructoras WHERE id_constructora = ?", id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const updateConstructora = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto} = req.body;

        const construction = {nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto};
        const connection = await getConnection();

        const result = await connection.query("UPDATE constructoras SET ? WHERE id_constructora = ?",[construction,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}



export const methodsHTTP = {
    getConstructoras,
    addConstructora,
    getConstructora,
    deleteConstructora,
    updateConstructora
}