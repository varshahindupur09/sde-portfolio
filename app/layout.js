// // app/blog/layout.js
// export const metadata = {
//     title: 'Blog Page',
//     description: 'Blog details and posts',
//   };
  
//   export default function BlogLayout({ children }) {
//     return (
//       <div>
//         <header>
//           <h1>Blog</h1>
//         </header>
//         <main>{children}</main>
//       </div>
//     );
//   }
  
// app/layout.js
export const metadata = {
  title: 'SDE Portfolio',
  description: 'Developer portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Welcome to My Portfolio</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 All Rights Reserved</p>
        </footer>
      </body>
    </html>
  );
}

