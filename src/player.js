import React, { Component } from 'react';
import Tone from 'tone';
import waveformplaylist from 'waveform-playlist';
import ee from 'event-emitter'



export default class player extends Component {
    constructor(){
        super();
        this.state = {
            playing: false,
            tracks:[
              {
                  Name:"Analog.mp3",
                  Duration:2.0375510204081633,
                  start:2.02392578125,
                  track:0,
                  vol:null
              },
              {
                  Name:"DeepIntro.mp3",
                  Duration:6.112625,
                  start:3.82080078125,
                  track:0,
                  vol:null
              },
              {
                  Name:"Analog.mp3",
                  Duration:2.0375510204081633,
                  start:5,
                  track:0,
                  vol:null
              },  
              {
                  Name:"Analog.mp3",
                  Duration:2.0375510204081633,
                  start:5,
                  track:1,
                  vol:null
              },
              {
                  Name:"DeepIntro.mp3",
                  Duration:6.112625,
                  start:10,
                  track:1,
                  vol:null
              },
              {
                  Name:"Analog.mp3",
                  Duration:2.0375510204081633,
                  start:3,
                  track:1,
                  vol:null
              },
              {
                  Name:"Analog.mp3",
                  Duration:2.0375510204081633,
                  start:6,
                  track:1,
                  vol:null
              },
              {
                  Name:"DeepIntro.mp3",
                  Duration:6.112625,
                  start:9,
                  track:1,
                  vol:null
              },
              {
                  Name:"Analog.mp3",
                  Duration:2.0375510204081633,
                  start:7,
                  track:1,
                  vol:null
              }
      ]    
        }
        // const playlist = waveformplaylist.init({

        //     mono:true,
        // });
        var playlist =new waveformplaylist(
            {container: document.getElementById('root')},
            ee()
            )
        playlist.load([{
            src: '/music/Analog.mp3',
            name: 'Drums',
            start: 8.5,
        }])
        var event= playlist.getEventEmitter();
        console.log( event.__ee__.automaticscroll);
        
        // Tone.Transport.bpm.value = 108;
        // Tone.Transport.loop = false;

        // this.player()
        
        // var p = new Tone.Player('/music/1976.mp3', ()=>console.log('loaded')
        // ).toMaster().sync().start(0);

        // var p = new Tone.Player('/music/Ahh.mp3', ()=> {console.log('loaded2')
        // }).toMaster().sync().start(2);

        // var pn = new Tone.Player('/music/Tabla.mp3',()=>{console.log('loaded3')
        // }).toMaster().sync().start(3)
       
    }

    player=()=>{
     
     
this.state.tracks.map((i)=>{
  console.log(i);
  
  let play = new Tone.Player(
      `/music/${i.Name}`, ()=> {
        console.log('loaded');
      }
        
      ).toMaster().sync().start(i.start)

      
      play.volume.value =parseInt(-i.vol)
      console.log(play.volume.value);
      
      return play;
  })
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
