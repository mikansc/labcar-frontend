import jsonServer from "json-server";
import path from "path";
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const __dirname = path.resolve();
const router = jsonServer.router(path.join(__dirname, "server", "db.json"));
server.db = router.db;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/login", (req, res) => {
  const { email, senha } = req.body;
  if (email === "" || senha === "") {
    res.status(400).json({ message: "Email and password are required" });
  }
  const user = server.db.get("users").find({ email, senha }).value();
  if (user) {
    res.json({ id: user.id, email: user.email, name: user.name });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

server.use("/usuarios", (req, res, next) => {
  if (req.method === "GET") {
    const usuarios = server.db.get("usuarios").value();
    const usuariosSemSenha = usuarios.map((usuario) => {
      delete usuario.senha;
      return usuario;
    });
    res.json(usuariosSemSenha);
  } else {
    next();
  }
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
