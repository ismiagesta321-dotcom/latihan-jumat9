// console.log(`Listening is Listening on port ${port}..`);
// });

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(expressLayouts);
app.use(express.static(__dirname));
app.set('layout','layouts/main-layout');
app.get('/', (req, res)=> {
   
    const mahasiswa =[
        {nama : 'Ade',
            email : 'ade@gmail.com',
        },
        {nama : 'Asep',
            email : 'asep@gmail.com',
        },
        {nama : 'Agus',
            email :'agus@gmail.com',
        }
    ];

    res.render('index',{
        nama : 'Ade',
        title : 'Halaman Home',
        mahasiswa : mahasiswa,
    });
});
app.get('/about',(req,res)=> {
    res.render('about',{title: 'Halaman About'}
        );
   
});
app.get('/contact',(req,res)=> {
    res.render('contact',{title: 'Halaman Kontak'});
});
   
app.get('/product/:id',(req,res)=> {
    res.send(`product ID : ${req.params.id} <br> Catgory ID : ${req.params.idCat}`);
});
app.use('/',(req,res)=>{
    res.status(404);
    res.send('<h1>Test</h1>');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

