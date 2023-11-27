module.exports =  (app) => {
        // rota raiz função callback executada sempre que chamada.
    app.get('/' , function(red, resp) {
        resp.send(
            `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Codigo </h1>
                </body> 
            </html>
        `
        );
    });

    //troquei o send por marko e importei o html
    app.get('/livros' , function(req, resp) {
        resp.marko(
            require('../views/livros/lista/lista.marko')
        );
    });
};

