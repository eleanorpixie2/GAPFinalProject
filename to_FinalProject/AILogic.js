//code for AI

class AILogic {
    constructor(game) {
        this.ComputerTurn = function () {
            var find = null;
            if (computerFirst) {
                //check for computer win
                for (var i = 0; i < locationClick.length; i += 3) {
                    find = locationClick.find(function (element) {
                        return element == locationClick[game.CheckTwoPositionsX(i + 1, i + 2)];
                    });
                    
                    if (find == null) {
                        find = locationClick.find(function (element) {
                            return element == locationClick[game.CheckTwoPositionsX(i + 1, i + 2)];
                        });
                    }
                    if (find != null) {
                        if (find.clicked || find.CubeCheck) {
                            find = null;
                        }
                        else {
                            console.log(find);
                            break;
                        }
                    }
                }
                //check for player win
                if (find == null) {
                    for (var i = 0; i < locationClick.length; i += 3) {
                        find = locationClick.find(function (element) {
                            return element == locationClick[game.CheckTwoPositionsO(i + 1, i + 2)];
                        });
                        if (find != null) {
                            if (find.CubeCheck) {
                                find = null;
                            }
                        }
                        if (find == null) {
                            find = locationClick.find(function (element) {
                                return element == locationClick[game.CheckTwoPositionsO(i + 1, i + 2)];
                            });
                            console.log("second");
                        }
                        //console.log(find);
                        if (find != null) {
                            if (find.clicked || find.CubeCheck) {
                                find = null;
                            }
                            else {
                                find.CubeCheck = true;
                                break;
                            }
                        }
                            
                    }
                }
                
                //otherwise move to an open spot
                if (find == null) {
                    var i = Math.floor(Math.random() * 9);
                    find = locationClick.find(function (element) {
                        return element.CubePos == groupClickables.children[i].position;
                    });
                    
                }
                if (find != null) {

                    if (!find.clicked) {
                        console.log(found);
                        find.clicked = true;
                        find.clickedX = true;
                        console.log(find.CubeCheck);
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
                        return true;
                    }
                    
                }
            }
                if (humanFirst) {

                    //check for computer win
                    for (var i = 0; i < locationClick.length; i += 3) {
                        find = locationClick[game.CheckTwoPositionsO(i, i + 1)];
                        if (find == null) {
                            find = locationClick[game.CheckTwoPositionsO(i + 1, i + 2)];
                        }
                        if (find != null)
                            break;
                    }
                    //check for player win
                    if (find == null) {
                        for (var i = 0; i < locationClick.length; i += 3) {
                            find = locationClick[game.CheckTwoPositionsX(i, i + 1)];
                            if (find == null) {
                                find = locationClick[game.CheckTwoPositionsX(i + 1, i + 2)];
                            }
                            if (find != null)
                                break;
                        }
                    }
                    //otherwise move to an open spot
                    if (find == null) {
                        var i = Math.floor(Math.random() * 9);
                        find = locationClick.find(function (element) {
                            return element.CubePos == groupClickables.children[i].position;
                        });
                    }
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