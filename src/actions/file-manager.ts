"use server"
import { ResultFileManager } from "@/app/db/FileManager";

export async function updateFolder(file: ResultFileManager) {
  return {
    ...file,
    test: "xx"
  }
}