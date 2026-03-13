let http = require("http");

let nome = "Fernanda da Costa";
let idade = 13;
let altura = 1.6;
let sexo = "F";

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<html>");
    res.write("<head><title>Mobile</title></head>");
    res.write("<body>");
    res.write("<h1>Dados do Aluno</h1>");
    res.write("<ul>");
    res.write(`<li><strong>Nome:</strong> ${nome}</li>`);
    res.write(`<li><strong>Idade:</strong> ${idade}</li>`);
    res.write(`<li><strong>Altura:</strong> ${altura}m</li>`);
    res.write(`<li><strong>Sexo:</strong> ${sexo}</li>`);
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  })
  .listen(8080);

console.log("Servidor rodando em http://localhost:8080/");
