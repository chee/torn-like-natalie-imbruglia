const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)

let text

while (text = walker.nextNode()) {
  text.textContent = text.textContent.replace(/(\btorn\b)/gi, '$1 (like Natalie Imbruglia)')
}
