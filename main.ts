const movingSquare = new MovingSquare(2, 2);

input.onButtonPressed(Button.A, () => movingSquare.onButtonAPressed());
input.onButtonPressed(Button.B, () => movingSquare.onButtonBPressed());
