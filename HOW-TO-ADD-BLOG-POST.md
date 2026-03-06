# How to Add a New Blog Post

## Step 1: Create the post file

1. Open the `blog/` folder
2. Copy `_TEMPLATE.html`
3. Rename it to your post URL, e.g. `full-moon-meditation-guide.html`
   - Use lowercase
   - Use hyphens instead of spaces
   - Keep it short but descriptive

## Step 2: Edit the post

Open your new file and edit the sections marked with ✏️:

1. **Title** (appears in browser tab + Google)
2. **Description** (appears in Google search results - keep under 160 characters)
3. **Keywords** (comma-separated, include "sound healing sydney")
4. **Date** (e.g. "March 2026")
5. **Heading** (the big title on the page)
6. **Subtitle** (optional tagline)
7. **Content** (your article - use the HTML tags shown)

### Content formatting:

```html
<p>Regular paragraph text</p>

<h2>Big Section Heading</h2>

<h3>Smaller Subheading</h3>

<ul>
    <li>Bullet point</li>
    <li>Another bullet</li>
</ul>

<ol>
    <li>Numbered item 1</li>
    <li>Numbered item 2</li>
</ol>

<a href="https://example.com">Link text</a>

<strong>Bold text</strong>

<em>Italic text</em>
```

## Step 3: Add to blog listing

Open `blog.html` and add a new card in the `blog-grid` section:

```html
<article class="blog-card">
    <div class="blog-image">
        <img src="assets/blog/your-image.jpg" alt="Description">
    </div>
    <div class="blog-content">
        <div class="blog-meta">
            <span class="blog-date">March 2026</span>
            <span class="blog-category">Category</span>
        </div>
        <h2><a href="blog/your-post-url.html">Your Post Title</a></h2>
        <p>A short 1-2 sentence description of the post.</p>
        <a href="blog/your-post-url.html" class="read-more">Read More →</a>
    </div>
</article>
```

## Step 4: Upload

If using Netlify:
1. Save your files
2. Drag the whole `luke-collins-sound-healing` folder to Netlify
   OR if connected to GitHub, just push your changes

---

## Tips for SEO

- Include "Sydney" and "sound healing" in titles when natural
- Write at least 800+ words for better Google ranking
- Use headings (h2, h3) to break up content
- Link to your services and events pages within the article
- Add a compelling meta description (shows in Google results)
