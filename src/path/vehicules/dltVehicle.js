
module.exports = (app, Vehicle) => {

    app.delete('/vehicles/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const vehicle = await Vehicle.findByPk(id);
            if (vehicle) {
                await vehicle.destroy();
                res.json({ message: `Le vehicule avec l'id ${vehicle.id} supprimé avec succès`, data: vehicle });
            } else {
                res.status(404).json({ error: 'Vehicule non trouvé' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
        }
    });
}
