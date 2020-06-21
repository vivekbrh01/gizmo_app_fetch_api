import React from "react";
import Sources from "./Sources.jsx";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchedData: null,
			inputText: "",
			dataSearched: false,
			language: "en",
		};
	}

	handleInputChange = (event) => {
		var input = event.target.value;
		this.setState({ inputText: input });
	};

	handleSelect = (event) => {
		var option = event.target.value;
		this.setState({ language: option });
	};

	handleSearch = (event) => {
		this.setState({ searchedData: null });
		if (this.state.inputText) {
			fetch(
				`https://newsapi.org/v2/everything?q=${this.state.inputText}&language=${this.state.language}&apiKey=c8f6f018032d480b9d80af4223dfcb25`
			)
				.then((res) => res.json())
				.then((data) => this.setState({ searchedData: data.articles }))
				.catch((error) => console.log({ error }));
		} else {
			var date = new Date();
			var month =
				+date.getMonth() + 1 <= 9
					? "0" + (+date.getMonth() + 1)
					: +date.getMonth() + 1;

			fetch(
				`https://newsapi.org/v2/everything?q=${month}&language=${this.state.language}&apiKey=c8f6f018032d480b9d80af4223dfcb25`
			)
				.then((res) => res.json())
				.then((data) =>
					this.setState({ searchedData: data.articles, dataSearched: true })
				)
				.catch((error) => console.log({ error }));
		}
		event.preventDefault();
	};

	componentDidMount() {
		var date = new Date();
		var month =
			+date.getMonth() + 1 <= 9
				? "0" + (+date.getMonth() + 1)
				: +date.getMonth() + 1;
		fetch(
			`https://newsapi.org/v2/everything?q=${month}&language=en&apiKey=c8f6f018032d480b9d80af4223dfcb25`
		)
			.then((res) => res.json())
			.then((data) =>
				this.setState({ searchedData: data.articles, dataSearched: true })
			)
			.catch((error) => console.log({ error }));
	}
	render() {
		return (
			<>
			<header>
				<div className="container header_flex">
					<p className="logo">GIZMO</p>
					<ul>
						<li className="header_title">
							<form className="searchBox" onSubmit={this, this.handleSearch}>
								<input
									type="text"
									onChange={this.handleInputChange}
										className="search_box_input"
										placeholder="Search news"
								/>
								<button type="submit" className="search_icon">
									FIND
								</button>
								<select className="select_language"  name="language" onChange={this.handleSelect}>
									<option value="en">Language</option>
									<option value="en">En</option>
									<option value="fr">Fr</option>
									<option value="it">It</option>
								</select>
							</form>
						</li>
					</ul>
				</div>
			</header>
			{this.state.searchedData ? (
				<>
					<Sources searchedData={this.state.searchedData}/>
				</>
		) : (
				"Loading..."
			)}
		</>
		);
	}
}

export default Header;
