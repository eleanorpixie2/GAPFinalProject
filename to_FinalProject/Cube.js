﻿//Interactable Cube
class Cube
{
    constructor(x,y,scene)
    {
        //creates an interactable cube object
        this.geometry = new THREE.BoxGeometry(1, 1, .5);
        this.material = new THREE.MeshToonMaterial();
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.clicked = false;
        this.clickedO = false;
        this.clickedX = false;
        this.checked = false;

        this.mesh.position.x = x;
        this.mesh.position.y = y;
    }
}