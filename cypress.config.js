import { defineConfig } from "cypress"

module.exports = {
  projectId: "xk7kf8"
}

export default defineConfig({
  component: {
    viewportHeight: 1000,
    viewportWidth: 1280,
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
