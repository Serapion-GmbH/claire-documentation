# Nova Documentation App - Markdown/MDX Guide

This app is designed for creating and managing documentation using Markdown (`.md`) and MDX (`.mdx`) files. It provides an easy way to write content, organize pages, and extend functionality with MDX.

## Getting Started

To start the app, follow these steps:

1. Install dependencies:
   ```bash
   yarn install1.

2. Run the development server:
   ```bash
   yarn gatsby develop

The app will be available at http://localhost:8000. You can now view your documentation and make changes in real-time.


## Creating a New .md File
To create a new documentation page:

1. **Navigate to the content folder**: Open the folder where your Markdown files are stored, located in the root of the project under content/

2. **Create a new Markdown file**: Create a file with a .md or .mdx extension. For example:
   ```css
   content/new-page.md

3. **Add Frontmatter**: At the top of each Markdown file, add Frontmatter to define the page’s metadata:
    ```yaml
   --- title:
   "Your Page Title"
   metaTitle: "Your Meta Title"
   metaDescription: "A brief description of your page for SEO"
   ---

4. **Write your content**: Now, you can add headings, paragraphs, images, and code blocks using standard Markdown syntax.
    ```markdown
   ## Welcome to My New Page

   This is an example of a new page in the documentation app.

   - Point 1
   - Point 2


## Adding the Page to the Navigation Bar
To add your new page to the navigation menu:

1. **Edit the navigation file**: Find the navigation file (typically located at src/components/navigation.js or similar) where the menu structure is defined.

2. **Add your new page**: Insert a new item in the navigation structure that points to your Markdown file
Example:
   ```js
     {
      name: 'New Page',
      link: '/new-page'
     }

This will add a link to the new page in the navigation bar.


## Customizing with MDX
MDX allows you to include React components directly in your Markdown files. To use MDX:

1. **Import React Components**: Inside an .mdx file, you can import components at the top:
   ```markdown
   import MyComponent from '../components/MyComponent'
   ## Welcome to My Page
   <MyComponent />


2. **Add interactive elements**: You can now embed custom elements, such as buttons, forms, or charts, directly into your documentation.


## Editing Existing Pages
To edit existing documentation, simply open the corresponding .md or .mdx file, make your changes, and save. The live server will update automatically.

## Conclusion
This app is designed to make writing and managing documentation easy with Markdown and MDX. Follow the steps above to create, edit, and organize your documentation. For more advanced features, explore using MDX components to extend functionality.
   ```sql
   This `.md` file will serve as the README for your documentation app, explaining how to create `.md` files, add them to the navigation bar, and use the app effectively.

