alert("Jouw taak is om alle onbrekende woorden te vinden en intevoeren");

var i;
var match = 0;
var myImgs = [

];

var bookTitle = [
    "1980",
    "School",
    "Als_Klein_kind",
    "Home_Alone",
    "Feest",
    "Continenten",
    "Veel_Stress",
    "Tegenwoordig",
    "Pinguins",
    "Liedjes",
    "!#^&$%_&#!*",
    "Random Story",
    "Random Story",
    "Random Story",
    "Random Story",
    "Random Story",
    "Random Story",
    "Random Story",
    "Random Story",
    "Random Story",
    "Random Story",
    "Random Story",
    "Random Story",
    "Random Story",
    "Random Story",
];

var authors = [
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Badr Khaie",
    "Unkown Writer",
    "Unkown Writer",
    "Unkown Writer",
    "Unkown Writer",
    "Unkown Writer",
    "Unkown Writer",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
    "Kristian Miodragovic",
];

var firstPara = [
    "Het jaar is 1980. Je vader komt net thuis van werk en je moeder heeft het avondeten al klaargelegd. Jij gaat lekker eten vanavond.(Het word nacht en je gaat slapen.) De volgende ochtend word je wakker en je ziet allemaal cadeautjes onder je _e_s_bo_m. Je bedankt de kerstman hiervoor en gaat ze allemaal uitpakken.  ",
    "Je komt eindelijk thuis van school, buiten is het hard aan het sneeuwen. Precies toen je binnenkwam, zie je je zusje en je ouders al aan tafel zitten en wachten tot jij ook komt zitten. Je vraagt wat je moeder heeft gekookt en ze antwoord kalkoen en aardappeltjes met salade. Na het avondeten vraagt je zusje je voor een verhaal uit haar dromenboek, je denkt nou vooruit. Je doet het boek open voor haar bed en ze vraagt je voor een verhaal over e_v_n, de mini aliens met hun puntoren. Na 5 minuten valt ze al in slaap en je sluipt langzaam haar kamer uit.",
    "Als klein kind heb je altijd al van kerst gehouden, wie houd er nou niet van kerst toch? Sinds kleins af aan hield je van de omgeving thuis, de grote laag sneeuw buiten en de warme chocomelk van je moeder na school. Het gaafste was je obsessie voor de kerstman en zijn r_n_i_r_n. Ze konden vliegen zonder vleugels te hebben en trokken alles mee.",
    "De film Home Alone ken je vast wel, die kleine jongen die vergeten was thuis terwijl zijn familie op vakantie ging en daarna 2 boeven te slim af was. Wat je zou kunnen zeggen, is dat die jongen een genie was. Of het binnen in zijn huis was of buiten in de koude, natte _n_e_w, hij was ze altijd te slim af.",
    "Kerstmis is vast wel iedereens favoriete periode in het hele jaar. Verjaardagen zijn ook wel leuk maar kerst, kerst is wel echt het leukste. Wat minder leuk is, is dat heel veel winkels en bedrijven dicht zijn op _w_ed_ K_rs_d_g. Vaak kun je dan bijvoorbeeld niet snel eten halen of drinken in de winkel omdat alles dicht is.",
    "Continenten zijn groot, best wel heel erg groot als je ze goed bekijkt. Er zijn een paar waar het heel koud is en veel ijs ligt. 1 daarvan is ___ar_t__a, daar komen best veel pinguïns voor en sommigen denken zelfs dat de Titanic daar is gezonken.",
    "Als student heb je vaak best wel veel stress, vooral door school, omdat je in de meeste gevallen niet alles vaak kan plannen met andere dingen, zoals sport of werk. Jongeren houden niet van school, vooral niet van toetsen en huiswerk, maar als de _a__n__e aankomt, is iedereen blij en gaan ze allemaal genieten.",
    "Tegenwoordig hebben niet heel veel huizen nog een __en __ard. Vroeger hadden de meesten wel eentje of zelfs 2. Tijdens kerst hingen mensen vaak hun sokken daarboven en kregen ze snoep de volgende ochtend.",
    "Eerlijk is eerlijk, pinguins zijn enorm slimme dieren. Ze glijden op ijs, ‘vliegen’ door het water en zijn enorm schattig om naar te kijken. Echter, denken veel mensen dat ze op de _o__d p_o_ leven, terwijl dat helemaal niet zo is. Deze mensen missen een schroefje in hun hoofd.",
    "Als klein kind vond je het altijd leuk om liedjes te zingen in de basisschool, tussen groep 1 en groep 6 was het heel normaal om tijdens kerst liedjes te zingen met de hele groep. Vaak ging het over Jezus of over een van de bekendste: ”oh d____boo_ oh”.",
    ") = 0 _______________________________ ! = 1 _______________________________ @ = 2 _______________________________ # = 3 _______________________________ $ = 4 _______________________________ % = 5 _______________________________ ^ = 6 _______________________________ & = 7 _______________________________ * = 8 _______________________________ ( = 9 _______________________________ ",
    "Readers, I have an early Christmas present for you today! With Christmas just a few days away, why not pause your regular reading and savor a Christmas story or two? I’ve spent the last several days rounding up some of the best and most famous classic Christmas short stories by authors like L. M. Montgomery, Louisa May Alcott, and Charles Dickens",
    "Some of the authors on this list might surprise you, as they did me. Did you know that L. Frank Baum–author of The Wizard of Oz–wrote a fantasy story about Santa Claus getting kidnapped by daemons? Or that Washington Irving–the man known for his Halloween tale “The Legend of Sleepy Hollow”–also wrote Christmas stories that would serve as inspiration for A Christmas Carol?",
    "There’s also a range of “takes” on Christmas in these stories, from funny to fantastical, serious to sweet. You can read these Christmas stories online for free, print them out, or download them for free to your e-reader. Some include illustrations as well! If you prefer to listen, you’ll also find a link to the audio version, if available.",
    "Treat yourself to some fireside reading and capture the holiday spirit with a bit of old-fashioned storytelling from Christmas past.",
    "Probably one of the most famous Christmas short stories, this is the tale of a young married couple who desperately want to buy beautiful Christmas presents for each other, but lack the money to do so. They each make a sacrifice to buy the other a present, and the results are humorous and poignant.",
    "In this familiar tale, a poor cobbler is rewarded for his honesty and hard work when two elves step in to save him from ruin. Like most of the Grimm fairy tales, this one is very short; it would make a nice Christmas bedtime story to read to young children!",
    "Montgomery was a prolific writer of short stories, and she has several Christmas and New Year’s stories in her bibliography. (Fourteen are collected here, along with Christmas excerpts from the Anne novels.) A departure from her usual setting of Prince Edward Island, “Christmas at Red Butte” takes place in a log cabin on the Saskatchewan prairie. Sixteen-year-old Theodora manages a home with her aunt, but as they struggle to make ends meet Theodora decides to make a great sacrifice in order to give her young cousins a happy Christmas.",
    "This short story is told as a memoir, in which the ornaments on a Christmas tree inspire an elderly narrator to reminisce about childhood. There’s no dialogue in this, but if you settle in, unhurried, with a glass of eggnog, you’ll enjoy the meandering trip into memory.",
    "Traditionally, when we think of the Wise Men of the Christmas story, we think of three kings. For this story, van Dyke imagines a fourth wise man who misses the rendezvous with the other kings and must journey to visit the Christ Child on his own. The quest that follows is an immersive and richly detailed story.",
    "Fancy a Christmas-y mystery? It’s the holiday season in London, and when a stolen jewel turns up in a highly unusual spot, Holmes must use his powers of deduction to discover the identity of the thief.",
    "Written under the pen name Elizabeth L. Seymour, Cather’s story is a retelling of the prodigal son parable, set in Chicago on Christmas Eve. Cather started out as a writer of poetry and short stories; she published “The Burglar’s Christmas” when she was 23, a good 15 years before her first novel.",
    "The tailor of Gloucester is making a splendid waistcoat for the Mayor’s wedding, which will be held “on Christmas day in the morning.” Unfortunately, the coat might not be completed in time, thanks to a vindictive cat!",
    "This tale is about a poor girl attempting to earn a few pennies on New Year’s Eve by selling matches in the streets. As night draws on, she begins to strike matches for herself, catching glimpses of warmth and comfort as she does so. Although this is a famous “tragic” Christmas story, Andersen viewed it as a happy ending.",
    "In this familiar tale, a poor cobbler is rewarded for his honesty and hard work when two elves step in to save him from ruin. Like most of the Grimm fairy tales, this one is very short; it would make a nice Christmas bedtime story to read to young children!",
    "In this familiar tale, a poor cobbler is rewarded for his honesty and hard work when two elves step in to save him from ruin. Like most of the Grimm fairy tales, this one is very short; it would make a nice Christmas bedtime story to read to young children!",
];


