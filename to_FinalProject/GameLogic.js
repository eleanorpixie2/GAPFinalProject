﻿//checks for wins and ties
class GameLogic {
    constructor() {
        this.wonX = false;
        this.wonO = false;
        this.tie = false;
        this.CheckForwin = function () {

            if (!this.wonX && !this.wonO && !this.tie) {
                if (locationClick[0].clickedX && locationClick[1].clickedX && locationClick[2].clickedX ||
                    locationClick[3].clickedX && locationClick[4].clickedX && locationClick[5].clickedX ||
                    locationClick[6].clickedX && locationClick[7].clickedX && locationClick[8].clickedX ||
                    locationClick[6].clickedX && locationClick[4].clickedX && locationClick[2].clickedX ||
                    locationClick[0].clickedX && locationClick[4].clickedX && locationClick[8].clickedX ||
                    locationClick[6].clickedX && locationClick[3].clickedX && locationClick[0].clickedX ||
                    locationClick[7].clickedX && locationClick[4].clickedX && locationClick[1].clickedX ||
                    locationClick[8].clickedX && locationClick[5].clickedX && locationClick[2].clickedX) {
                    this.wonX = true;
                }
                else if (locationClick[0].clickedO && locationClick[1].clickedO && locationClick[2].clickedO ||
                    locationClick[3].clickedO && locationClick[4].clickedO && locationClick[5].clickedO ||
                    locationClick[6].clickedO && locationClick[7].clickedO && locationClick[8].clickedO ||
                    locationClick[6].clickedO && locationClick[4].clickedO && locationClick[2].clickedO ||
                    locationClick[0].clickedO && locationClick[4].clickedO && locationClick[8].clickedO ||
                    locationClick[6].clickedO && locationClick[3].clickedO && locationClick[0].clickedO ||
                    locationClick[7].clickedO && locationClick[4].clickedO && locationClick[1].clickedO ||
                    locationClick[8].clickedO && locationClick[5].clickedO && locationClick[2].clickedO) {
                    console.log("Win O");
                    this.wonO = true;
                }
                else if (locationClick[0].clicked && locationClick[1].clicked && locationClick[2].clicked &&
                    locationClick[3].clicked && locationClick[4].clicked && locationClick[5].clicked &&
                    locationClick[6].clicked && locationClick[7].clicked && locationClick[8].clicked && !this.wonO && !this.wonX) {
                    this.tie = true;
                }
            }
            else if (this.wonX) {

                var loader = new THREE.FontLoader();

                loader.load('helvetiker_regular.typeface.json', function (font) {

                    var geometry = new THREE.TextGeometry('X has won!', {
                        font: font,
                        size: 1,
                        height: 1
                    });
                    var material = new THREE.MeshNormalMaterial();
                    var mesh = new THREE.Mesh(geometry, material);
                    mesh.position.x = -3.5;
                    mesh.position.y = 4;
                    mesh.position.z = -.5;
                    scene.add(mesh);
                });
            }
            else if (this.wonO) {

                var loader = new THREE.FontLoader();

                loader.load('helvetiker_regular.typeface.json', function (font) {

                    var geometry = new THREE.TextGeometry('O has won!', {
                        font: font,
                        size: 1,
                        height: 1
                    });
                    var material = new THREE.MeshNormalMaterial();
                    var mesh = new THREE.Mesh(geometry, material);
                    mesh.position.x = -3.5;
                    mesh.position.y = 4;
                    mesh.position.z = -.5;
                    scene.add(mesh);
                });
            }
            else if (this.tie) {

                var loader = new THREE.FontLoader();

                loader.load('helvetiker_regular.typeface.json', function (font) {

                    var geometry = new THREE.TextGeometry('You have tied!', {
                        font: font,
                        size: 1,
                        height: 1
                    });
                    var material = new THREE.MeshNormalMaterial();
                    var mesh = new THREE.Mesh(geometry, material);
                    mesh.position.x = -4;
                    mesh.position.y = 4;
                    mesh.position.z = -.5;
                    scene.add(mesh);
                });
            }
        }

        
    }
}