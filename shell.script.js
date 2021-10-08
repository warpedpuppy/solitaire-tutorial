

(function(){

    const canvas = document.querySelector('canvas'),
          ctx = canvas.getContext('2d');


    let cardImage = new Image();
    cardImage.src = '/bmps/card_bmps/ace_hearts.png';

    let AceHearts = {
        img: cardImage,
        x: 0,
        y: 0
    }
    let counter = 0;

    function animate () {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let { img, x, y } = AceHearts;

        ctx.drawImage(img, x, y);
        requestAnimationFrame(animate);

        // counter += 2;
        // ctx.drawImage(img, x += counter, y += counter);
        // setTimeout(animate, 200)
       

    }
    animate();
})()