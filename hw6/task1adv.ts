// #### Task 1 👨‍🏫

// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей
// (в противном случае результат неверный, вывысти, что прислали неверные результаты).
// Жаль что нам присылают результат матча в формате:
// {
// 	team1: "liverpool",
// 	team2: "chelsea",
// 	matchResult: "0:0",
// 	penalty: "10:11"
// }
// ведь нам надо это вывести в консоль словами:
// -кто сколько забил
// -если были пенальти, то счет по ним (свойства в объекте может не быть)
// -результат матча - чья победа/поражение/ничья
// Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 


const matchResult = {
	team1: "liverpool",
	team2: "chelsea",
	matchResult: "0:0",
	penalty : "10:11"
};
type MatchResultFormate = {
	team1: string,
	team2: string,
	matchResult: string,
	penalty ?: string
};

const decipherЬatchКesult = (obj:MatchResultFormate):void=>{
    const maximumGoal = 9;
    const result = (obj.matchResult).split(":");
    if(+result[0] > maximumGoal || +result[1] > maximumGoal){
        return console.log("прислали неверные результаты");        
    }
    type resultObjType = {
        goals: string,
        penalty ? : string,
        matchResult : string,
        };
    const resultObj : resultObjType={
        goals: "",
        matchResult : "",
    }

    resultObj.goals=`команда ${obj.team1} забила ${result[0]} голов, команда ${obj.team2} забила ${result[1]} голов`;
    if(obj.penalty){
        const penalty = (obj.penalty).split(":");
        resultObj.penalty = `команда ${obj.team1} забила ${penalty[0]} по пенальти, команда ${obj.team2} забила ${penalty[1]} по пенальти`
    }

    resultObj.matchResult=(+result[0]>+result[1])?`команда ${obj.team1} победила, команда ${obj.team2} проиграла`:(+result[0]<+result[1])?`команда ${obj.team2} победила, команда ${obj.team1} проиграла`:`команды сыграли в ничью`;


 console.log(resultObj);
}


decipherЬatchКesult(matchResult);