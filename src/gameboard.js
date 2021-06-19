function gameboard() {
  // Grid is a 10x10 array, with (0, 0) on  the top left corner and
  // (9, 9) on the bottom right corner
  let grid = new Array(10).fill(new Array(10));

  function placeShip(coords, ship, direction) {
    const x = coords[0];
    const y = coords[1];

    if (direction === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        if (x > 9 || y + i > 9) {
          throw new Error("Ship placement does not fit on board");
        }
        grid[x][y + i] = true;
      }
    } else if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        if (x + i > 9 || y > 9) {
          throw new Error("Ship placement does not fit on board");
        }
        grid[x + i][y] = true;
      }
    }
  }

  return { grid, placeShip };
}

export default gameboard;
