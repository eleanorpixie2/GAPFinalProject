var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, .01, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera, renderer.domElement);

var groupClickables = new THREE.Group();

var game = new GameLogic();

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

var locationClick = [];

var LoadInteractables = function ()
//Center, center click event cube
{
    for (var y = -2.3; y < 3; y += 2.3)
    {
        for (var x = -2.5; x < 3; x += 2.5)
        {
            var cube = new Cube(x, y, scene);
            var obj = {
                CubePos: cube.mesh.position,
                CubeCli: cube.clicked,
                CubeCliO: cube.clickedO,
                CubeCliX: cube.clickedX
            };
            //console.log(obj);
            locationClick.push(obj);
            groupClickables.add(cube.mesh);
        }
    }
};


function init() {
    LoadBoard();
    LoadInteractables();
};

scene.add(groupClickables);
//the position of the camera in the world space
camera.position.z = 10;

var raycaster = new THREE.Raycaster(), INTERSECTED;
var mouse = new THREE.Vector2();
var replaceLocation;
var replace;
var index = 0;
var hasPlayedInSpot;


//lighting for the scene
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

//game logic
var update = function () {
    if (locationClick.length > 0)
        game.CheckForwin();

};


//draw elements
var render = function () {
    //update raycaster with mouse movement  
    raycaster.setFromCamera(mouse, camera);
    // calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects(groupClickables.children);
    //count and look after all objects in the diamonds group
    if (intersects.length > 0) {
        if (INTERSECTED != intersects[0].object) {
            if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
            INTERSECTED = intersects[0].object;
            INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
            replace = intersects[0].object;
            replaceLocation = intersects[0].object.position;
        }
    } else {
        if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
        INTERSECTED = null;
    }
    renderer.render(scene, camera);
};



//run game loop(update,render,repeat)
var gameLoop = function () {
    var mouse = new MouseEvents();
    requestAnimationFrame(gameLoop);
    document.addEventListener('mousedown', mouse.OnMouseClick, false);
    render();
    update();
};

init();
gameLoop();