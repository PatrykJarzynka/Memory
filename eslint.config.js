import vuetify from "eslint-config-vuetify"

export default vuetify({
  rules: {
    "no-console": "error",
    "vue/attributes-order": ["error", {alphabetical: false}],
    "vue/html-closing-bracket-spacing": ["error", {
      selfClosingTag: "never",
      endTag: "never"
    }],
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/member-delimiter-style": ["error", {
      multiline: {
        delimiter: "semi",
      },
    }],
  },
})
