import mongoose from 'mongoose'

const params = {
    uri: 'mongodb://database2119:database2119@cluster0.glswgtz.mongodb.net/?retryWrites=true&w=majority',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: 'database2119',
        pass: 'database2119',
    },
};

console.log(params)
console.log('error')

const conexion = () => {
    const dbconnection = mongoose.connect(params.uri, params.options).then(
        async (result)=> {

        console.log('No Task');
    }
).catch(function(err) { console.log(err); });
}
export default conexion;