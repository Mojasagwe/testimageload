import React from "react";
import "./home.css";
import logo2 from "../pictures/logo2.png";

function Home() {
	window.addEventListener("scroll", function () {
		const topNav = document.querySelector(".header");
		topNav.classList.toggle("active", window.scrollY > 0);
	});

	return (
		<div className="home" id="Home">
			<div className="home__bg">
				<div className="header d__flex align__center pxy__30">
					<div className="logo">
						<img src={logo2} alt="" />
					</div>
					<div className="nagivation pxy__30">
						<ul className="navbar d__flex">
							<a href="#Home">
								<li className="nav__items mx__15">Home</li>
							</a>
							<a href="#About">
								<li className="nav__items mx__15">About</li>
							</a>
							<a href="#Skills1">
								<li className="nav__items mx__15">Soft Skills</li>
							</a>
							<a href="#Skills">
								<li className="nav__items mx__15">Technical Skills</li>
							</a>
							<a href="#Contact">
								<li className="nav__items mx__15">Contact</li>
							</a>
						</ul>
					</div>
				</div>
				{/*HOME CONTENT */}
				<div className=" container ">
					<div className="home__content">
						<div className="home__meta">
							<h1 className="home__text pz__10">Hi, welcome to my portfolio</h1>
							<h2 className="home__text pz__10">I'm Thato Mmadi</h2>
							<h3 className="home__text sweet pz__10">A software Developer.</h3>
							<h4 className="home__text pz__10">From Gauteng</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
