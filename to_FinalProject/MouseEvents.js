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
            if (play) {
                var intersects = raycaster.intersectObjects(groupClickables.children);
                if (intersects.length > 0) {
                    var found = locationClick.find(function (element) {
                        return element.CubePos == intersects[0].object.position;
                    });

                    if (!found.clicked) {
                        found.clicked = true;
                        index++;
                        if (index % 2 == 0 && !found.clickedO) {
                            found.clickedO = true;
                            intersects[0].object.geometry = new THREE.CylinderGeometry(.5, .5, .3);
                            intersects[0].object.rotation.x = Math.PI / 2;
                        }
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
            else {

                var intersects = raycaster.intersectObjects(groupPlay.children);
               
                if (intersects.length > 0) {
                    renderer.clear();
                    for (let i = scene.children.length - 1; i >= 0; i--) {
                        const object = scene.children[i];
                        if (object.type === 'Mesh') {
                            object.geometry.dispose();
                            object.material.dispose();
                            scene.remove(object);
                        }
                        else if (object.type === 'Group')
                        {
                            if (object.length == 1) {
                                object.remove(object.children[0]);
                            }
                            scene.remove(object);
                        }
                    }
                    LoadBoard();
                    scene.add(groupClickables);
                    play = true;


                }
            }
        }
    }
}
