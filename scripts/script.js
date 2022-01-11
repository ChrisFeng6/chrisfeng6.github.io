/*
Things to change when adding a new tab on the main page:
index.html: 
    1. nav bar button
    2. empty container
    3. handlebar template
Script.js
    4. switch target ~line 220
*/


// Global: keep track of which page i'm on
var page = "intro";


// project info (for handle bar, content filling)
var projects = {
    "work": [
        {
            "id": 0,
            "name": "Settle",
            "type": "Service & UI/UX Design and Research",
            "description": "An online marketplace that facilitates the exchange of used goods during life transitions",
            "link": "settle/settle.html",
            "btn_words": "Settle Down",
            "img": "img/project_img/settle.png"
        },
        {
            "id": 1,
            "name": "Design Intern at Bizy",
            "type": "UI/UX Design",
            "description": "I interned at Bizy, LLC. where I redesigned the Dashboard for the Bizy mobile app",
            "link": "bizy/bizy1.html",
            "btn_words": "Being Busy",
            "img": "img/project_img/bizy.png",
        },
        {
            "id": 2,
            "name": "Nothing",
            "type": "Branding & Graphic Design",
            "description": "A luxury brand started, designed and crafted by Chris Feng",
            "link": "nothing/nothing.html",
            "btn_words": "$4299",
            "img": "img/project_img/2.png"
        },
        {
            "id": 3,
            "name": "Bizy Onboarding",
            "type": "UI Prototyping With P5.js",
            "description": "Designing and prototyping an interactive onboarding amination",
            "link": "onboarding/onboarding.html",
            "btn_words": "Get Onboard!",
            "img": "img/project_img/onboarding.png"
        }

    ],

    "play": [
        /*
        {
            "id": 0,
            "name": "The Simplicity Book",
            "type": "Photography & Graphic Design",
            "description": "A photography book",
            "link": "book/book.html",
            "btn_words": "<blank>",
            "img": "img/project_img/book.png",
        },
        */
        {
            "id": 1,
            "name": "Mountains",
            "type": "",
            "description": "The great mountains I've conquered",
            "link": "mountains/mountains.html",
            "btn_words": "Let's Go Climb!",
            "img": "img/project_img/mountains.png",
        },
        {
            "id": 2,
            "name": "Graphic Design Collection",
            "type": "",
            "description": "A variety of graphic design projects",
            "link": "collection/collection.html",
            "btn_words": "Feeling Artsy",
            "img": "img/project_img/collection.png",
        },
        {
            "id": 3,
            "name": "I am a Poster",
            "type": "Art & Graphic Design",
            "description": "A series of self-aware posters",
            "link": "poster/poster.html",
            "btn_words": "Burn Me!",
            "img": "img/project_img/poster.png"
        }
    ],

    "myself": [
        {
            "id": 0,
            "name": "I am a Poster",
            "type": "Art & Graphic Design",
            "description": "A series of welf-aware posters",
            "link": "html/poster.html",
            "btn_words": "Burn Me!",
            "img": "img/project_img/3.png"
        },
        {
            "id": 1,
            "name": "Expressive Bubble",
            "type": "Motion Graphics",
            "description": "A motion graphics art project made with the P5 library",
            "link": "#",
            "btn_words": "I'm feeling emotional",
            "img": "img/project_img/1.png",
        },
        {
            "id": 2,
            "name": "Nothing",
            "type": "Branding & Graphic Design",
            "description": "A luxury brand started, designed and crafted my Chris Feng",
            "link": "#",
            "btn_words": "$9999",
            "img": "img/project_img/2.png",
        }
    ],

    "contact": [
        {   
            "title": "Email",
            "content": "yupengf@andrew.cmu.edu",
        },
        {
            "title": "Cell",
            "content": "(808) 397-6354",
        },
        {
            "title": "LinkedIn",
            "content": "https://www.linkedin.com/in/chrisfeng-at-cmu/",
        },
        {
            "title": "WeChat",
            "content": "fengyupeng123",
        },
        {
            "title": "GitHub",
            "content": "https://github.com/fengyupeng",
        },

    ],

    "blog": [
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/2018_11_3_childhood.html",
            "title": "驶往童年的巴士",
            "translation": "The Bus Inbound to Childhood",
            "description": "Chris Feng | Nov 4, 2018 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/2018_9_4_limo.html",
            "title": "豪华房车",
            "translation": "Luxury Motor Home",
            "description": "Chris Feng | Sep 4, 2018 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/2018_8_30_kinkakuji.html",
            "title": "在金阁中醉生梦死",
            "translation": "Live and Die in Kinkaku-ji",
            "description": "Chris Feng | Aug 30, 2018 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/2018_8_28_titanium.html",
            "title": "新型钛合金",
            "translation": "Innovative Titanium Alloy",
            "description": "Chris Feng | Aug 28, 2018 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/2018_8_25_bird.html",
            "title": "地域鸟",
            "translation": "Regional Bird",
            "description": "Chris Feng | Aug 25, 2018 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/2018_8_23_haruki.html",
            "title": "那段日子里的我与村上",
            "translation": "My Whimsical Days and My Haruki",
            "description": "Chris Feng | Aug 23, 2018 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/2018_8_22_subway.html",
            "title": "地铁",
            "translation": "Subway",
            "description": "Chris Feng | Aug 22, 2018 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/2018_8_14_woman.html",
            "title": "败坏的女人",
            "translation": "Women With Sin",
            "description": "Chris Feng | Aug 14, 2018 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/2018_8_13_winter.html",
            "title": "日本的冬天",
            "translation": "Winter In Japan",
            "description": "Chris Feng | Aug 13, 2018 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/2018_7_24_un.html",
            "title": "联合国",
            "translation": "United Nation",
            "description": "Hannah Zhang | Jul 24, 2018 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/2018_4_4_mediocre.html",
            "title": "我如何变得平庸",
            "translation": "How Did I Become Mediodre",
            "description": "Chris Feng | Apr 4, 2018 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/3_17_18_zhang.html",
            "title": "海地 无题",
            "translation": "Haiti Untiltled",
            "description": "Hannah Zhang | Mar 17, 2018 | In Chinese",
        },
        {   
            "lang": "en",
            "link": "blog/comdesinhaiti.html",
            "title": "Communication Design in Haiti",
            "description": "Chris Feng | Mar 14, 2018 | In English",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/2017_10_3_chapter1.html",
            "title": "鱼!",
            "translation": "Fish!",
            "description": "Chris Feng | Oct 3, 2017 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/system.html",
            "title": "系统地学习",
            "translation": "Study Systematically",
            "description": "Chris Feng | Sep 20, 2017 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/natural_cap.html",
            "title": "资本主义对于自然资源的商品化",
            "translation": "Commercialization of Natural Resources under Capitalism",
            "description": "Chris Feng | Jun 11, 2017 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/anarchy.html",
            "title": "无政府状态下的人类发展",
            "translation": "The Evolution of Human Civilization in Anarchy",
            "description": "Chris Feng | Jun 10, 2017 | In Chinese",
        },
        {   
            "style": "font-size: 24px;",
            "lang": "zh",
            "link": "blog/study.html",
            "title": "关于如何高效学习的杂记",
            "translation": "Thoughts on How to Study Highly Efficiently",
            "description": "Chris Feng | May 23, 2017 | In Chinese",
        },
        {   
            "lang": "en",
            "link": "blog/rationality.html",
            "title": "Rationality of Believing by Seeing",
            "description": "Chris Feng | Nov 24, 2014 | In English",
        },

    ]
}



