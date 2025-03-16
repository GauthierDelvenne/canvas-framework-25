import {iPosition} from "../iPosition";
import {Rgba} from "../colors/Rgba";
import {Hsl} from "../colors/Hsl";

export abstract class Shape {
    ctx: CanvasRenderingContext2D;
    position: iPosition;
    color: Rgba | Hsl;


    protected constructor(ctx: CanvasRenderingContext2D, position: iPosition, color: Rgba | Hsl) {
        this.ctx = ctx;
        this.position = position;
        this.color = color;
    }
}