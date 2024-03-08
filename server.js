const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("connected to the database!");

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log('server is running on PORT 3000');
        });
    } catch (error) {
        console.log("cannot connect to the database!", error);
        process.exit();
    }
}

startServer();