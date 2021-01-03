let nameSpot = document.querySelector("h2");

let imgSpot = document.querySelector(".imgDiv");

let starSpot = document.querySelector(".starRate");

let textSpot = document.querySelector("p");

let prevBtn = document.querySelector(".prevBtn");

let nextBtn = document.querySelector(".nextBtn");

let Jessica = {

  name:"Jessica", 

  img : "https://i.imgur.com/aFfkB2U.jpg", 

  starRating: "&star; &star; &star;", 

  testimony: `Collins Rollins is an active listener, very committed, takes care of appearance, empathetic, 

very funny, 

always interested  learning, 

he gives alot, communicate constructively, kind. I met him in secondary school. `

}

let Izu = {

  name: "Izu", 

  img: "https://i.imgur.com/95IbJXN.jpg", 

  starRating: "&star; &star; &star; &star;", 

  testimony: `Collins is like  brother , a friend ,once a college in secondary school.`

  

}

let Emmanuel = {

  name:"Emmanuel", 

  img: "https://i.imgur.com/GvyaPWd.jpg", 

  starRating: "&star; &star; &star;", 

  testimony: "Collins Rollins is a close friend, co-instrumentalist. Collins is unique in his own way."

}

let Ibrahim = {

  name: "Ibrahim", 

  img: "https://i.imgur.com/6pigscw.jpg", 

  starRating: "&star; &star; &star; &star; &star;", 

  testimony: "Collins Rollins is a friend and an open minded person. We met at Beetos Computer College."

};

let Johnny = {

  name: "Johnny", 

  img: "https://i.imgur.com/N2t6esE.jpg", 

  starRating:  "&star; &star; &star; &star;", 

  testimony: "Collins Rollins is my best friend we are like brother to each other. We met in church in 2013."

};

let Goodnews = {

  name: "Goodnews", 

  img: "https://i.imgur.com/SX0dCjZ.jpg", 

  starRating:  "&star; &star; &star; &star;", 

  testimony: "Collins Rollins is my bestie. One who is more than a bestie. One I place a high value on and I'll qualify him to be a very good and responsible person"

}

//arrays

let nameArray = [Jessica.name, Izu.name, Emmanuel.name, Ibrahim.name, Johnny.name, Goodnews.name];

let imgArray = [Jessica.img, Izu.img,Emmanuel.img,Ibrahim.img, Johnny.img,Goodnews.img];

let starRatingArray = [Jessica.starRating, Izu.starRating, Emmanuel.starRating, Ibrahim.starRating, Johnny.starRating,Goodnews.starRating];

let testimonyArray = [Jessica.testimony, Izu.testimony, Emmanuel.testimony, Ibrahim.testimony, Johnny.testimony, Goodnews.testimony];

let counter = 0;

function prev() {

  counter--;

  if (counter < 0) {

   

  counter = nameArray.length-1;

  

     }

     

     textSpot.innerHTML= testimonyArray[counter];

     nameSpot.innerHTML= nameArray[counter];

     starSpot.innerHTML=starRatingArray[counter];

     imgSpot.style.backgroundImage=`url(${imgArray[counter]}) `;

     imgSpot.style.backgroundPosition="center";

     imgSpot.style.backgroundSize="cover";

     

}

function next() {

  

  counter++;

  if (counter > nameArray.length-1){

    counter = 0;

    

  }

  

  nameSpot.innerHTML= nameArray[counter];

     starSpot.innerHTML=starRatingArray[counter];

  textSpot.innerHTML= testimonyArray[counter];

 imgSpot.style.backgroundImage=`url(${imgArray[counter]}) `;

  imgSpot.style.backgroundPosition="center";

     imgSpot.style.backgroundSize="cover";

     

  

}

prevBtn.addEventListener('click', prev);

nextBtn.addEventListener('click', next);

