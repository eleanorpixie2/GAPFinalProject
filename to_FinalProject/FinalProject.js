﻿var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, .01, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function ()
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera, renderer.domElement);

//center row, center column box
{
    var LeftGeometry = new THREE.BoxGeometry(.3, 2, .5);
    var LeftMaterial = new THREE.MeshLambertMaterial();
    var LeftCube = new THREE.Mesh(LeftGeometry, LeftMaterial);
    LeftCube.position.x -= 1;
    scene.add(LeftCube);
    var RightGeometry = new THREE.BoxGeometry(.3, 2, .5);
    var RightMaterial = new THREE.MeshLambertMaterial();
    var RightCube = new THREE.Mesh(RightGeometry, RightMaterial);
    RightCube.position.x += (2 + LeftCube.position.x);
    scene.add(RightCube);
    var BottomGeometry = new THREE.BoxGeometry(2, .3, .5);
    var BottomMaterial = new THREE.MeshLambertMaterial();
    var BottomCube = new THREE.Mesh(BottomGeometry, BottomMaterial);
    scene.add(BottomCube);
    BottomCube.position.y -= .85;
    BottomCube.position.x += (1 + LeftCube.position.x);
    var topGeometry = new THREE.BoxGeometry(2, .3, .5);
    var topMaterial = new THREE.MeshLambertMaterial();
    var topCube = new THREE.Mesh(topGeometry, topMaterial);
    scene.add(topCube);
    topCube.position.y += .85;
    topCube.position.x += (1 + LeftCube.position.x);
}
//center row, left column box
{
    var LeftGeometry1 = new THREE.BoxGeometry(.3, 2, .5);
    var LeftMaterial1 = new THREE.MeshLambertMaterial();
    var LeftCube1 = new THREE.Mesh(LeftGeometry1, LeftMaterial1);
    LeftCube1.position.x -= 3.5;
    scene.add(LeftCube1);
    var RightGeometry1 = new THREE.BoxGeometry(.3, 2, .5);
    var RightMaterial1 = new THREE.MeshLambertMaterial();
    var RightCube1 = new THREE.Mesh(RightGeometry1, RightMaterial1);
    RightCube1.position.x += (2 + LeftCube1.position.x);
    scene.add(RightCube1);
    var BottomGeometry1 = new THREE.BoxGeometry(2, .3, .5);
    var BottomMaterial1 = new THREE.MeshLambertMaterial();
    var BottomCube1 = new THREE.Mesh(BottomGeometry1, BottomMaterial1);
    scene.add(BottomCube1);
    BottomCube1.position.y -= .85;
    BottomCube1.position.x += (1 + LeftCube1.position.x);
    var topGeometry1 = new THREE.BoxGeometry(2, .3, .5);
    var topMaterial1 = new THREE.MeshLambertMaterial();
    var topCube1 = new THREE.Mesh(topGeometry1, topMaterial1);
    scene.add(topCube1);
    topCube1.position.y += .85;
    topCube1.position.x += (1 + LeftCube1.position.x);
}
//center row, right column box
{
    var LeftGeometry2 = new THREE.BoxGeometry(.3, 2, .5);
    var LeftMaterial2 = new THREE.MeshLambertMaterial();
    var LeftCube2 = new THREE.Mesh(LeftGeometry2, LeftMaterial2);
    LeftCube2.position.x += 1.5;
    scene.add(LeftCube2);
    var RightGeometry2 = new THREE.BoxGeometry(.3, 2, .5);
    var RightMaterial2 = new THREE.MeshLambertMaterial();
    var RightCube2 = new THREE.Mesh(RightGeometry2, RightMaterial2);
    RightCube2.position.x += (2 + LeftCube2.position.x);
    scene.add(RightCube2);
    var BottomGeometry2 = new THREE.BoxGeometry(2, .3, .5);
    var BottomMaterial2 = new THREE.MeshLambertMaterial();
    var BottomCube2 = new THREE.Mesh(BottomGeometry2, BottomMaterial2);
    scene.add(BottomCube2);
    BottomCube2.position.y -= .85;
    BottomCube2.position.x += (1 + LeftCube2.position.x);
    var topGeometry2 = new THREE.BoxGeometry(2, .3, .5);
    var topMaterial2 = new THREE.MeshLambertMaterial();
    var topCube2 = new THREE.Mesh(topGeometry2, topMaterial2);
    scene.add(topCube2);
    topCube2.position.y += .85;
    topCube2.position.x += (1 + LeftCube2.position.x);
}
//top row, center column box
{
    var LeftGeometry3 = new THREE.BoxGeometry(.3, 2, .5);
    var LeftMaterial3 = new THREE.MeshLambertMaterial();
    var LeftCube3 = new THREE.Mesh(LeftGeometry3, LeftMaterial3);
    LeftCube3.position.x -= 1;
    LeftCube3.position.y += 2.3;
    scene.add(LeftCube3);
    var RightGeometry3 = new THREE.BoxGeometry(.3, 2, .5);
    var RightMaterial3 = new THREE.MeshLambertMaterial();
    var RightCube3 = new THREE.Mesh(RightGeometry3, RightMaterial3);
    RightCube3.position.x += (2 + LeftCube3.position.x);
    RightCube3.position.y += LeftCube3.position.y;
    scene.add(RightCube3);
    var BottomGeometry3 = new THREE.BoxGeometry(2, .3, .5);
    var BottomMaterial3 = new THREE.MeshLambertMaterial();
    var BottomCube3 = new THREE.Mesh(BottomGeometry3, BottomMaterial3);
    scene.add(BottomCube3);
    BottomCube3.position.y -= (.85 - LeftCube3.position.y);
    BottomCube3.position.x += (1 + LeftCube3.position.x);
    var topGeometry3 = new THREE.BoxGeometry(2, .3, .5);
    var topMaterial3 = new THREE.MeshLambertMaterial();
    var topCube3 = new THREE.Mesh(topGeometry3, topMaterial3);
    scene.add(topCube3);
    topCube3.position.y += (.85 + LeftCube3.position.y);
    topCube3.position.x += (1 + LeftCube3.position.x);
}
//top row, left column box
{
    var LeftGeometry4 = new THREE.BoxGeometry(.3, 2, .5);
    var LeftMaterial4 = new THREE.MeshLambertMaterial();
    var LeftCube4 = new THREE.Mesh(LeftGeometry4, LeftMaterial4);
    LeftCube4.position.x -= 3.5;
    LeftCube4.position.y += 2.3;
    scene.add(LeftCube4);
    var RightGeometry4 = new THREE.BoxGeometry(.3, 2, .5);
    var RightMaterial4 = new THREE.MeshLambertMaterial();
    var RightCube4 = new THREE.Mesh(RightGeometry4, RightMaterial4);
    RightCube4.position.x += (2 + LeftCube4.position.x);
    RightCube4.position.y += LeftCube4.position.y;
    scene.add(RightCube4);
    var BottomGeometry4 = new THREE.BoxGeometry(2, .3, .5);
    var BottomMaterial4 = new THREE.MeshLambertMaterial();
    var BottomCube4 = new THREE.Mesh(BottomGeometry4, BottomMaterial4);
    scene.add(BottomCube4);
    BottomCube4.position.y -= (.85 - LeftCube4.position.y);
    BottomCube4.position.x += (1 + LeftCube4.position.x);
    var topGeometry4 = new THREE.BoxGeometry(2, .3, .5);
    var topMaterial4 = new THREE.MeshLambertMaterial();
    var topCube4 = new THREE.Mesh(topGeometry4, topMaterial4);
    scene.add(topCube4);
    topCube4.position.y += (.85 + LeftCube4.position.y);
    topCube4.position.x += (1 + LeftCube4.position.x);
}
//top row, right column box
{
    var LeftGeometry4 = new THREE.BoxGeometry(.3, 2, .5);
    var LeftMaterial4 = new THREE.MeshLambertMaterial();
    var LeftCube4 = new THREE.Mesh(LeftGeometry4, LeftMaterial4);
    LeftCube4.position.x += 1.5;
    LeftCube4.position.y += 2.3;
    scene.add(LeftCube4);
    var RightGeometry4 = new THREE.BoxGeometry(.3, 2, .5);
    var RightMaterial4 = new THREE.MeshLambertMaterial();
    var RightCube4 = new THREE.Mesh(RightGeometry4, RightMaterial4);
    RightCube4.position.x += (2 + LeftCube4.position.x);
    RightCube4.position.y += LeftCube4.position.y;
    scene.add(RightCube4);
    var BottomGeometry4 = new THREE.BoxGeometry(2, .3, .5);
    var BottomMaterial4 = new THREE.MeshLambertMaterial();
    var BottomCube4 = new THREE.Mesh(BottomGeometry4, BottomMaterial4);
    scene.add(BottomCube4);
    BottomCube4.position.y -= (.85 - LeftCube4.position.y);
    BottomCube4.position.x += (1 + LeftCube4.position.x);
    var topGeometry4 = new THREE.BoxGeometry(2, .3, .5);
    var topMaterial4 = new THREE.MeshLambertMaterial();
    var topCube4 = new THREE.Mesh(topGeometry4, topMaterial4);
    scene.add(topCube4);
    topCube4.position.y += (.85 + LeftCube4.position.y);
    topCube4.position.x += (1 + LeftCube4.position.x);
}
//bottom row, center column box
{
    var LeftGeometry4 = new THREE.BoxGeometry(.3, 2, .5);
    var LeftMaterial4 = new THREE.MeshLambertMaterial();
    var LeftCube4 = new THREE.Mesh(LeftGeometry4, LeftMaterial4);
    LeftCube4.position.x -= 1;
    LeftCube4.position.y -= 2.3;
    scene.add(LeftCube4);
    var RightGeometry4 = new THREE.BoxGeometry(.3, 2, .5);
    var RightMaterial4 = new THREE.MeshLambertMaterial();
    var RightCube4 = new THREE.Mesh(RightGeometry4, RightMaterial4);
    RightCube4.position.x += (2 + LeftCube4.position.x);
    RightCube4.position.y += LeftCube4.position.y;
    scene.add(RightCube4);
    var BottomGeometry4 = new THREE.BoxGeometry(2, .3, .5);
    var BottomMaterial4 = new THREE.MeshLambertMaterial();
    var BottomCube4 = new THREE.Mesh(BottomGeometry4, BottomMaterial4);
    scene.add(BottomCube4);
    BottomCube4.position.y -= (.85 - LeftCube4.position.y);
    BottomCube4.position.x += (1 + LeftCube4.position.x);
    var topGeometry4 = new THREE.BoxGeometry(2, .3, .5);
    var topMaterial4 = new THREE.MeshLambertMaterial();
    var topCube4 = new THREE.Mesh(topGeometry4, topMaterial4);
    scene.add(topCube4);
    topCube4.position.y += (.85 + LeftCube4.position.y);
    topCube4.position.x += (1 + LeftCube4.position.x);
}
//bottom row, left column box
{
    var LeftGeometry4 = new THREE.BoxGeometry(.3, 2, .5);
    var LeftMaterial4 = new THREE.MeshLambertMaterial();
    var LeftCube4 = new THREE.Mesh(LeftGeometry4, LeftMaterial4);
    LeftCube4.position.x -= 3.5;
    LeftCube4.position.y -= 2.3;
    scene.add(LeftCube4);
    var RightGeometry4 = new THREE.BoxGeometry(.3, 2, .5);
    var RightMaterial4 = new THREE.MeshLambertMaterial();
    var RightCube4 = new THREE.Mesh(RightGeometry4, RightMaterial4);
    RightCube4.position.x += (2 + LeftCube4.position.x);
    RightCube4.position.y += LeftCube4.position.y;
    scene.add(RightCube4);
    var BottomGeometry4 = new THREE.BoxGeometry(2, .3, .5);
    var BottomMaterial4 = new THREE.MeshLambertMaterial();
    var BottomCube4 = new THREE.Mesh(BottomGeometry4, BottomMaterial4);
    scene.add(BottomCube4);
    BottomCube4.position.y -= (.85 - LeftCube4.position.y);
    BottomCube4.position.x += (1 + LeftCube4.position.x);
    var topGeometry4 = new THREE.BoxGeometry(2, .3, .5);
    var topMaterial4 = new THREE.MeshLambertMaterial();
    var topCube4 = new THREE.Mesh(topGeometry4, topMaterial4);
    scene.add(topCube4);
    topCube4.position.y += (.85 + LeftCube4.position.y);
    topCube4.position.x += (1 + LeftCube4.position.x);
}
//bottom row, right column box
{
    var LeftGeometry4 = new THREE.BoxGeometry(.3, 2, .5);
    var LeftMaterial4 = new THREE.MeshLambertMaterial();
    var LeftCube4 = new THREE.Mesh(LeftGeometry4, LeftMaterial4);
    LeftCube4.position.x += 1.5;
    LeftCube4.position.y -= 2.3;
    scene.add(LeftCube4);
    var RightGeometry4 = new THREE.BoxGeometry(.3, 2, .5);
    var RightMaterial4 = new THREE.MeshLambertMaterial();
    var RightCube4 = new THREE.Mesh(RightGeometry4, RightMaterial4);
    RightCube4.position.x += (2 + LeftCube4.position.x);
    RightCube4.position.y += LeftCube4.position.y;
    scene.add(RightCube4);
    var BottomGeometry4 = new THREE.BoxGeometry(2, .3, .5);
    var BottomMaterial4 = new THREE.MeshLambertMaterial();
    var BottomCube4 = new THREE.Mesh(BottomGeometry4, BottomMaterial4);
    scene.add(BottomCube4);
    BottomCube4.position.y -= (.85 - LeftCube4.position.y);
    BottomCube4.position.x += (1 + LeftCube4.position.x);
    var topGeometry4 = new THREE.BoxGeometry(2, .3, .5);
    var topMaterial4 = new THREE.MeshLambertMaterial();
    var topCube4 = new THREE.Mesh(topGeometry4, topMaterial4);
    scene.add(topCube4);
    topCube4.position.y += (.85 + LeftCube4.position.y);
    topCube4.position.x += (1 + LeftCube4.position.x);
}


//the position of the camera in the world space
camera.position.z = 10;

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
var update = function ()
{
    //cube.rotation.x += 0.05;
    //cube.rotation.y += 0.05;
};

//draw elements
var render = function ()
{
    renderer.render(scene, camera);
};

//run game loop(update,render,repeat)
var gameLoop = function ()
{
    requestAnimationFrame(gameLoop);
    render();
    update();
};

gameLoop();