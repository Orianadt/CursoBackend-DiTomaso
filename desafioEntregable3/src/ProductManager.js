const fs = require('fs');
const express = require('express');
class ProductManager {
  constructor() {
    this.path = ('./app.js');
    this.products = require('./products.json');
  }

  addProduct(product) {
    const products = this.getProducts();
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    product.id = newId;
    products.push(product);
    this.saveProducts(products);
    return product;
  }
  getAllProducts(){
    return this.products
}
getProducts(limit) {
  return this.products.slice(0, limit);
}
  getProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [this.products];
    }
  }

  getProductById(id) {
    const products = this.getProducts();
    return products.find((product) => product.id === id);
  }
  getProductById(pid) {
    return this.products.find((product) => product.id === pid);
  }

  updateProduct(id, updatedFields) {
    const products = this.getProducts();
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      const updatedProduct = { ...products[productIndex], ...updatedFields };
      products[productIndex] = updatedProduct;
      this.saveProducts(products);
      return updatedProduct;
    }
    return null;
  }

  deleteProduct(id) {
    const products = this.getProducts();
    const updatedProducts = products.filter((product) => product.id !== id);
    this.saveProducts(updatedProducts);
    return true;
  }

  saveProducts(products) {
    fs.writeFileSync(this.path, JSON.stringify(products, null, 2));
  }
}

module.exports = ProductManager;