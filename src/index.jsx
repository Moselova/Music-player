import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from "./assets/logo.svg";
import Home from "./Pages/Home";
import First from "./assets/Home.svg";
import Playlist from "./assets/playlist.svg";
import Collections from "./Pages/Collections";
import Radio from "./assets/radio.svg";
import Videos from "./assets/videos.svg";
import Log from "./assets/logout.svg";
import Prof from "./assets/profile.svg";
import Footplay from "./assets/footpic.png";
import Volume from "./assets/volume-high.svg";
import Next from "./assets/next.svg";
import Play from "./assets/play.svg";
import Prev from "./assets/previous.svg";
import Shuff from "./assets/shuffle.svg";
import Repeat from "./assets/repeat.svg";

import "./index.css";
import Search from "./assets/sh.svg";

function App() {
	return (
		<div className="">
			<BrowserRouter >
				<header className="ctn">
					<img src={Logo} />

					<div className="search-ctn">
						<img src={Search} />
						<input
							type="search"
							className="search"
							placeholder="Search artists"
						/>
					</div>
				</header>

				<nav className="sidebar">
					<div className="nav-div">
						<div className="rounded">
							<div>
								<Link className="Home" to="/">
									<img src={First} />
								</Link>
							</div>
							<div>
								<Link className="collection" to="Collections">
									<img src={Playlist} />
								</Link>
							</div>
							<div>
								<img src={Radio} />
							</div>
							<div>
								<img src={Videos} />
							</div>
						</div>
					</div>
					<div className="second-wrap">
						<div className="second-row">
							<div>
								<img src={Prof} />
							</div>
							<div>
								<img src={Log} />
							</div>
						</div>
					</div>
				</nav>
				<div className="footer-ctn">
					<div className="pic-text">
						<div>
							<img src={Footplay} />
						</div>
						<div className="foot-p">
							<p>Seasons in</p>
							<p>James</p>
						</div>
					</div>
					<div>
						<div className="ctrl">
							<img src={Shuff} />
							<img src={Prev} />
							<img src={Play} />
							<img src={Next} />
							<img src={Repeat} />
						</div>
						<div></div>
					</div>
					<div>
						<div>
							<img src={Volume} />
						</div>
					</div>
				</div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Collections" element={<Collections />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
