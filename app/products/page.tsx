import { stripe } from "@/lib/stripe";
import { ProductList } from "@/components/product-list";

export default async function ProductPage(){
    const prooducts=await stripe.products.list({
expand:["data.default_price"]
    })
    return <div><h1>All products</h1>
    <ProductList products={prooducts.data} />
    
    </div>
}