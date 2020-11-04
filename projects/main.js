let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

main = function(){
	maze.create();
	display();
	document.addEventListener("keydown", (e)=>{
		switch(e.keyCode){
			case 37:
				player.moveLeft();
			break;
			case 38:
				player.moveUp();
			break;
			case 39:
				player.moveRight();
			break;
			case 40:
				player.moveDown();
			break;
		}
		display();
		if(player.pos[0] == maze.goal[0] && player.pos[1] == maze.goal[1]){
			maze.res += 2;
			maze.create();
			player.pos = [0,1];
			document.getElementById("levelUp").play;
			display();
		}
	});
	
}

document.addEventListener("DOMContentLoaded", ()=>{
	main();
});


display = function(){
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canvas.width, canvas.height);
	ctx.fillStyle="white";
	let unit = canvas.width/maze.res;
	for(let y = 0; y < maze.res; y ++){
		for(let x = 0; x < maze.res; x ++){
			if(maze.arr[y][x]==1){
				ctx.fillRect(x*unit, y*unit, unit, unit);
			}
		}
	}
	//player
	ctx.fillStyle="blue";
	ctx.fillRect((player.pos[1]+0.1)*unit, (player.pos[0]+0.1)*unit, unit*0.8, unit*0.8);
	
	//goal
	ctx.fillStyle="red";
	ctx.fillRect((maze.goal[1]+0.1)*unit, (maze.goal[0]+0.1)*unit, unit*0.8, unit*0.8);
}