$(document).ready(function(){
    // when document reload, it always goes to "intro"
    page = "intro";

    var target_page = JSON.parse(sessionStorage.getItem("saved_page"));
    if (target_page == null) {
        target_page = "intro";
    }

    // do not show projects at first
    $(".project_container").display = "none";
    //generate project content
    generateProjects();

    // when user go back from a projct, or reload on work or play
    if (target_page != "intro") {
        $("body").css("display","none");
        $("body").css("backgroundColor","#ffffff");
        target = target_page + "_btn";
        transitionToProjects(target, "fast");
    }

    $("#intro_btn").click(function() {
        //save the current page to "intro"
        page = "intro";
        sessionStorage.setItem("saved_page", JSON.stringify(page));
        // reload
        location.reload();
    })

    $(".nav_btn").click(function(){
        //var btnID = $(this).attr("id");
        var btnID = $(this).attr('class').split(' ')[1];
        transitionToProjects(btnID, "slow");
    });

    $("#suprised").hover(function(){
        addNewOval();
    });
});


/*
Handle the animation of transition from landing page to project pages 
*/
function transitionToProjects(target, speed) {
    // when speed = "fast", changes happens instantly
    fade_out_time = 500;
    fade_in_time = 1000;

    // play fading animation
    if (speed == "slow") {
        fade_out_time = 500;
        fade_in_time = 1000;
    }

    /* when clicking a project tab when you're currently on this tab.
       nothing should happen */
    var future_stage = "";
    switch (target) {
        case "work_btn":
            future_stage = "work";
            break;
        case "play_btn":
            future_stage = "play";
            break;
        case "myself_btn":
            future_stage = "myself";
            break;
        case "contact_btn":
            future_stage = "contact";
            break;
        case "blog_btn":
            future_stage = "blog";
            break;
    }
    console.log(page);
    if (future_stage == page) return;

    // if on intro page, going to work/play, so fade out the current page
    if (page == "intro") {
        transitionDarkToLight_forP5(target, fade_out_time, fade_in_time);
    }

    // pull up the current stuff if on a project page
    switch (page) {
        case "work":
            $("#work_container").fadeOut(fade_out_time, function() {
                displayNewPage(target, fade_in_time);
            });
            break;
        case "play":
            $("#play_container").fadeOut(fade_out_time, function() {
                displayNewPage(target, fade_in_time);
            });
            break;
        case "myself":
            $("#myself_container").fadeOut(fade_out_time, function() {
                displayNewPage(target, fade_in_time);
            });
            break;
        case "contact":
            $("#contact_container").fadeOut(fade_out_time, function() {
                displayNewPage(target, fade_in_time);
            });
            break;
        case "blog":
            $("#blog_container").fadeOut(fade_out_time, function() {
                displayNewPage(target, fade_in_time);
            });
            break;
    }  
    // store the current page
    page = future_stage;
    sessionStorage.setItem("saved_page", JSON.stringify(page));

}


