import express from 'express';

const router = express.Router();

app.get('/realtimeproducts', (req, res) => {
const products = [
  {
    "title": "Remera",
    "description": "Rosa",
    "code": 501,
    "stock": 1,
    "category": "Ropa",
    "thumbnails": "[Img1]",
    "status": true
},
{
    "title": "Remera",
    "description": "Verde",
    "code": 502,
    "stock": 10,
    "category": "Ropa",
    "thumbnails": "[Img2]",
    "status": true
}
]; 
res.render('realTimeProducts', { products });
  });

  export default router;