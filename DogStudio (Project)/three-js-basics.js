import * as THREE from 'three';


// creating our scene
const scene = new THREE.Scene(); // our virtual world
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); // camera for our virtual camera
// fov = 75: field of view vertically
// window.innerWidth / window.innerHeight: browser's inner width and height
// near = 0.1: how near the objct can come before our camera will start ignoring it 


// our model
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); // our cube and it's width, height ad depth
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); // apperance of our cube
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


// this works every 1 sec (16 times every sec)
const renderer = new THREE.WebGLRenderer(); // renderer of our scene and cube
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

function animate( time ) {

  renderer.render( scene, camera );

  requestAnimationFrame(animate)

}

animate()