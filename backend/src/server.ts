import {Server} from 'http';
import app from './app';
import mongoose from 'mongoose';
import { env } from './config/env';

let server : Server;
const PORT = 5000;

async function main(){
    try {
        await mongoose.connect(`mongodb+srv://${env.DB_USER}:${env.DB_PASS}@cluster0.nucgrat.mongodb.net/${env.DB_COLLECTION}?retryWrites=true&w=majority&appName=Cluster0`);
        
        server = app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        })
    } catch(error) {
        console.error('Error on starting the server', error);
    }
}

main();