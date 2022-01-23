import React from 'react';
import { useEffect } from 'react';
import * as THREE from 'three';

export const Scene = () => {

    useEffect(() => {
        const canvas = document.getElementById('canvas')
                
        // Scene
        const scene = new THREE.Scene()

        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(35, 200 / 200, .1, 10)
        camera.position.z = 3;
        scene.add(camera);

        /**
         * Lights
         */
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
        scene.add(ambientLight);

        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
        directionalLight.position.set(2, 2, 2);
        scene.add(directionalLight);

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });

        // add cube 
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({
            color: 0xff0000
        });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        renderer.setSize(200, 200);
        renderer.physicallyCorrectLights = true;
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;

        /**
         * Animate
         */
        const clock = new THREE.Clock();

        const tick = () => {
        
            const elapsedTime = clock.getElapsedTime();

            //update cube
            cube.rotation.x = elapsedTime / 2;
            cube.rotation.y = elapsedTime / 2;
         
            // Render
            renderer.render(scene, camera);

            // Call tick again on the next frame
            window.requestAnimationFrame(tick);
        }

        tick();
    }, []);

    return (
      
        <canvas id='canvas'></canvas>
        
    )
}