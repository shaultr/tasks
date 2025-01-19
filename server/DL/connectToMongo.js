const mongoose = require('mongoose');


export const connectToMongo = async()=>{
    try {
        if (mongoose.connection.readyState === 1) {
            console.log('already connected',process.env.MONGO_URI);
            return;
         }
        mongoose.connect(process.env.MONGO_URI)
        .then(r => console.log('DB Connection'))
    } catch (error) {
        console.error(error)
    }
}
