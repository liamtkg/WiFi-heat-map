function drawHeatMap(ctx, canvas, points) {

    if (points.length === 0) {
        return;
    }


    let imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
    );


    let pixels = imageData.data;


    for (let y = 0; y < canvas.height; y += 4) {

        for (let x = 0; x < canvas.width; x += 4) {


            let total = 0;
            let weight = 0;


            points.forEach(point => {


                let distance = Math.sqrt(
                    Math.pow(x - point.x, 2) +
                    Math.pow(y - point.y, 2)
                );


                let influence = 1 / (distance + 50);


                total += point.value * influence;

                weight += influence;


            });


            let strength = total / weight;


            let colour = getHeatColour(strength);


            for (let yy = 0; yy < 4; yy++) {

                for (let xx = 0; xx < 4; xx++) {


                    let index =
                    ((y + yy) * canvas.width + (x + xx)) * 4;


                    pixels[index] = colour.r;
                    pixels[index + 1] = colour.g;
                    pixels[index + 2] = colour.b;
                    pixels[index + 3] = 90;


                }
            }

        }

    }


    ctx.putImageData(
        imageData,
        0,
        0
    );

}



function getHeatColour(value) {


    // Value is 0-100 quality score


    if (value >= 75) {

        return {
            r:0,
            g:255,
            b:0
        };

    }


    if (value >= 50) {

        return {
            r:255,
            g:255,
            b:0
        };

    }


    if (value >= 25) {

        return {
            r:255,
            g:165,
            b:0
        };

    }


    return {

        r:255,
        g:0,
        b:0

    };


}
