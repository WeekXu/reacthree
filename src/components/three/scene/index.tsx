import { useEffect } from "react";
import "./index.css";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
function Scene(){
    useEffect(() => {
        const gui = new dat.GUI();
        const scene = new THREE.Scene();
        const box = new THREE.BoxGeometry(100, 100, 100);
        const material = new THREE.MeshLambertMaterial(); 
        const mesh = new THREE.Mesh(box, material); //网格模型对象Mesh
        mesh.position.set(100,0,0);
        scene.add(mesh);

        const pointLight = new THREE.PointLight(0xffffff, 1.0);
        pointLight.position.set(400,200,100);
        pointLight.decay = 0.0;//设置光源不随距离衰减
        scene.add(pointLight)

        const width = 1200; //宽度
        const height = 800; //高度
        const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
        camera.position.set(400, 100, 0); 
        camera.lookAt(mesh.position);

        gui.add(mesh.position, 'x', 0, 180);
        gui.add(mesh.position, 'y', 0, 180);
        gui.add(mesh.position, 'z', 0, 180);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height); 
        renderer.render(scene, camera);
        renderer.setClearColor(0xffffff)
        const root = document.getElementById("three-scene");
        root?.appendChild(renderer.domElement)
        new OrbitControls(camera, renderer.domElement);
        // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
        mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
        // 渲染函数
    function render() {
        renderer.render(scene, camera); //执行渲染操作
        mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
        requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
    }
    render()
    }, [])
    return <div id="three-scene">

    </div>
}

export default Scene;