/*
initial content filling for all project pages
calling handlebars
*/
function generateProjects() {
    // work
    var source = $("#work_template").html();
    var template = Handlebars.compile(source);
    var newHTML = template(projects);
    $("#work_container").append(newHTML);
    //play
    var source = $("#play_template").html();
    var template = Handlebars.compile(source);
    var newHTML = template(projects);
    $("#play_container").append(newHTML);
    //myself
    var source = $("#myself_template").html();
    var template = Handlebars.compile(source);
    var newHTML = template(projects);
    $("#myself_container").append(newHTML);
    //contact
    var source = $("#contact_template").html();
    var template = Handlebars.compile(source);
    var newHTML = template(projects);
    $("#contact_container").append(newHTML);
    //blog
    var source = $("#blog_template").html();
    var template = Handlebars.compile(source);
    var newHTML = template(projects);
    $("#blog_container").append(newHTML);

}


/*
New page fading in
*/
function displayNewPage(target, time) {
    switch (target) {
        case "work_btn":
            $("#work_container").fadeIn(time);
            break;
        case "play_btn":
            $("#play_container").fadeIn(time);
            break;
        case "myself_btn":
            $("#myself_container").fadeIn(time);
            break;
        case "contact_btn":
            $("#contact_container").fadeIn(time);
            break;
        case "blog_btn":
            $("#blog_container").fadeIn(time);
            break;
    }
}

/* 
legacy function, used when not handling back buttons on project detail 
pages. No longer used now
*/
function transitionDarkToLight(target, fade_out_time, fade_in_time) {
    $(".container.intro").slideUp(fade_out_time, function() {
                    displayNewPage(target, fade_in_time);
                });
    $("body").animate({
            backgroundColor: "#ffffff",
        },fade_out_time);
    $("body").css("color","black");
    $(".intro_para").animate({ opacity: 0}, fade_out_time);
    $(".navbar").attr("class", "navbar navbar-default");
    // get rid of the canvas
    $("#defaultCanvas0").fadeOut(fade_out_time);
    //noLoop();
    $("#defaultCanvas0").remove();
}

// transition from landing page to project pages
function transitionDarkToLight_forP5(target, fade_out_time, fade_in_time) {
    $(".container.intro").slideUp(fade_out_time, function() {
                    displayNewPage(target, fade_in_time);
                });
    $("body").animate({
            backgroundColor: "#ffffff",
        },fade_out_time);
    $("body").css("color","black");
    $(".intro_para").animate({ opacity: 0}, fade_out_time);
    $(".navbar").attr("class", "navbar navbar-default");
    checkFlag();
}

// check if the animation on the landing page is fully loaded
function checkFlag() {
    console.log("checking flag");
    var canvas = document.getElementById("defaultCanvas0");
    var flag = (canvas == null);
    console.log(canvas);
    if(flag) {
       window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
    } else {
        // get rid of the canvas
        $("#defaultCanvas0").fadeOut(fade_out_time);
        //noLoop();
        $("#defaultCanvas0").remove();
        // put body back on
        $("body").css("display","block");
    }
}

// fade out the animation on the landing page
function p5FadeOut(fade_out_time){
    // get rid of the canvas
    $("#defaultCanvas0").fadeOut(fade_out_time);
    //noLoop();
    $("#defaultCanvas0").remove();
    // put body back on
    $("body").css("display","block");

}




