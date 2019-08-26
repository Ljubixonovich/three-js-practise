import React, { Component } from 'react';
import * as THREE from "three";

import './App.css';

class App extends Component {

   componentDidMount() {
      console.log('componentDidMount');
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      var renderer = new THREE.WebGLRenderer({antialias: true});
      // renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.setClearColor('#a5a5a5');
      renderer.setSize(  window.innerWidth/2, window.innerHeight/2 );
      // document.body.appendChild( renderer.domElement );
      // use ref as a mount point of the Three.js scene instead of the document.body
      this.mount.appendChild( renderer.domElement );
      var geometry = new THREE.BoxGeometry( 1, 1, 1 );
      var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
      var cube = new THREE.Mesh( geometry, material );
      scene.add( cube );
      camera.position.z = 5;

      window.addEventListener('resize', () => {
         renderer.setSize(window.innerWidth, window.innerHeight);
         camera.aspect =  window.innerWidth/window.innerHeight;

         camera.updateProjectionMatrix();
      });

      var animate = function () {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      //   cube.rotation.z += 0.01;
        renderer.render( scene, camera );
      };
      animate();
    }

    lj = () => {}

    render() {
         return (
            <div ref={ref => (this.mount = ref)}></div>
         );
    }
}


export default App;
