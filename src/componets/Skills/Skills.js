import React from "react"

import "./Skills.scss"
const skillsFront = [
	{
		skillName: "HTML",
		skillLevel: "Basic",
		id: 1,
	},
	{
		skillName: "CSS",
		skillLevel: "Advanced",
		id: 2,
	},
	{
		skillName: "JavaScript",
		skillLevel: "Intermediate",
		id: 3,
	},
	{
		skillName: "React",
		skillLevel: "Basic",
		id: 4,
	},
	{
		skillName: "Bootstrap",
		skillLevel: "Intermediate",
		id: 5,
	},
	{
		skillName: "Git",
		skillLevel: "Intermediate",
		id: 6,
	},
]

const skillsDesing = [
	{
		skillName: "Photoshop",
		skillLevel: "Basic",
		id: 1,
	},
	{
		skillName: "Illustrator",
		skillLevel: "Basic",
		id: 2,
	},
	{
		skillName: "Premiere",
		skillLevel: "Basic",
		id: 3,
	},
	{
		skillName: "After Effects",
		skillLevel: "Basic",
		id: 4,
	},
	{
		skillName: "Figma",
		skillLevel: "Intermediate",
		id: 5,
	},
]

function Skills() {
	return (
		<>
			<div className="Skills-content u-grid " data-content id="skills">
				<div className="Skills-area">
					<h3 className="Skills-area-title">Frontend Developer</h3>

					<div className="Skills-box">
						<div className="Skills-group">
							{skillsFront.map((skill) => (
								<div className="Skills-group-data" key={skill.id}>
									<i className="ri-checkbox-circle-line"></i>
									<div className="">
										<h3 className="Skills-group-data-name">{skill.skillName}</h3>
										<span className="Skills-group-data-level">{skill.skillLevel}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="Skills-area">
					<h3 className="Skills-area-title">Desing</h3>

					<div className="Skills-box">
						<div className="Skills-group">
							{skillsDesing.map((skill) => (
								<div className="Skills-group-data" key={skill.id}>
									<i className="ri-checkbox-circle-line"></i>
									<div className="">
										<h3 className="Skills-group-data-name">{skill.skillName}</h3>
										<span className="Skills-group-data-level">{skill.skillLevel}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Skills
