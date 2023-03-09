const bcrypt = require('bcrypt');

module.exports = (app, Users) => {
    app.post('/users', async (req, res) => {
        const { name, first_name, email, password, image,roleID } = req.body;

        if (!name || !first_name || !email || !password) {
            return res.status(400).json({ message: 'Le nom, prénom, l\'email et le mot de passe sont obligatoires' });
        }

        try {
            const element = await Users.findOne({ where: { email } });

            if (element) {
                return res.status(409).json({ message: 'Un compte existe déjà avec cet email' });
            }
            const hash = await bcrypt.hash(password, 10);
            const createdUser = await Users.create({
                name,
                first_name,
                email,
                password: hash,
                image: image || 'image.png',
                roleID: roleID || 1
            });

            res.status(201).json({ message: `User ${name} ajouté avec succès`, data: createdUser });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Une erreur s\'est produite lors de la création de l\'utilisateur' });
        }
    });
};
