const api = require('../controllers/controllers');

module.exports = (app) => {

    app.get("/tasks",api.showAll)
    app.get("/tasks/:id", api.showOne)
    app.post("/task", api.create)
    app.put("/tasks/:id", api.update)
    app.delete("/tasks/:id", api.delete)

};