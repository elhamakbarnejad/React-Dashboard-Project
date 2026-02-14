import useTitle from "../../hooks/useTitle";
import ProductsTable from "../../features/ProductsTable/ProductsTable";
import { useEffect, useState } from "react";
import Loader from "../../components/commands/Loader/Loader";
const Products = () => {
  useTitle("Products");
  const [products, setProducts] = useState("");
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const controller = new AbortController();
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products", {
          signal: controller.signal,
        });
        if (res.status === 200) {
          const data = await res.json();
          setProducts(data);
        } else {
          setError("There is some problem!!");
        }
        setLoader(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProducts();
    return () => controller.abort();
  }, []);
  if (loader) {
    return <Loader />;
  }
  return (
    <div>
      {" "}
      <ProductsTable allProducts={products} setProducts={setProducts} />
    </div>
  );
};

export default Products;
