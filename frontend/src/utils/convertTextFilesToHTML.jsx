import fs from 'fs';
import { useEffect, useState } from 'react';

function convertTextToHTML(text) {
    // replace "* " with "<li>, within <ul>"
    text = text.replace(/\* (.+)/g, '<li>$1</li>');
    // text = `<ul>${text}</ul>`;
    return text;
}

function TextFileToHTMLComponent({ portfolioItem }) {
    const [content, setContent] = useState('');
    let filePath = `../portfolioDocuments/${portfolioItem.path}.txt`;

    useEffect(() => {
        fetch(filePath)
            .then(response => response.text())
            .then(text => {
                // Convert text to HTML format
                const htmlContent = convertTextToHTML(text);
                setContent(htmlContent);
            })
            .catch(error => console.error('Failed to load file:', error));
    }, [filePath]);

    return (
        <ul dangerouslySetInnerHTML={{ __html: content }} />
    );
}

export default TextFileToHTMLComponent;