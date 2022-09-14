import React from "react"
import "./Main.scss"
import Skills from "../../componets/Skills/Skills"
import Cards from "../../componets/Projects-cards/Card"

function onFilter(e) {
	const tabContents = document.querySelectorAll("[data-content]")
	const tabs = document.querySelectorAll("[data-target]")
	tabContents.forEach((tc) => {
		tc.classList.remove("Filters--active")

		tabs.forEach((item) => {
			item.classList.remove("active")
		})

		e.target.classList.add("active")

		const target = e.target.dataset.target

		tc.id === target ? tc.classList.add("Filters--active") : console.log()
	})
}

function Main() {
	return (
		<main>
			<section className="Filters">
				<ul className="Filters-content">
					<button
						onClick={onFilter}
						data-target="proyects"
						className="buttons-filters active"
					>
						Proyects
					</button>
					<button onClick={onFilter} data-target="skills" className="buttons-filters">
						Skills
					</button>
				</ul>

				<div className="Filters-section">
					<Cards />
					<Skills />
				</div>
			</section>
		</main>
	)
}

export default Main
