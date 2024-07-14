const db = require('./src/db/models');



const dbCheck = async () => {
    try {
        await db.sequelize.authenticate();
        console.log(`Connection to database Library was successfully esablished!`);
    } catch (error) {
        console.error(error.message);
    }
}

dbCheck();


 const dropCustomers = async () => {
    try {
        await db.Customer.drop();
        console.log(`Table ${db.Customer.name} has been droped`);
    } catch (error) {
        console.log(error.message);
    }
    
}

// dropCustomers();

 const createCustomers = async () => {
    try {
        db.Customer.sync({alter: true});
        console.log('Table Customers was created!');
    } catch (error) {
        console.log(error.message);
    }
} 

// createCustomers();
const addItems = async (model, values) => {
    try {
        await model.bulkCreate(values, {fields:['title', 'description', 'createdAt', 'updatedAt']} );
    } catch (error) {
        console.log(error.message);
    }
}

addItems(db.Shelf, require('./src/constants/shelves'));