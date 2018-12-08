//Events for onclicked

class MouseEvents
{
    constructor() {
        this.OnMouseClick = function (event) {

            // calculate mouse position in normalized device coordinates
            // (-1 to +1) for both components
            event.preventDefault();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            //code for mulitplayer game
            if (play && multiPlayer) {
                //check to see what the player clicked on
                var intersects = raycaster.intersectObjects(groupClickables.children);
                //if the player clicked on an object that can be clicked, then find it in the list
                if (intersects.length > 0) {
                    var found = locationClick.find(function (element) {
                        return element.CubePos == intersects[0].object.position;
                    });
                    //if the object has not been previously clicked then execute code
                    if (!found.clicked) {
                        //set clicked to true for object
                        found.clicked = true;
                        //increase the turn index
                        index++;
                        //if index is even then change object to O if object has not been clicked on a O turn previously
                        if (index % 2 == 0 && !found.clickedO) {
                            found.clickedO = true;
                            intersects[0].object.geometry = new THREE.CylinderGeometry(.5, .5, .3);
                            intersects[0].object.rotation.x = Math.PI / 2;
                        }
                        //otherwise change object to X if not been clicked on a X turn previously
                        else if (!found.clickedX) {
                            found.clickedX = true;
                            var loader = new THREE.FontLoader();

                            loader.load('helvetiker_regular.typeface.json', function (font) {

                                var geometry = new THREE.TextGeometry('X', {
                                    font: font,
                                    size: 1,
                                    height: 1
                                });
                                intersects[0].object.geometry = geometry;
                            });
                            intersects[0].object.position.x -= .5;
                            intersects[0].object.position.y -= .5;
                            intersects[0].object.position.z -= .5;
                        }
                    }
                }
            }
            //single player code
            //if human turn
            else if (play && !multiPlayer && humanTurn) {
                //check for objects that have been clicked
                var intersects = raycaster.intersectObjects(groupClickables.children);
                //if clickable then find in list
                if (intersects.length > 0) {
                    var found = locationClick.find(function (element) {
                        return element.CubePos == intersects[0].object.position;
                    });

                    //if not previously clicked then continue
                    if (!found.clicked) {
                        found.clicked = true;
                        //if the player is O then change object to O
                        if ( !found.clickedO && computerFirst) {
                            found.clickedO = true;
                            intersects[0].object.geometry = new THREE.CylinderGeometry(.5, .5, .3);
                            intersects[0].object.rotation.x = Math.PI / 2;
                        }
                        //if player is X then change object to X
                        else if (!found.clickedX && humanFirst) {
                            found.clickedX = true;
                            index++;
                            var loader = new THREE.FontLoader();

                            loader.load('helvetiker_regular.typeface.json', function (font) {

                                var geometry = new THREE.TextGeometry('X', {
                                    font: font,
                                    size: 1,
                                    height: 1
                                });
                                intersects[0].object.geometry = geometry;
                            });
                            intersects[0].object.position.x -= .5;
                            intersects[0].object.position.y -= .5;
                            intersects[0].object.position.z -= .5;
                        }
                        //set to computer's turn
                        humanTurn = false;
                    }
                }
            }
                //if not playing game then execute menu code
            else if (menus) {
                choice();
            }
        };

        
    }
}
