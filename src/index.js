import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import "remixicon/fonts/remixicon.css"
import "./scss/style.scss"

/* ------------------ IMPORT COMPONETS ------------------ */

import Header from "./page/Header/Header"
import Main from "./page/Main/Main"
import Footer from "./page/Footer/Footer"
import AnimationInit from "./page/animation"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<>
		<Header />
		<Main />
		<Footer />
		<AnimationInit />
	</>
)
