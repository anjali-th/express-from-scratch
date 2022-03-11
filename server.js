const express = require ('express');
const {Pool} = require ('pg');

const pool = new Pool({
    database: 'animals',
});

const app = express();

app.use( express.static('public'));

const PORT = 8000 | process.env.PORT;

app.get('/api/animals', (req, res)=>{
    pool.query('SELECT * FROM farm', (err, result)=>{
        if (err){
            res.sendStatus(500);
        }else{
            res.send(result.rows);
        }
    });
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});