import BaseLayout from "@/components/layouts/BaseLayout";
import Link from "next/link";
import BasePage from "@/components/BasePage";
import { useGetData } from "@/actions";
import { Message, Dimmer, Loader } from "semantic-ui-react";

const Portfolios = () => {
  const { data, error, loading } = useGetData("/api/v1/posts");

  const RenderPosts = (posts) => {
    return posts.map((post) => (
      <li key={post.id}>
        <Link as={`/portfolios/${post.id}`} href={`/portfolios/[id]`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  };
  return (
    <BaseLayout>
      <BasePage>
        <h1>this is the Portfolio page</h1>
        {loading && (
          <Dimmer active>
            <Loader indeterminate>Loading...</Loader>
          </Dimmer>
        )}
        {data && <ul>{RenderPosts(data)}</ul>}
        {error && (
          <Message warning color="red">
            {error.message}
          </Message>
        )}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolios;
