const canvas=document.querySelector('canvas')
const c=canvas.getContext('2d')
canvas.width=1024
canvas.height=576
const garvity=0.9
//importe une image mais il faux que le script soit de type module!!
import platform from'../platform.png'
import background from'../background.png'
import hills from'../hills.png'
import platformSmallTall from'../platformSmallTall.png'
import spriteRunLeft from'../spriteRunLeft.png'
import spriteRunRight from'../spriteRunRight.png'
import spriteStandLeft from'../spriteStandLeft.png'
import spriteStandRight from'../spriteStandRight.png'
class Player {
    constructor(){
     this.position={x:100,y:100} 
     this.width=66
     this.height=150
     this.velocity={x:0,y:0}
     this.speed= 10
     this.image=createImage(spriteStandRight)
     this.frames=0
     this.sprites={
         stand:{right:createImage(spriteStandRight),
        left:createImage(spriteStandLeft),
        cropwith:177,
    width:66},
        run:{right:createImage(spriteRunRight),
        left:createImage(spriteRunLeft),
    cropwith:341,
    width:127.875}
     }
     this.currentsprite= this.sprites.stand.right
     this.currentcropwith=this.sprites.stand
    }
    draw(){
        c.drawImage(
            this.currentsprite,
            this.currentcropwith*this.frames
            ,0
            ,this.currentcropwith
            ,400,
            this.position.x,
            this.position.y,
            this.width,
            this.height)

    }
    update(){
        this.frames++
        if((this.frames>59)&&(this.currentsprite===this.sprites.stand.right))this.frames=0
        else if((this.frames>29)&&(this.currentsprite===this.sprites.run.right))this.frames=0
        else if((this.frames>59)&&(this.currentsprite===this.sprites.stand.left))this.frames=0
        else if((this.frames>29)&&(this.currentsprite===this.sprites.run.left))this.frames=0
        this.draw()
        this.position.y+=this.velocity.y
        this.position.x+=this.velocity.x
        
        if(this.position.y+this.height+this.velocity.y<=canvas.height)
        {this.velocity.y+=garvity}
      
    }}
class Platform {
constructor({x,y,image}){
    this.position={
        x:x,
        y:y
    }

    this.image=image
    this.width= image.width
    this.height=image.height
   

}
draw(){
    c.drawImage(this.image,this.position.x,this.position.y)
}

}
class GenericObject {
    constructor({x,y,image}){
        this.position={
            x:x,
            y:y
        }
    
        this.image=image
        this.width= image.width
        this.height=image.height
       
    
    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
    
    }
function createImage(imageSrc){
    const image=new Image()
    image.src = imageSrc
    return image 
}   
    let genericObjects=[]
    let platforms=[]
    let player=new Player()
    const keys={right:{pressed:false},
    left:{pressed:false}}
    let scrollOfset=0
    let lastKey
function init(){ 
     genericObjects=[new GenericObject ({x:-1,y:-1,image:createImage(background)}),
        new GenericObject ({x:-1,y:-1,image:createImage(hills)})]
     platforms=[new Platform({x:createImage(platform).width*4+500+createImage(platform).width-createImage(platformSmallTall).width,y:270,image:createImage(platformSmallTall)}),
         new Platform({x:-1,y:470,image:createImage(platform)}),new Platform({x:createImage(platform).width-3,y:470,image:createImage(platform)}),
        new Platform({x:createImage(platform).width*2+200,y:470,image:createImage(platform)}),
        new Platform({x:createImage(platform).width*3+350,y:470,image:createImage(platform)}),
        new Platform({x:createImage(platform).width*4+500,y:470,image:createImage(platform)}),
        new Platform({x:createImage(platform).width*5+1000,y:470,image:createImage(platform)})
        ]
     player=new Player()
     scrollOfset=0
    }

function animate(){
c.clearRect(0,0,canvas.width,canvas.height)
requestAnimationFrame(animate)

c.fillStyle='white'
c.fillRect(0,0,canvas.width,canvas.height)
genericObjects.forEach((genericObject) =>{
    genericObject.draw()
})
platforms.forEach((platform) =>{
    platform.draw()
})

player.update()
//mouvement du player et ecron
if(keys.right.pressed&&(player.position.x<400)){player.velocity.x=player.speed}
else if((keys.left.pressed&&(player.position.x>100))||(keys.left.pressed&&(scrollOfset===0)&&(player.position.x>0))){player.velocity.x= -player.speed}
else {player.velocity.x=0
if (keys.right.pressed) {
    scrollOfset+=player.speed
    platforms.forEach((platform) =>{
    platform.position.x-= player.speed
})
genericObjects.forEach((genericObject) =>{
    genericObject.position.x-= player.speed*0.66
})
}

else if(keys.left.pressed&&(scrollOfset>0)) {
    scrollOfset-=player.speed
    platforms.forEach((platform) =>{
    platform.position.x+=player.speed
})
genericObjects.forEach((genericObject) =>{
    genericObject.position.x+= player.speed*0.66
})
}


}
//contact avec le platform
platforms.forEach((platform)=>{
    if((player.position.y + player.height<= platform.position.y)&&
(player.position.y+player.height+player.velocity.y>=platform.position.y)
&&(player.position.x+player.width>=platform.position.x)
&&(player.position.x<=platform.position.x+platform.width))
 player.velocity.y=0
})
//sprites change
if((keys.right.pressed)&&(lastKey==='right')&&(player.currentsprite!==player.sprites.run.right)){
    player.frames=1
    player.currentsprite=player.sprites.run.right
    player.currentcropwith=player.sprites.run.cropwith
    player.width=player.sprites.run.width
} else if((keys.left.pressed)&&(lastKey==='left')&&(player.currentsprite!==player.sprites.run.left)){
    player.frames=1
    player.currentsprite=player.sprites.run.left
    player.currentcropwith=player.sprites.run.cropwith
    player.width=player.sprites.run.width
}else if((!keys.left.pressed)&&(lastKey==='left')&&(player.currentsprite!==player.sprites.stand.right)){
    player.frames=1
    player.currentsprite=player.sprites.stand.left
    player.currentcropwith=player.sprites.stand.cropwith
    player.width=player.sprites.stand.width
}
else if((!keys.right.pressed)&&(lastKey==='right')&&(player.currentsprite!==player.sprites.stand.right)){
    player.frames=1
    player.currentsprite=player.sprites.stand.right
    player.currentcropwith=player.sprites.stand.cropwith
    player.width=player.sprites.stand.width
}


//win condition
if (scrollOfset>=createImage(platform).width*5+1000) init()


//lose condition 
if (player.position.y> canvas.height) init()
}

init()
animate()
window.addEventListener('keydown',function({ key}){
   switch(key){
       case 'ArrowRight':keys.right.pressed=true 
       lastKey='right';break;
           case 'ArrowLeft':keys.left.pressed=true
           lastKey='left';break;
               case 'ArrowDown':;break;
                   case 'ArrowUp':if(player.velocity.y===0)player.velocity.y-=20;break;
   }
})
window.addEventListener('keyup',function({ key}){
    switch(key){
        case 'ArrowRight':keys.right.pressed=false
       
       ;break;
            case 'ArrowLeft':keys.left.pressed=false;break;
                case 'ArrowDown':;break;
                    case 'ArrowUp':;break;
    }
 })
 console.log(player.velocity.y)
