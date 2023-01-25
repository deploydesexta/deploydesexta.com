import Prism from 'prismjs'

import { useEffect } from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { BLOG_HOST, BLOG_TITLE } from 'lib/constants'
import { timeToRead } from 'lib/utils'

import {
  PostHeader,
  PostTitle,
  PostDescription,
  PostDate,
  MainContent,
  ButtonBack
} from 'styles/base'

const BlogPost = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [post])

  return (
    <>
      <NextSeo
        title={`${post.frontmatter.title} - ${BLOG_TITLE}`}
        description={post.frontmatter.description}
        openGraph={{
          url: `https://${BLOG_HOST}/${post.slug}`,
          title: `${post.frontmatter.title} - ${BLOG_TITLE}`,
          description: post.frontmatter.description,
          images: [
            {
              url: `https://og-image-service.${BLOG_HOST}/${encodeURIComponent(
                post.frontmatter.title
              )}.png`,
              alt: `${post.frontmatter.title}`
            }
          ]
        }}
      />
      <PostHeader>
        <Link href="/" className="clean" passHref>
          <ButtonBack>← Voltar na listagem</ButtonBack>
        </Link>
        <PostDate>{post.frontmatter.date} • {timeToRead(post.content)}</PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContent>
    </>
  )
}

export default BlogPost
