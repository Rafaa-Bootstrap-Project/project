
var Sports = []

function addSport(sportName, images, price) {
    var Sport = {
        sportName: sportName,
        images: images,
        currentImageIndex: 0,
        price: price
    }
    Sports.push(Sport)
}
addSport("FootBall", ["https://www.shutterstock.com/image-photo/football-world-championship-soccer-player-600nw-2253076431.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/06/4b/fb/e2/miramar-djerba-palace.jpg",
    "https://media.istockphoto.com/id/1246562144/photo/male-soccer-player-kicking-soccer-ball.jpg?s=612x612&w=0&k=20&c=MmgGoMEVf78kiacmIYW8nWLaU5cIDLHUufTCzLn6hHU="]
    , 5)

addSport("Basketball", ["https://www.sportsbusinessjournal.com/-/media/Images/Journal/2022/09/26/pg-15-19-Participation-Adult-Basketball_Getty.ashx?mw=768",
    "https://rockymountevents.com/wp-content/uploads/2019/06/High-school-student-dribbling-past-a-defender.jpg",
    "https://s3-media0.fl.yelpcdn.com/bphoto/B23xUeqSbdQ7K-W3FXErRQ/1000s.jpg"]
    , 6)

addSport("Padel", ["https://www.redlinepadel.com/wp-content/uploads/2022/05/redlinepadel_shop.jpeg",
    "https://www.ispo.com/sites/default/files/2022-11/man-playing-padel.jpeg",
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/12FE8/production/_129400877_gettyimages-869307524.jpg"]
    , 15)


//Page 2
function switchPage(sportName) {
    $('.sort').hide()
    var sport = Sports.find(sport => sport.sportName === sportName);
    //kol mara bch trajali il awel sport ili yapplici aliha sport object

    $(".all-Sports").empty()
    $(".all-Sports").append(`
    <button id='getBack' onclick="displaySports(Sports)"> <--- Get Back </button>

   <div class="inputs">

    <h1>${sport.sportName}</h1>
    
    <p>Per Person: ${sport.price} DT</p>
 
    Name:<input type="text">
    Number Of Friends:<input type="text" >
    Time of reservation:<input type="time" >
    Date of reservation:<input type='date'>
    <button id='tasjil' onclick="sendPopup()">Submit your application</button>

    </div>

`)
}

function display(sport, index) {
    //function generale ki bch naytelha naytelha bel parametre ili nesthakhom
    $(".all-Sports").append(`
        
    <div class="sport-${sport.sportName}">
            <h2>${sport.sportName}</h2>
            <p>Price:${sport.price} DT </p>
        <div class="image-container">     
            <img class="sss" src="${sport.images[0]}" 
        onclick="toggleImg('${sport.sportName}', ${index})"/>
        <button id='mybtn${index}' onclick="switchPage('${sport.sportName}')">BOOK NOW </button>  
        <button id='xx${index}' onclick= "deleteSport('${sport.sportName}')">X</button>
        </div>
        

    </div>
    
 `);
}



function deleteSport(sportName) {
    Sports = Sports.filter(sport => sport.sportName !== sportName);
    displaySports(Sports);
}

// Page 1    
function displaySports(array) {
    //any previously displayed content is removed and I start from nothing to add my sports    
    $('.sort').show()

    $(".all-Sports").empty()

    for (var i = 0; i < array.length; i++) {
        display(array[i], i)
    }
}

displaySports(Sports) //page 1


function toggleImg(sportName, sportIndex) {
    var currentSport = Sports[sportIndex];
    //array feragh mta sports nehsbo bih il index mta kol sport
    currentSport.currentImageIndex = (currentSport.currentImageIndex + 1) % currentSport.images.length;
    //bech yebda bel current image index ili heya 0 = wnehseb +1 kol mara w bad % ala length mta kadeh men images
    var newSrc = currentSport.images[currentSport.currentImageIndex];
    //it access the current image index of the current that is displayed each time and I assigned for it a var newSrc
    $(`.sport-${sportName} .sss`).attr("src", newSrc);
}
//it represent each time the image of the current sport and updates it (attr) to the newSrc


function sendPopup() {
    alert("We got your reservation, our staff will be contacting you soon")
}




$("#sort").onclick = "cheapest()"
function cheapestone() {
    var min = Sports[0]
    // console.log('this', Sports);
    for (var i = 0; i < Sports.length; i++) {
        if (min.price > Sports[i].price) {
            min = Sports[i]
        }
    }
    return min
}
function cheapest() {
    var cheapestitem = [cheapestone()]
    $(".all-Sports").empty()

    displaySports(cheapestitem)


}





$("#sorti").onclick = "expensive()"
function mostexpensive() {
    var max = Sports[0]
    for (var j = 0; j < Sports.length; j++) {
        if (max.price < Sports[j].price) {
            max = Sports[j]
        }
    }
    return max
}
function expensive() {
    var high = [mostexpensive()]
    $(".all-Sports").empty()

    displaySports(high)

}

$("#allAgain").onclick = "displaySports(Sports)"




















