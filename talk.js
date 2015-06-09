// var superscript = require("superscript");

// new superscript('./data.json', {}, function(err, bot){
//     bot.reply("exampleUser", "Hello Bot", function(err, reply){
//         console.log(reply);
//     })
// });


main = ['我','','','將撲'];
adv0 = ['','總是','今天','常常','終於'];
verb = ['最喜歡','喜歡','吃掉了','碰到','看到','聞了','找到','盯著','成為','變成'];
adj = ['好多','很大','','有趣','不知名'];
o = ['房間','貓食','鳥','天空','禮物','寶藏'];
ah = ['耶','唷','喵!',''];

Vol = function(arr){
  this.terms = arr;
  this.getTerm = function(){
    return select(this.terms);
  }
}

Sent = function(vol){
  var obj = this;
  // obj.output = "";
  obj.vols = [];

  obj.add = function(vol){
    console.log(typeof vol );
    if(typeof vol == 'array'){
      obj.vols.push(new Vol(vol));
    }else if(typeof vol == 'string'){
      obj.vols.push(new Vol([vol]));
    }else if(typeof vol == 'object'){
      obj.vols.push(vol);
    }
    return obj;
  }

  obj.couldAdd = function(vol){
    if(typeof vol == 'array'){
      obj.vols.push(new Vol(vol));
    }else if(typeof vol == 'string'){
      obj.vols.push(new Vol([vol,'']));
    }else if(typeof vol == 'object'){
      obj.vols.push(vol);
    }
    return obj;
  }

  obj.add(vol);

  obj.print = function(){
    var sentense = "";
    for (var i = 0; i < this.vols.length; i++) {
      sentense += this.vols[i].getTerm();
    };
    return sentense;
  }
}


function select(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

var norn = new Vol(main);
var advo = new Vol(adv0);
var v = new Vol(verb);
var j = new Vol(adj);
var o = new Vol(o);
var ah = new Vol(ah);

var sentense = new Sent(norn).add(advo).add(v).couldAdd("好多").add(j).add('的').add(o).add(ah);
console.log(sentense.print());

// function mergeWords(arr){
//   var sentense = "";
//   for (var i = 0; i < arr.length; i++) {
//     sentense += select(arr[i]);
//   };
//   return sentense;
// }

for (var i = 0; i < 10; i++) {
  console.log(sentense.print());  
};
