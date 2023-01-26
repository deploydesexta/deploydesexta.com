import { getAllPosts } from 'lib/api'
import { generateSitemap } from 'lib/generateSitemap'
import { buildAlgoliaIndexes } from 'lib/buildAlgoliaIndexes'

import Home from 'components/Home'

const HomePage = ({ posts }) => {
  console.log('RENDERING HOMEPAGE')
  return <Home posts={posts} />
}

export async function getStaticProps() {
  const posts = getAllPosts()

  if (process.env.NODE_ENV !== 'development') {
    console.log(`
      Production build enabled...
      Generating sitemap and algolia indexes.
    `)
    await generateSitemap(posts)
    await buildAlgoliaIndexes(posts)
  }

  console.log('GET STATIC PROPS')
  return {
    props: {
      posts
    }
  }
}

export default HomePage