const spine = document.getElementsByClassName("book-spine");
const large = document.getElementById("large-text");
const chosenSpine = document.getElementById("chosen-book");
const horiz = document.getElementById("horiz");
const horizont = document.getElementById("horizont");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const photo = document.getElementsByClassName("picture");
const auth = document.getElementById("auth");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const list = document.getElementsByClassName("list");

chosenSpine.onclick = function(clicked_id) {
    chosenSpine.style.display = "none";
    spine[match].style.display = "inline-block";
    for (i = 0; i < spine.length; i++) {
        spine[i].style.marginLeft = "-4.5px";
    }
};
openClose.onclick = function() {
    if (cover.style.display == "block") {
        cover.style.display = "none";
        chosenSpine.style.display = "block";
    } else {
        if (chosenSpine.style.display == "block") {
            cover.style.display = "block";
            chosenSpine.style.display = "none";
            auth.innerHTML = authors[match];
            para1.innerHTML = firstPara[match];

            for (i = 0; i < photo.length; i++) {
                photo[i].style.display = "none";
            }
            photo[match].style.display = "block";
        } else {
            chosenSpine.style.display = "none";
        }
    }
};

function getBook(clicked_id) {
    if (chosenSpine.style.display == "block") {
        return chosenSpine;
    } else {
        spine[clicked_id].style.display = "none";
        chosenSpine.style.display = "block";
        horiz.style.display = "block";
        large.innerHTML = bookTitle[clicked_id];
        horizont.style.display = "block";
        title.innerHTML = bookTitle[clicked_id];
        match = clicked_id;

        for (i = 0; i < spine.length; i++) {
            spine[i].style.marginLeft = "-4.5px";
        }
        clicked_id++;
        spine[clicked_id].style.marginLeft = "15.5px";
        clicked_id--;
        if (clicked_id == 15) {
            spine[16].style.marginLeft = "-4.5px";
        } else if (clicked_id == 31) {
            spine[32].style.marginLeft = "-4.5px";
        }
    }
}

