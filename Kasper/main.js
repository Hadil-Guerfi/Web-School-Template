
// Selection:

let leftArrow=document.querySelector(".fa-angle-left");

let rightArrow=document.querySelector(".fa-angle-right");

let landing=document.querySelector(".landing");

let bulets=document.querySelectorAll(".bulets li");

// bulets[0].classList.add("bltActive")







let backImgsArray=[
    {id:1,
     imgURL:"landing_1.jpg",    
    },
    {
     id:2,
     imgURL:"landing_2.jpg",    
    },
    {
     id:3,
     imgURL:"landing_3.jpg",    
    },
]

let myURL;

let localBack;

let backGeted= window.localStorage.getItem("localBack");

    if(backGeted){
        landing.style.cssText=`background-image: url(../images/${backGeted});`
        for(let i=0;i<3;i++){
            if(backImgsArray[i].imgURL===backGeted){
                bulets[backImgsArray[i].id-1].classList.add("bltActive")

            }
        }
    }
    else{
        bulets[backImgsArray[0].id-1].classList.add("bltActive")  
    }
    

    rightArrow.onclick=function(){

        myURL= getComputedStyle(landing)
        .getPropertyValue('background-image')
        .slice(5, -2).split("/")[4];

        for(let i=0;i<3;i++){
            if(backImgsArray[i].imgURL===myURL){
                // for(let j=0;j<2;i++)
                bulets[i].classList.add("bltActive")
                if(backImgsArray[i].id===3){
                    landing.style.cssText=`background-image: url(../images/${backImgsArray[0].imgURL});`
                    window.localStorage.setItem("localBack",`${backImgsArray[0].imgURL}`)
                   for(let j=0;j<3;j++){
                    bulets[j].classList.remove("bltActive")
                   }
                   bulets[0].classList.add("bltActive")

                }

                else{
                    
                    landing.style.cssText=`background-image: url(../images/${backImgsArray[i+1].imgURL});`
                    window.localStorage.setItem("localBack",`${backImgsArray[i+1].imgURL}`)
                    for(let j=0;j<3;j++){
                    bulets[j].classList.remove("bltActive")
                    }
                    bulets[i+1].classList.add("bltActive")

                }
                }


            }
        }

    


    leftArrow.onclick=function(){

        myURL= getComputedStyle(landing)
        .getPropertyValue('background-image')
        .slice(5, -2).split("/")[4];

        for(let i=0;i<3;i++){
            if(backImgsArray[i].imgURL===myURL){

                if(backImgsArray[i].id===1){
                    landing.style.cssText=`background-image: url(../images/${backImgsArray[2].imgURL});`
                    window.localStorage.setItem("localBack",`${backImgsArray[2].imgURL}`)
                    for(let j=0;j<3;j++){
                        bulets[j].classList.remove("bltActive")
                       }
                       bulets[2].classList.add("bltActive")
                }

                else{
                    
                    landing.style.cssText=`background-image: url(../images/${backImgsArray[i-1].imgURL});`
                    window.localStorage.setItem("localBack",`${backImgsArray[i-1].imgURL}`)
                    for(let j=0;j<3;j++){
                        bulets[j].classList.remove("bltActive")
                        }
                        bulets[i-1].classList.add("bltActive")
    
                }
            }
        }

    }


    let navUL=document.querySelectorAll(".Navright ul li")
    console.log(navUL)

    
   