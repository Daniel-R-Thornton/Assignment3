/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCat = /* GraphQL */ `
  query GetCat($id: ID!) {
    getCat(id: $id) {
      content
      id
      price
      title
      __typename
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      Products {
        categoryId
        content
        id
        price
        rating
        title
        __typename
      }
      id
      name
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      categoryId
      content
      id
      price
      rating
      title
      __typename
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: TableCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listCats = /* GraphQL */ `
  query ListCats(
    $filter: TableCatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        id
        price
        title
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: TableProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        categoryId
        content
        id
        price
        rating
        title
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const singlePost = /* GraphQL */ `
  query SinglePost($id: ID!) {
    singlePost(id: $id) {
      id
      title
      __typename
    }
  }
`;
