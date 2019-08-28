const rs = require('reddit-simple').RedditSimple;
const app = require('express')();

app.get('/api/:sub', (req, res) => {
    rs.RandomPost(req.params.sub).then(x => {
        let num = Math.floor(Math.random() * x.length);
        res.send({title: x[num].data.title, body: x[num].data.selftext, author: x[num].data.author});
    }).catch(err => {
        return;
    });
});

app.get('/:sub', (req, res) => {
    rs.RandomPost(req.params.sub).then(x => {
        let num = Math.floor(Math.random() * x.length);
        res.send(`${x[num].data.title} ${x[num].data.selftext}`);
    }).catch(err => {
        return;
    });
});

app.listen(80, 'localhost', () => {
    console.log("Web Server Has Started.");
});