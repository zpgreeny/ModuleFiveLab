
let URL = "https://zpgreeny.github.io/ModuleFiveLab/properties1.json";

let request =new XMLHttpRequest();
request.open('GET',URL);
request.responseType ='json';
request.send();

request.onload = function() {
    let Prop = request.response;
    console.log(Prop);
    Props(Prop);
}


function Props(jsonObj) {

    let Props = jsonObj.properties;

    for (let i = 0; i < Props.length; i++) {

        let article = document.createElement('article');
        let main = document.querySelector('main');
        let list = document.createElement('p');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let p6 = document.createElement('p');
        let p7 = document.createElement('p');
        let p8 = document.createElement('p');


        async function getName() {
            try {
                let names = await Promise.all(p1.textContent = Props[i].name);
            } catch (e) {
                console.log(e);
            }
        }

        getName();

        async function getPrice() {
            try {
                let prices = await Promise.all(p2.textContent = 'Price: ' + Props[i].price);
            } catch (e) {
                console.log(e);
            }
        }

        getPrice();

        async function getRating() {
            try {
                let ratings = await Promise.all(p3.textContent = 'Rating: ' + Props[i].rating);
            } catch (e) {
                console.log(e);
            }
        }

        getRating();

        async function getLocation() {
            try {
                let locations = await Promise.all(p4.textContent = Props[i].location);
            } catch (e) {
                console.log(e);
            }
        }

        getLocation();

        async function getRooms() {
            try {
                let rooms = await Promise.all(p5.textContent = 'Rooms: ' + Props[i].rooms);
            } catch (e) {
                console.log(e);
            }
        }

        getRooms();

        async function getAvailability() {
            try {
                let availabilities = await Promise.all(p6.textContent = Props[i].availability);
            } catch (e) {
                console.log(e);
            }
        }

        getAvailability();

        async function getFeatures() {
            try {
                let features = await Promise.all(p7.textContent = 'Features: ' + Props[i].features);
            } catch (e) {
                console.log(e);
            }
        }

        getFeatures();

        async function getSuperRating() {
            try {
                let superRating = await Promise.all(p8.textContent = Props[i].superRating);
            } catch (e) {
                console.log(e);
            }
        }

        getSuperRating();

        let features = Props[i].features;
        //for loop to store each index array into a list
        for (let j = 0; j < features.length[j]; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = features[j];
            ul.appendChild(listitem);
        }

        let descriptionPropOne = document.querySelectorAll('button')[0];

        descriptionPropOne.addEventListener('click', function () {
            description1();
        });

        function description1() {

            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(p3);
            article.appendChild(p4);
            article.appendChild(p5);
            article.appendChild(p7);
            article.appendChild(p8);
            article.appendChild(list);
            main.appendChild(article);
        }

        let availabilityPropOne = document.querySelectorAll('button')[1];

        availabilityPropOne.addEventListener('click', function() {
            availability1();
        });

        function availability1() {

            article.appendChild(p6);
            main.appendChild(article);
        }


    }
}



let URL2 = "https://zpgreeny.github.io/ModuleFiveLab/properties2.json";

let request2 =new XMLHttpRequest();
request2.open('GET',URL2);
request2.responseType ='json';
request2.send();

request2.onload = function() {
    let Prop2 = request2.response;
    console.log(Prop2);
    Props2(Prop2);
}


function Props2(jsonObj) {

    let Props2 = jsonObj.properties2;

    for (let i = 0; i < Props2.length; i++) {

        let article2 = document.createElement('article');
        let main2 = document.querySelector('main');
        let list2 = document.createElement('p');
        let p12 = document.createElement('p');
        let p22 = document.createElement('p');
        let p32 = document.createElement('p');
        let p42 = document.createElement('p');
        let p52 = document.createElement('p');
        let p62 = document.createElement('p');
        let p72 = document.createElement('p');
        let p82 = document.createElement('p');


        async function getName2() {
            try {
                let names2 = await Promise.all(p12.textContent = Props2[i].name);
            } catch (e) {
                console.log(e);
            }
        }

        getName2();

        async function getPrice2() {
            try {
                let prices2 = await Promise.all(p22.textContent = 'Price: ' + Props2[i].price);
            } catch (e) {
                console.log(e);
            }
        }

        getPrice2();

        async function getRating2() {
            try {
                let ratings2 = await Promise.all(p32.textContent = 'Rating: ' + Props2[i].rating);
            } catch (e) {
                console.log(e);
            }
        }

        getRating2();

        async function getLocation2() {
            try {
                let locations2 = await Promise.all(p42.textContent = Props2[i].location);
            } catch (e) {
                console.log(e);
            }
        }

        getLocation2();

        async function getRooms2() {
            try {
                let rooms2 = await Promise.all(p52.textContent = 'Rooms: ' + Props2[i].rooms);
            } catch (e) {
                console.log(e);
            }
        }

        getRooms2();

        async function getAvailability2() {
            try {
                let availabilities2 = await Promise.all(p62.textContent = Props2[i].availability);
            } catch (e) {
                console.log(e);
            }
        }

        getAvailability2();

        async function getFeatures2() {
            try {
                let features2 = await Promise.all(p72.textContent = 'Features: ' + Props2[i].features);
            } catch (e) {
                console.log(e);
            }
        }

        getFeatures2();

        async function getSuperRating2() {
            try {
                let superRating2 = await Promise.all(p82.textContent = Props2[i].superRating);
            } catch (e) {
                console.log(e);
            }
        }

        getSuperRating2();

        let features = Props2[i].features;
        //for loop to store each index array into a list
        for (let j = 0; j < features.length[j]; j++) {
            let listItem2 = document.createElement('li');
            listItem2.textContent = features[j];
            ul.appendChild(listitem2);
        }

        let descriptionPropTwo = document.querySelectorAll('button')[2];

        descriptionPropTwo.addEventListener('click', function () {
            description2();
        });

        function description2() {

            article2.appendChild(p12);
            article2.appendChild(p22);
            article2.appendChild(p32);
            article2.appendChild(p42);
            article2.appendChild(p52);
            article2.appendChild(p72);
            article2.appendChild(p82);
            article2.appendChild(list2);
            main2.appendChild(article2);
        }

        let availabilityPropTwo = document.querySelectorAll('button')[3];

        availabilityPropTwo.addEventListener('click', function() {
            availability2();
        });

        function availability2() {

            article2.appendChild(p62);
            main2.appendChild(article2);
        }


    }
}




