//chcek javacript
console.log('script is working now properly');

// get body
const body = document.querySelector('body');

//get button
const button = document.querySelectorAll('.box');

console.log(button);


//run foreach loop for add event listner
button.forEach(function(b){
    b.addEventListener('click', function (e) {
          if(e.target.id == 'white'){
            body.style.backgroundColor ='white';
            document.querySelector('#white').style.backgroundColor ='black';
            document.querySelector('#white').style.color ='white';
          }


          else if(e.target.id == 'pink'){
            body.style.backgroundColor ='pink';
            document.querySelector('#pink').style.backgroundColor ='black';
            document.querySelector('#pink').style.color ='white';
          }

          else if(e.target.id == 'yellow'){
            body.style.backgroundColor ='yellow';
            document.querySelector('#yellow').style.backgroundColor ='black';
            document.querySelector('#yellow').style.color ='white';
          }
          
          else if(e.target.id == 'red'){
            body.style.backgroundColor ='red';
            document.querySelector('#red').style.backgroundColor ='black';
            document.querySelector('#red').style.color ='white';
          }

          else if(e.target.id == 'green'){
            body.style.backgroundColor ='green';
            document.querySelector('#green').style.backgroundColor ='black';
            document.querySelector('#green').style.color ='white';
          }

          else if(e.target.id == 'orange'){
            body.style.backgroundColor ='orange';
            document.querySelector('#orange').style.backgroundColor ='black';
            document.querySelector('#orange').style.color ='white';
          }

          else if(e.target.id == 'Blue'){
            body.style.backgroundColor ='Blue';
            document.querySelector('#Blue').style.backgroundColor ='black';
            document.querySelector('#Blue').style.color ='white';
          }
        
          else {
            body.style.backgroundColor ='gray';
            document.querySelector('#gray').style.backgroundColor ='gray';
            document.querySelector('#gray').style.color ='white';
          }


    } );
});