const books = document.querySelectorAll('.answer');
const answer = [];
const btn = document.querySelector('.submit');

btn.addEventListener('click', () => {

    for (let i = 0; i < books.length; i++) {
        const book = books[i].value;
        let j = 1;
        answer.push(book.charAt(0).toUpperCase() + book.slice(1));
        if (answer[i] == '') {
            answer.splice(i, j);
            j++;
        }
    }

    function removeAnswer() {
        for (let i = 0; i <= books.length; i++) {
            answer.pop();
        }
    }

    if (answer.length < books.length) {
        alert('Je moet eerst alle woorden zetten!');
        removeAnswer();
    } else {
        if (answer[0] !== 'Kerstboom') {
            console.log(answer[0]);
            alert('The woord bij boek 1 is fout');
            removeAnswer();
        } else if (answer[1] !== 'Elven') {
            console.log(answer[1]);
            alert('The woord bij boek 2 is fout');
            removeAnswer();
        } else if (answer[2] !== 'Rendieren') {
            console.log(answer[2]);
            alert('The woord bij boek 3 is fout');
            removeAnswer();
        } else if (answer[3] !== 'Sneeuw') {
            console.log(answer[3]);
            alert('The woord bij boek 4 is fout');
            removeAnswer();
        } else if (answer[4] !== 'Tweede kerstdag') {
            console.log(answer[4]);
            alert('The woord bij boek 5 is fout');
            removeAnswer();
        } else if (answer[5] !== 'Antarctica') {
            console.log(answer[5]);
            alert('The woord bij boek 6 is fout');
            removeAnswer();
        } else if (answer[6] !== 'Vakantie') {
            console.log(answer[6]);
            alert('The woord bij boek 7 is fout');
            removeAnswer();
        } else if (answer[7] !== 'Openhaart') {
            console.log(answer[7]);
            alert('The woord bij boek 8 is fout');
            removeAnswer();
        } else if (answer[8] !== 'Noordpole') {
            console.log(answer[8]);
            alert('The woord bij boek 9 is fout');
            removeAnswer();
        } else if (answer[9] !== 'Denenboom') {
            console.log(answer[9]);
            alert('The woord bij boek 10 is fout');
            removeAnswer();
        } else {
            alert('Alle woorden zijn goed! Ga terug naar de vorige pagina.');
            removeAnswer();
        }

    }
});