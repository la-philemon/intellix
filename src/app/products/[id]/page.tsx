import { productService } from "@/services/services";
import Image from "next/image";

export default async function productPage({ params }: { params: { id: string } }) {
    const product= await productService.getById(params.id);

    return (
        <div className="p-6 space-y-6">
            <Image src={product.thumbnail} alt={product.title} width={400} height={400} className="rounded-lg w-full max-w-md" />
            <h1 className="text-3xl font-bold">{product.title} </h1>
            <p className="text-gray-700">{product.description} </p>
            <p className="text-xl text-green-600 font-semibold">${product.price} (-{product.discountPercentage}%)</p>

            <div className="space-y-1">
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Stock:</strong> {product.stock}</p>
                <p><strong>Rating:</strong> {product.rating}</p>
                <p><strong>Status:</strong> {product.availabilityStatus}</p>
                <p><strong>SKU:</strong> {product.sku}</p>
            </div>
            <div>
                <h2 className="font-bold text-lg">Dimensions</h2>
                <p>{product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}</p>
            </div>
            <div className="flex gap-2">
                {product.tags.map((tag) => (
                    <span key={tag} className="inline-block bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">{tag}</span>
                ))}
            </div>
            <div>
                <h2 className="text-xl font-bold">Reviews</h2>
                {product.reviews.map((review, index) => (
                    <div key={index} className="border p-3 rounded mt-2">
                        <p className="font-semibold">{review.reviewerName}</p>
                        <p>⭐ {review.rating}</p>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
            <div className="text-sm text-gray-500">
                <p>{product.warrantyInformation}</p>
                <p>{product.shippingInformation}</p>
                <p>{product.returnPolicy}</p>
            </div>

        </div>

    )
}