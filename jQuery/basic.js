$("h1") //selecting elements

$("h1").css("color" , "red");
$("h1").css("font-size" , "5rem");
$("h1").addClass("big-title");
$("h1").hasClass("big-title"); // ans : yes  //changing styles

$("h1").text("bye");
$("button").html(<em>hey</em>); //ans : hey
$("button").text(<em>hey</em>); // ans : <em>hey</em>   //text


console.log($("img").attr("src")); 
$("a").attr("href" , "https://www.yahoo.com");
$("h1").attr("class"); // ans : big-title margin-50  // attributes


$("h1").click(function(){
    $("h1").css("color" , "purple");
})

$("input").keypress(function(events){
    console.log(events.key);
});

$("document").keypress(function(events){
    $("h1").text(events.key);
});

$("h1").on("mouseover",function(){
    $("h1").css("color","red");
});                                   //adding event listner


$("h1").before("<button>new</button>");
$("h1").after("<button>new</button>");
$("h1").prepend("<button>new</button>");
$("h1").append("<button>new</button>");
$("button").remove();                    //adding and removing elements


$("button").on("click",function(){
    $("h1").hide();
});
$("button").on("click",function(){
    $("h1").toggle();
});
$("button").on("click",function(){
    $("h1").fadeout();
});
$("button").on("click",function(){
    $("h1").slideUp();
});
$("button").on("click",function(){
    $("h1").animate({opacity:0.5});
});
$("button").on("click",function(){
    $("h1").animate({margin:20px});
});
$("button").on("click",function(){
    $("h1").animate({padding:20%});
});                                       //website animation


