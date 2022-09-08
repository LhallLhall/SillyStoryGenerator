const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day';

var insertX =["Willy the Goblin", "Big Daddy", "Father Christmas", "Gandalf", "Buzz Lightyear"]

var insertY =["the soup kitchen", "Disneyland", "the White House", "Denny's", "Wakanda"]

var insertZ =["spontaneosly combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away", "fell from a high place", "was impaled on a stalagmite whilst fighting a fish"]

randomize.addEventListener('click', result);

function result() {

    var newStory = storyText

    var xItem = randomValueFromArray(insertX)
    var yItem = randomValueFromArray(insertY)
    var zItem = randomValueFromArray(insertZ)

    // newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("bob", name)
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300) + " stone";
        const temperature =  Math.round(94) + ' centigrade';
        newStory = newStory.replace("300 pounds", weight)
        newStory = newStory.replace("94 fahrenheit", temperature)
    }

    story.textContent = newStory
    story.style.visibility = 'visible';
}