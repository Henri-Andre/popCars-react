const Vehicle = require("../../models/Vehicle");

module.exports = (app, Vehicle) =>{
    app.post('/vehicle', (req,res)=> {
        const id = parseInt(req.params.id);
        try{
            const{name, active ,description ,img  } = req.body;

            if (!title) {
                return res.status(400).json({ message: 'name is required' });
            }

            if (!active) {
                active = true
            }

            if (!description) {
                return res.status(400).json({ message: 'description is required' });
            }

            if (!img) {
                return res.status(400).json({ message: 'picture is required' });
            } 
        }
    })
}