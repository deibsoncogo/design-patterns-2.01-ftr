class Text {
  constructor(content) {
    this.content = content
  }

  renderizar() {
    return this.content
  }
}

class TextBold extends Text {
  renderizar() {
    return `<b>${super.renderizar()}</b>`
  }
}

class TextItalic extends Text {
  renderizar() {
    return `<i>${super.renderizar()}</i>`
  }
}

class TextUnderlined extends Text {
  renderizar() {
    return `<u>${super.renderizar()}</u>`
  }
}

module.exports = { TextBold, TextItalic, TextUnderlined }
