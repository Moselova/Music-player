import React from "react";
import "./home.css";
import Bubble from "./pics/firstpic.png";
import Manpic from "./pics/manpic.png";
import Comm from "./pics/comm.png";
import Heart from "./pics/heart.svg";


export default function Home() {
	return (
		<div className="page">
			<div className="main-ctn">
				<div className="rec-wrap">
					<div className="big-wrap">
						<div className="big-rec">
							<div className="top">
								<div className="sub-top">
									<p className="top-p">Currated Playlists</p>
								</div>
								<div className="sub-m">
									<p className="mid-h">R & B Hits </p>
									<p className="mid-p">
										All mine, Lie again, Petty call me
										everyday,
										<br /> Out of time, No love, Bad habit,
										<br /> and so much more
									</p>
								</div>
								<div className="down">
									<img src={Comm} />
									<img src={Heart} />
									<p>33k Likes</p>
								</div>
							</div>
							<div>
								<img src={Manpic} />
							</div>
						</div>
					</div>
					<div className="small-wrap">
						<div className="small-recs">
							<div className="small-rec"></div>
							<div className="small-rec"></div>
							<div className="small-rec"></div>
						</div>
					</div>
				</div>
				<div className="">
					<div>
						<p>New releases.</p>
					</div>
					<div className="sq-wrap">
						<div className="sq">
							<img src={Bubble} />
							<p>Life in buble</p>
						</div>
						<div className="sq">
							<img src={Bubble} />
							<p>Life in buble</p>
						</div>
						<div className="sq">
							<img src={Bubble} />
							<p>Life in buble</p>
						</div>
						<div className="sq">
							<img src={Bubble} />
							<p>Life in buble</p>
						</div>
						<div className="sq">
							<img src={Bubble} />
							<p>Life in buble</p>
						</div>
						<div className="sq">
							<img src={Bubble} />
							<p>Life in buble</p>
						</div>
						<div className="sq">
							<img src={Bubble} />
							<p>Life in buble</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
