<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>10-Ajax</title>
</head>
    <body>
    <h1>10-Ajax</h1>
    <button type="button" onclick="loadThatJson()">load data.json</button>
    <h2>data.json</h2>
    <pre id="data">
    <table id="datatable"></table>
    </pre>
    <h2>headers</h2>
    <pre id="headers"></pre>
    <h3>onreadystatechange</h3>
    <p><pre>
    0 	UNSENT 	L'objet est prêt, maiss la méthode open() n'a pas encore été appelé.
    1 	OPENED 	open() à été appelé.
    2 	HEADERS_RECEIVED 	send() à été appelé, les headers et status sont disponibles au sein de l'objet.
    3 	LOADING 	Réception en cours, les données reçues sont partielles.
    4 	DONE 	La requête est terminée.
    </pre></p>
</p>
    <section id="container"></section>
        <script src="ajax.js"></script>
    </body>
</html>