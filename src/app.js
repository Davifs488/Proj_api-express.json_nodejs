import express from "express";

const app = express();

//indicar para o express ler body com json
app.use(express.json());

//mock
const selecoes = [
  { id: 1, selcao: "Brasil", grupo: "G" },
  { id: 2, selcao: "Suiça", grupo: "G" },
  { id: 3, selcao: "Camarões", grupo: "G" },
  { id: 4, selcao: "Servia", grupo: "G" },
];

//Buscar por ID
function buscarSelecaoPoId(id) {
  return selecoes.filter((selecao) => selecao.id == id);
}

//Pegar a posição ou index do elemento no array por id
function buscarIndexSelecao(id) {
  return selecoes.findIndex((selecao) => selecao.id == id);
}

app.get("/", (req, res) => {
  res.send("Curso de Nodejs/Davi_dev");
});

app.get("/selecoes", (req, res) => {
  res.status(200).send(selecoes);
});

app.get("/selecoes/:id", (req, res) => {
  res.json(buscarSelecaoPoId(req.params.id));
});

//adicionar elementos
app.post("/selecoes", (req, res) => {
  selecoes.push(req.body);
  res.status(201).send(" Cadastrada com sucesso");
});

//Deletar elemento
app.delete("/selecoes/:id", (req, res) => {
  let index = buscarIndexSelecao(req.params.id);
  selecoes.splice(index, 1);
  res.send(`Seleçõescom id ${req.params.id} excluida com sucesso !`);
});

//Atuali
app.put("/selecoes/:id", (req, res) => {
  let index = buscarIndexSelecao(req.params.id);
  selecoes[index].selecao = req.body.selecao;
  selecoes[index].grupo = req.body.selecao;
  res.json(selecoes);
});

export default app;
