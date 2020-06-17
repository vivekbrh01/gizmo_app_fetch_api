import React from "react";

function Header() {
	return (
		<header>
			<div className="container header_flex">
				<p className="logo">Gizmo</p>
				<ul>
					<li className="header_title">
						<div className="searchBox">
							<input type="text" className="search_input_box" />
							<button className="search_icon">
								<i className="fas fa-search"></i>
							</button>
						</div>
						<div>
							<button className="lang_btn">En</button>
						</div>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
