/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const listProducts = /* GraphQL */ `
  query ListProducts($limit: Int, $nextToken: String) {
    listProducts(limit: $limit, nextToken: $nextToken) {
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
export const queryProductsByIdCategoryIndex = /* GraphQL */ `
  query QueryProductsByIdCategoryIndex(
    $after: String
    $categoryId: ID!
    $first: Int
  ) {
    queryProductsByIdCategoryIndex(
      after: $after
      categoryId: $categoryId
      first: $first
    ) {
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
