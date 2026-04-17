import { Router } from "express";
import vulnerabilitiesRouter from "@modules/vulnerabilities/routes/vulnerability.routes"

const routes = Router();

routes.use('/vulnerabilities', vulnerabilitiesRouter)
routes.get('/', (request, response) => {
    response.json({ message: 'Api de CVE' });
    return;
})

export default routes;
