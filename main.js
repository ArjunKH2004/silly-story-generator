var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = 'On a chilly winter day, with the temperature at a freezing 20 degrees, :insertx: decided to go for a walk. When they arrived at :inserty:, they couldn\'t believe their eyes. After staring in amazement for a few moments, :insertz:. Bob saw the whole thing, but was not surprised — :insertx: is known for wearing three layers of heavy winter clothing, and it was an unusually cold day.';
var insertX = ['Frosty the Snowman','Penguin Pete','Eskimo Ed'];
var insertY = ['an ice cream parlor','the ski resort','Santa\'s workshop'];
var insertZ = ['froze solid','shivered uncontrollably','transformed into an icicle and melted away'];

function randomValFrmArr(array) {
  return array[Math.floor(Math.random()*array.length)];
}

randomize.addEventListener('click', result);

function result() {

  var newStory = storyText;
  var itemX = randomValFrmArr(insertX);
  var itemY = randomValFrmArr(insertY);
  var itemZ = randomValFrmArr(insertZ);

  newStory = newStory.replace(':insertx:',itemX);
  newStory = newStory.replace(':inserty:',itemY);
  newStory = newStory.replace(':insertz:',itemZ);

  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }


  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.071429) + ' stone';
    var temperature =  Math.round((20-32)*5/9) + ' centigrade'; 
    newStory = newStory.replace('20 degrees', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
