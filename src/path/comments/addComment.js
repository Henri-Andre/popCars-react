module.exports = (app, Comments) => {
    app.post('/comments', async (req, res) => {
      const { content, userID , vehicleID} = req.body;
  
      // Validate request body
      if (!content || !userID || !vehicleID) {
        return res.status(400).json({ message: 'Bad request' });
        }
  
      try {
        const newComments = await Comments.create({
          content,
          userID,
          vehicleID
        });
  
    
  
        res.status(201).send(newComments);
      } catch (err) {
        console.error(err);
  
       
          res.status(500).send('Server error');
        
      }
    });
  };
  