export interface Product {
    product_type: string,
    product_category: string,
    product_tags: string[],
    brand: string,
    image_link: string,
    name: string,
    product_link: string,
    price_greater_than: number,
    price_less_than: number,
    rating_greater_than: number,
    rating_less_than: number
}
