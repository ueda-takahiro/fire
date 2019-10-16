function initFunc() {
  let selectArray = [-1,-1,-1,-1,-1,-1];
  let scoreArray  = [0];
  let qnum        = selectArray.length;
}

function preloadFunc() {
  for(let i = 0; i < arguments.length; i++){
    $("<img>").attr("src",arguments[i]);
  }
}

function againFunc() {
  moveFunc(-1);
  for(let i in selectArray){
    let selectID = selectArray[i];
    $("#" + i + "_" + selectID).removeClass("selected");
  }
  initFunc();
}
function quizFunc() {
  let idArray = this.id.split("_");
  let qID     = Number(idArray[0]);
  let ansID   = Number(idArray[1]);
  let selectID= selectArray[qID];
  if (ansID  == selectID) return;
  // $(this).addClass("selected");11行目と同じ
  $("#" + qID + "_" + ansID).addClass("selected");
  $("#" + qID + "_" + selectID).removeClass("selected");
  selectArray[qID] = ansID;
  moveFunc(qID);

  scoreArray[qID] = Number($(this).attr("score"));
  if (qID+1 >= qnum) resultFunc();
}

function resultFunc() {
  let totalscore  = 0;
  for(let i in scoreArray) {
    totalscore += scoreArray[i];
  }
  alert("合計 = " + totalscore);

  switch (true){
    case totalscore >= 80:
      var lv = 4;
      break;
    case totalscore >= 60:
      var lv = 3;
      break;
    case totalscore >= 40:
      var lv = 2;
      break;
    case totalscore >= 20:
      var lv = 1;
      break;
    default:
      var lv = 0;
  }
  $("#resultpoint").text(totalscore);
  $("#resultimage").css("background-image", "url('images/lv"+lv+".png')");


  // function getCSV() {
  //   return new Promise((resolve, reject) => {
  //     var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成、サーバと非同期通信するためのAPI
  //     req.open("get", "fireworks-result.csv", true); // アクセスするファイルを指定
  //     req.onload = () => {
  //       if (req.readyState === 4 && req.status === 0) {
  //         resolve(convertCSVtoArray(req.responseText));
  //       } else {
  //         reject(new Error(req.statusText));
  //       }
  //     };
  //     req.onerror = () => {
  //       reject(new Error(req.statusText));
  //     };
  //     req.send(null); // HTTPリクエストの発行
  //   });
  // }
  // getCSV()



  let myData = resultArray[lv];
  $("#resulttitle").text(myData.split(",")[0]);
  $("#resulttext").text(myData.split(",")[1]);
}
function moveFunc(qID) {
  let myPos = (qID+1) * -650;
  $("#qContainer").delay(500).animate({left: myPos},500);
}


// //CSVファイルを読み込む関数getCSV()の定義
// function getCSV(){
//     var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
//     req.open("get", "fireworks-result.csv", true); // アクセスするファイルを指定
//     req.send(null); // HTTPリクエストの発行
	
//     // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
//     req.onload = function(){
// 	convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
//     }
// }
 
// // 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
// function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
//     var result = []; // 最終的な二次元配列を入れるための配列
//     var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
 
//     // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
//     for(var i=0;i<tmp.length;++i){
//         result[i] = tmp[i].split(',');
//     }
 
//     alert(result[0]); // 300yen
// }
 
// getCSV()

$(function(){
  initFunc();
  //テキストデータの読込
  $.get("fireworks-result.csv", function(myData){
    resultArray = myData.split("\n")});
  alert(resultArray[0]);


// preloadFunc("images/lv0.png","images/lv1.png","images/lv2.png",
// "images/lv3.png","images/lv4.png", "images/againOn.png");


  $("ul>li").click(quizFunc);
  $("#againButton").click(againFunc);
});
// $(function() {
//   $('form').on('submit', function(e) {
//     let output = ''; 
//     let checkboxes = $(this).find('input[type="checkbox"]');
//     checkboxes.each(function(i, checkbox) {
//       checkbox = $(checkboxes[i]);
//       if (checkbox.prop('checked')) {
//         output += checkbox.attr('value') + '\n';
//       }
//     });
//     e.preventDefault();
//     alert('あなたが選んだ果物:\n' + output);
//   });
// });

// $(function() {
//   $('form').on('submit', function(e) {
//     let checkboxes = $(".select:checkbox:checked").map(function() {
//       return $(this).val(id);
//     }).get();
//     e.preventDefault();
//     alert('あなたが選んだ果物:\n' + checkboxes);
//     });
//   });
