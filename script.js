function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// 1. Code runs as you type: edit message
let msg = "Decode of by ";
let ksg = "SlaBarsk";

// 2. Files import automatically: uncomment this
// msg = capitalize(msg)

$("#header")
  .html(msg)
  // 3. Smart autocomplete: type .fadeIn('slow')
  // after .fadeOut('slow')
  .fadeOut(3000);

console.log({ myMessage: msg });

$("#sla")
  .html(ksg)
  // 3. Smart autocomplete: type .fadeIn('slow')
  // after .fadeOut('slow')
  .fadeIn(300);
console.log({ myMessage: ksg });