

module.exports = (app, Vehicle, Models) => {
    app.get('/vehicles',  (req, res) => {
        try {
            const vehicles =  Vehicle.findAll({
                include :  {
                    model : Models,
                    attributes:['name']

                }
            })
            .then(vehicle => res.json(vehicle))
            }catch (error) {
                console.error(error);
                res.status(500).json({message: 'la requete a échoué'})
            }
        }) 
    } 
    
