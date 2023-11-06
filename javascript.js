

const getRando = (min, max) => {
    let randomNum = Math.floor(Math.random() * (max - min) + min)
    return randomNum
}

const ourShip = {
    hull: 20,
    accuracy: 0.7,
    firePower: 5
}

let enemyShips = []

for (let index_ = 0; index_ < 6; index_++) {
    const enemyShip = {
        src: `./images/b${index_ + 1}.png`,
        hull: getRando(3, 7),
        accuracy: parseFloat((Math.random() * (0.9 - 0.6) + 0.6).toFixed(2)),
        firePower: getRando(2, 5)
    }
    enemyShips.push(enemyShip)
}


let ourShipHull = document.getElementById("hull_ourShip")
ourShipHull.innerHTML = ourShip.hull

let ourShipAccuracy = document.getElementById("accuracy_ourShip")
ourShipAccuracy.innerHTML = ourShip.accuracy

let ourShipFirePower = document.getElementById("firePower_ourShip")
ourShipFirePower.innerHTML = ourShip.firePower

let ourShipfirePower = document.getElementById("firePower_ourShip")
// ourShipfirePower.innerHTML = enemyShips[2].firePower




//-----------------Initial Load Enemy Ships-----------------------------
container3rd = document.querySelector('#third-column')
container2nd = document.querySelector('.second-column-inner')
enemyShips.forEach((obj, index) => {
    if (index == 0) {
        const objectDiv = document.createElement('div');
        objectDiv.className = 'column';

        // Create content for the object element
        const imgDiv = document.createElement('img');
        imgDiv.src = obj.src;
        // imgDiv.src = `./images/b${index + 1}.png`;
        // objectContent.textContent = `hull: ${obj.hull}, firepoweer: ${obj.firePower}`;
        objectDiv.appendChild(imgDiv);
        // objectDiv.appendChild(objectContent);

        // Append the object element to the container
        container2nd.appendChild(objectDiv);
    } else {

        const objectDiv = document.createElement('div');
        objectDiv.className = 'inner-image';

        // Create content for the object element
        const imgDiv = document.createElement('img');
        imgDiv.src = obj.src;
        objectDiv.appendChild(imgDiv);

        // Append the object element to the container
        container3rd.appendChild(objectDiv);
    }
});

document.querySelector('#hull_enemy').innerHTML = enemyShips[0].hull
document.querySelector('#accuracy_enemy').innerHTML = enemyShips[0].accuracy
document.querySelector('#firepower_enemy').innerHTML = enemyShips[0].firePower
//----------------------------------------------------------------------





// const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const audio = new Audio("./fire.mp3")

attack_button_our_ship.addEventListener("click", function () {
    audio.play();
    let enemyDmg = enemyShips[0].hull - ourShip.firePower

    document.querySelector('#hull_enemy').innerHTML = enemyDmg
    document.querySelector('#accuracy_enemy').innerHTML = enemyShips[0].accuracy
    document.querySelector('#firepower_enemy').innerHTML = enemyShips[0].firePower

    if (enemyDmg > 0) {
        document.querySelector('#sel').innerHTML = "Enemy Ship Survived"
        // enemy will fire
    }
    else {
        document.querySelector('#sel').innerHTML = "Enemy Ship Has Lost"
        console.log(enemyShips.length);
        enemyShips.shift();
        console.log(enemyShips.length);

        //---------------Empty the current divs---------------------
        document.querySelector("inner-image").innerHTML = "";
        document.querySelector("second-column-inner").innerHTML = "";
        //----------------------------------------------------------

        enemyShips.forEach((obj, index) => {

            if (index == 0) {
                const objectDiv = document.createElement('div');
                objectDiv.className = 'column';

                // Create content for the object element
                const imgDiv = document.createElement('img');
                imgDiv.src = obj.src;
                // objectContent.textContent = `hull: ${obj.hull}, firepoweer: ${obj.firePower}`;
                objectDiv.appendChild(imgDiv);
                // objectDiv.appendChild(objectContent);

                // Append the object element to the container
                container2nd.appendChild(objectDiv);
            } else {

                const objectDiv = document.createElement('div');
                objectDiv.className = 'inner-image';

                // Create content for the object element
                const imgDiv = document.createElement('img');
                imgDiv.src = obj.src;
                objectDiv.appendChild(imgDiv);

                // Append the object element to the container
                container3rd.appendChild(objectDiv);
            }
        });
    }



});



//-------------------------------------------------------------

//-------------------------------------------------------------


//backup
//-------------------------------------------------------------
// container3rd = document.querySelector('#third-column')
// container2nd = document.querySelector('.second-column-inner')
// enemyShips.forEach((obj, index) => {
//     if (index == 0) {
//         const objectDiv = document.createElement('div');
//         objectDiv.className = 'column';

//         // Create content for the object element
//         const imgDiv = document.createElement('img');
//         imgDiv.src = `./images/b${index + 1}.png`;
//         // objectContent.textContent = `hull: ${obj.hull}, firepoweer: ${obj.firePower}`;
//         objectDiv.appendChild(imgDiv);
//         // objectDiv.appendChild(objectContent);

//         // Append the object element to the container
//         container2nd.appendChild(objectDiv);
//     } else {

//         const objectDiv = document.createElement('div');
//         objectDiv.className = 'inner-image';

//         // Create content for the object element
//         const imgDiv = document.createElement('img');
//         imgDiv.src = `./images/b${index + 1}.png`;
//         objectDiv.appendChild(imgDiv);

//         // Append the object element to the container
//         container3rd.appendChild(objectDiv);
//     }
// });
//-------------------------------------------------------------
