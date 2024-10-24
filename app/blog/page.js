// blog/[slug]/page.js
import Parser from 'rss-parser';

// Function to fetch Medium blog data via RSS feed
async function getBlogs() {
  const parser = new Parser();
  const feed = await parser.parseURL('https://medium.com/feed/@varsha.hindupur'); // Replace with your actual Medium username

  // Map RSS feed items to include only the data you need (e.g., title and URL)
  const blogs = feed.items.map((item) => ({
    id: item.guid, // Unique identifier
    title: item.title, // Blog title
    url: item.link, // Blog link
  }));

  return blogs;
};

// Page component to render blog links
async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            Blog Posts
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8">
        {blogs.map((blog, i) => (
          <a 
            key={i} 
            href={blog.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-lg"
          >
            {blog.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default page;