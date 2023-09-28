const http = require('http');

// Creazione di un server HTTP
const server = http.createServer((req, res) => {
  // Configura l'intestazione di risposta con il tipo di contenuto
  res.setHeader('Content-Type', 'text/plain');
  
  // Verifica il percorso richiesto
  if (req.url === '/') {
    // Se la richiesta è per la radice '/', invia 'Hello World!'
    res.end('Hello World!\n');
  } else if (req.url === '/about') {
    // Se la richiesta è per '/about', invia un messaggio sull'about
    res.end('About Page\n');
  } else {
    // Se il percorso richiesto non corrisponde a nessuno dei precedenti, invia un messaggio di errore 404
    res.statusCode = 404;
    res.end('404 Not Found\n');
  }
});

// Definisci la porta su cui il server ascolterà
const port = 3000;

// Avvia il server sulla porta specificata
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