let URL3 = "https://zpgreeny.github.io/ModuleFiveLab/properties3.json";

let request3 =new XMLHttpRequest();
request3.open('GET',URL3);
request3.responseType ='json';
request3.send();

request3.onload = function() {
    let Prop3 = request3.response;
    console.log(Prop3);
    Props3(Prop3);
}


function Props3(jsonObj) {

    let Props3 = jsonObj.properties3;

    for (let i = 0; i < Props3.length; i++) {

        let article3 = document.createElement('article');
        let main3 = document.querySelector('main');
        let list3 = document.createElement('p');
        let p13 = document.createElement('p');
        let p23 = document.createElement('p');
        let p33 = document.createElement('p');
        let p43 = document.createElement('p');
        let p53 = document.createElement('p');
        let p63 = document.createElement('p');
        let p73 = document.createElement('p');
        let p83 = document.createElement('p');
        let p9 = document.createElement('p');


        async function getName3() {
            try {
                let names3 = await Promise.all(p13.textContent = Props3[i].name);
            } catch (e) {
                console.log(e);
            }
        }

        getName3();

        async function getPrice3() {
            try {
                let prices3 = await Promise.all(p23.textContent = 'Price: ' + Props3[i].price);
            } catch (e) {
                console.log(e);
            }
        }

        getPrice3();

        async function getRating3() {
            try {
                let ratings3 = await Promise.all(p33.textContent = 'Rating: ' + Props3[i].rating);
            } catch (e) {
                console.log(e);
            }
        }

        getRating3();

        async function getLocation3() {
            try {
                let locations3 = await Promise.all(p43.textContent = Props3[i].location);
            } catch (e) {
                console.log(e);
            }
        }

        getLocation3();

        async function getRooms3() {
            try {
                let rooms3 = await Promise.all(p53.textContent = 'Rooms: ' + Props3[i].rooms);
            } catch (e) {
                console.log(e);
            }
        }

        getRooms3();

        async function getAvailability3() {
            try {
                let availabilities3 = await Promise.all(p63.textContent = Props3[i].availability);
            } catch (e) {
                console.log(e);
            }
        }

        getAvailability3();

        async function getFeatures3() {
            try {
                let features3 = await Promise.all(p73.textContent = 'Features: ' + Props3[i].features);
            } catch (e) {
                console.log(e);
            }
        }

        getFeatures3();

        async function getSuperRating3() {
            try {
                let superRating3 = await Promise.all(p83.textContent = Props3[i].superRating);
            } catch (e) {
                console.log(e);
            }
        }

        getSuperRating3();

        async function getClearance() {
            try {
                let clearance = await Promise.all(p9.textContent = 'Reduced Rate: $' + Props3[i].clearance);
            } catch (e) {
                console.log(e);
            }
        }

        getClearance();



        let features = Props3[i].features;
        //for loop to store each index array into a list
        for (let j = 0; j < features.length[j]; j++) {
            let listItem3 = document.createElement('li');
            listItem3.textContent = features[j];
            ul.appendChild(listitem3);
        }

        let descriptionPropThree = document.querySelectorAll('button')[4];

        descriptionPropThree.addEventListener('click', function () {
            description3();
        });

        function description3() {

            article3.appendChild(p13);
            article3.appendChild(p23);
            article3.appendChild(p33);
            article3.appendChild(p43);
            article3.appendChild(p53);
            article3.appendChild(p73);
            article3.appendChild(p83);
            article3.appendChild(list3);
            main3.appendChild(article3);
        }

        let availabilityPropThree = document.querySelectorAll('button')[6];

        availabilityPropThree.addEventListener('click', function() {
            availability3();
        });

        function availability3() {

            article3.appendChild(p63);
            main3.appendChild(article3);
        }

        let clearancePropThree = document.querySelectorAll('button')[5];

        clearancePropThree.addEventListener('click', function(){
            clearance3();
        });

        function clearance3() {
            article3.appendChild(p9);
            main3.appendChild(article3);
        }

    }
}








