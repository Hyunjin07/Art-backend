const express =  require('express');
const bodyParser = require('body-parser');

const HttpError = require('./models/http-error');
const paintingsRoutes = require('./controllers/painting-controllers');
const usersRoutes = require('./controllers/users-controllers');



const app = express();

app.use(bodyParser.json()); 

app.use('api/paintings',paintingsRoutes);

app.use('app/users',usersRoutes);

app.use((req, res, next)=>{
    const error = new HttpError('Could not find this route', 404);
    throw error;
});

app.use((error,req, res, next)=>{
    if(res.headerSent){
        return next (error);
    }
    res.status(error.code || 500)
    res.json({message:error.message || 'An unknown error occurred'})
});


mongoose.connect('mongodb+srv://hyunjin:ZS8rNMAI1fSclVYy@cluster0.kydqazg.mongodb.net/Art?retryWrites=true&w=majority')//connect메서드를 사용, 서버로의 연결은 비동기 작업이므로 connect()가 프로미스를 반환하고

.then(()=>{
    app.listen(5000); 

})
.catch(err=>{
    console.log(err);
});
