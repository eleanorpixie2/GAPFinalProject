//code for AI

class AILogic {
    constructor(game) {
        this.locations = [];
        this.ComputerTurnFirst = function () {
            var index = 0;
            var find = null;
            if (computerFirst) {
                //check for computer win
                //check left side/top
                for (var i = 0; i < locationClick.length; i += 3) {
                    find = locationClick.find(function (element) {
                        index = game.CheckTwoPositionsX(i, i + 1);
                        return element == locationClick[index];
                    });

                    //check right side/bottom
                    if (find == null) {
                        find = locationClick.find(function (element) {
                            index = game.CheckTwoPositionsX(i + 1, i + 2);
                            return element == locationClick[index];
                        });
                    }
                    //check outside spots for middle win
                    if (find == null) {
                        find = locationClick.find(function (element) {
                            index = game.CheckTwoPositionsX(i, i + 2);
                            return element == locationClick[index];
                        });
                    }
                    //check to see if object has been clicked before then, if so then set to null, otherwise break 
                    if (find != null) {
                        if (find.clicked || find.checked) {
                            find = null;
                        }
                        else {
                            find.checked = true;
                            break;
                        }
                    }
                }
                //check for player win
                if (find == null) {
                    //check top/left
                    for (var i = 0; i < locationClick.length; i += 3) {
                        find = locationClick.find(function (element) {
                            index = game.CheckTwoPositionsO(i, i + 1);
                            return element == locationClick[index];
                        });

                        //check right/bottom
                        if (find == null) {
                            find = locationClick.find(function (element) {
                                index = game.CheckTwoPositionsO(i + 1, i + 2);
                                return element == locationClick[index];
                            });
                        }

                        //check sides 
                        if (find == null) {
                            find = locationClick.find(function (element) {
                                index = game.CheckTwoPositionsO(i, i + 2);
                                return element == locationClick[index];
                            });
                        }

                        //check to see if previously clicked, if not then break
                        if (find != null) {
                            if (find.clicked || find.checked) {
                                find = null;
                            }
                            else {
                                find.checked = true;
                                break;
                            }
                        }
                    }
                }

                //otherwise move to an open spot
                if (find == null) {
                    index = Math.floor(Math.random() * 9);
                    find = locationClick.find(function (element) {
                        return element.CubePos == groupClickables.children[index].position;
                    });

                }
                if (find != null) {

                    if (!find.clicked && !find.clickedO) {
                        find.clicked = true;
                        find.clickedX = true;
                        var loader = new THREE.FontLoader();
                        //change geometry
                        loader.load('helvetiker_regular.typeface.json', function (font) {

                            var geometry = new THREE.TextGeometry('X', {
                                font: font,
                                size: 1,
                                height: 1
                            });
                            groupClickables.children[index].geometry = geometry;
                        });
                        groupClickables.children[index].position.x -= .5;
                        groupClickables.children[index].position.y -= .5;
                        groupClickables.children[index].position.z -= .5;
                        found = true;
                        return true;
                    }

                }
            }
           
        };
        this.ComputerTurnSecond = function () {
            var index = 0;
            var find = null;
            if (humanFirst) {
                //check for computer win
                //check top/left
                for (var i = 0; i < locationClick.length; i += 3) {
                    find = locationClick.find(function (element) {
                        index = game.CheckTwoPositionsO(i, i + 1);
                        return element == locationClick[index];
                    });
                    //check right/bottom
                    if (find == null) {
                        find = locationClick.find(function (element) {
                            index = game.CheckTwoPositionsO(i + 1, i + 2);
                            return element == locationClick[index];
                        });
                    }
                    //check outsides
                    if (find == null) {
                        find = locationClick.find(function (element) {
                            index = game.CheckTwoPositionsO(i, i + 2);
                            return element == locationClick[index];
                        });
                    }
                    //check if clicked previously if not break
                    if (find != null) {
                        if (find.clicked || find.checked) {
                            find = null;
                        }
                        else {
                            find.checked = true;
                            break;
                        }
                    }
                }
                //check for player win
                if (find == null) {
                    //check left/top
                    for (var i = 0; i < locationClick.length; i += 3) {
                        find = locationClick.find(function (element) {
                            index = game.CheckTwoPositionsX(i, i + 1);
                            return element == locationClick[index];
                        });
                        //check bottom/right
                        if (find == null) {
                            find = locationClick.find(function (element) {
                                index = game.CheckTwoPositionsX(i + 1, i + 2);
                                return element == locationClick[index];
                            });
                        }
                        //check outsides
                        if (find == null) {
                            find = locationClick.find(function (element) {
                                index = game.CheckTwoPositionsX(i, i + 2);
                                return element == locationClick[index];
                            });
                        }
                        //check if clicked previously, if not break
                        if (find != null) {
                            if (find.clicked || find.checked) {
                                find = null;
                            }
                            else {
                                find.checked = true;
                                break;
                            }
                        }
                    }
                }

                //otherwise move to an open spot
                if (find == null) {
                    index = Math.floor(Math.random() * 9);
                    find = locationClick.find(function (element) {
                        return element.CubePos == groupClickables.children[index].position;
                    });

                }

                //change geometry
                if (find != null) {

                    if (!find.clicked && !find.clickedX) {
                        find.clicked = true;
                        find.clickedO = true;

                        groupClickables.children[index].geometry = new THREE.CylinderGeometry(.5, .5, .3);
                        groupClickables.children[index].rotation.x = Math.PI / 2;
                        found = true;
                        return true;
                    }

                }
            }

        };

        //menu for deciding who goes
        this.DecideFirstPlayer = function () {
            displayed = true;
            var loader = new THREE.FontLoader();

            //display menu text
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

                //clear current buttons
                while (groupPlay.children.length) {
                    groupPlay.children.pop();
                }
                //add buttons
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

        //decide play style, single/multi
        this.DecidePlayStyle = function () {
            var loader = new THREE.FontLoader();

            //display title
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
                //clear buttons
                while (groupPlay.children.length) {
                    groupPlay.children.pop();
                }
                //display new buttons
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