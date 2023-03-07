
module.exports = (app, Users) => {
    // Supprimer un utilisateur par ID
    app.delete('/users/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const user = await Users.findByPk(id);
            if (user) {
                await user.destroy();
                res.json({ message: `Utilisateur ${user.email} supprimé avec succès`, data: user });
            } else {
                res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
        }
    });
}
