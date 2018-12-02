﻿//code for AI

class AILogic {
    constructor() {
        this.ComputerTurn = function () {
            if (computerFirst) {
                var i = Math.floor(Math.random() * 9);
                var find = locationClick.find(function (element) {
                    return element.CubePos == groupClickables.children[i].position;
                });
                if (find != null) {

                    if (!find.clicked) {
                        find.clicked = true;
                        find.clickedX = true;

                        var loader = new THREE.FontLoader();

                        loader.load('helvetiker_regular.typeface.json', function (font) {

                            var geometry = new THREE.TextGeometry('X', {
                                font: font,
                                size: 1,
                                height: 1
                            });
                            groupClickables.children[i].geometry = geometry;
                        });
                        groupClickables.children[i].position.x -= .5;
                        groupClickables.children[i].position.y -= .5;
                        groupClickables.children[i].position.z -= .5;
                        found = true;
                    }
                }
            }
                if (humanFirst) {

                    var i = Math.floor(Math.random() * 9);
                    var find = locationClick.find(function (element) {
                        return element.CubePos == groupClickables.children[i].position;
                    });
                    if (find != null) {

                        if (!find.clicked) {
                            find.clicked = true;
                            find.clickedO = true;

                            var geometry = new THREE.CylinderGeometry(.5, .5, .3);
                            groupClickables.children[i].geometry = geometry;
                            groupClickables.children[i].rotation.x = Math.PI / 2;
         
                            found = true;
                        }
                    }
                }
        };
        this.DecideFirstPlayer = function () {
            displayed = true;
            var loader = new THREE.FontLoader();

            loader.load('helvetiker_regular.typeface.json', function (font) {

                var geometry = new THREE.TextGeometry('Would you like the first move?', {
                    font: font,
                    size: .5,
                    height: .5
                });
                var material = new THREE.MeshNormalMaterial();
                var mesh = new THREE.Mesh(geometry, material);
                mesh.position.x = -4.3;
                mesh.position.y = 4;
                mesh.position.z = -.5;
                removeableText.push(mesh);
                scene.add(mesh);
                while (groupPlay.children.length) {
                    groupPlay.children.pop();
                }
                var geometryPlay = new THREE.TextGeometry('Yes', {
                    font: font,
                    size: .5,
                    height: .5
                });
                var materialPlay = new THREE.MeshNormalMaterial();
                var meshPlay = new THREE.Mesh(geometryPlay, materialPlay);
                meshPlay.position.x = -2.5;
                meshPlay.position.y = -5;
                meshPlay.position.z = -.5;
                meshPlay.name = 'yes';
                removeableText.push(meshPlay);
                groupPlay.add(meshPlay);

                var geometryPlay1 = new THREE.TextGeometry('No', {
                    font: font,
                    size: .5,
                    height: .5
                });
                var materialPlay1 = new THREE.MeshNormalMaterial();
                var meshPlay1 = new THREE.Mesh(geometryPlay1, materialPlay1);
                meshPlay1.position.x = 1;
                meshPlay1.position.y = -5;
                meshPlay1.position.z = -.5;
                meshPlay1.name = 'no';
                removeableText.push(meshPlay1);
                groupPlay.add(meshPlay1);
            });
            scene.add(groupPlay);
            shownMove = true;
        };
        this.DecidePlayStyle = function () {
            var loader = new THREE.FontLoader();

            loader.load('helvetiker_regular.typeface.json', function (font) {
                var geometry = new THREE.TextGeometry('TIC-TAC-TOE', {
                    font: font,
                    size: 1,
                    height: 1
                });
                var material = new THREE.MeshNormalMaterial();
                var mesh = new THREE.Mesh(geometry, material);
                mesh.position.x = -4.3;
                mesh.position.y = 4;
                mesh.position.z = -.5;
                removeableText.push(mesh);
                scene.add(mesh);
                while (groupPlay.children.length) {
                    groupPlay.children.pop();
                }
                var geometryPlay = new THREE.TextGeometry('Single Player', {
                    font: font,
                    size: .5,
                    height: .5
                });
                var materialPlay = new THREE.MeshNormalMaterial();
                var meshPlay = new THREE.Mesh(geometryPlay, materialPlay);
                meshPlay.position.x = -4.5;
                meshPlay.position.y = -5;
                meshPlay.position.z = 0;
                meshPlay.name = 'Single Player';
                removeableText.push(meshPlay);
                groupPlay.add(meshPlay);

                var geometryPlay1 = new THREE.TextGeometry('MultiPlayer', {
                    font: font,
                    size: .5,
                    height: .5
                });
                var materialPlay1 = new THREE.MeshNormalMaterial();
                var meshPlay1 = new THREE.Mesh(geometryPlay1, materialPlay1);
                meshPlay1.position.x = 1;
                meshPlay1.position.y = -5;
                meshPlay1.position.z = 0;
                meshPlay1.name = 'MultiPlayer';
                removeableText.push(meshPlay1);
                groupPlay.add(meshPlay1);
            });

        };

        
    }
}