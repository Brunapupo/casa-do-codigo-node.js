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

    app.get('/livros' , function(req, resp) {
        resp.send(
            `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Listagem de Livros </h1>
                </body> 
            </html>
        `
        );
    });
};

