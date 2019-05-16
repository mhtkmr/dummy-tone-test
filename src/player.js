import React, { Component } from 'react';
import Tone from 'tone';



export default class player extends Component {
    constructor(){
        super();
        this.state = {
            playing: false
        }
    
        Tone.Transport.bpm.value = 108;
        Tone.Transport.loop = false;
       
        var p1 = new Tone.Player('/music/1976.mp3', ()=>console.log('loaded')
        ).toMaster().sync().start(0);

        // var p2 = new Tone.Player('/muic/Ahh.mp3', ()=> {console.log('loaded2')
        // }).toMaster().sync().start(2);

        var p3 = new Tone.Player('/music/Tabla.mp3',()=>{console.log('loaded3')
        }).toMaster().sync().start(3)
       
    }
    playMusic = () =>{
        if(this.state.playing===false)
           { Tone.Transport.start();
            this.setState({playing: true});}
        else if(this.state.playing === true) {
            Tone.Transport.pause();
            this.setState({playing: false})
        }
    }
    
    
  render() {
    return (
      <div>
        <button  onClick= {this.playMusic}> YAY</button>
      </div>
    )
  }
}
