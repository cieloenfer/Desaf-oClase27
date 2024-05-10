const User = require('../models/user.model');

// Función para crear un nuevo usuario en la base de datos
async function createUser(userData) {
    try {
        const newUser = new User(userData);
        await newUser.save();
        return newUser;
    } catch (error) {
        throw new Error('Error al crear usuario en la base de datos');
    }
}

// Función para obtener un usuario por su ID
async function getUserById(userId) {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        throw new Error('Error al obtener usuario por ID desde la base de datos');
    }
}

// Función para actualizar un usuario en la base de datos
async function updateUserById(userId, updateData) {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
        return updatedUser;
    } catch (error) {
        throw new Error('Error al actualizar usuario en la base de datos');
    }
}

module.exports = {
    createUser,
    getUserById,
    updateUserById
};
