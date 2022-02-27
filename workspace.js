function getNumberFact() {
  var value = getText("Number");
  var url = "http://numbersapi.com/"+value;
  startWebRequest(url, updateFacts);
}
function updateFacts(status, type, content) {
     setText("textarea", content);
}
onEvent("button1","click", getNumberFact);

blah blah blah
