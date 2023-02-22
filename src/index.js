var http = require("http");

const PORT = 8081;
const hostname = 'localhost'
const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    const url = req.url
    if (url === '/welcome') {
        res.statusCode = 200;
        return res.end("Welcome to Dominos!");
    }
    else if (url === "/contact") {
        res.statusCode = 200;
        return res.end(
            JSON.stringify({
                phone: "18602100000",
                email: "guestcaredominos@jublfood.com",
            })
        );
    } else {
        res.statusCode = 404;
        return res.end(`Error ${res.statusCode} Page Not Found!!`);
    }
}
httpServer.listen(PORT, hostname, () => {
    console.log(`server is running on http://${hostname}:${PORT}`);
})