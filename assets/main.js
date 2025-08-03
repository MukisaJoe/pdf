document.addEventListener('DOMContentLoaded', function() {
    // Load Blog Posts
    const blogList = document.getElementById('blog-list');
    if (blogList && typeof blog_posts !== 'undefined') {
        blogList.innerHTML = ''; // Clear the loading message
        blog_posts.forEach(post => {
            const card = document.createElement('div');
            card.className = 'card';

            const title = document.createElement('h3');
            title.textContent = post.title;
            card.appendChild(title);

            const content = document.createElement('div');
            const snippet = post.content.split('<hr>')[0];
            content.innerHTML = snippet;
            card.appendChild(content);

            const link = document.createElement('a');
            link.href = '#';
            link.textContent = 'Read More...';
            card.appendChild(link);

            blogList.appendChild(card);
        });
    }

    // Load Portfolio Items
    const portfolioList = document.getElementById('portfolio-list');
    if (portfolioList && typeof portfolio_items !== 'undefined') {
        portfolioList.innerHTML = ''; // Clear the loading message
        portfolio_items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            const title = document.createElement('h3');
            title.textContent = item.title;
            card.appendChild(title);

            const description = document.createElement('p');
            description.textContent = item.description;
            card.appendChild(description);

            const techContainer = document.createElement('p');
            techContainer.innerHTML = `<strong>Technologies:</strong> ${item.tech.join(', ')}`;
            card.appendChild(techContainer);

            const link = document.createElement('a');
            link.href = '#'; // This would link to a detailed case study page
            link.textContent = 'View Details';
            card.appendChild(link);

            portfolioList.appendChild(card);
        });
    }
});
