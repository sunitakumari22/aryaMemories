
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductDetail as ProductDetailComponent } from "@/components/shop/product-detail";

const ProductDetail = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-memoir-50">
        <ProductDetailComponent />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
