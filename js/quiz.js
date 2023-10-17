var counter = 0;
var right = 0;
var questions = [
    ["Cual es el gusto de helado favorito de Sofi?", "Dulce de leche granizado", "Menta granizada", "Frutilla a la crema", "Banana split", "2"],
    ["¿Cuál es la película favorita de Sofi?", "Enredados", "Monsters inc", "Juego de Gemelas", "Valiente", "1"],
    ["¿Qué habilidad o talento sorprendente tiene Sofía que la mayoría de la gente desconoce?", "Puede hacer malabares con 3 pelotas", "Puede lamerse el codo", "Puede mover las orejas", "Puede sostener una cuchara con la nariz", "4"],
    ["Si Sofi ganara la lotería, ¿cuál sería la primera cosa extravagante que compraría?", "10 Kgs de helado de la Cremolati", "Unas vacaciones a Disney", "Una casa en la costanera", "Un auto 0km", "3"],
    ["¿Estuvo Sofi en una cama solar?", "Sí", "No", "1"],
    ["Si Sofi fuera un superhéroe, ¿cuál sería su superpoder principal?", "Volar", "Leer la Mente", "Invisibilidad", "Super Inteligencia", "2"],
    ["¿Qué canción o género musical le gusta más a Sofi?", "Rock", "Regueton", "Pop", "Country", "Rock Nacional", "3"],
    ["¿Cuál es la comida que Sofi siempre dice que podría comer todos los días? ", "Lasagna", "Fideos con queso", "Pizza", "Carne al horno", "Milanesa con Puré", "3"],
    ["Si Sofi fuera un animal, ¿cuál sería?", "Un mono", "Un ágila", "Un ratoncito", "Un perro", "Una mariposa", "5"]
];

