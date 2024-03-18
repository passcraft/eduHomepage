import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getItemData(slug, type) {
  let data;
  try {
    const markdownWithMeta = fs.readFileSync(
      path.join('public/data/', type, `${slug}.md`),
      'utf-8',
    )
    data = matter(markdownWithMeta).data;
  } catch (error) {
    console.error(`Error reading markdown file: ${error}`);
    data = {}; // Return empty object if file read fails
  }

  return data;
}

export function getAllItems(dir) {
  let files = []
  let itemsData = []

  try {
    files = fs.readdirSync(path.join(`public/data/${dir}`))
  } catch (error) {
    console.error(`Error reading directory: ${error}`)
    return itemsData // Return empty array if directory read fails
  }

  try {
    itemsData = files.map((filename) => {
      const fileContents = fs.readFileSync(
        path.join(`public/data/${dir}`, filename),
        'utf8',
      )

      const { data: frontmatter } = matter(fileContents)
      return { slug: filename.replace('.md', ''), data: frontmatter }
    })
  } catch (error) {
    console.error(`Error processing files: ${error}`)
  }

  return itemsData
}

export function getGalleryTags() {
  const galleryImages = getAllItems('gallery')
  const uniqueTags = [...new Set(galleryImages.map((image) => image.data.tag))]
  return uniqueTags
}
