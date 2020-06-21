import React from "react";
import SourceList from "./SourceList.jsx";
import Contents from "./Contents.jsx";

class Sources extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sources: null,
			buttonClicked: "all",
			view: props.searchedData ||null,
		};
	}
	
	randomData(arr) {
		var arrRandomNum = [];
		for (let i = 1; i <= 5; i++) {
			var randomIndex = Math.floor(Math.random() * (arr.length - 6));
			arrRandomNum.push(arr[randomIndex]);
		}
		return arrRandomNum;
	}

	handleClick = (btn = "all") => {
		var date = new Date();
		var month =
			+date.getMonth() + 1 <= 9
				? "0" + (+date.getMonth() + 1)
				: +date.getMonth() + 1;
		if (btn === "all") {
			fetch(
				`https://newsapi.org/v2/everything?q=${month}&language=en&apiKey=c8f6f018032d480b9d80af4223dfcb25`
			)
				.then((res) => res.json())
				.then((data) => this.setState({ view: data.articles }));
		} else {
			fetch(
				`https://newsapi.org/v2/everything?sources=${btn}&language=en&apiKey=c8f6f018032d480b9d80af4223dfcb25`
			)
				.then((res) => res.json())
				.then((data) => console.log(data));
			// .then((data) => this.setState({ view: data.articles }));
		}
	};

	componentDidMount() {
		fetch(
			"https://newsapi.org/v2/sources?language=en&country=us&apiKey=c8f6f018032d480b9d80af4223dfcb25"
		)
			.then((res) => res.json())
			.then((data) => this.setState({ sources: this.randomData(data.sources) }))
			.catch((error) => console.log({ error }));
	}

	render() {
		return (
			<>
				{this.state.sources ? (
					<section>
						<ul className="source_flex">
							<li>
								<button
									className="source_btn"
									onClick={() => this.handleClick("all")}
								>
									All
								</button>
							</li>
							<SourceList
								allSources={this.state.sources}
								handleClick={this.handleClick}
							/>
						</ul>
					</section>
				) : (
					""
				)}
				<section>
					<Contents filteredData={this.state.view || this.handleClick("all")} />
				</section>
			</>
		);
	}
}

export default Sources;
