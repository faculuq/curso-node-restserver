const mongoose = require('mongoose');

const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });

        console.log('Base de datos online')

    } catch (error) {
        console.log(error);
        throw new Error('Erron en la base de datos');
    }

}

module.exports = {
    dbConnection
}