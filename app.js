const express = require('express');
const app = express();
const PORT = 3000;

let visitCount = 0;

// Configuración de la carpeta estática y motor de plantillas
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Ruta principal
app.get('/', (req, res) => {
    visitCount++;
    res.render('index', { visitCount });
});

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