$(document).ready(function () {
    $(document).on("click", ".true", function () {
        right = right + 1;
        $(".true").css("background-color", "#44D37E");
        $(".true").css("color", "white");
        $(".false").css("background-color", "#2F1C42");
        $(".false").css("color", "white");
        window.setTimeout(nextQuestion, 1200);
    });
    $(document).on("click", ".false", function () {
        $(".true").css("background-color", "#44D37E");
        $(".true").css("color", "white");
        $(".false").css("background-color", "#2F1C42");
        $(".false").css("color", "white");
        window.setTimeout(nextQuestion, 1200);
    });

    function nextQuestion() {
        document.getElementById("progress").value += 12 
        counter = counter + 1;
        if (counter > 8) {
            $('#a1, #a2, #a3, #a4, #a5, #question').fadeOut("slow", function () {
                if (right == 9){
                    var result = $("<div id='question' class='field is-size-4'><strong class='has-text-success'>Obtuviste " + right +"/9 respuestas correctas.</strong></br><div class='is-size-5'> Esaaaaaa! Vos sí que conoces a Sofi! O la conoces muy bien o sos un terrible chusma. Claramente ya conocés a sofi, pero si queres podes mirar más abajo más info sobre la cumpleañera!</div></div>").hide();
                }
                else if (right >= 7){
                    var result = $("<div id='question' class='field is-size-4'><strong class='has-text-success'>Obtuviste " + right +"/9 respuestas correctas.</strong></br><div class='is-size-5'> Bien ahí! Claramente sos bastante cercano a Sofi. Hacé para abajo para conocer más sobre la cumpleañera!</div></div>").hide();
                }
                else if (right < 7 && right >= 3){
                    var result = $("<div id='question' class='field is-size-4'><strong class='orange'>Obtuviste " + right +"/9 respuestas correctas.</strong></br><div class='is-size-5'> No estuvo tan mal pero podrías haberlo hecho mejor! Hacé para abajo para conocer más sobre la cumpleañera!</div></div>").hide();
                }
                else {
                    var result = $("<div id='question' class='field is-size-4'><strong class='has-text-danger'>Obtuviste " + right +"/9 respuestas correctas.</strong></br><div class='is-size-5'> Uff sos malísimo! Conoces a Sofi o viniste de colado a la fiesta? 😂. Más abajo podes leer más info sobre la cumpleañera.</div></div>").hide();
                }
                $('#couple-20').replaceWith('<div id="couple-20" class="column is-4 is-offset-1"><p class="title is-2 "><span class="rsvp-label">Resultados</span></p></div>');
                $('#question').replaceWith(result);
                $('#question').fadeIn("slow");
                $('#progress').replaceWith("<p style='line-height:0px;margin:-15px;'><br></p>");
            });
        }
        else {
            $(".true").css("background-color", "#FFFEFE");
            $(".true").css("color", "black");
            $(".false").css("background-color", "#FFFEFE");
            $(".false").css("color", "black");

            $('#question').fadeOut("slow", function () {
                var newQ = $("<div id='question' class='field'><strong>Question " + (counter + 1) + "/9</strong><label id='real-question' class='label is-size-5'>" + questions[counter][0] + "</label ></div >").hide();
                $(this).replaceWith(newQ);
                $('#question').fadeIn("slow");
            });

            var numAnswers = questions[counter].length - 2;
            var correctAnswer = questions[counter][numAnswers + 1];

            if (numAnswers == 4) {
                $('#a1').fadeOut("slow", function () {
                    var newa = $("<p id='a1' class='control'><a class='box " + (correctAnswer == 1) + "'>" + questions[counter][1] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a1').fadeIn("slow");
                });
                $('#a2').fadeOut("slow", function () {
                    newa = $("<p id='a2' class='control'><a class='box " + (correctAnswer == 2) + "'>" + questions[counter][2] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a2').fadeIn("slow");
                });
                $('#a3').fadeOut("slow", function () {
                    newa = $("<p id='a3' class='control'><a class='box " + (correctAnswer == 3) + "'>" + questions[counter][3] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a3').fadeIn("slow");
                });
                $('#a4').fadeOut("slow", function () {
                    newa = $("<p id='a4' class='control'><a class='box " + (correctAnswer == 4) + "'>" + questions[counter][4] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a4').fadeIn("slow");
                });
            }
            else if (numAnswers == 5) {
                $('#a1').fadeOut("slow", function () {
                    var newa = $("<p id='a1' class='control'><a class='box " + (correctAnswer == 2) + "'>" + questions[counter][2] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a1').fadeIn("slow");
                });
                $('#a2').fadeOut("slow", function () {
                    newa = $("<p id='a2' class='control'><a class='box " + (correctAnswer == 3) + "'>" + questions[counter][3] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a2').fadeIn("slow");
                });
                $('#a3').fadeOut("slow", function () {
                    newa = $("<p id='a3' class='control'><a class='box " + (correctAnswer == 4) + "'>" + questions[counter][4] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a3').fadeIn("slow");
                });
                $('#a4').fadeOut("slow", function () {
                    newa = $("<p id='a4' class='control'><a class='box " + (correctAnswer == 5) + "'>" + questions[counter][5] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a4').fadeIn("slow");
                });
                $('#a5').fadeOut("slow", function () {
                    newa = $("<p id='a5' class='control'><a class='box " + (correctAnswer == 6) + "'>" + questions[counter][1] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a5').fadeIn("slow");
                });
            }
            else {
                $('#a1').fadeOut("slow", function () {
                    var newa = $("<p id='a1' class='control'><a class='box " + (correctAnswer == 1) + "'>" + questions[counter][1] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a1').fadeIn("slow");
                });
                $('#a2').fadeOut("slow", function () {
                    newa = $("<p id='a2' class='control'><a class='box " + (correctAnswer == 2) + "'>" + questions[counter][2] + "</a></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a2').fadeIn("slow");
                });
                $('#a3').fadeOut("slow", function () {
                    newa = $("<p id='a3' class='control'></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a3').fadeIn("slow");
                });
                $('#a4').fadeOut("slow", function () {
                    newa = $("<p id='a4' class='control'></p>").hide();
                    $(this).replaceWith(newa);
                    $('#a4').fadeIn("slow");
                });
            }

        }
    }
});