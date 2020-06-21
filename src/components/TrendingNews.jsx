import React from "react";

class TrendingNews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headlines: null,
		};
	}

	componentDidMount() {
		var arrRandomNum = [];
		fetch(
			"https://newsapi.org/v2/top-headlines?country=us&apiKey=c8f6f018032d480b9d80af4223dfcb25"
		)
			.then((res) => res.json())
			.then((data) => this.setState({ headlines: data.articles }));
		
		if (this.state.headlines) {
			var obj = {};
			var arr = this.state.headlines;
			var limit = 5;
			var randomHeadlines = [];

			for (let i = 1; i <= 5; i++) {
				var random = Math.floor(Math.random() * (arr.length - 6));
				obj[ random ] = 1;
				
				if (obj[random]) {
					limit += 1;
				} else {
					randomHeadlines.push(arr[random]);
				}
			}
			this.setState({ headlines: randomHeadlines });
		}
	}

	render() {
		return (
			<aside>
				<div className="headline_wrapper">
					<h2 className="headline_Heading">HEADLINES</h2>
					<ul className="all_headlines">
						{this.state.headlines ? (
							this.state.headlines.map((headline) => {
							return (
						<li className="each_headline">
							<div className="headline_info">
								<p className="header_source">{headline.source.name}</p>
								<p className="headline_publish_date">{headline.publishedAt
									.toString()
									.slice(0, 10)
									.split("-")
									.reverse()
									.join("/")}
								</p>
							</div>
							<p className="headline_title">{headline.title}</p>
						</li>
						);
					})
						) : <p> Loading...</p>
					}
					</ul>
				</div>
			</aside>
		);
	}
}
export default TrendingNews;
