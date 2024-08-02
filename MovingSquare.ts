class MovingSquare {

    private movementDirection: MovementDirection = MovementDirection.UP;

    private x: number;
    private y: number;

    constructor(startingX: number, startingY: number) {
        this.x = startingX;
        this.y = startingY;

        this.move(this.x, this.y);

        input.onButtonPressed(Button.A, () => movingSquare.onButtonAPressed());
        input.onButtonPressed(Button.B, () => movingSquare.onButtonBPressed());
    }

    private redraw() {
        basic.clearScreen();
        led.plot(this.x, this.y);
    }

    private move(x: number, y: number) {
        this.x = x;
        this.y = y;

        this.redraw();
    }

    public onButtonAPressed() {
        this.movementDirection = (this.movementDirection + 1) % 4
    }

    public onButtonBPressed() {
        const angleDegrees = 90.0 - this.movementDirection * 90;
        const angleRadians = angleDegrees * Math.PI / 180.0;

        const xMovement = Math.round(Math.cos(angleRadians));
        const yMovement = Math.round(Math.sin(angleRadians));

        this.move(this.x + xMovement, this.y + yMovement);
    }
}
