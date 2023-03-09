
module.exports = (app, Comments) => {

    app.delete('/comments/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const comments = await Comments.findByPk(id);
            if (comments) {
                await comments.destroy();
                res.json({ message: `Le commentaire avec l'id ${comments.id} supprimé avec succès`, data: comments });
            } else {
                res.status(404).json({ error: 'commentaire non trouvé' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
        }
    });
}
