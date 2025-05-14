// posts.js - ملف إدارة المنشورات
const posts = [
    {
        id: 1,
        title: "PREMIUM CONTENT COLLECTION",
        description: "Access our exclusive library of high-quality digital content curated for professionals and enthusiasts alike.",
        images: [
            "https://source.unsplash.com/random/800x600?future",
            "https://source.unsplash.com/random/800x600?tech",
            "https://source.unsplash.com/random/800x600?digital"
        ],
        downloadLink: "#",
        featured: true,
        isNew: false,
        category: "premium",
        date: "2025-05-10"
    },
    {
        id: 2,
        title: "TECHNOLOGY INSIGHTS",
        description: "Cutting-edge technology reviews, tutorials, and industry analysis from leading experts.",
        images: [
            "https://source.unsplash.com/random/800x600?computer",
            "https://source.unsplash.com/random/800x600?ai",
            "https://source.unsplash.com/random/800x600?programming"
        ],
        downloadLink: "#",
        isNew: false,
        category: "technology",
        date: "2025-05-08"
    }
];

function getSortedPosts() {
    return [...posts].sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return b.id - a.id;
    });
}

function addPost(newPost) {
    const newId = posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1;
    posts.unshift({
        id: newId,
        ...newPost,
        title: newPost.title.toUpperCase(),
        isNew: true
    });
    return posts[0];
}