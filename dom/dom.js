var val;

// val = document;  //(look at html)
// val = document.doctype; //(look at doctype name)
// val =document.body;  //(look at body)
// val =document.head;	//(look at head)
// val =document.URL; //(look at url file)




// val=docment.links //(look at head in HTML collection)
// val=document.links[0];
// val=document.links[5].id;
// val=document.links[4].class;

//val=document.forms;  //(HTML Collection)
// val=document.forms[1];
//val=document.forms[0].id;
// val=document.forms[0].className;
// val=document.forms[0].classList[0];
// val=document.forms[0].method;

// val=document.images;
// val=document.images[0];
// val=document.images[0].src;
// val=document.images[0].className;
// val=document.images[0].classList[0];
// val=document.images[0].alt;


// val=document.images[0].abc; //(undefined cuzz we create it manual)
// val=document.images[0].getAttribute('abc'); //(ကိုတိုင်ဖန်းတီးထားတဲ att ကိုကြည့်တာ)

// console.logval=document.scripts; //(Show js file)
// val=document.styleSheets;
// console.log(val);


// document.getElementById('todo').style.color="red";
// document.getElementById('todo').style.background="green";
// document.getElementById('todo').style.margin="0px";
// document.getElementById('todo').style.padding="5px";

// document.getElementById('todo').textContent="Have to do";
// document.getElementById('todo').innerText="Must to do";
// document.getElementById('todo').innerHTML="<h1 style='color:red;'>To do List</h1>"; //(most powerful)


// var lists= document.getElementsByClassName("list-group-item");
// console.log(lists[4]);
// lists[4].textContent="Have to go market";
// lists[2].style.background="blue";

// var lists= document.getElementsByTagName("li");
// console.log(lists[0]);
// lists[4].textContent="Have to cook";


// console.log(document.querySelector("#todo"));
// console.log(document.querySelector(".todo"));
// console.log(document.querySelector("h3"));


// console.log(document.querySelector("li"));

// document.querySelector("li").style.color="red";
// document.querySelector("li").style.background="green";
// document.querySelector("li").innerText="Have to go market";


//const getli = document.querySelector("ul").getElementsByClassName("list-group-item"); //HTML collection
// console.log(typeof getli);


// document.querySelector("ul li:nth-child(even)").style.background="yellow";

//var arrlis=Array.from(getli);
// console.log(typeof arrlis);


//arrlis.forEach(function(arrli,index){
    //console.log(arrli);


    // arrli.textContent ="Hello";

    //arrli.innerText = `${index} : Hello Mello`;
//})


// let lis= document.querySelectorAll("ul.list-group li.list-group-item");
// console.log(lis[4]);

// lis.forEach(function(li,index){
//     console.log(li);
//     li.textContent="hello";
// });

// const odd =document.querySelectorAll("li:nth-child(odd)");
// const even =document.querySelectorAll("li:nth-child(even)");
// console.log(odd);


// odd.forEach(function(od){
//     // console.log(od);

//     od.style.background="yellow";
// })

//for(let i=0; i<even.length; i++){
    // console.log(i);
    //even[i].style.background="red";
//}


// var getul= document.querySelector("ul.list-group");
// var chi=getul.children;
// console.log(chi[0].children);

//var abc;
//const ul = document.querySelector("ul.list-group");
// console.log(ul);

// abc = ul.children;
// console.log(abc[0]);

// abc = ul.children[0].children[0].getAttribute('href'); // getAttribute("href") is show href form <a> tag
// console.log(abc);

// abc = ul.children[0].children[0].children[0];
// console.log(abc);

// abc= ul.firstElementChild; // you can see fist <li>list of your code.
// abc= ul.lastElementChild; // you can see last <li>list of your code.
// console.log(abc);


// abc = ul.children.length; // Count of <ul>tag's children.
// abc = ul.childElementCount; //Count of <ul>tag's children.
// abc=ul.children[0].childElementCount; //Cout of <ul>tag's childeren's children.
// console.log(abc);

// const li= document.querySelector('li.list-group-item:last-child'); // Show of last <li>tag
// console.log(li);

//  let mom =li.parentElement; //parentElement is show of <li>tag's parent
 // console.log(mom);

 // let first= document.querySelector('li.list-group-item4');
 //  console.log(first);
 // let xyz = first.nextElementSibling; 
 // console.log(xyz);
 // let xyz= li.previousElementSibling;
 // console.log(xyz);


 // let first =document.querySelector("li.list-group-item");
 // let xyz= first.nextElementSibling.nextElementSibling.nextElementSibling.previousElementSibling;
 // console.log(xyz);

 //const li= document.createElement("li");
 //li.id = "newid";             //give id
 //li.className ="newclass";      //give class
 //li.setAttribute('lis', 'newattr'); //give attribute
 //li.textContent = "Hay"; //give inside text
 // li.innerText ="Hay Hay";
 // li.innerHTML =`<a href="#" id="aaa" class="bbb"><i class="fas fa-trash"></i></a>`;
 // li.appendChild(document.createTextNode("Hello Welcome")); //texts ပေါင်းထည့်
 //console.log(li);

 // const links= document.createElement("a");
 // links.id ="id2";
 // links.className="classname2";
 // links.href ="https://www.youtube.com"; //give links
 // links.innerHTML= `<i class="fas fa-trash"><p id="pid" class="pclass">Hello I am p tag.</p></a>`;
 //console.log(links);

 // document.querySelector("ul").appendChild(li);  //js မာရေးထားတဲ့ li ကို  အပေါ်က ul မာ သွားထည့်တာ
 // li.appendChild(links);  // liထဲကို links သွားထည့်တာ

