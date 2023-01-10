import { Component, OnInit } from '@angular/core';
declare var Shader: any;
declare var vertShader: any;
declare var fragShader: any;
declare var fragShaderLighting: any;
declare var fragShaderMIP: any;
declare var fragShaderGradients: any;
declare var ArcballCamera: any;
declare var blurVertShader: any;
declare var blurFragShader: any;
declare var sobelFragShader: any;
declare var nifti: any;
declare var Controller: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(Shader)
    console.log(vertShader)
    console.log(fragShader)
    console.log(fragShaderLighting)
    console.log(fragShaderMIP)
    console.log(fragShaderGradients)
    console.log(ArcballCamera)
    console.log(blurVertShader)
    console.log(blurFragShader)
    console.log(sobelFragShader)
    console.log(nifti)
    console.log(Controller)
  }

}
