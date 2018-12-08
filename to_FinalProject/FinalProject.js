//create a new scene
var scene = new THREE.Scene();
//calculate camera aspect
var aspect = window.innerWidth / window.innerHeight;
//create new camera
var camera = new THREE.PerspectiveCamera(75, aspect, .01, 1000);
//create new renderer
var renderer = new THREE.WebGLRenderer();
//set the size of the renderer
renderer.setSize(window.innerWidth, window.innerHeight);
//add render to page
document.body.appendChild(renderer.domElement);

//resize the camera and renderer as the window size changes
window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

//create controls for orbiting around objects in the scene
controls = new THREE.OrbitControls(camera, renderer.domElement);

//group of clickable game objects
var groupClickables = new THREE.Group();

//choosing turn
var choosing = false;
//choosing play style-single/multi
var choosingStyle = false;
//if the player is going through menus
var menus = false;
//AI move
var shownMove = false;
//shown intructions
var shownInstruct = false;
//human goes first
var humanFirst = false;
//computer goes first
var computerFirst = false;
//multiplayer/singleplayer
var multiPlayer = false;
//human turn/computer turn
var humanTurn = false;

//game logic object
var game = new GameLogic();
//AI logic object
var AI = new AILogic(game);

var LoadBoard = function () {
    //center row, center column box
    var CC = new Board(-1, 0);

    //center row, left column box
    var CL = new Board(-3.5, 0);

    //center row, right column box
    var CR = new Board(1.5, 0);

    //top row, center column box
    var TC = new Board(-1, 2.3);

    //top row, left column box
    var TL = new Board(-3.5, 2.3);

    //top row, right column box
    var TR = new Board(1.5, 2.3);

    //bottom row, center column box
    var BC = new Board(-1, -2.3);

    //bottom row, left column box
    var BL = new Board(-3.5, -2.3);

    //bottom row, right column box
    var BR = new Board(1.5, -2.3);
};

//array of positons of clickable game objects
var locationClick = [];

var LoadInteractables = function ()
{
    //load interactable cubes starting from bottom left
    var i = 0;
    for (var y = -2.3; y < 3; y += 2.3)
    {
        for (var x = -2.5; x < 3; x += 2.5)
        {
            var cube = new Cube(x, y, scene);
            cube.name = i;
            i++;
            var obj = {
                CubePos: cube.mesh.position,
                CubeCli: cube.clicked,
                CubeCliO: cube.clickedO,
                CubeCliX: cube.clickedX,
                CubeCheck: cube.checked
            };
            //console.log(obj);
            locationClick.push(obj);
            groupClickables.add(cube.mesh);
        }
    }
};

//reset the interactables
var ResetInteractables = function ()
{
    //clear the array and interactables group
    while (locationClick.length) {
        locationClick.pop();
        groupClickables.children.pop();
    }
    //reset win and menu conditions
    game.displayedText = false;
    game.wonO = false;
    game.wonX = false;
    game.tie = false;
    //reset turns taken
    index = 0;
    //if the computer goes first then reset computer to have first turn
    if (computerFirst) {
        humanTurn = false;
    }
    else {
        humanTurn = true;
    }
    //clear the renderer
    renderer.clear();
    //reload interactables
    LoadInteractables();
};

//menu buttons
var groupPlay = new THREE.Group();
//array of text that can be removed
var removeableText = [];
//display intructions
var Instructions = function () {
    //they have been displayed
    displayed = true;
    var loader = new THREE.FontLoader();
    //diaplay which player corresponds with each symbol
    loader.load('helvetiker_regular.typeface.json', function (font) {

        var geometry = new THREE.TextGeometry('Player 1 is X\nPlayer 2 is O', {
            font: font,
            size: .5,
            height: 1
        });
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = -1.5;
        mesh.position.y = 5;
        mesh.position.z = -.5;
        removeableText.push(mesh);
        scene.add(mesh);
        //remove all buttons from group
        while (groupPlay.children.length) {
            groupPlay.children.pop();
        }
        //create play button
        var geometryPlay = new THREE.TextGeometry('Play', {
            font: font,
            size: 1,
            height: 1
        });
        var materialPlay = new THREE.MeshNormalMaterial();
        var meshPlay = new THREE.Mesh(geometryPlay, materialPlay);
        meshPlay.position.x = -1.5;
        meshPlay.position.y = -5;
        meshPlay.position.z = -.5;
        meshPlay.name = 'play';
        removeableText.push(meshPlay);
        groupPlay.add(meshPlay);
    });
    scene.add(groupPlay);
    shownInstruct = true;
};

//if game has started
var play = false;
var displayed = true;

