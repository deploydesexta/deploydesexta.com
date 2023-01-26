import matter from 'gray-matter'
import { join } from 'path'
import fs from 'fs'

import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { timeToRead } from './utils'

const postsDirectory = join(process.cwd(), 'content', 'posts')
const talksDirectory = join(process.cwd(), 'content', 'talks')

function getContentBySlug(dir, slug) {
  if (!slug) return null

  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(dir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const date = format(new Date(data.date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt
  })

  return {
    slug: realSlug,
    date: data.date.toString(),
    frontmatter: { ...data, date },
    content,
    timeToRead: timeToRead(content)
  }
}

export function getPostBySlug(slug) {
  if (!slug) return null

  return getContentBySlug(postsDirectory, slug)
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    )

  return posts
}

export function getTalkBySlug(slug) {
  if (!slug) return null

  return getContentBySlug(talksDirectory, slug)
}

export function getAllTalks() {
  const slugs = fs.readdirSync(talksDirectory)
  const posts = slugs
    .map(slug => getTalkBySlug(slug))
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    )

  return posts
}