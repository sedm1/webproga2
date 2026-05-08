import express from "express";
const app = express();
const PORT = 3000;
const LOGIN = "sedm1";

function todayRoute() {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, "0");
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const yy = String(now.getFullYear()).slice(-2);
    return `/${dd}${mm}${yy}`;
}

app.get(todayRoute(), (req, res) => {
    res.type("text/plain").send(LOGIN);
});

app.get("/add/:x1/:x2", (req, res) => {
    const x1 = Number(req.params.x1);
    const x2 = Number(req.params.x2);
    res.type("text/plain").send(String(x1 + x2));
});

app.get("/mpy/:y1/:y2", (req, res) => {
    const y1 = Number(req.params.y1);
    const y2 = Number(req.params.y2);
    res.type("text/plain").send(String(y1 * y2));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});