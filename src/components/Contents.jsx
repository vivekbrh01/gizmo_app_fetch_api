import React from "react";
import NewsCard from "./NewsCard.jsx";
import FeaturedNews from "./FeaturedNews.jsx";
import TrendingNews from "./TrendingNews.jsx";

class Contents extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			randomData: props.filteredData || null,
			featureIndex: 0,
		};
	}
	componentDidMount() {
		var obj = {};
		var arrRandomData = [];
		var limit = 10;
		var arr = this.state.randomData;
		for (let i = 1; i <= limit; i++) {
	
			var randomIndex = Math.floor(Math.random() * (arr.length));

			if (randomIndex === this.state.featureIndex || obj[randomIndex]) {
				limit += 1;
			} else {
				arrRandomData.push(arr[randomIndex]);
				obj[randomIndex] = 1;
			}
		}
		this.setState({ randomData: arrRandomData });

		if (!this.state.featureIndex && this.state.randomData) {
			var featureIndex = Math.floor(Math.random() * 9);

			while (!this.state.randomData[featureIndex].urlToImage) {
				featureIndex = Math.floor(Math.random() * 9);
			}
			this.setState({ featureIndex });
		}
	}
	render() {
		return (
			<>
				{this.state.randomData && this.state.featureIndex ? (
					<div className="container">
						<div className="all_news_cards">
							<div className="content_flex">
								<FeaturedNews
									news={this.state.randomData[this.state.featureIndex]}
									index={this.state.featureIndex}
									data={this.state.randomData}
								/>
								<div className="headline_list">
									<TrendingNews />
								</div>
							</div>
							<ul className="news_cards">
								{this.state.randomData.map((news, index) => {
									return index !== this.state.featureIndex ? (
										<NewsCard news={news} />
									) : (
										""
									);
								})}
							</ul>
						</div>
					</div>
				) : (
					"Loading..."
				)}
			</>
		);
	}
}

export default Contents;