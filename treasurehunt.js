// const donutChanger= (id) => {
//   if(id === 0){
//     return document.getElementById(id).innerHTML = "🏃‍♀️"
// } else if(id === 1){
//     return document.getElementById(id).innerHTML = "🏋️‍♀️"
// } else if(id === 2){
//     return document.getElementById(id).innerHTML = "🤸‍♀️"
// } else if(id === 3){
//     return document.getElementById(id).innerHTML = "🍩"
// } else if(id === 4){
//     return document.getElementById(id).innerHTML = "🥦"
// } else if(id === 5){
//     return document.getElementById(id).innerHTML = "🏊‍♀️"
// } else if(id === 6){
//     return document.getElementById(id).innerHTML = "🧗‍♀️"
// } else if(id === 7){
//     return document.getElementById(id).innerHTML = "⛹️‍♀️"
// } else if(id === 8){
//     return document.getElementById(id).innerHTML = "🚲"
// }
// }
var jsconnect=alert("you are connected")
console.log(donutChanger)

  var donutLocation = Math.floor(Math.random() * 8)
  var veggieLocation = Math.floor(Math.random() * 8)

const treasure  = (location) => {
  if(donutLocation === location){
    document.getElementById("outcome").innerHTML = "🍩"
    document.getElementById("treasureHunt").innerHTML = ""
}
    else if (veggieLocation === location){
      document.getElementById().innerHTML="🥦"
}
}
