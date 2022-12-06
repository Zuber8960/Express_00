
const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, '../', 'data', 'product.json');

const getProductFromFile = cb =>{
    fs.readFile(p, (err,data) => {
        if(err){
            cb([]);
        }else{
            cb(JSON.parse(data));
        }
    })
}

module.exports = class Product{
    constructor(t){
        this.title = t;
    }
    save(){
        getProductFromFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
        // fs.readFile(p, (err,data) => {
        //     let products = [];
        //     if(!err){
        //         products = JSON.parse(data);
        //     }
        //     products.push(this);
        //     fs.writeFile(p, JSON.stringify(products), (err) => {
        //         console.log(err)
        //     })
        // })
    }
    static fetchAll(cb){
        getProductFromFile(cb);
    }
}


