export interface Product {
  id: number;
  name: string;
  price: number;
  body: string;
  poster: string;
  size: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(
    "https://onlineshopbackend.pythonanywhere.com/products"
  );
  const data = await response.json();
  return data;
}

// Function to fetch product details by ID from the API or database
export async function getProductById(productId: string): Promise<Product> {
  // Perform an API call or database query to fetch the product details by ID
  // Return the product data as a Promise
  const response = await fetch(`https://your-api.com/products/${productId}`);
  const data = await response.json();
  return data as Product;
}