//first thing called for game
function init() {
    //go through menus
    menus = true;
    //choosing play style
    choosingStyle = true;
    //Display text and buttons
    AI.DecidePlayStyle();
    //load the board and interactable cubes
    LoadBoard();
    LoadInteractables();
};

//add groups to the scene
scene.add(groupClickables);
scene.add(groupPlay);
//the position of the camera in the world space
camera.position.z = 10;

var raycaster = new THREE.Raycaster(), INTERSECTED;
var mouse = new THREE.Vector2();
var index = 0;


//lighting for the scene
{
    //light gray
    var ambientLight = new THREE.AmbientLight(0xD3D3D3, .5);
    //cyan
    var pointLight = new THREE.PointLight(0x00ffff, 3, 80);
    //light red
    var directionalLight = new THREE.DirectionalLight(0xB22222, .3);
    directionalLight.position.set(0, 3, 50);
    //add lighting to the scene
    scene.add(ambientLight);
    scene.add(pointLight);
    scene.add(directionalLight);
}

//game logic
var update = function () {
    //if choosing who goes first and it has not been previously displayed
    if (choosing && !choosingStyle && !displayed)
        AI.DecideFirstPlayer();
        //if gone through other menus and this has not been displayed previously
    else if (!choosing && !choosingStyle && !displayed)
        Instructions();
    //check for win condition
    if (locationClick.length > 0 && !game.tie && !game.wonO && !game.wonX)
        game.CheckForwin();
        //if win text has not been displayed previously
    else if (!game.displayedText) {
        game.CheckForwin();
    }
    //if single player has been choosen and less than 9 moves have been made then call code
    if (!multiPlayer && play && index<9) {
        singlePlayer();
    }

};

var found = false;
//excute computer turn then wait for player turn
var singlePlayer = function () {
    if (!humanTurn) {
        found = false;
        //call appropriate function for computer first
        if (computerFirst) {
            while (!found) {
                AI.ComputerTurnFirst();
            }
            index++;
            humanTurn = true;
        }
        //call appropriate function for human first
        else if (humanFirst) {
            while (!found) {
                AI.ComputerTurnSecond();
            }
            index++;
            humanTurn = true;
        }
    }
}

//draw elements
var render = function () {
    //have the renderer clear automatically
    renderer.autoClear = true; 
    renderer.render(scene, camera);
    //update raycaster with mouse movement  
    raycaster.setFromCamera(mouse, camera);
};



//run game loop(update,render,repeat)
var gameLoop = function () {
    //check for mouse events
    var mouse = new MouseEvents();
    //call game loop every frame
    requestAnimationFrame(gameLoop);
    document.addEventListener('mousedown', mouse.OnMouseClick, false);
    //execute update and renderer
    render();
    update();
};

init();
gameLoop();

//clear everything from the scene
var clearScreen = function () {
    //clear the renderer
    renderer.clear();
    //remove all mesh objects and groups
    for (let i = scene.children.length - 1; i >= 0; i--) {
        const object = scene.children[i];
        if (object.type === 'Mesh') {
            object.geometry.dispose();
            object.material.dispose();
            scene.remove(object);
        }
        else if (object.type === 'Group') {
            scene.remove(object);
        }
    }
    //reload objects and add them back to the scene
    LoadBoard();
    ResetInteractables();
    scene.add(groupClickables);
};

//menu mouse events
var choice = function () {
    //instructions, if play is pressed then start game
    if (!choosing && !choosingStyle) {
        var intersects = raycaster.intersectObjects(groupPlay.children);
        if (intersects.length > 0 && shownInstruct) {
            //clear the text
            clearScreen();
            menus = false;
            play = true;

        }
    }
    //choose move
    else if (choosing && !choosingStyle) {

        var intersects = raycaster.intersectObjects(groupPlay.children);

        if (intersects.length > 0 && shownMove) {
            //yes, first move
            if (intersects[0].object == groupPlay.children[0]) {
                humanFirst = true;
                humanTurn = true;
            }
            //no. second move
            else {
                computerFirst = true;
            }
            //clear text
            clearScreen();
            //gp to instructions menu in update
            displayed = false;
            choosingStyle = false;
            choosing = false;

        }
    }
        //single player/multiplayer
    else if (!choosing && choosingStyle) {

        var intersects = raycaster.intersectObjects(groupPlay.children);

        if (intersects.length > 0) {
            //single player
            if (intersects[0].object == groupPlay.children[0]) {
                choosingStyle = false;
                choosing = true;
            }
            //multiplayer
            else {
                choosingStyle = false;
                choosing = false;
                multiPlayer = true;
            }
            //clear screen
            clearScreen();
            displayed = false;


        }
    };


}
