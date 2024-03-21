import { QueryTypes } from "sequelize";
import { sequelize } from "./sequelize";
import z from "zod";

const FileManagerSchema = z.object({
  id: z.number(),
  type: z.enum(["FILE", "FOLDER"]),
  name: z.string().max(255),
  path: z.string().max(255),
  level: z.number().default(0),
})

export type ResultFileManager = z.infer<typeof FileManagerSchema>;

export async function getFileManager(params: { path: string }) {
  try {
    const { path } = params;

    const results: ResultFileManager[] = await sequelize.query(
      `SELECT * FROM file_manager WHERE path = :path `,
      {
        type: QueryTypes.SELECT,
        replacements: {
          path,
        }
      }
      );
      return results
  } catch (e:any) {
    throw new Error(e);   
  }
  
}