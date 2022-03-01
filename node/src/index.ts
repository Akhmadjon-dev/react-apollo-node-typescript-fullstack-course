import { MikroORM } from "@mikro-orm/core";

const main = async () => {
    const orm = await MikroORM.init({
        entities: [__dirname + "/entities/*.ts"],
        dbName: "mikro_orm",
        type: "postgresql",
        host: "localhost", 
        port: 5432,
        user: "postgres",
        password: "postgres",
    });
    await orm.getSchemaGenerator().dropSchema();
    await orm.getSchemaGenerator().createSchema();
    await orm.close();
};

main().catch(err => console.error(err));

console.log("lets go hel yeah");
