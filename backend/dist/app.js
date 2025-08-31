"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./app/controllers/book.controller");
const borrow_controller_1 = require("./app/controllers/borrow.controller");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ['https://library-management-client-virid.vercel.app']
}));
app.use('/api/books', book_controller_1.bookRoutes);
app.use('/api/borrow', borrow_controller_1.borrowBookRoutes);
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to my Library Management System</h1>
        <p>
            Please visit here for documentation: 
            <a href="https://github.com/Humayun63/library-mangement/backend" target="_blank">
                GitHub Repository
            </a>
        </p>
        <p>
            Please visit the live site
            <a href="https://library-management-client-virid.vercel.app/" target="_blank">
                Live Link
            </a>
        </p>
    `);
});
app.use((req, res, next) => {
    try {
        res.status(404).json({
            success: false,
            message: "Route not found",
            error: {
                name: "InvalidRouteAccess",
                path: req.originalUrl
            }
        });
    }
    catch (error) {
        next(error);
    }
});
app.use((error, req, res, next) => {
    if (error) {
        const code = (error === null || error === void 0 ? void 0 : error.status) || 500;
        const message = (error === null || error === void 0 ? void 0 : error.message) || 'Something went wrong';
        res.status(code).json({
            message: message,
            success: false,
            error: error
        });
    }
});
exports.default = app;
