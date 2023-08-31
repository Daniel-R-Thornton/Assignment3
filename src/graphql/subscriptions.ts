/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCat = /* GraphQL */ `
  subscription OnCreateCat(
    $categoryId: ID
    $content: String
    $id: ID
    $price: Int
    $title: String
  ) {
    onCreateCat(
      categoryId: $categoryId
      content: $content
      id: $id
      price: $price
      title: $title
    ) {
      content
      id
      price
      title
      __typename
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($id: ID, $name: String) {
    onCreateCategory(id: $id, name: $name) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct(
    $content: String
    $id: ID
    $price: Int
    $rating: Float
    $title: String
  ) {
    onCreateProduct(
      content: $content
      id: $id
      price: $price
      rating: $rating
      title: $title
    ) {
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
export const onDeleteCat = /* GraphQL */ `
  subscription OnDeleteCat(
    $content: String
    $id: ID
    $price: Int
    $title: String
  ) {
    onDeleteCat(content: $content, id: $id, price: $price, title: $title) {
      content
      id
      price
      title
      __typename
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($id: ID, $name: String) {
    onDeleteCategory(id: $id, name: $name) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct(
    $content: String
    $id: ID
    $price: Int
    $rating: Float
    $title: String
  ) {
    onDeleteProduct(
      content: $content
      id: $id
      price: $price
      rating: $rating
      title: $title
    ) {
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
export const onUpdateCat = /* GraphQL */ `
  subscription OnUpdateCat(
    $categoryId: ID
    $content: String
    $id: ID
    $price: Int
    $title: String
  ) {
    onUpdateCat(
      categoryId: $categoryId
      content: $content
      id: $id
      price: $price
      title: $title
    ) {
      content
      id
      price
      title
      __typename
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($id: ID, $name: String) {
    onUpdateCategory(id: $id, name: $name) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct(
    $content: String
    $id: ID
    $price: Int
    $rating: Float
    $title: String
  ) {
    onUpdateProduct(
      content: $content
      id: $id
      price: $price
      rating: $rating
      title: $title
    ) {
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
