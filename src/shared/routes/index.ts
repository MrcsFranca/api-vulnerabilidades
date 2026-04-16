import { Router } from "express";
import productRouter from "@modules/products/routes/product.routes"

const routes = Router();

routes.use('/products', productRouter)
routes.get('/', (request, response) => {
    response.json({ message: 'Api de CVE' });
    return;
})

export default routes;
