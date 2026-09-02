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

export async function getSingleProducts(): Promise<ProductType[]> {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/products/6428de2adc1175abc65ca05b",
    );
    if (!response.ok) throw new Error("API Error");
    const payload = await response.json();

    return payload.data;
  } catch (error) {
    throw new Error("API Error");
  }
}
