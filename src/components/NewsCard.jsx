import React from "react";

function NewsCard({ news }) {
	return (
		<li className="news_card">
			<div className="news_card_wrapper">
				<div className="news_card_image">
					<img
						src={
							news.urlToImage
								? news.urlToImage
								: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
						}
						alt={news.title}
					/>
				</div>
				<div className="news_card_text">
					<div className="news_card_flex">
						<p className="news_card_source">{news.source.name}</p>
						<p className="news_card_date">
							{news.publishedAt
								.toString()
								.slice(0, 10)
								.split("-")
								.reverse()
								.join(" / ")}
						</p>
					</div>
					<p className="news_card_title">{news.title}</p>
				</div>
			</div>
		</li>
	);
}

export default NewsCard;
