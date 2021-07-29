/**
 * @format
 */

import 'react-native';
import { ProductService } from '../src/api/ProductService';

const prodListJson = require('../src/mockData/productList.json');
const productService = new ProductService();

it("On All Product Selector", () => {
  const prodList = productService.getAllProducts()
  expect(prodList).toEqual(prodListJson)
})

it("On Shampoo Selector", () => {
  const prodList = productService.getProductList([1, 2, 3])
  expect(prodList[0].brand.name).toEqual("Aneia")
})

it("On Hand Wash Selector", () => {
  const prodList = productService.getProductList([4, 5, 6])
  expect(prodList[1].brand.name).toEqual("Palmolive")
})

it("On Fragrance Selector", () => {
  const prodList = productService.getProductList([7, 8, 9])
  expect(prodList[0].brand.name).toEqual("Colgate Optic")
})

it("Empty product list ", () => {
  const prodList = productService.getProductList([21, 26])
  expect(prodList).toEqual([])
})

/**
 * if product ids doesn't exist then test should fail like below
 * uncomment below line number 40 to 43 then run `npm run test` OR `yarn test` in terminal
 */
// it("On Fragrance Selector", () => {
//   const prodList = productService.getProductList([100, 200])
//   expect(prodList[0].brand.name).toEqual("Colgate Optic")
// })
