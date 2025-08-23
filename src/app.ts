import express, { Application, Request, Response } from 'express';

const app : Application = express();
app.use(express.json());

// app.use('/api/books')

app.get('/', (req: Request, res: Response) => {
    res.send(`
        <h1>Welcome to my Library Management System</h1>
        <p>
            Please visit here for documentation: 
            <a href="https://github.com/Humayun63/library-mangement" target="_blank">
                GitHub Repository
            </a>
        </p>
    `);
})

export default app;