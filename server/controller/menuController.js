import * as repository from "../repository/menuRepository.js";

/*
 * 아이스크림
 */

export const getIceCreamProducts = async (req, res, next) => {
  const params = req.body;
  const icecreamproducts = await repository.getIceCreamProducts(params);
  res.json(icecreamproducts);
  res.end();
};

export const getIceCreamDetail = async (req, res, next) => {
  const icecreamdetail = await repository.getIceCreamDetail(req.params.id);
  const ingredients = await repository.getIceCreamIngredients(req.params.id);
  res.json({ icecreamdetail: icecreamdetail, ingredients: ingredients });
  res.end();
};

export const getIceCreamIngredients = async (req, res, next) => {
  const ingredients = await repository.getIceCreamIngredients(req.params.id);
  res.json(ingredients);
  res.end();
};

/*
 * 프리팩
 */

export const getPrepackProducts = async (req, res, next) => {
  const params = req.body;
  const prepackproducts = await repository.getPrepackProducts(params);
  res.json(prepackproducts);
  res.end();
};

export const getPrepackDetail = async (req, res, next) => {
  const prepackdetail = await repository.getPrepackDetail(req.params.id);
  const ingredients = await repository.getPrepackIngredients(req.params.id);
  res.json({ prepackdetail: prepackdetail, ingredients: ingredients });

  res.end();
};

export const getPrepackIngredients = async (req, res, next) => {
  const ingredients = await repository.getPrepackIngredients(req.params.id);
  res.json(ingredients);
  res.end();
};

/*
 * 아이스크림케이크
 */

export const getIceCreamCakeProducts = async (req, res, next) => {
  const params = req.body;
  const icecreamcakeproducts = await repository.getIceCreamCakeProducts(params);
  res.json(icecreamcakeproducts);
  res.end();
};

export const getIceCreamCakeDetail = async (req, res, next) => {
  const icecreamcakedetail = await repository.getIceCreamCakeDetail(
    req.params.id
  );
  res.json(icecreamcakedetail);
  res.end();
};
