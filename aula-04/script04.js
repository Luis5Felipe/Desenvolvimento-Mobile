let http = require("http");
let url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    let endereco = "http://localhost:3000" + req.url;
    let dados = url.parse(endereco, true);
    let compos = dados.query;

    res.write("<html>");
    res.write("<head><title>Mobile</title></head>");
    res.write("<body>");
    res.write("<h1>Dados do Aluno</h1>");
    res.write("<h1>Dados do Endereço</h1>");
    res.write(`<p><strong>Endereço:</strong> ${endereco}</p>`);
    res.write(`<p><strong>Host:</strong> ${dados.host}</p>`);
    res.write(`<p><strong>Caminho:</strong> ${dados.pathname}</p>`);
    res.write(`<p><strong>Pesquisa:</strong> ${dados.search}</p>`);
    res.write("</body>");
    res.write("</html>");
    res.end();
  })
  .listen(8080);

console.log("Servidor rodando em http://localhost:8080/");
