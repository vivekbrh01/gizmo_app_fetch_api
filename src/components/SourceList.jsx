import React from "react";

function SourceList(props) {
	return (
		<>
			{props.allSources.map((news) => {
				return (
					<li>
						<button
							className="source_btn"
							onClick={() => props.handleClick(news.id)}
						>
							{news.name}
						</button>
					</li>
				);
			})}
		</>
	);
}

export default SourceList;
