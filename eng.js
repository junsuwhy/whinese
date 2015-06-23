function getRandomTestEmail(){
  var alphabet1 = ["r","s","p","b","w","n","m"];
  var alphabet2 = ["a","e","i","o","u"];
  var alphabet3 = ["t","r","s",""]
  var arr = [alphabet1,alphabet2,alphabet1,alphabet2,alphabet3];
  var str = "";
  for (var i = 0; i < 5; i++) {
    str += arr[i][Math.floor(Math.random()*arr[i].length)];
  };
  return "test@test" + str + ".com";
}
