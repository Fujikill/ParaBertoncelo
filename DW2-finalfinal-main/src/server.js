const express = require("express");
const app = express();

/**
 * Caminhos estáticos
 */
app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
app.use('/css', express.static(__dirname + '/publico/form-album.css'));
app.use('/mask', express.static('./node_modules/jquery-mask-plugin/dist'));

app.use('/js', express.static(__dirname + '/publico/form-album'));

/**
 * caminhos estaticos
 * ./           -> indica o diretório raiz do projeto
 * __dirname    -> retorna o diretório do arquivo que está sendo executado, no caso, o server.js
 */

 app.use('/publico', express.static(__dirname + '/publico'));


app.listen(3000,function(){
    console.log('Servidor rodando na porta 3000');
});

app.get('/', function(req, resp){
    resp.sendFile(__dirname + '/views/crud.html')
});