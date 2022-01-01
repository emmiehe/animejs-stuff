import anime from './anime/lib/anime.es.js';

let tl = anime.timeline({
  duration: 750,
  loop: true,
  direction: 'alternate'
});

function animate(gridShape, x, y, z) {
  return {
    targets: '.square',
    translateX: anime.stagger(x, {grid:gridShape, from: 'center', axis: 'x'}),
    translateY: anime.stagger(y, {grid:gridShape, from: 'center', axis: 'y'}),
    rotateZ: anime.stagger([0, z], {grid:gridShape, from: 'center', axis: 'x'}),
    delay: anime.stagger(50, {grid:gridShape, from: 'center'}),
    easing: 'easeInOutQuad'
  }
}

let x = 5, y = 5, z = 0;
let a = x, b = y, c = z;

for (let i=0; i<6; i++) {
  tl = tl.add(animate([15, 5], a, b, c));
  a += x;
  b += y;
  c += z;
}
