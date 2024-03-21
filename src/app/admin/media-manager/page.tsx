import Layout from "@/components/layout";
import ContentMediaManager from "./Content";
import { Suspense } from "react";
import Loading from "./loading";
import { getFileManager } from "@/app/db/FileManager";

export default async function MediaManager({ searchParams }: { searchParams: any }) {
  const path = searchParams?.path || "/";
  const data = await getFileManager({ path });

  return (
    <Layout title="Media Manager">
      <Suspense fallback={<Loading total={6} />}>
        <ContentMediaManager
          data={data}
          path={path}
        />
      </Suspense>
    </Layout>
  );
}