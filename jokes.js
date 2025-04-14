const image = document.getElementById('cover'),
   nextBtn = document.getElementById('next');



const music = new Audio();

const songs = [
    {

        displayName: 'Where do surfers go for an education?',
        cover: 'images/joke1.jpg',
        answer: 'Boarding school',

    },
    {
        displayName: 'Why doesnt it hurt if someone throws a can of Coke at your head?',
        cover: 'images/laugh2.jpg',
        answer: 'Because it`s a soft drink.',
   },
    {
  
        displayName: 'Why did the Energizer Bunny go to jail?',
        cover: 'images/laugh3.avif',
        answer: 'He was charged with battery.',

    },
    {
  
      displayName: 'What do cats eat for breakfast?',
      cover: 'images/laugh3.jpg',
      answer: 'Mice Krispies.',

  },
  {
 
      displayName: 'What do you get when you cross a fish with an elephant',
      cover: 'images/laugh4.jpg',
      answer: 'Swimming trunks.',

  },
  {

      displayName: 'What color is the wind? ',
      cover: 'images/laugh5.jpg',
      answer: 'Blew.',
  
  },
  {
  
    displayName: 'Did you hear about the guy who`s afraid of escalators?',
    cover: 'images/laugh8.jpg',
    answer: 'He takes steps to avoid them.',

},
{
 
    displayName: 'How do you find a cheetah in the dark?',
    cover: 'images/laugh67.jpg',
    answer: 'Use a spotlight.',
   
},
{

    displayName: 'Why did the boy do his homework on the plane? ',
    cover: 'images/laugh7.jpg',
    answer: 'He wanted a higher education.',
  
},
{

    displayName: 'What do you call a boomerang that won`t come back?',
    cover: 'images/laugh9.jpg',
    answer: 'A stick.',

},
{

    displayName: 'Why did the belt get arrested? ',
    cover: 'images/joke1.jpg',
    answer: 'It held up a pair of pants.',

},
{
    displayName: 'How do bees get to school?',
    cover: 'images/laugh2.jpg',
    answer: 'On the school buzz.',
},
{

    displayName: 'What do you call a teenager that refuses to grow up?',
    cover: 'images/laugh3.avif',
    answer: 'Constantine.',

},
{

  displayName: 'What do horses do when it`s time for bed?',
  cover: 'images/laugh3.jpg',
  answer: 'Hit the hay.',

},
{

  displayName: 'Where do fingers grow?',
  cover: 'images/laugh4.jpg',
  answer: ' On palm trees.',

},
{

  displayName: 'What did one eye say to the other?',
  cover: 'images/laugh5.jpg',
  answer: 'Between us, something smells.',

},
{

displayName: 'Why did the pasta go to the dermatologist? ',
cover: 'images/laugh8.jpg',
answer: 'It had a big ziti.',

},
{

displayName: 'Why didn`t the chef season his dish?',
cover: 'images/laugh67.jpg',
answer: 'He ran out of thyme.',

},
{

displayName: 'Did you hear about the stolen dog collar? ',
cover: 'images/laugh7.jpg',
answer: 'Police are looking for leads.',

},
{

displayName: 'Why did the guy get fired from the calendar factory? ',
cover: 'images/laugh9.jpg',
answer: 'He took a day off.',

},
{

    displayName: 'What do you call someone who raises hens? ',
    cover: 'images/joke1.jpg',
    answer: ' A chicken tender.',

},
{
    displayName: 'Why don`t astronauts like gravity?',
    cover: 'images/laugh2.jpg',
    answer: 'It brings them down.',
},
{

    displayName: 'Who do you call to clean the ocean?',
    cover: 'images/laugh3.avif',
    answer: 'Mermaids.',

},
{

  displayName: 'Where do rainbows go after being arrested?',
  cover: 'images/laugh3.jpg',
    answer: 'Prism.',


},
{

  displayName: 'Two guys walk into a bar',
  cover: 'images/laugh4.jpg',
  answer: 'The third one ducked.',

},
{

  displayName: 'What did the fish say after swimming into a cement wall?',
  cover: 'images/laugh5.jpg',
  answer: 'Dam.',

},
{

displayName: 'Why did the car take a nap?',
cover: 'images/laugh8.jpg',
answer: 'It was tired.',

},
{

displayName: 'What`s brown and sticky?',
cover: 'images/laugh67.jpg',
answer: 'A stick.',

},
{

displayName: 'What do you call a cold puppy? ',
cover: 'images/laugh7.jpg',
answer: ' A chili dog.',

},
{

displayName: 'Why did the spider go to school? ',
cover: 'images/laugh9.jpg',
answer: 'He wanted to be a web designer.',

},
{

    displayName: 'I don`t tell dad jokes that often.',
    cover: 'images/joke1.jpg',
    answer: 'But when I do, he laughs.',

},
{
    displayName: 'What`s the easiest building to lift? ',
    cover: 'images/laugh2.jpg',
    answer: 'A lighthouse.',
},
{

    displayName: 'What did the buffalo say to her son on the first day of school?',
    cover: 'images/laugh3.avif',
    answer: 'Bison.',

},
{

  displayName: 'What kind of underpants do lawyers wear? ',
  cover: 'images/laugh3.jpg',
  answer: 'Briefs.',

},
{

  displayName: 'What do you call it when a cow grows facial hair?',
  cover: 'images/laugh4.jpg',
  answer: 'A moo-stache.',

},
{

  displayName: 'What did the beach say when the tide came in?  ',
  cover: 'images/laugh5.jpg',
  answer: ' Long time no sea.',

},
{

displayName: 'How much does it cost to swim with sharks?',
cover: 'images/laugh8.jpg',
answer: 'An arm and a leg.',

},
{

displayName: 'How do you make a tissue dance? ',
cover: 'images/laugh67.jpg',
answer: 'Put a little boogie in it.',

},
{

displayName: 'Where do birds stay when they travel? ',
cover: 'images/laugh7.jpg',
answer: ' Someplace cheep.',

},
{

displayName: 'What kind of felines can bowl? ',
cover: 'images/laugh9.jpg',
answer: ' Alley cats.',

},
{

    displayName: 'Where do penguins go to vote? ',
    cover: 'images/joke1.jpg',
    answer: 'The North Poll.',

},
{
    displayName: 'How do you make a robot angry? ',
    cover: 'images/laugh2.jpg',
    answer: ' Keep pushing his buttons.',
},
{

    displayName: 'I told a bad chemistry joke once.',
    cover: 'images/laugh3.avif',
    answer: ' I got no reaction.',

},
{

  displayName: 'Why did the cow go to Hollywood? ',
  cover: 'images/laugh3.jpg',
  answer: 'To be in the moo-vies.',

},
{

  displayName: 'How do mice floss their teeth?',
  cover: 'images/laugh4.jpg',
  answer: 'With string cheese.',

},
{

  displayName: 'What kind of bagel can travel? ',
  cover: 'images/laugh5.jpg',
  answer: 'A plain bagel.',

},
{

displayName: 'How do you make an eggroll? ',
cover: 'images/laugh8.jpg',
answer: 'You push it.',

},
{

displayName: 'Why did the employee go work in stilts? ',
cover: 'images/laugh67.jpg',
answer: 'He wanted a raise.',

},
{

displayName: 'When does Friday come before Thursday?  ',
cover: 'images/laugh7.jpg',
answer: 'In the dictionary.',

},
{

displayName: 'Why did the drum go to bed? ',
cover: 'images/laugh9.jpg',
answer: ' It was beat.',

},

];

let musicIndex = 0;
;

function loadMusic(song) {
   
    joke.textContent = song.displayName;
    answer.textContent = song.answer;
    image.src = song.cover;
}
function changeMusic(direction) {
    randomNumber=Math.floor(Math.random()*(50));
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex, randomNumber]);
 
}

nextBtn.addEventListener('click', () => changeMusic(1));

loadMusic(songs[musicIndex]);

