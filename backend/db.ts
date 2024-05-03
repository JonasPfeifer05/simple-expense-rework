import {connect} from "ts-postgres";
import env from "./env.ts"

export default await connect({
    port: env.DB_PORT ?? 5432,
    host: env.DB_HOST ?? "localhost",
    user: env.DB_USER ?? "admin",
    password: env.DB_PASSWORD ?? "admin",
    database: env.DB_DATABASE ?? "simpleexpense",
});