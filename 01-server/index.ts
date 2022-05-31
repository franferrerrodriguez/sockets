import Server from "./class/server";
import router from "./routes/router";

const server = new Server();

server.app.use('/', router);

server.start(() => {
    console.log(`Server running at port: ${ server.port }`)
});
