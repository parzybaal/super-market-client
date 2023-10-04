export interface Product {
    id: string
    title: string
    category: []
    price: number
    sold_quantity: number
    stock: number
    description: string
    attributes: []
    reviews: []
    sale: boolean
    catalog_listing: boolean
    discount: number
    sale_price: number
    image: string
}

export interface ProductsState {
    products: Product[]
}