import { createElement } from "react"
import { createRoot } from "react-dom/client"

const rootElement = document.getElementById("root")

const root = createRoot(rootElement)

root.render(createElement(`div`, {}, `Hello world!`))
