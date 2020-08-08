// import '../style/style.css';
// class NPC {
//     constructor(ctx, speed, health, sprites, spritesCoord ,initX, initY, initDirection = 'right', initStep = 'calm') {
//         this.ctx = ctx;

//         this.speed = speed;
//         this.health = health;

//         this.sprites = sprites;
//         this.spritesCoord = spritesCoord;
//         this.left = {
//             calm: this.spritesCoord.left.calm,
//             leftFoot: this.spritesCoord.left.leftFoot,
//             rightFoot: this.spritesCoord.left.rightFoot
//         };
//         this.right = {
//             calm: this.spritesCoord.right.calm,
//             leftFoot: this.spritesCoord.right.leftFoot,
//             rightFoot: this.spritesCoord.right.rightFoot
//         };

//         this.x = initX;
//         this.y = initY;

//         this.direction = initDirection;
//         this.step = initStep;
//     }

//     move(direction) {
//         if (direction) {
//             this.direction = direction;
//             if (this.step === 'calm') {
//                 this.step = 'rightFoot';
//             } else {
//                 this.step = this.step === 'rightFoot' ? 'leftFoot' : 'rightFoot';
//             }
//         } else {
//             this.step = 'calm';
//         }
//         if (direction) {
//             this.direction === 'right' ? (this.x += this.speed) : (this.x -= this.speed);
//         }
//         this.moving();
//     }

//     moving() {
//         const spriteCoord = this[this.direction][this.step];
//         this.ctx.drawImage(this.sprites, spriteCoord.sX, spriteCoord.sY, spriteCoord.sWidth, spriteCoord.sHeight, this.x, this.y, spriteCoord.dWidth, spriteCoord.dHeight);
//     }
// }


// document.addEventListener('DOMContentLoaded', function() {
//     const deg = 6;
//     const hr = document.querySelector('#hr');
//     const mn = document.querySelector('#mn');
//     const sc = document.querySelector('#sc');

//     function updateClock() {
//         let day = new Date();
//         let hh = day.getHours() * 30;
//         let mm = day.getMinutes() * deg;
//         let ss = day.getSeconds() * deg;
    
//         hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
//         mn.style.transform = `rotateZ(${mm}deg)`;
//         sc.style.transform = `rotateZ(${ss}deg)`;
//         window.requestAnimationFrame(updateClock);
//     }

//     window.requestAnimationFrame(updateClock);

//     // Audio
//     const sound = new Audio();
//     sound.src = "./megalovania.mp3";
//     const on = document.querySelector('#on');
//     const off = document.querySelector('#off');
//     on.addEventListener('click', (e) => {
//         sound.play();
//         loop();
//         document.querySelector('.clock-container').style.display = 'none';
//         document.querySelector('.game-container').style.display = 'flex';
//     });
//     off.addEventListener('click',  () => {
//         sound.pause();
//         document.querySelector('.clock-container').style.display = 'flex';
//         document.querySelector('.game-container').style.display = 'none';
//     });
//     sound.addEventListener('ended', () => {
//         sound.remove();
//     });

//     // Game
//     const cvs = document.getElementById("canvas");
//     const ctx = cvs.getContext("2d");

//     const sprite = new Image();
//     sprite.src = "sprites.png";

//     const player = new NPC(ctx, 12, 40, sprite, {
//         left: {
//             calm: {
//                 sX: 160,
//                 sY: 450,
//                 sWidth: 18,
//                 sHeight: 33,
//                 dWidth: 27,
//                 dHeight: 48
//             },
//             leftFoot: {
//                 sX: 135,
//                 sY: 451,
//                 sWidth: 22,
//                 sHeight: 32,
//                 dWidth: 33,
//                 dHeight: 48
//             },
//             rightFoot: {
//                 sX: 109,
//                 sY: 451,
//                 sWidth: 22,
//                 sHeight: 32,
//                 dWidth: 33,
//                 dHeight: 48
//             }
//         },
//         right: {
//             calm: {
//                 sX: 102,
//                 sY: 406,
//                 sWidth: 18,
//                 sHeight: 33,
//                 dWidth: 27,
//                 dHeight: 48
//             },
//             leftFoot: {
//                 sX: 151,
//                 sY: 407,
//                 sWidth: 22,
//                 sHeight: 32,
//                 dWidth: 33,
//                 dHeight: 48
//             },
//             rightFoot: {
//                 sX: 125,
//                 sY: 407,
//                 sWidth: 22,
//                 sHeight: 32,
//                 dWidth: 33,
//                 dHeight: 48
//             }
//         }
//     }, 50, 320);

//     let currentKey = null;
//     let allowRerender = false;

//     document.addEventListener('keydown', (e) => {
//         switch(e.key) {
//             case 'ArrowRight':
//                 currentKey = 'right';
//                 e.preventDefault();
//                 break;
//             case 'ArrowLeft':
//                 currentKey = 'left';
//                 e.preventDefault();
//                 break;
//             case 'ArrowUp':
//                 currentKey = 'up';
//                 e.preventDefault();
//                 break;
//             case 'ArrowDown':
//                 currentKey = 'down';
//                 e.preventDefault();
//                 break;
//         }
//     });

//     document.addEventListener('keyup', (e) => {
//         currentKey = null;
//         e.preventDefault();
//     });
    
//     function draw() {
//         ctx.fillStyle = "#091921";
//         ctx.fillRect(0, 0, cvs.width, cvs.height);
//         player.move(currentKey);
//     }

//     function update() {

//     }
    
//     let frames = 0;
//     function loop() {
//         if (allowRerender) {
//             update();
//             draw();
//             frames++;
//             allowRerender = false;
//         }
//         window.requestAnimationFrame(loop);
//     }

//     const frameControler = () => {
//         setInterval(() => {
//             allowRerender = true;
//         }, 220);
//     }
    
//     loop();
//     frameControler();
// });