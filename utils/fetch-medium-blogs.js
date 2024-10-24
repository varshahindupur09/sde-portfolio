// utils/fetch-medium-blogs.js
import Parser from 'rss-parser';

export async function fetchMediumBlogs() {
  const parser = new Parser();
  const feed = await parser.parseURL('https://medium.com/@varsha.hindupur'); // Replace with your Medium username

  // Map the RSS feed to match your BlogCard format
  return feed.items.map((item) => ({
    id: item.guid,
    title: item.title,
    description: item.contentSnippet,
    cover_image: item.enclosure ? item.enclosure.url : 'sde_image.jpg', // Check if there's an image, otherwise fallback
    url: item.link,
    published_at: item.isoDate,
    public_reactions_count: Math.floor(Math.random() * 100), // Medium RSS doesn't have reactions count, so just generate a random number for now
    comments_count: Math.floor(Math.random() * 10), // Same with comments
    reading_time_minutes: Math.floor(item.contentSnippet.split(' ').length / 200), // Estimate reading time
  }));
}

