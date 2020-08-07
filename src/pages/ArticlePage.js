import React,{useState,useEffect }from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from '../components/NotFoundPage';

const ArticlePage=({match})=>{
    
    const name=match.params.name;
    const article=articleContent.find(article=>article.name===name);
    
    useEffect(()=>{
        const fetchData= async () =>{
            const result =await fetch(`/api/articles/${name}`);
            const body=await result.json();
            setArticleInfo(body);
        }
        fetchData();
        setArticleInfo({
            upvotes:Math.ceil(Math.random()*10)
        });
    },[name]);

    const [articleInfo,setArticleInfo]=useState({upvotes:0,comments:[]});

    if(!article) return <NotFoundPage />
    
    const otherArticles=articleContent.filter(article=>article.name!==name);

    return(
        <>
            <h1>{article.title}</h1>
            <p>This post has been upvoted {articleInfo.upvotes} times </p>
            {article.content.map((paragraph,i)=>(
                <p key={i}>
                    {paragraph}
                </p>
            ))}
            <h1>Other Articles</h1>
            <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;