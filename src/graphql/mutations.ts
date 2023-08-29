/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory($input: CreateCategoryInput!) {
    createCategory(input: $input) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory($input: DeleteCategoryInput!) {
    deleteCategory(input: $input) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct($input: DeleteProductInput!) {
    deleteProduct(input: $input) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory($input: UpdateCategoryInput!) {
    updateCategory(input: $input) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
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
