import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlePage=({match})=>{
    const name=match.params.name;
    const article=articleContent.find(article=>article.name===name);
    if(!article) return <h1>Article "{name}" does not exists!</h1>
    
    const otherArticles=articleContent.filter(article=>article.name!==name);

    return(
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph,i)=>(
                <p>
                    {paragraph}
                </p>
            ))}
            <h1>Other Articles</h1>
            <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;


