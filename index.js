let axios = require("axios");
const https = require('https');
axios = axios.create({
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
  });
const express = require('express');
const app = express();
const port = 8080;

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

function getStudentQuestions(){
    question_list = [
        "I'm confused",
        "I don't get it",
        "Can you give an example? (if this doesn't follow a question with an existing example for it)",
        "Is dividing complex numbers the same has rationalizing the denominator of a complex fraction?",
        "What is a conjugate? or What is the conjugate of a complex number?",
        "Why do you multiply the numerator and denominator by the conjugate of the denominator?",
        "Why do we put parentheses around complex numbers when we divide them?",
        "What is a complex number?",
        "What is an imaginary number?",
        "What is a real number?",
        "What's the difference between an imaginary number and a real number?",
        "What is FOIL?",
        "Can a, b, c, or d be fractions? or Can a, b, c, or d be fractions in a complex number?",
        "Can a, b, c, or d be decimals? or Can a, b, c, or d be decimals in a complex number?",
        "Can a, b, c, or d be negative? or Can a, b, c, or d be negative in a complex number?",
        "Why do we have to rationalize the denominator?",
        "Is rationalizing the denominator like rationalizing the denominator with radicals (square roots)?",
        "What is i-squared? or What is i to the power of 2.",
        "Is there an easier way to do this?",
        "What is the conjugate of the denominator of a complex number?",
        "How do you raise complex numbers to exponents?",
        "What is the difference between a reciprocal and a conjugate?",
        "Why is 1/i = -i?",
        "Why is it not good to have a complex number in the denominator?",
        "Why is it not good to have an imaginary number in the denominator?",
        "What is the first step in dividing to complex numbers? or What is the first step in simplifying a complex fraction?",
        "What is the format of a dividing complex numbers problem?,",
        "What type of number can a, b, c, and d be?,",
        "What is i?,",
        "When you divide two complex numbers, what is the primary goal you are trying to achieve?,",
        "How do you rationalize the denominator when you divide two complex numbers?,",
        "What is the definition of the conjugate?,",
        "If the denominator is represented by the expression c+di, what would its conjugate be?,",
        "Once you set up the problem to multiply the numerator and denominator by the conjugate of the denominator, what process do you use to carry out the multiplication?,",
        "What does FOIL stand for and where does it come from?,",
        "What do you get when you FOIL the numerator?,",
        "What do you get when you FOIL the denominator?,",
        "What do you do after you have FOILed the numerator and denominator?,",
        "What do you get after you have combined the like terms?",
        "What is i^2",
        "How do you divide complex numbers?"];

        return question_list;
}

