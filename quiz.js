var quiz_txts = ["엉덩이의 갯수는?",
                "복숭아는 당연히",
                "빨대 구멍의 갯수는?",
                "다시 태어난다면?",
                "용서할 수 없는 것은?",
                "길에서 혼자 넘어졌는데 너무 아프다.",
                "당신은 코딱지를 팔 때",
                "용변 후 화장실에 휴지가 없을 때",
                "당신이 가장 행복한 순간은?",
                "3 x 4 = "];
var yes_txts = ["당연히 1개지!", 
               "딱딱한게 최고지!",
               "당연히 1개지!",
               "행복한 동물이 되기",
               "뜨거운 비빔면",
               "아프지만 쪽팔리니까 빨리 도망가자.",
               "엄지 발가락으로 판다.",
               "열심히 엉덩이를 흔들어 털어낸다.",
               "똥 쌀 때",
                   "0.34"];
var no_txts = ["당연히 2개지!",
              "물렁한 복숭아가 맛있지!",
              "당연히 2개지!",
              "불행한 사람이 되기",
              "뜨거운 콜라",
              "너무 아파요! 도와주세요!",
              "다른 사람의 손으로 판다.",
              "벽에 비빈다.",
              "똥 싼 후", 
                 "35,294,873,412"];
var scores = [[-1, 1, -1, -1, 1, 0, 1],
             [-1, 1, -1, 1, -1, 1, 0, 1],
             [1, 1, -1, -1, -1, 0, 1],
             [1, -1, -1, 1, -1, 0, 1],
             [1, -1, -1, -1, 1, 0, 1],
             [-1, 1, -1, -1, 1, 0, 1],
             [1, 1, 1, -1, -1, 0, 1],
             [1, -1, 1, -1, 1, 0, -1],
             [-1, 1, -1, 1, -1, 0, 1],
             [-1, 1, -1, -1, 1, 0, 1]];

var quiz = 0;
var score = [0,0,0,0,0,0,0];

var idx = document.getElementById('idx');
var txt = document.getElementById('txt');
var yes = document.getElementById('yes');
var no = document.getElementById('no');

yes.addEventListener('click', function(){
    quiz_next(true);
})

no.addEventListener('click', function(){
    quiz_next(false);
})

function quiz_next(i){
    if(quiz == 9){
        var result = 0;
        var maximum = -10;
        for(let i = 0; i < 7; i++){
            if(maximum < score[i]){
                result = i;
                maximum = score[i]
            }
        }
        location.href = "result.html?result="+result;
    }
    else{
        for(let i = 0; i < 7; i++) score[i] += scores[quiz][i]
        quiz += 1
        idx.innerText = (quiz + 1) + " / 10"
        txt.innerText = quiz_txts[quiz]
        yes.innerText = yes_txts[quiz]
        no.innerText = no_txts[quiz]
    }
}