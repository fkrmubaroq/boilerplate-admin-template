import { LIMIT } from "@/lib/constant";
import { QueryTypes } from "sequelize";
import z from "zod";
import { PaginationType } from "../../../types/global";
import { sequelize } from "./sequelize";

const ProductSchema = z.object({
  id: z.number(),
  sku: z.string().max(50),
  name: z.string().max(100),
  stock: z.number(),
  price: z.number(),
  category_id: z.number(),
  size: z.string().max(5),
  image: z.string().max(255)
})


export type ResultProductItem = z.infer<typeof ProductSchema>;

export type GetProductType = {
  data: ResultProductItem[];
  pagination: PaginationType;
};
export async function getProducts(params: { page?: number; q?:string  }): Promise<GetProductType> {
  try {
    const { page=1, q = '' } = params;
    const offset = ((page || 1) - 1) * LIMIT;
    const limitSql = `LIMIT :offset , :limit`
    const queryProduct = `SELECT products.*, category.category_name FROM products LEFT JOIN category ON products.category_id = category.id
      WHERE products.name LIKE :q
      ORDER BY products.id DESC
    `;
    
    const querys = {
      pagination: {
        syntax: `${queryProduct} ${limitSql}`,
        replacements: {
          q: `%${q}%`,
          offset: offset,
          limit: LIMIT,
        },
      },
      allProducts: {
        syntax: `${queryProduct} `,
        replacements: {
          q: `%${q}%`,
        },
      },
    };

    const paginationResults: ResultProductItem[] = await sequelize.query(
      querys.pagination.syntax,
      {
        type: QueryTypes.SELECT,
        replacements: querys.pagination.replacements,
      }
    );
    const allResults: ResultProductItem[] = await sequelize.query(
      querys.allProducts.syntax,
      {
        type: QueryTypes.SELECT,
        replacements: querys.allProducts.replacements,
      }
    );

    const totalPage = paginationResults.length ? Math.ceil(allResults.length / LIMIT) : 0;
    const start = paginationResults.length ? offset + 1 : 0;
    const end = paginationResults.length ? offset + paginationResults.length : 0;
    return {
      data: paginationResults,
      pagination: {
        current_page: +(page || 1),
        total_page: totalPage,
        start,
        end,
        total_all_rows: paginationResults.length ? allResults.length : 0,
      },
    };
  } catch (e: any) {
    throw new Error(e);   
  }
  
}