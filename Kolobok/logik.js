window.onload =  function(){
	var text = "В один прекрасный день дедушка пошел на охоту в лес и велел бабке испечь хлеба к ужину который пренесет дед, бабка поскребла по сусекам и слепила колобка, поджарила его, и колобок ожил! Чуя что его вот-вот сожрет его-же создатель колобок решил дать деру! Он выпал из окна и покатился куда глаза глядят! Сыграем в игру? "
	alert(text);

	var sarai = document.getElementById("sarai");
	var les = document.getElementById("les");
	var terem = document.getElementById("terem");
	var ded = document.getElementById("ded");
	//ссылки на кнопки
	



	sarai.addEventListener("click", saraiLogik);
	les.addEventListener("click", getRandomArbitrary);
	terem.addEventListener("click", teremLogik);
	//ded.addEventListener("click", handler);

}


var kolobok = new Object();

kolobok.live =    100;
kolobok.stamina = 100;
kolobok.damge =   0; 
kolobok.many =    0;  

var lisa = new Object();

lisa.live =    110;
lisa.stamina = 100;
lisa.damge =   10; 
lisa.many =    10;  
lisa.name ="Лиса";

var wolf = new Object();

wolf.live =    150;
wolf.stamina = 100;
wolf.damge =   10; 
wolf.many =    15;  
wolf.name = "Волк";

var rebit = new Object();

rebit.live =    90;
rebit.stamina = 100;
rebit.damge =   10; 
rebit.many =    5;  
rebit.name = "Заяц";

var ded_stat = new Object();

ded_stat.live =    100;
ded_stat.stamina = 100;
ded_stat.damge =   10; 
ded_stat.many =    0;  



















function saraiLogik(){
	alert("Перед вами старый сарай, может вы найдет там что нибудь полезное?")
	var conf = confirm("Обыскать сарай?")
	var textArrea = document.getElementById("text_filed");
	var confIn = false;

	if(kolobok.many == 0 && conf == true){
		textArrea.innerHTML = "Опаньки вы нашли не много золотишка! Золото + 10";

		kolobok.many += 10;

	}

	if (kolobok.damge == 0 && conf == true){
		setTimeout( function(){textArrea.innerHTML = "Дед походу служил, Вы нашли трофейный Люгер Атака + 10"}, 3000);
		

		kolobok.damge +=10;
	}
	else{
		alert("Ничего не найдено!");
	}
}


function teremLogik(){
	var text = "Привет чужак, ты находишься в магазине, выбери себе то, что пронравится!"
	alert(text);


	var lut = prompt("Уменя есть на продажу: НОЖ +10 к Атаке, ТОПОР +20 к атаке, ПРОТЕИН + 20 к Жизни. Так-же есть уникальная для наших краев диковина ЛЕЩ, отличная закуска под пиво! НОЖ-10к, ТОПОР-50к, ПРОТЕИН-30к, ЛЕЩ-200к Что ты выбрал?  ")

	switch (lut) {
		case "нож":
			if(kolobok.many<10){
				var textArrea = document.getElementById("text_filed");
				textArrea.innerHTML ="у вас не достаточно денег!"
			}
			else {
				kolobok.damge += 10;
				kolobok.many -= 10;
				var textArrea = document.getElementById("text_filed");
				textArrea.innerHTML ="Поздравляю ваш урон увеличен на 10 и равняется" + kolobok.damge;
			}
			

			break;
		case "топор":
			if(kolobok.many<50){
				var textArrea = document.getElementById("text_filed");
				textArrea.innerHTML ="у вас не достаточно денег!"
			}
			else {
				kolobok.damge += 20;
				kolobok.many -= 50;
				var textArrea = document.getElementById("text_filed");
				textArrea.innerHTML ="Поздравляю ваш урон увеличен на 20 и равняется" + kolobok.damge;
			}
			
			break;
		case "протеин":
			if(kolobok.many<30){
				var textArrea = document.getElementById("text_filed");
				textArrea.innerHTML ="у вас не достаточно денег!"
			}
			else {
				kolobok.live += 20;
				kolobok.many -= 30;
				var textArrea = document.getElementById("text_filed");
				textArrea.innerHTML ="Поздравляю ваши жизни увеличены на 20 и равняется" + kolobok.live;
			}
			
			break;
		case "лещ":
			if(kolobok.many<200){
				var textArrea = document.getElementById("text_filed");
				textArrea.innerHTML ="у вас не достаточно денег!"
			}
			else{
				kolobok.items = new Object();
				kolobok.items.lesh = true;
				var textArrea = document.getElementById("text_filed");
				textArrea.innerHTML ="Поздравляю вы купили Леща местные мужики за хорошую рыбку готовы многое отдать!" 
			
			}
			
			break;
		case "CBS":
			kolobok.live +=200;
			kolobok.damge +=200;
			kolobok.many +=1000;

			var textArrea = document.getElementById("text_filed");
				textArrea.innerHTML ="Вы грязный читер!" 

			break;
			
		default:
			var textArrea = document.getElementById("text_filed");
				textArrea.innerHTML ="не верный выбор!" 
			break;
	}
}

function getRandomArbitrary() {
 var randomValue = Math.random() * (3 - 0) + 0;
 var randomValue = Math.floor(randomValue);

  			

 var arrayAnim = [rebit,wolf,lisa];

 //var textArrea = document.getElementById("text_filed");
				//textArrea.innerHTML = arrayAnim[randomValue].live;
			var conf = confirm( "В лесу вы встретили персонажа " + arrayAnim[randomValue].name+ " хотите атаковать?");
				if (conf) {
					var animCaf	= (arrayAnim[randomValue].live + arrayAnim[randomValue].damge) /2;
					var kolobokCaf = (kolobok.live + kolobok.damge) /2;

					if(kolobokCaf>animCaf){
						kolobok.many += arrayAnim[randomValue].many;
						var textArrea = document.getElementById("text_filed");
						textArrea.innerHTML ="Вы выиграли! вы нашли " + arrayAnim[randomValue].many +"денег!"
					}
	
					else {
						kolobok.live -= arrayAnim[randomValue].damge;
						var textArrea = document.getElementById("text_filed");
						textArrea.innerHTML ="Вы проиграли! Ваши жизни равны" + kolobok.live;
	
						}
				}

				else{
					var textArrea = document.getElementById("text_filed");
					kolobok.live -=10;
					textArrea.innerHTML ="Вы сбежали но " + arrayAnim[randomValue].name+ " успел вам дать пинка! Жизни -10";
					

				}

}

