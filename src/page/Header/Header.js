import React from "react"

import "./Header.scss"
import userImg from "../../assets/img/perfil.png"
import CvUser from "../../assets/pdf/RaulPineda-Curriculum.pdf"

function Header() {
	function themeDark() {
		document.querySelector("body").classList.toggle("theme-dark")
		document.getElementById("theme-button").classList.toggle("ri-sun-line")
	}

	return (
		<header className="Profile container">
			{/* theme button */}
			<i className="ri-moon-line" id="theme-button" onClick={themeDark}></i>
			<div className="Profile-container u-grid">
				<div className="Profile-data">
					<div className="Profile-data-border">
						<div className="Profile-data-border-img">
							<img src={userImg} alt="Perfil" loading="lazy" />
						</div>
					</div>

					<h2 className="Profile-data-name">Gianed Vusy</h2>
					<h2 className="Profile-data-profession">Web Developer</h2>

					<ul className="Profile-social">
						<a
							href="#!"
							rel="noopener noreferrer"
							target="_blank"
							className="Profile-social-link"
						>
							<i className="ri-instagram-line"></i>
						</a>
						<a
							href="#!"
							rel="noopener noreferrer"
							target="_blank"
							className="Profile-social-link"
						>
							<i className="ri-linkedin-fill"></i>
						</a>
						<a
							href="#!"
							target="_blank"
							rel="noopener noreferrer"
							className="Profile-social-link"
						>
							<i className="ri-github-fill"></i>
						</a>
					</ul>
				</div>
			</div>

			<div className="Profile-info u-grid">
				<div className="Profile-info-group">
					<h3 className="Profile-info-number">7</h3>
					<p className="Profile-info-description">
						Year <br /> Work
					</p>
				</div>

				<div className="Profile-info-group">
					<h3 className="Profile-info-number">+123</h3>
					<p className="Profile-info-description">
						Completed <br /> Proyects
					</p>
				</div>

				<div className="Profile-info-group">
					<h3 className="Profile-info-number">69</h3>
					<p className="Profile-info-description">
						Satisfied <br /> Customers
					</p>
				</div>
			</div>
			<div className="Profile-buttons">
				<a className="button" download="" href={CvUser}>
					Download CV<i className="ri-download-line"></i>
				</a>

				<div className="Profile-buttons--small">
					<a className="button button--small button--gray" target="_blank" href="!#">
						<i className="ri-whatsapp-line"></i>
					</a>
					<a className="button button--small button--gray" target="_blank" href="!#">
						<i className="ri-messenger-line"></i>
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header
