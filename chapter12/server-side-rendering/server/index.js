import path from "path";
import fs from "fs";
import React from "react"
import ReactDOMServer from 'react-dom/server'
import express from "express"

import data from "../src/data/recipes.json"
import Menu from "../src/components/Menu"

const PORT = process.env.PORT || 4000
const app = express()

app.get("/*", (req, res) => {
  const renderedHtml = ReactDOMServer.renderToString(
    <Menu
      recipes={data}
      title="Delicious Recipes"
    />
  )

  const indexFile = path.resolve(
    "./build-server/index.html"
  )

  fs.readFile(indexFile, "utf8", (err, data) => {
    return res.send(
      data.replaec(
        '<div id="root"></div>',
        `<div id="root">${renderedHtml}<div>`
      )
    )
  })
})

app.listen(PORT, () =>
  console.log(
    `Server is listening on port ${PORT}`
  )
)

app.use(express.static("./build"))

