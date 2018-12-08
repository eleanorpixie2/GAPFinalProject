class Board
{
    constructor(posX, posY)
    {
        //one hollow box/frame

        //left boarder
        this.LeftGeometry4 = new THREE.BoxGeometry(.3, 2, .5);
        this.LeftMaterial4 = new THREE.MeshLambertMaterial();
        this.LeftCube4 = new THREE.Mesh(this.LeftGeometry4, this.LeftMaterial4);
        this.LeftCube4.position.x += posX;
        this.LeftCube4.position.y -= posY;
        scene.add(this.LeftCube4);
        //right boarder
        this.RightGeometry4 = new THREE.BoxGeometry(.3, 2, .5);
        this.RightMaterial4 = new THREE.MeshLambertMaterial();
        this.RightCube4 = new THREE.Mesh(this.RightGeometry4, this.RightMaterial4);
        this.RightCube4.position.x += (2 + this.LeftCube4.position.x);
        this.RightCube4.position.y += this.LeftCube4.position.y;
        scene.add(this.RightCube4);
        //bottom boarder
        this.BottomGeometry4 = new THREE.BoxGeometry(2, .3, .5);
        this.BottomMaterial4 = new THREE.MeshLambertMaterial();
        this.BottomCube4 = new THREE.Mesh(this.BottomGeometry4, this.BottomMaterial4);
        scene.add(this.BottomCube4);
        this.BottomCube4.position.y -= (.85 - this.LeftCube4.position.y);
        this.BottomCube4.position.x += (1 + this.LeftCube4.position.x);
        //top boarder
        this.topGeometry4 = new THREE.BoxGeometry(2, .3, .5);
        this.topMaterial4 = new THREE.MeshLambertMaterial();
        this.topCube4 = new THREE.Mesh(this.topGeometry4, this.topMaterial4);
        scene.add(this.topCube4);
        this.topCube4.position.y += (.85 + this.LeftCube4.position.y);
        this.topCube4.position.x += (1 + this.LeftCube4.position.x);
    }
}