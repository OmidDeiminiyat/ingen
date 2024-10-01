export const BlogQuery = `query MyQuery {
  newBlogs {
    category
    created
    description
    id
    image {
      url
    }
    title
    mainBlog
  }
}`;