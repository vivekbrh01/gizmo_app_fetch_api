import React from "react";

function FeaturedNews({ news }) {
	return (
		<div className="feature_wrapper">
			<div className="feature_image">
				<img src={news.urlToImage} alt={news.title} />
			</div>
			<div className="feature_text">
				<h2 className="feature_title">{news.title}</h2>
				<p className="feature_author">Author: {news.author}</p>
				<p className="feature_desc">{news.description}</p>
			</div>
		</div>
	);
}
export default FeaturedNews;
