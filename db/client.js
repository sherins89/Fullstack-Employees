import pg from "pg"; // pg connecting server for postgres //
const db = new pg.Client(process.env.DATABASE_URL); //  creating const db //
export default db;
