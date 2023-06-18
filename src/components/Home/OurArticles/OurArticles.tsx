import React, { useState } from "react";
import "./OurArticles.css";
import articles from "../../../mock/articles";
import users from "../../../mock/users";
import { IArticle } from "../../../types/article";
import { Link } from "react-router-dom";

export function OurArticles() {
  const [ourArticles, setOurArticles] = useState(articles.slice(0, 3));
  return (
    <div className="OurArticles">
      <div>
        <h2>Our Articles</h2>
        <p>
          See our latest news and updates for the know the new properties in
          your area.
        </p>
      </div>
      <div>
        {ourArticles.map((article: IArticle) => (
          <div className="article-card">
            <img src={article.photo} alt="" />
            <div>
              <h4>{article.title}</h4>
              <p>{article.text}</p>
              <div className="article-card-user">
                <div>
                  <img
                    className="user-photo"
                    src={users.filter((u) => u.id === article.userId)[0].photo}
                    alt=""
                  />
                  <p>
                    {users.filter((u) => u.id === article.userId)[0].name}{" "}
                    {users.filter((u) => u.id === article.userId)[0].surname}
                  </p>
                  <p>{article.date.toString().slice(3, 21)}</p>
                </div>
                <Link to="/read">
                  <button className="styled-button">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/read">
        <button>View All</button>
      </Link>
    </div>
  );
}
