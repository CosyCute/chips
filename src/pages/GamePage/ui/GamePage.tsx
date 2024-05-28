import { FC, useLayoutEffect, useRef } from 'react';
import {
    AmbientLight,
    DirectionalLight,
    Object3D,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

import { classNames } from 'shared/lib/classNames';

import classes from './GamePage.module.scss';

interface GamePageProps {
    className?: string;
}

const GamePage: FC<GamePageProps> = ({ className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useLayoutEffect(() => {
        const renderer = new WebGLRenderer({
            canvas: canvasRef.current as HTMLCanvasElement,
            antialias: true,
            alpha: true,
        });

        const camera = new PerspectiveCamera(
            45, // fov
            window.innerWidth / window.innerHeight, // aspect
            0.1, // near
            100, // far
        );

        camera.position.set(2, 1, 2);

        const scene = new Scene();

        // lights
        const directionalLight = new DirectionalLight(0xffffff, 0.2);
        directionalLight.castShadow = true;
        directionalLight.position.set(-1, 2, 4);
        scene.add(directionalLight);

        const ambientLight = new AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);

        const container = new Object3D();
        container.position.set(0, 0, 0);

        const fbxLoader = new FBXLoader();
        fbxLoader.load(
            '/mush.fbx',
            (object) => {
                object.scale.set(0.05, 0.05, 0.05);
                object.position.set(0, -0.3, 0);
                container.add(object);
            },
            (xhr) => {
                console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
            },
            (error) => {
                console.log(error);
            },
        );
        scene.add(container);

        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });

        renderer.setSize(window.innerWidth, window.innerHeight);

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', onResize, false);

        // eslint-disable-next-line no-new
        new OrbitControls(camera, renderer.domElement);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div className={classNames(classes.GamePage, {}, [className])}>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default GamePage;
