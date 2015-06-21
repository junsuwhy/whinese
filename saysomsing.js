function SaySomSing(sentense) {
    // this.type = type;
    this.sentense = sentense;
    this.repArray = [];
    var _this = this;
    this.replace = function(term,vocab){
      if(vocab instanceof Vocab || vocab instanceof SaySomSing){
        var thisVocab = vocab;
      }else{
        var thisVocab = new Vocab(vocab);
      }
      
      _this.repArray.push(new function(){
        this.term = term;
        this.vocab = thisVocab;
      });
      return _this;
    };
    this.fetch = function(bool){
      var returnSent = _this.sentense;
      for (var i = 0; i < _this.repArray.length; i++) {
        var rep = _this.repArray[i];

        // get new term;
        if(rep.vocab instanceof Vocab){
          var termArray = rep.vocab.vocabArray;
          var x = Math.floor(Math.random()*termArray.length);
          var newWord = termArray[x];
        }
        else if(rep.vocab instanceof SaySomSing){
          // console.log(rep.vocab);
          var newWord = rep.vocab.fetch();
        }
        
        // replace word

        var rep_term = rep.term.replace(/\$/g,"\\$");
        var regex = new RegExp(rep_term,"g");
        
        returnSent = returnSent.replace(regex,newWord);
      };
      bool?console.log(returnSent):false;
      return returnSent;
    }
}

function Vocab(terms,separator){
  this.termsSentense = terms;
  this.vocabArray = [];
  this.separator = separator;
  var _this = this;
  if(separator){
    var vocabArray = terms.split(separator);
  }else if(terms.match(",")){
    this.separator = ",";
    var vocabArray = terms.split(",");
  }else if(terms.match("、")){
    this.separator = "、";
    var vocabArray = terms.split("、");
  }else{
    this.separator = "、";
    var vocabArray = [terms];
  }
  this.vocabArray = vocabArray;

  this.add = function(terms,separator){
    var newVocab = new Vocab(terms + '、' + _this.termsSentense);
    return newVocab;
  }

  this.clone = function(){
    var newVocab = new Vocab(_this.termsSentense);
    return newVocab;
  }
}

var sss1 = new SaySomSing("norn1不是最adj的norn2，norn2卻是adj的norn2");
var norn1 = new Vocab("財富、金錢、事業、瀏海、超速、變形金剛");
var norn2 = new Vocab("朋友、愛人、夥伴、良藥、鑰匙、傷口、愛人、幸福");
var adj1 = new Vocab("永久、熱情、重要");
sss1.replace("norn1",norn1);
sss1.replace("adj",adj1);
sss1.replace("norn2",norn2);
// console.log(sss1.fetch()); // "財富不是永久的朋友；朋友卻是永久的朋友。


var verb1 = new Vocab("等待、霸凌、凝視、背叛");
var verb3 = new Vocab("餵養、滋養、刺激、報復、啃食、囁嚅");
var adj2 = new Vocab("寂寞、憤怒、想睡、悲苦、懦弱、犯傻、可笑");
var verb2 = new Vocab("當兵、提款、發呆、抗議、奔跑、選總統、讀言情小說、拿書卷");

var people1 = new Vocab("老爸、馬英九、愛因斯坦、國父、周杰倫");
var people2 = new Vocab("將撲、馬英九、愛因斯坦、國父、周杰倫");

var sss2 = new SaySomSing("norn1是verb1norn2的norn3，而norn4將不斷verb2norn2。");
sss2.replace("norn1",norn1.add("行動、生命、睡覺"));
sss2.replace("verb1","治癒、看透、穿越、打破、驚醒");
sss2.replace("norn2","財富、金錢、事業、瀏海、超速、變形金剛");
sss2.replace("norn3","良藥、鑰匙、傷口、愛人");
sss2.replace("norn4","將撲、猶豫、握壽司、旅行");
// console.log(sss2.fetch()); 

var sss3 = new SaySomSing("我在$verb1的時候，你還在$norn1的$norn2裡$verb2著$norn3呢");
sss3.replace("$verb1",verb2);
sss3.replace("$norn1","老爸、美國、考試院、遠方");
sss3.replace("$norn2","懷、夕陽、沙攤、警衛室");
sss3.replace("$verb2",verb3);
sss3.replace("$norn3","將撲、母奶、握壽司、希望");
// console.log(sss3.fetch());

sss4 = new SaySomSing("國父說 : 「sent」");
sss4.replace("sent",sss3);
console.log(sss4.fetch());

sss5 = new SaySomSing("如果這不是關說，那什麼才是關說呢？").replace("關說",adj2).fetch(1); // 馬英九：「如果這不是關說，那什麼才是關說呢？」
sss6 = new SaySomSing("這兩年關廠勞工抗爭，有時會讓人產生錯覺，以為我們勞工過得很慘，沒有保障。");


mow1 = new SaySomSing("其實$verb1$本身就是一種$adj2$的$norn1$。明知道$verb1$著一份不知能否到來的$norn2$。"); //其實等待本身就是一種可笑的錯誤。明知道等待著一份不知能否到來的幸福。
mow1.replace("$verb1$",verb1);
mow1.replace("$adj2$",adj2);
mow1.replace("$norn1$",norn1);
mow1.replace("$norn2$",norn2);
mow1.fetch(1);

mow2 = new SaySomSing("不要因為寂寞而錯愛，不要因為錯愛而寂寞一生。"); //其實等待本身就是一種可笑的錯誤。明知道等待著一份不知能否到來的幸福。
mow2.replace("寂寞",adj2);
mow2.replace("錯愛",verb2);
mow2.fetch(1);

ss1 = new SaySomSing("nn1vv1nn2");
ss1.replace('nn1',people1);
ss1.replace('vv1',verb1);
ss1.replace('nn2',people2);

ss2 = new SaySomSing("ss1的時候，nn1忽然開始vv1著nn2");
ss2.replace('ss1',ss1).replace('nn1',people2).replace('vv1',verb3).replace('nn2',people1).fetch(1);

