// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName=function(className){
  var elementClasses=[];

  var elements=function(element){
    if(element.classList && element.classList.contains(className)){
      elementClasses.push(element);
    }
    if(element.childNodes){
      element.childNodes.forEach((childNode)=>{
        elements(childNode);
      });
    }
  }
  elements(document.body);

  return elementClasses;
}
