const express = require('express');
const app = express();
const conn = require('./conn')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.get('/', (req, res) => {
    res.render('index');
});

app.post("/biodata", (req, res) => {
    const ln = req.body.ln;
    const fn = req.body.fn;
    const mn = req.body.mn;
    const em = req.body.em;
    const pn = req.body.pn;
    const age = req.body.age;
    const cs = req.body.cs;
    const sc = req.body.sc;
    const gn = req.body.gn;

    const insert = `INSERT INTO students_data
    VALUES ('0','${ln}','${fn}','${mn}','${em}','${pn}','${age}','${cs}','${sc}','${gn}')`

    conn.query(insert, (err) => {
        if (err) throw err;
        res.send(
            `<script>
                alert('data:inserted);
                location.href='/'
            </script>`
        )
    })
});

app.listen(9000, () => {
    console.log("Server is up!")
})