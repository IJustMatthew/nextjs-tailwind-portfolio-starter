import "@/styles/globals.css"
import { withThemeByClassName } from "@storybook/addon-themes"
import type { Preview } from "@storybook/react"

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark"
    },
    defaultTheme: "dark"
  })
]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on.*" }
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "dark",
      toolbar: {
        // The label to show for this toolbar item
        title: "Theme",
        icon: "circlehollow",
        // Array of plain string values or MenuItem shape (see below)
        items: ["light", "dark"],
        // Change title based on selected value
        dynamicTitle: true
      }
    }
  }
}

export default preview