function getStudentAnswers(){
    answer_list = [
        "What are you confused about?",
        "What don't you get?",
        "What would you like an example of?",
        "Yes, dividing complex numbers is often called rationaling the denominator of a complex fraction.",
        "If the complex number is in the form of a binomial such as a + bi, then the conjugate is the same terms with the sign between them switched. So if the sign is negative, it becomes positive and vice versa.",
        "You multiply the numerator and denominator by the conjugate of the denominator to rationalize the denominator. When you multiply a complex number by its conjugate using FOIL, the imaginary part goes away and you have a real number.",
        "We put parentheses around complex numbers when we divide them to preserve order of operations. Since multiplication and division come before addition and subtraction, without parentheses, only the middle terms would be divided when doing FOIL.",
        "A complex number is a number that can be expressed in the form a + bi, where a and b are real numbers and i is the square root of negative 1. Since a and b are real numbers, they can also be 0.",
        "An imaginary number is any real number multiplied by i, which is the square root of negative 1.",
        "A real number is any number that can be plotted on a number line and includes integers, fractions, decimals, and irrational numbers such as pi and radicals.",
        "A real number is any number that can be plotted on a number line and includes integers, fractions, decimals, and irrational numbers such as pi and radicals and an imaginary number is any real number multiplied by i, which is the square root of negative 1.",
        "FOIL is a method for multiplying two binomials. It stands for First, Outer, Inner, Last. It is based on the distributive property. The first step is to multiply the first terms of each binomial. The second step is to multiply the outer terms of the binomials, which are the first term of the first binomial and the second term of the second binomial. The third step is to multiply the inner terms of the binomials, which are the second term of the first binomial and the first term of the second binomial. The fourth step is to multiply the last terms of the binomials, which are the second terms of each binomial. The fifth step is to combine the like terms.",
        "Yes, a, b, c, and d can be fractions in a complex number.",
        "Yes, a, b, c, and d can be decimals in a complex number.",
        "Yes, a, b, c, and d can be negative in a complex number.",
        "Technically, if you didn't rationalize the denominator, you'd still have a fraction that has an equivalent value as the non-rationalized denominator. However, there is a convention in math that says we don't want denominators that have imaginary numbers in them.",
        "yes, rationalizing the denominator in complex numbers is like rationalizing the denominator in radicals. Since i is the square root of negative 1, an imaginary number is like a radical.",
        "i-squared is negative 1.",
        "Whenever you divide two complex numbers of the form a + bi divided by c + di, the result a fraction where the numerator is a complex number for which the real part is ac+bd and the imaginary part is the quantity bc - ad) times i and the denominator is c squared plus d squared.",
        "If the denominator of a complex number has the form c + di, then it's conjugate is c - di.",
        "You raise complex numbers to exponents the same way you raise any other number. You just keep multiplying the terms by each other as many times as the exponent states.",
        "With an inverse, you switch the numerator and denominator. With a conjugate, you switch the signs between the two terms of a binomial.",
        "1/i is -i because if you multiply numerator and denominator by i, you get i on the numberator and -1 on the denominator. This means that you get -i when you simplify.",
        "There is a convention in math that says you don't want any imaginary numbers in the denominator of a fraction.",
        "There is a convention in math that says you don't want any imaginary numbers in the denominator of a fraction.",
        "The first step in dividing complex numbers is to divide the numerator and denominator of the fraction by the conjugate of the denominator.",
        "When you divide two complex numbers, the numerator has the form a+bi and the denominator has the form c+di,",
        "a, b, c, and d are real numbers. They can be positive or negative. Often, they are integers.,",
        "I is the square root of minus 1,",
        "When you divide two complex numbers, your primary goal is to rationalize the denominator.,",
        "To rationalize the denominator, you divide both numerator and denominator by the conjugate of the denominator.,",
        "The conjugate is the complex number with sign between real and imaginary part changed.,",
        "If the denominator is represented by the expression c+di, its conjugate is c-di.,",
        "Once you set up the problem to multiply the numerator and denominator by the conjugate of the denominator, you use FOIL to carry out the multiplication,",
        "FOIL stands for First, Outer, Inner, Last. It comes from the distributive property.,",
        "When you FOIL the numerator you get (ac-adi+bci-bdi^2) which equals ac-adi+bci+bd,",
        "When you FOIL the denominator you get (c^2-cdi+cdi-d^2i^2)” or “(c^-cdi+cdi+d^2),",
        "After you have FOILed the numerator and denominator, you combine like terms.,",
        "After you combine like terms, you get ((ac+bd)+(bc-ad)i)/(c^2+d^2)",
        "I^2 is -1",
        "You divide complex numbers by multiplying the numerator and denominator by the conjugate of the denominator. Then, simplify the numerator and denominator."
        ];

    return answer_list;
}

function getStudentExamples(){

    example_list = [
        "",
        "",
        "",
        "",
        "",
        "The conjugate of 2+3i is 2-3i. The conjugate of 2-3i is 2+3i.",
        "",
        "Suppose you had 2+3i/3+4i. Using order of operations, this means you have 2 plus the quantity 3i divided by 3 plus 4i. The only division would be 3i divided by 3.",
        "An example of a complex number is 2 + 3i.",
        "i is an imaginary number and so is 3i.",
        "Examples of real numbers are 3, 1/2, .5, pi, and square root of 2.",
        "An example of a real number is 3. An example of an imaginary number is 3i.",
        "If you FOIL (2+3i)(3+4i), you get 6 + 8i + 9i + 12i squared",
        "1/2 + 1/2i is a complex number.",
        ".5 + .5i is a complex number.",
        "-1 -2i is a complex number",
        "",
        "",
        "",
        "(2+3i)/(3+4i) = ((6+12) + (9-8)i)/(9+16)",
        "The conjugate of 2+3i is 2-3i. The conjugate of 2-3i is 2+3i.",
        "(2+3i) to the power of three is (2+3i) times (2+ 3i) times (2 + 3i)",
        "The inverse of 2+3i is 1/(2+3i). The conjugate of 2+3i is 2-3i.",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];
    return example_list;
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
        //console.log(rates);
        let questions = [];
        let i;
        for(i = 0; i < 3; i++){
            questions.push(rates[i].index);
        }

        //console.log(questions);
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

app.post('/ask_question/p2', (req, res)=>{
    
    let question = req.body.question;
    let studentQuestions = getStudentQuestions();
    let studentAnswers = getStudentAnswers();
    let studentExamples= getStudentExamples();
    let  toSend = {
        s1: question,
        s2: studentQuestions
    };
    
    axios.post("https://alistempirefoundation.org:5041/test", toSend).then(response=>{
        
        let rates = response.data.rates.map((rate, i)=> { return {
            index: i,
            similarity: Number(rate)
        }});
        //sort based on similarity
        rates.sort((a, b) =>{
            return b.similarity - a.similarity;
        });

        rates = rates.slice(0,5);

        let objArray = rates.map(item =>{

            return {
                rate: item.similarity,
                question: studentQuestions[item.index],
                answer: studentAnswers[item.index],
                example: studentExamples[item.index]
            };
        })
        
        console.log(objArray);
        
        res.status(200);
        res.json(objArray);

    }).catch(err =>{
        res.status(400);
        res.send(err);

    });

});

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));
module.exports = app;

