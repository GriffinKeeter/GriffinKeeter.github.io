let maze = {
	res: 6,
	arr: [],
	neighbors: [[-1,0],[1,0],[0,-1],[0,1]],
	goal: [0,0],
	addWall: function(y, x){//recursive
		this.arr[y][x] = 1;
		let ind = [0,1,2,3];
		this.shuffle(ind);
		for(let n = 0; n < 4; n ++){
			let n_x = x + this.neighbors[ind[n]][0];
			let n_y = y + this.neighbors[ind[n]][1];
			if(this.numNeighbors(n_y, n_x)==1){//in grid and has 1 neighbor
				this.addWall(n_y, n_x);
				
				if(n_y+n_x>this.goal[0]+this.goal[1]){
					this.goal = [n_y, n_x];
				}
			}
		}
	},
	create: function(){
		this.arr = new Array(this.res);
		for(let y = 0; y < this.res; y ++){
			this.arr[y] = new Array(this.res);
			for(let x = 0; x < this.res; x ++){
				this.arr[y][x] = 0;
			}
		}
		this.addWall(0,1);
	},
	numNeighbors: function(y, x){//returns number of neighbors that are walls
		let num_nbrs = 0;

		for(let n = 0; n <4; n ++){//x index
			n_x = x + this.neighbors[n][0];
			n_y = y + this.neighbors[n][1];
			if(n_x >= 0 && n_x < this.res && n_y >= 0 && n_y < this.res){
				if(this.arr[n_y][n_x]==1){
					num_nbrs ++;
				}
			}else{
				num_nbrs ++;
			}
		}
		return (num_nbrs);
	},
	shuffle: function(arr){
		for(let i = arr.length - 1; i > 0; i --){
			const j = Math.floor(Math.random() * (i + 1));
        		[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}
};