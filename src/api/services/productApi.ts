import { ProductType } from "../types/productType";

export async function getAllProducts(): Promise<ProductType[]> {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/products",
    );
    if (!response.ok) throw new Error("API Error");
    const payload = await response.json();

    return payload.data;
  } catch (error) {
    throw new Error("API Error");
  }
}
