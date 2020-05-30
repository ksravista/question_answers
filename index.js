let axios = require("axios");
const https = require('https');
axios = axios.create({
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
  });
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(require("body-parser").json());

function getQuestions(){

    return [
        "Why does Little Red Riding Hood visit her grandmother?",
        "Why does Little Red Riding Hood's mother give Little Red Riding Hood a basket of treats?",
        "Why does Little Red Riding Hood's mother tell Little Red Riding Hood not to talk to strangers?",
        "Whom does Little Red Riding Hood meet in the forest?",
        "What does the wolf ask Little Red Riding Hood?",
        "Does Little Red Riding Hood answer the wolf?",
        "Is Little Red Riding Hood supposed to answer the wolf?",
        "Why is Little Red Riding Hood not supposed to answer the wolf?",
        "What does the wolf do after Little Red Riding Hood tells him where she is going?",
        "What does the wolf do when he gets to Little Red Riding Hood's grandmother's house?",
        "Why does Little Red Riding Hood ask the wolf about his eyes, ears and teeth?",
        "What does the wolf try to do to Little Red Riding Hood?",
        "Who saves Little Red Riding Hood?",
        "What is the lesson of the story?"
    ];
}

function getAnswers(index){

    let answer_list1 = [
        ["Little Red Riding Hood visits her grandmother because her grandmother is sick.","Because her  grandmother is sick."],
        ["Little Red Riding Hood's mother gives her a basket of treats  to give to her grandmother to help her feel better.","To give to her grandmother, to help her grandmother feel better"],
        ["Little Red Riding Hood's mother tells her not to talk to strangers to keep her from getting hurt.","to protect little red riding hood, because a stranger might hurt little red riding hood"],
        ["Little Red Riding Hood meets a wolf in the forest.","a wolf"],
        ["The wolf asks Little Red Red Riding Hood what she's doing in the forest.","what she is doing in the forest, where she is going"],
        ["Little Red Riding answers the wolf and tells him she's going to see her grandmother.","yes"],
        ["Little Red Riding Hood is not supposed to answer the wolf.","no"],
        ["Little Red Riding Hood is not supposed to answer the wolf because the wolf is a stranger.","because he/the wolf is a stranger, because he is bad, because he might hurt her/Little Red Riding Hood"],
        ["After Little Red Riding Hood tells the wolf where she's going, he takes a shortcut to her grandmother's house.","He goes to Little Red Riding Hood's grandmother's house,he takes a shortcut to Little Red Riding Hood's grandmother's house."],
        ["When the wolf gets to Little Red Riding Hood's grandmother's house, he locks her in the closet, dresses up like her, and gets in her bed.","He locks Little Red Riding Hood's grandmother in the closet, he dresses like Little Red Riding Hood's grandmother and goes in her bed"],
        ["Little Red Riding Hood asks the wolf about his eyes, ears, and teeth because he doesn't look like her grandmother.","because the wolf doesn't look like Little Red Riding Hood's grandmother, because the wolf's eyes/ears/teeth don't look like Little Red Riding Hood's grandmother's eyes/ears/teeth "],
        ["The wolf tries to eat Little Red Riding Hood.","he/the wolf tries to eat her"],
        ["The lumberjack saves Little Red Riding Hood.","the woodsman lumberjack"],
        ["The lesson of the story is that children shouldn't talk to strangers because bad things can happen if they do.","Don't talk to strangers/Listen to your mom/parents"]];

        return answer_list1[index];
}

app.post('/ask_question/p1', (req, res) => {
    
    let question = req.body.question;
    let  toSend = {
        s1: question,
        s2: getQuestions()
    };
    
    axios.post("https://alistempirefoundation.org:5041/test", toSend).then(response=>{
        
        let rates = response.data.rates.map((rate, i)=> {return {
            index: i,
            similarity: Number(rate)
        }});
        //sort based on similarity
        rates.sort((a, b) =>{
            return b.similarity - a.similarity;
        })

        let type = '3';
        if(rates[0].similarity >= .92){
            type = '1';
        }
        else if(rates[0].similarity >= .5){
            type = '2';
        }
        console.log(rates);
        let questions = [];
        let i;
        for(i = 0; i < 3; i++){
            questions.push(rates[i].index);
        }

        console.log(questions);
        let resObj = {
            type: type
        };
        
        let allQs = getQuestions();
        for(i = 0; i< 3; i++){
            resObj["question" + (i+1)] = allQs[questions[i]];
            //console.log(allQs[questions[i]]);
            resObj["answer" + (i+1)] = getAnswers(questions[i]);
        }
        


        res.status(200);
        res.json(resObj);

    }).catch(err =>{
        res.status(400);
        res.send(err);

    });
    
});


app.listen(port, () => console.log(`app listening at http://localhost:${port}`));

