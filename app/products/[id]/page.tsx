import { stripe } from "@/lib/stripe";
import { ProductDetail } from "@/components/ui/product-detail";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });
const plainProduct=JSON.parse(JSON.stringify(product))
  return <ProductDetail product={plainProduct} />;
}
