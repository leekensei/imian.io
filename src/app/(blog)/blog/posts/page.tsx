import { RowCardList } from "../_components/post-list";
import { getMDXFiles } from "../_helpers";

export default async function Page() {
  const posts = await getMDXFiles();

  return (
    <section className="py-8">
      <RowCardList posts={posts} />
    </section>
  );
}
