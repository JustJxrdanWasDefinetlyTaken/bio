let o = document.createElement('div');
o.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:black;color:white;display:flex;justify-content:center;align-items:center;font-size:2rem;cursor:pointer;';
o.innerText = 'Click to enter...';
document.body.appendChild(o);

fetch('json/songs.json')
  .then(r => r.json())
  .then(songs => {
    function playRandom(prev) {
      let next;
      do {
        next = songs[Math.floor(Math.random() * songs.length)];
      } while (next === prev && songs.length > 1);
      let a = new Audio(next);
      a.onended = () => playRandom(next);
      a.play();
    }

    o.onclick = () => {
      playRandom();
      o.remove();
    };
  });