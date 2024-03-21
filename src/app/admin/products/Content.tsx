"use client"
import { GetProductType, ResultProductItem } from "@/app/db/Product";
import ButtonIcon from "@/components/ui/button/ButtonIcon";
import SearchInput from "@/components/ui/form/input/SearchInput";
import { useRouter } from "next/navigation";
import { GoPlus } from "react-icons/go";
import TableProducts from "./table";

export default function Content({ products, filter }: { products: GetProductType; filter: { q?: string;  page:number } }) {
  const router = useRouter();
  const { q = '', page } = filter;
  const onEdit = (item: ResultProductItem) => { };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.replace(`?q=${e.target.value}`);
  };

  console.log("products", products);
  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <SearchInput
          placeholder="Cari Produk"
          className="!w-[350px]"
          onChange={onChangeSearch}
          value={q}
        />
        <ButtonIcon
          icon={GoPlus}
          text="Tambah Baru"
          onClick={() => router.push("/admin/products/add")}
        />
      </div>
      <TableProducts products={products} onEdit={onEdit} page={page} />
    </>
  );
}
