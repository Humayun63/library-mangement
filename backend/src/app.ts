import express, { Application, NextFunction, Request, Response } from 'express';
import { bookRoutes } from './app/controllers/book.controller';
import { borrowBookRoutes } from './app/controllers/borrow.controller';

const app : Application = express();
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowBookRoutes)

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

app.use((req: Request, res: Response, next: NextFunction) => {
    try{
        res.status(404).json({
            success: false,
            message: "Route not found",
            error: {
                name: "InvalidRouteAccess",
                path: req.originalUrl   
            }
    });
    } catch (error){
        next(error)
    }
});


app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if(error){
        const code = error?.status || 500;
        const message = error?.message || 'Something went wrong';

        res.status(code).json({
            message: message,
            success: false,
            error: error
        })
    }
})

export default app;