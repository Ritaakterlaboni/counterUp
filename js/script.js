
// //aita code ta holo js ar maddhome korle tokhon r normally aitar madhome sudu akta counter korte parbo ak sathe onek gula counterup kaj korbe na age pore hobe 


// let counterUp = document.querySelector(".counterUp");       //querySlectorAll dile nodelist hisebe dhorbe jar karone alada alada kore value dorte parbo na tai innerHTML dile kaj korbe na map function diya dhorte paro



//                                                           //jehetu aki rokom onek gulo tag ke nodelist dhora hoi ja ki na array ar moto dekte kintu array ar moto kaj kore na tai ake array banaiya map function ar kaj korbo


// let count = 0;

//                                                           // clearInterval(stop)             ai function amny kaj korbe na sob kisu akta function ar modde korte hobe tai function ar modde korbo
//                                                               //clearInterval ar modde jei ta ke stop koraite chai tare dimu kintu aita onek boro tai variable a raikha variable ar nam ta dibo () ar modde

// function counterJs(){
//  count++
// counterUp.innerHTML = count;                                     //jehetu aitai cheeck korbe tai ai function ar modde disi ai line


//     if(count ==5){
//         clearInterval(stop)                                      //amra sorasori off kore jodi dai taile to cholboi na counter up tai niddristo akta jaiga te gele bondo hobe aita sorter modde disi
//     }
//     else{

//     }
// }



// let stop = setInterval(()=>{
//                                                                       //setInterval ai function ar mane holo akta bar bar print korbe jar karone aita bondo ba thamaite arekta function lage

// counterJs()                                                      //ai function ta call korbe bar bar setInterval function a karon cholbe to ai function diya tai
// },1000);      
                                                                    //koto somoy por por print korbe r 1000 mane 1 seconed bujhai



  //start ak loge aki somoy sob gulo counterup kaj korbe html ar maddhome
  
  
  let counterUp = document.querySelectorAll(".counterUp");

 
let arr = Array.from(counterUp);

arr.map((items) => {                            //map method ar modde pura ta code korse jate sob gula tag ba counter ak sathe kaj kore


  let count = 0;    


  function counter() 
  {
    count++;
    items.innerHTML = count + "+";          //jehetu number ar pase string bosaisi tai
    if (count == items.dataset.number) {
      clearInterval(stop);
    }
  }



  let stop = setInterval(() => {
    counter();
  }, 1000/items.dataset.number);            //aijaigai bujhaise j 1000 diya data-number a j value thakbe ta diye vhag kore joto asbe toto speed a hobe
});