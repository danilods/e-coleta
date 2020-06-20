import express from "express";
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";
import multer from "multer";
import multerConfig from "./config/multer";
import FileController from "./controllers/FileController";

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();
const fileController = new FileController();


routes.get("/points", pointsController.index);

routes.get("/points/:id", pointsController.show);

routes.get("/items", itemsController.index);

routes.post("/points", upload.single("image"), pointsController.create);

routes.post("/uploads",  upload.single("file"), fileController.store);

routes.delete("/uploads", fileController.remove);


export default routes;
