import PostClient from './PostClient'

export default async function PostPage({ params }) {
  const { slug } = await params
  return <PostClient slug={slug} />
}