//------------------------------------------------------------------------------------------------
 
 // Replace

//  const newtask = document.createElement("h2"); //(old)
//  newtask.id ="taskid";
//  newtask.className ="taskclass";
//  newtask.innerText ="All tasks";
//  console.log(newtask);

// const orgtask = document.getElementById("tasklist"); //call the child(new)
// console.log(orgtask);

// const orgpar = document.querySelector('.card-action'); // call the parent
// console.log(orgpar);

// orgpar.replaceChild(newtask,orgtask); //Doing Replace //need 2 parameter ==> orgpar.replaceChild(new,old)

//---------------------------------------------------------------------------------------------------------------------------------



// Remove

//child ဘဲခေါ်ပြီး remove လုပ်တာ

// const lis = document.querySelectorAll("li");
//console.log(lis[0]);
//console.log(lis[4]);


//lis[4].remove(); //Doing remove lis[4]
//lis[0].remove();

//........................................................

//parent ကနေ child ကို လမ်း remove တာ

// const lis = document.querySelectorAll("li");
// const getul=document.querySelector("ul");
//console.log(getul);
//console.log(lis[0]);

// getul.removeChild(lis[4]);
// getul.removeChild(lis[0]);
// getul.removeChild(lis[2]);

//.........................................................

const firstli = document.querySelector("li:first-child");
// const firstlink = firstli.children[0];
// console.log(firstli);
//let first;
// first = firstli.className; //string
//first = firstli.classList;   //DOM token list
//console.log(first[0]);

firstli.classList.add("hello"); // add the className with classlist
firstli.classList.add("mello"); 

firstli.classList.remove("hello"); //remove the className with classlist
firstli.classList.remove("mello"); 

// if(firstli.classList.contains("hellomello")){  //စာသားပါမပါစစ်တာ
//     console.log("It's contain sir!")
// }else{
//     console.log("It's not contain sir!")
// };


// var attr = firstli.getAttribute("href"); // Get the attribute (attribute ကိုခေါ်သုံးတာ)
// console.log(attr);

// firstli.setAttribute("href","aaabbb"); // set the attribute (attribute ကိုသွားထည့်တာ)

// var getatr = firstli.hasAttribute("href"); // attribute has မhas စစ်တာ (hasရင် trueပေါ်တယ် မhasရင် false)
// console.log(getatr);

//firstli.setAttribute("data","courses");
//var getattr = firstli.hasAttribute("data");
//console.log(getattr); //true

//var btn = document.getElementById("clear-id");

// btn.addEventListener("click",function(e){
//     console.log("hello mello");

//     e.preventDefault(); // it for explain the error(အာ့မထည့်ထားရင် error တတ်တတ်တယ်)
// })


//btn.addEventListener("click",abc); //dalclick === doubleclick

//function abc(e){
    // console.log("hello mello")

    //let val;

    // val= e.target;    // ခုလုပ်ထားတဲ့ btnကိုပြန်ကြည့်တာ
    // val= e.target.id;
    // val= e.target.className;
    // val= e.target.classList;
    // console.log(val);

    // e.target.innerText ="Done"; // click နိပ်ပြီးသွားရင် btnကစာက Done ဆိုပြီးပြောင်းအောင်ထည့်တာ

    //val = e.type;  //( userက click လိုက်တဲ့ pixel အတိအကျကို တွက်တာ)
    // val = e.clientX; //screen တစ်ခုလုံးနဲ့ရေတာ(အပြင် document ပေါ်ကနေ pixel အတိအကျကို count လုပ်တာ)
    // val = e.clientY;

//     val = e.offsetX; // btn ထဲက pixel အတိအကျကို count လုပ်တာ
//     val = e.offsetY; 

