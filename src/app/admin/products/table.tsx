"use client"
import { GetProductType, ResultProductItem } from "@/app/db/Product";
import ButtonEdit from "@/components/ui/button/Edit";
import AdminTable, { Td, Th, Thead, Tr } from "@/components/ui/table";
import PaginationTable from "@/components/ui/table/PaginationTable";

export default function TableProducts({
  products,
  onEdit,
  page,
}: {
  products: GetProductType;
  onEdit: (item: ResultProductItem) => void;
  page: number;
  }) {
  
  console.log("pp ", products);
  return (
    <div>
      <AdminTable>
        <Thead>
          <Tr>
            <Th>SKU</Th>
            <Th>Artikel</Th>
            <Th>Kategori</Th>
            <Th>Stok</Th>
            <Th>Harga</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <tbody>
          {products.data.map((item, key) => (
            <Tr key={key}>
              <Td>{item.sku}</Td>
              <Td>{item.name}</Td>
              <Td>{item.category_id}</Td>
              <Td>{item.stock}</Td>
              <Td>{item.price}</Td>
              <Td>
                <ButtonEdit onClick={() => onEdit(item)} />
              </Td>
            </Tr>
          ))}
        </tbody>
      </AdminTable>
      <PaginationTable
        currentPage={page}
        totalAllRow={products.pagination.total_all_rows}
        totalPage={products.pagination.total_page}
        start={products.pagination.start}
        end={products.pagination.end}
      />
    </div>
  );
}
