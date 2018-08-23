
$(document).ready(function () {
  
    let targetElement = $('.target');
    targetElement.text('0');
    targetElement.css('font-size', '50px');
    targetElement.css('font-weight', '700')
    let playerScore;

    let tally = $('')
})


 
    const rdmValue1 =  Math.floor(Math.random() * 10 +1 );
    const rdmValue2 =  Math.floor(Math.random() * 10 +1 );
    const rdmValue3 =  Math.floor(Math.random() * 10 +1 );
    const rdmValue4 =  Math.floor(Math.random() * 10 +1 );
    const targetScore = Math.floor(Math.random() * 100 + 50);

    let playerScore = 0

   let targetElement = targetScore;


   

  $( "#val1" ).click(function() {
        console.log('has been clicked!');
      });
   