import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

export async function GET(request, { params }) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'app/blog/posts', `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(fileContent)
  const mdxSource = await serialize(content)

  return Response.json({ frontmatter: data, mdxSource })
}