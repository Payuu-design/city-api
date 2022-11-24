import express from "express";

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/barranquilla', (_, res) => res.status(200).send('Atlántico'));

app.get('/santa marta', (_, res) => res.status(200).send('Magdalena'));

app.get('/cartagena', (_, res) => res.status(200).send('Bolívar'));

app.get('/bogota', (_, res) => res.status(200).send('Cundinamarca'));

app.use((_, res) => res.status(404).send('N/A'));

app.listen(app.get('port'), () => {
    console.log('App listening on port', app.get('port'));
});
