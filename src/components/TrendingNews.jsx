import React from "react"

class TrendingNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines : null,
        }
    }

    randomNumber(arr) {
        let arrRandomNum = [] 
        for (let i = 1; i <= 5; i++) {
            arrRandomNum.push(Math.floor(Math.random() * (arr.length - 6)));            
        }
        return arrRandomNum;
    }

    componentDidMount() {
        fetch(
            "https://newsapi.org/v2/top-headlines?country=us&apiKey=c8f6f018032d480b9d80af4223dfcb25"
        )
            .then((res) => res.json())
            .then((data) => this.setState({ headlines: data.articles }));
    }

    render() {
        return (
            <aside>
                <div className="headline_wrapper">
                    <h2 className="headline_HEADING">HEADLINES</h2>
                    <ul className="all_headlines">
                        {this.state.headlines ? (
                            this.randomNumber(this.state.headlines).map((num) => {
                                return (
                                    <li className="each_headline">
                                        <div className="headline_info">
                                            <p className="headline_source">{this.state.headlines[ num ].source.name}</p>
                                            <p className="headline_publish_date">{this.state.headlines[ num ].publishedAt.toString().slice(0, 10).split("-").reverse().join(" / ")}</p>
                                        </div>
                                        <p className="headline_title">{this.state.headlines[ num ].title}</p>
                                    </li>
                                );
                            })
                        ) : <p>Loading...</p>
                        }
                    </ul>
                </div>
            </aside>

        )
    }
}
export default TrendingNews;