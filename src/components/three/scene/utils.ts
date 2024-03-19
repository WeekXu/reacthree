import * as THREE from 'three';
function initScene() {
    const scene = new THREE.Scene();
    const box = new THREE.BoxGeometry(100,100,100);
    const material = new THREE.MeshBasicMaterial({
        color: 0xff0000,//0xff0000设置材质颜色为红色
    }); 
    const mesh = new THREE.Mesh(box, material); //网格模型对象Mesh
    mesh.position.set(0,10,0);
    scene.add(mesh);
    const width = 800; //宽度
    const height = 500; //高度
    const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
    camera.position.set(200, 200, 200); 
    camera.lookAt(mesh.position);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height); 
    renderer.render(scene, camera);
    return renderer; 
}

export default initScene;