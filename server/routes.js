var controller = require('./controllers.js');

module.exports = function(app){
    app.get('/api/pets/:id',controller.one);
    app.get('/api/pets',controller.all);
    app.put('/api/pets/:id',controller.update);
    app.post('/api/pets',controller.create);
    app.delete('/api/pets/:id' , controller.delete);
}