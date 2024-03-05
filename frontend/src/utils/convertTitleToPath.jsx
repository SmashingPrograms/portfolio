function convertTitleToPath(title) {
    const lowercaseTitle = title.toLowerCase();
    const path = lowercaseTitle.replace(/\s+/g, '-');
    return path;
}

function convertTitlesToPaths(portfolioItems) {
    return portfolioItems.map(item => {
        const path = convertTitleToPath(item.title);
        return { ...item, path };
    });
}

export default convertTitlesToPaths;