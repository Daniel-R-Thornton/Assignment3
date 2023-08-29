/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  name: string,
};

export type Category = {
  __typename: "Category",
  Products?:  Array<Product | null > | null,
  id: string,
  name: string,
};

export type Product = {
  __typename: "Product",
  categoryId: string,
  content: string,
  id: string,
  price?: number | null,
  rating?: number | null,
  title: string,
};

export type CreateProductInput = {
  categoryId: string,
  content: string,
  price?: number | null,
  rating?: number | null,
  title: string,
};

export type DeleteCategoryInput = {
  id: string,
};

export type DeleteProductInput = {
  id: string,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
};

export type UpdateProductInput = {
  categoryId?: string | null,
  content?: string | null,
  id: string,
  price?: number | null,
  rating?: number | null,
  title?: string | null,
};

export type TableCategoryFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
};

export type TableStringFilterInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
};

export type CategoryConnection = {
  __typename: "CategoryConnection",
  items?:  Array<Category | null > | null,
  nextToken?: string | null,
};

export type ProductConnection = {
  __typename: "ProductConnection",
  items?:  Array<Product | null > | null,
  nextToken?: string | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    Products?:  Array< {
      __typename: "Product",
      categoryId: string,
      content: string,
      id: string,
      price?: number | null,
      rating?: number | null,
      title: string,
    } | null > | null,
    id: string,
    name: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    categoryId: string,
    content: string,
    id: string,
    price?: number | null,
    rating?: number | null,
    title: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    Products?:  Array< {
      __typename: "Product",
      categoryId: string,
      content: string,
      id: string,
      price?: number | null,
      rating?: number | null,
      title: string,
    } | null > | null,
    id: string,
    name: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    categoryId: string,
    content: string,
    id: string,
    price?: number | null,
    rating?: number | null,
    title: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    Products?:  Array< {
      __typename: "Product",
      categoryId: string,
      content: string,
      id: string,
      price?: number | null,
      rating?: number | null,
      title: string,
    } | null > | null,
    id: string,
    name: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    categoryId: string,
    content: string,
    id: string,
    price?: number | null,
    rating?: number | null,
    title: string,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    Products?:  Array< {
      __typename: "Product",
      categoryId: string,
      content: string,
      id: string,
      price?: number | null,
      rating?: number | null,
      title: string,
    } | null > | null,
    id: string,
    name: string,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    categoryId: string,
    content: string,
    id: string,
    price?: number | null,
    rating?: number | null,
    title: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: TableCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "CategoryConnection",
    items?:  Array< {
      __typename: "Category",
      id: string,
      name: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ProductConnection",
    items?:  Array< {
      __typename: "Product",
      categoryId: string,
      content: string,
      id: string,
      price?: number | null,
      rating?: number | null,
      title: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type QueryProductsByIdCategoryIndexQueryVariables = {
  after?: string | null,
  categoryId: string,
  first?: number | null,
};

export type QueryProductsByIdCategoryIndexQuery = {
  queryProductsByIdCategoryIndex?:  {
    __typename: "ProductConnection",
    items?:  Array< {
      __typename: "Product",
      categoryId: string,
      content: string,
      id: string,
      price?: number | null,
      rating?: number | null,
      title: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  id?: string | null,
  name?: string | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    Products?:  Array< {
      __typename: "Product",
      categoryId: string,
      content: string,
      id: string,
      price?: number | null,
      rating?: number | null,
      title: string,
    } | null > | null,
    id: string,
    name: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  content?: string | null,
  id?: string | null,
  price?: number | null,
  rating?: number | null,
  title?: string | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    categoryId: string,
    content: string,
    id: string,
    price?: number | null,
    rating?: number | null,
    title: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  id?: string | null,
  name?: string | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    Products?:  Array< {
      __typename: "Product",
      categoryId: string,
      content: string,
      id: string,
      price?: number | null,
      rating?: number | null,
      title: string,
    } | null > | null,
    id: string,
    name: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  content?: string | null,
  id?: string | null,
  price?: number | null,
  rating?: number | null,
  title?: string | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    categoryId: string,
    content: string,
    id: string,
    price?: number | null,
    rating?: number | null,
    title: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  id?: string | null,
  name?: string | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    Products?:  Array< {
      __typename: "Product",
      categoryId: string,
      content: string,
      id: string,
      price?: number | null,
      rating?: number | null,
      title: string,
    } | null > | null,
    id: string,
    name: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  content?: string | null,
  id?: string | null,
  price?: number | null,
  rating?: number | null,
  title?: string | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    categoryId: string,
    content: string,
    id: string,
    price?: number | null,
    rating?: number | null,
    title: string,
  } | null,
};
