( () => {

    const ok = [];

// before start, snake is in start position
    ok.push(snakeEquals(snake[0], {x: 10, y: 5}));

// after one step, snake has moved up
    nextBoard();
    ok.push(snakeEquals(snake[0], {x: 10, y: 4}));

// before eating food, snake is of size 4
    ok.push(snake.length === 4);

// after eating food, snake has grown in size
    food = {x: 10, y: 3};
    nextBoard();
    ok.push(snake.length === 5);

// current direction is north
    ok.push(direction === north);

// when I go clockwise, I end up east
    changeDirection(clockwise);
    ok.push(direction === east);

// going counterclockwise, we end up north again
    changeDirection(countercw);
    ok.push(direction === north);

    report('snake', ok);

})  ();