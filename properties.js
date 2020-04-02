
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
        let section = document.querySelector('section');
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
            section.appendChild(article);
        }

        let availabilityPropOne = document.querySelectorAll('button')[1];

        availabilityPropOne.addEventListener('click', function() {
            availability1()
        })

        function availability1() {
            article.appendChild(p6);
            section.appendChild(article);
        }


    }
}



