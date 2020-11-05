let player = {
	pos: [0,1],
	moveLeft: function(){
		nx = this.pos[1]-1;
		ny = this.pos[0];
		if(maze.arr[ny][nx]==1){
			this.pos[1] = nx;
		}
	},
	moveDown: function(){
		nx = this.pos[1];
		ny = this.pos[0]+1;
		if(maze.arr[ny][nx]==1){
			this.pos[0] = ny;
		}
	},
	moveRight: function(){
		nx = this.pos[1]+1;
		ny = this.pos[0];
		if(maze.arr[ny][nx]==1){
			this.pos[1] = nx;

		}
	},
	moveUp: function(){
		nx = this.pos[1];
		ny = this.pos[0]-1;
		if(maze.arr[ny][nx]==1){
			this.pos[0] = ny;
			
		}
	},
};