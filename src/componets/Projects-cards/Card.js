import React from "react"

import "./Card.scss"
import imgProyect1 from "../../assets/img/project1.jpg"
import imgProyect2 from "../../assets/img/project2.jpg"
import imgProyect3 from "../../assets/img/project3.jpg"
import imgProyect4 from "../../assets/img/project4.jpg"

const itemsProyects = [
	{
		title: "Portafolio Website",
		subtitle: "Web",
		img: imgProyect1,
		id: 1,
	},
	{
		title: "Fast Foot App",
		subtitle: "Movil",
		img: imgProyect2,
		id: 2,
	},
	{
		title: "Travel App",
		subtitle: "Movil",
		img: imgProyect3,
		id: 3,
	},
	{
		title: "Music App Desing",
		subtitle: "Desing",
		img: imgProyect4,
		id: 4,
	},
]

function Card() {
	return (
		<div
			className="Projects-content u-grid Filters--active"
			data-content
			id="proyects"
		>
			{itemsProyects.map((item) => (
				<article className="Projects-card" key={item.id}>
					<img className="Projects-card-img" src={item.img} alt={item.title} />
					<div className="Projects-card-modal">
						<div>
							<span className="Projects-card-modal-subtitle">{item.subTitle}</span>
							<h3 className="Projects-card-modal-title">{item.title}</h3>
							<a
								href={item.urlLink ? item.urlLink : "#!"}
								className="button Projects-buttons"
							>
								<i className="ri-link"></i>
							</a>
						</div>
					</div>
				</article>
			))}
		</div>
	)
}

export default Card
