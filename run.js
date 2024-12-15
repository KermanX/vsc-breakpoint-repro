const { createJiti } = require("./node_modules/jiti/lib/jiti.cjs")

const jiti = createJiti(__filename)

module.exports = jiti("./main.ts")
