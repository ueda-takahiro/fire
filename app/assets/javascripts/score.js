function initFunc() {
  selectArray = [-1,-1,-1,-1,-1,-1];
  scoreArray  = [0];
  qnum        = selectArray.length;
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
      $("#result6").addClass('show');
      break;
    case totalscore >= 60:
        $("#result2").fadeIn(200);

      break;
    case totalscore >= 40:
        $("#result3").fadeIn(200);

      break;
    case totalscore >= 20:

        $("#result4").fadeIn(200);

      break;
    default:
        $("#result1").fadeIn(200);

  }
}
function moveFunc(qID) {
  let myPos = (qID+1) * -650;
  $("#qContainer").delay(500).animate({left: myPos},500);

}

$(function(){
  initFunc();//---初期化
 
  $("ul>li").click(quizFunc);
  $("#againButton").click(againFunc);

 
});