//     console.log(val);
 //};

 //-----------------------------------------------------------------------------------------------------------------------------------------------


 //Mouse

 //const btn = document.querySelector(".clear-tasks");
 //const card = document.querySelector(".card")

 // btn.addEventListener("click",function(){  //click တစ်ချက်နိပ်ရင် အလုပ်လုပ်
 //    console.log("hello");
 // });

 // btn.addEventListener("dblclick",function(){  // click ၂ချက်နိပ်ရင် အလုပ်လုပ်
 //    console.log("hello hi hi");
 // });

 // btn.addEventListener("mousedown",function(){
 //    console.log("heollo I am mouse down");   // mousedown က mouse ကိုဖိလိုက်တာနဲ့ အလုပ်လုပ်တယ်
 // });  


 // btn.addEventListener("mouseup",function(){
 //    console.log("heollo I am mouse up");   // mouseup က mouse ကိုလွတ်လိုက်မ အလုပ်လုပ်တယ်
 // });

 // card.addEventListener("mouseenter",function(){
 //    console.log("Hello I am mouse Enter");    // card ေပးထားလို့ card ထဲ၀င်လိုက်တာနဲ့ အလုပ်လုပ်တယ်
 // });

 // card.addEventListener("mouseleave",function(){
 //    console.log("Hello I am mouse leave");    // card ေပးထားလို့ card အပြင်ထွက်တာနဲ့ အလုပ်လုပ်တယ်
 // });


 // card.addEventListener("mousemove",function(){
 //    console.log("Hello I am mouse Move");    // card ေပးထားလို့ cardထဲမာ mouse ရွေ့သမျကို countလုပ်တယ်
 // });

 // card.addEventListener("mouseover",function(){
 //    console.log("Hello I am mouse over");    // card ေပးထားလို့ cardထဲမာ mouse ရွေ့သမျကို countလုပ်တယ်
 // });



// const forms = document.querySelector("form");  //GET method ကိုသုံးရင် square မဖစ်ဘူး (bar)မာပေါ် //POST method ကိုသုံးရင် square ဖစ်တယ် (bar)မာမပေါ် 
// const input = document.querySelector(".task");

// forms.addEventListener("submit",function(e){
//      console.log(e.type);
//     console.log(input.value);

//     e.preventDefault();
// });

//--------------------------------------------------------------------------------------------------------------------------------------------
 

 //Key

 // const input = document.querySelector(".task");
 // const h4 = document.querySelector("h4");

 //input.addEventListener("keydown",abc);  //၁လုံးနောက်ကျပြီးထွက်တယ်
//input.addEventListener("keypress",abc);  //၁လုံးနောက်ကျပြီးထွက်တယ် //===keydown

 //input.addEventListener("keyup",abc); //၁လုံးနိပ်တာနဲ့ ၁လုံးတန်းထွက်တယ်
 //input.addEventListener("input",abc); //၁လုံးနိပ်တာနဲ့ ၁လုံးတန်းထွက်တယ် //===keyup

 //input.addEventListener("focus",abc); //ရိုက်ပီးသား text နောက်မာ curser ချရင် ရိုက်ထားတဲ့စာအကုန်ထွက်တယ်
 //input.addEventListener("blur",abc); //ရိုက်ပီးသား text နောက်မာ curser ချရင် ရိုက်ထားတဲ့စာအကုန်ထွက်တယ် //===focus

//input.addEventListener("cut",abc); //ရိုက်ပီးသား text ကို cut လုပ်မ အလုပ်လုပ်တယ်
// input.addEventListener("paste",abc); //ရိုက်ပီးသား text ကို paste ချမ အလုပ်လုပ်တယ်




// function abc(e){
//     console.log(e.target.value);

//     h4.textContent = e.target.value;
// }

//--------------------------------------------------------------------------------------------------------------------------------------------

//document.body.addEventListener("click",xyz);

//function xyz(e){
    //console.log("I am body");

    //if(e.target.className === "fas fa-trash-alt"){
        //console.log("I am trash");

    //}

    //e.target.remove(); // shitသမျ ဟာအကုန်ဖျတ်လို့ရ//e.target.remove(); // shitသမျ ဟာအကုန်ဖျတ်လို့ရ

    //e.target.parentElement.remove(); // parentကိုဖျတ်တာ

    //e.target.parentElement.parentElement.remove(); // parentကိုဖျတ်တာ

//};


//--------------------------------------------------------------------------------------------------------------------------------------------

// localStorageမာ Arrary ထည့်မယ်ဆို JSON ပြောင်းပေးရတယ်

document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    //console.log("hello");

    var newtask = document.getElementById("task").value;
    //console.log(newtask);

    //localStorage.setItem("task",newtask);

    let alltask;

    if(localStorage.getItem("mytasks") === null){
        alltasks =[];
    }else{
        alltasks = JSON.parse(localStorage.getItem("mytasks"));
    }

    alltasks.push(newtask);

    // console.log(alltasks);

    localStorage.setItem("mytasks",JSON.stringify(alltasks));


});

//console.log(localStorage.getItem("mytasks")); //String နဲ့ထွက်တယ် //JSON နဲ့သုံးထားလို့ JSON ထည့်မ Array ထွက်တယ်
//console.log(JSON.parse(localStorage.getItem("mytasks"))); //Array နဲ့ထွက်တယ် //JSON နဲ့သုံးထားလို့ JSON ထည့်မ Array ထွက်တယ်

let gettasks = localStorage.getItem("mytasks");
    gettasks = JSON.parse(gettasks);
    // console.log(gettasks);

    gettasks.forEach(function(gettasks){
        console.log(gettasks);
    });










































