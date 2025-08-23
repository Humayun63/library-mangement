import {Server} from 'http';
import app from './app';

let server : Server;
const PORT = 5000;

async function main(){
    try {

        server = app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        })
    } catch(error) {
        console.error('Error on starting the server', error);
    }
}

main();