import { GetProductType, getProducts } from "@/app/db/Product";
import Layout from "@/components/layout";
import Card, { CardContent } from "@/components/ui/card";
import ContentProduct from "./Content";

export default async function ProductsPage({ searchParams }: { searchParams: any }) {
  const q = searchParams?.q || "";
  const page = +searchParams?.page || 1;
  const products: GetProductType = await getProducts({ page, q });
  const filter = { q, page };
  console.log("productss ", products);
  return (
    <div>
      <Layout title="Produk">
        <Card>
          <CardContent className="!pt-6">
            <ContentProduct products={products} filter={filter} />            
          </CardContent>
        </Card>
      </Layout>
    </div>
  );
}
