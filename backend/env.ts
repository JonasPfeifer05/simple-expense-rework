import {load} from "ts-dotenv";

export default load({
    PORT: {
        type: Number,
        optional: true,
    },
    DB_PORT: {
        type: Number,
        optional: true,
    },
    DB_HOST: {
        type: String,
        optional: true,
    },
    DB_USER: {
        type: String,
        optional: true,
    },
    DB_PASSWORD: {
        type: String,
        optional: true,
    },
    DB_DATABASE: {
        type: String,
        optional: true,
    },
})