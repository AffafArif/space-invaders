const scoreEl = document.querySelector('#scoreEl') //affaf
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024 //affaf
canvas.height = 576 //affaf changed value

class Player{
    constructor() {
        this.rotation = 0
        this.velocity ={
            x: 0,
            y: 0
        }

        this.rotation = 0
        this.opacity = 1 //affaf

        const image = new Image()
        image.src = './img/spaceship.png'
        image.onload = () => {
            const scale = 0.15
            this.image = image
            this.width= image.width * scale
            this.height= image.height * scale
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height - this.height - 20
            }
        }
        
    }
    draw() {
        c.save()
        c.globalAlpha = this.opacity //affaf
        c.translate(player.position.x + player.width/2,
            player.position.y + player.height/2)
        c.rotate(this.rotation)
        c.translate(-player.position.x - player.width/2,
            -player.position.y - player.height/2)
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height)
        c.restore()
        
    }
    update() {
        if(this.image){
            this.draw()
            this.position.x += this.velocity.x
        }
    }
}


// in class particle 
class Particle{
    constructor({ position, velocity, radius, color, fades}){ //added fades affaf
      this.position = position
      this.velocity = velocity
      this.color = color
      this.radius = radius
      this.opacity = 1
      this.fades= fades //affaf

   }
   
   draw(){
     c.save()
     c.globalAlpha = this.opacity
     c.beginPath()
     c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
     c.fillStyle = this.color
     c.fill()
     c.closePath()
   }
   
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.fades) this.opacity -= 0.01
    }
}


//let frames = 0
//let randomInterval = Math.floor((Math.random()* 500) + 500)
let game ={
    over: false,
    active: true
}
let score = 0 //affaf
//above createparticle function
for (let i = 0; i < 100; i++) {
    particles.push(
      new Paricle({ 
        position : {
          x : Math.random() * canvas.width ,
          y : Math.random() * canvas.height
      },
        velocity: {
          x: 0 ,
          y: 0.3 ,
      },
      radius: Math.random() * 2, 
      color : 'white'
      })
    )   
}
function createParticles({object, color, fades}) {  //add fades 
    for (let i = 0; i < 15; i++) {
        particles.push(
          new Paricle({ 
            position : {
              x : object.position.x + object.width  / 2 ,
              y : object.position.y + object.heigth / 2
          },
            velocity: {
              x: (Math.random() - 0.5) *2 ,
              y: (Math.random() - 0.5) *2 ,
          },
          radius: Math.random() * 3, 
          color : color || '#BAA0DE',
          fades: true //affaf 
          })
        )   
    }
}


// function animate
function animate(){
    if (!game.active) return //affaf
    requestAnimationFrame(animate)

particles.forEach((particle, i)=> { //affaf start
    if (particle.position.y - particle.radius >=canvas.height) {
        particle.position.x = Math.random()*canvas.width
        particle.position.y = - particle.radius
    } //affaf end

    //if (particle.opacity <= 0) {
      //setTimeout(() =>{
        //particles.splice(i, 1)
      ..

console.log('you lose') //goes up 
setTimeout(() => {
    invaderProjectiles.splice(index, 1)
    player.opacity = 0 //affaf
    game.over = true //affaf
}, 0)

setTimeout(() => { //affaf 
    game.active = false
}, 2000)
createParticles({
    object : player,
    color: 'white',
    fades: true  //affaf
  })



// in remove invader and projectiles
if(invaderFound && projectileFound) {
    score += 100  //affaf
    console.log(score)
    scoreEl.innerHTML= score
    createParticles({
        object: invaderProjectiles,
        fades:true //affaf
    })



addEventListener('keydown',({ key }) => {
    if (game.over) return //affaf
    switch(key){
        case 'a':
            //console.log('left')
            keys.a.pressed=true
            break
        case 'd':
            //console.log('right')
            keys.d.pressed=true
            break
        case ' ':
            console.log('shoot')
            projectiles.push(
                new Projectile({
                    position:{
                        x:player.position.x + player.width / 2,
                        y:player.position.y
                    },
                    velocity:{
                        x:0,
                        y:-10
                    }
                })
            )
                /* console.log(projectiles) */
                break
    
        }
        
    } )
