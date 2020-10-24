const routes = (app) => {

    app.route('/')
    .get('/', (req, res)=> {
        res.send(`Method GET`);
    })
    .post('/', (req, res)=> {
        res.send(`Method POST`);
    })
    .put('/', (req, res)=> {
        res.send(`Method PUT`);
    })
    .delete('/', (req, res)=> {
        res.send(`Method DELETE`);
    })
    
}

module.exports = routes;
