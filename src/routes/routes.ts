export const routes = {
    home : "/",
    products : "/product-list/list",
    about : "/about",
    contact : "/contact",
    notFound : "/404",

    productDetails : (id: string) => `/product-list/${id}`,
}
