let container = document.querySelector('.container');
let carees = [ " Kariim Bakr"," Web Developer", "Freelancer"];

let careerindex = 0;
let characterindex = 0;

updatetext();
function updatetext(params) {
    characterindex++
    container.innerHTML = `<h1> I am ${carees[careerindex].slice(0, 1) === "I" ? "an" : "a"} ${carees[careerindex].slice(0, characterindex)}</h1>`;

    if (characterindex === carees[careerindex].length) {
        careerindex++
        characterindex = 0
    }
    if (careerindex === carees.length) {
        careerindex = 0;
    }
    setTimeout(updatetext, 210)
}
