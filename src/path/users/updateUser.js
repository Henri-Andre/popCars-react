const bcrypt = require('bcrypt');


module.exports = (app, Users) => {
    app.put('/users/:id', async (req, res) => {
        try {
            const user = await Users.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'Utilisateur non trouvé' });
            }
            const { name, first_name, email, password, image, roleID } = req.body;
            if (email !== user.email) {
                const existingUser = await Users.findOne({ where: { email } });
                if (existingUser) {
                    return res.status(409).json({ message: 'Un compte existe déjà avec cet email' });
                }
            }
            const hash = await bcrypt.hash(password, 10);
            await user.update({ name, first_name, email, password: hash, image, roleID });
            res.json({ message: 'Utilisateur mis à jour avec succès', data: user });
        } catch (error) {
            res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour de l\'utilisateur' });
        }
    });
}