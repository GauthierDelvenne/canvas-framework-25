import {Rectangle} from "./framework25/shapes/Rectangles";
import {Circle} from "./framework25/shapes/Circle";
import {randomInt} from "./framework25/helpers/random";
import {settings} from "./settings";
import {Rgba} from "./framework25/colors/Rgba";
import {Hsl} from "./framework25/colors/Hsl";

const canvas = document.getElementById('test-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// const rect1 = new Rectangles(ctx, {x: canvas.width / 2, y: canvas.height / 2},'deeppink', 80, 80);
// rect1.draw();
// const circle1 = new Circle(ctx,{x:canvas.width/2, y:canvas.height/2}, "blue", 30);
// circle1.draw();
const hue = randomInt(0,360)

for (let i = 0; i < 40; i++) {
    const radius = randomInt(settings.circle.radius.min, settings.circle.radius.max)
    const circle1 = new Circle(ctx, {
        x: randomInt(radius, canvas.width - radius),
        y: randomInt(radius, canvas.height - radius)
    }, new Hsl(hue,randomInt(0,100),randomInt(0,100)), radius);
    circle1.draw();
}

