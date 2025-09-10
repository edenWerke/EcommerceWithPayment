import Link from "next/link"
export default function SuccesPage(){
    return(
        <div>
            <h1>payment sucessful</h1>
            <p>thanks for your purchase.Your order is on its way</p>
       
            <Link href={"/products"}>continue shopping</Link>
        </div>
    )
}