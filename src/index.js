import express from "express";

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/Barranquilla', (_, res) => res.status(200).send('Atlántico'));

app.get('/Santa Marta', (_, res) => res.status(200).send('Magdalena'));

app.get('/Cartagena', (_, res) => res.status(200).send('Bolívar'));

app.get('/Montería', (_, res) => res.status(200).send('Córdoba'));

app.get('/Sincelejo', (_, res) => res.status(200).send('Sucre'));

app.use((_, res) => res.status(404).send('Mamaguevo'));

app.listen(app.get('port'), () => {
    console.log('App listening on port', app.get('port'));
});
