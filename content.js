let needles = [
  'etherium',
  'bitcoin',
  'crypto',
  'cryptocurrency',
  'litecoin',
  'ripple',
];

let replacements = [
  'cat',
  'dog',
  'bird',
  'snake',
  'horse',
];

let elements = document.getElementsByTagName('*');

for (let i = 0; i < elements.length; i++) {
  let element = elements[i];

  for (let j = 0; j < element.childNodes.length; j++) {
    let node = element.childNodes[j];

    if (node.nodeType === 3) {
      let text = node.nodeValue;
      let replacedText = text.replace(
        new RegExp('/' + needles.join('|') + '/gi'),
        replacements[Math.floor(Math.random() * replacements.length)]
      );

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}
