// 图的顶点存储在数组中，图的相邻顶点存储在邻接表中，需要用到字典
// 图的广度优先搜索与深度优先搜索很相似，但待访问顶点列表的数据结构不同
// 广度用队列，深度用栈
// 字典结构
function Dictionary () {
	var items = {};

	// has 和 set 方法
	this.has = function (key) {
		return key in items;
	}
	this.set = function (key, value) {
		items[key] = value;
	}

	// delete 方法
	this.delete = function () {
		if (this.has(key)) {
			delete items[key];
			return true;
		}
		return false;
	};

	// get 和 values 方法
	this.get = function (key) {
		return this.has(key) ? items[key] : undefined;
	};
	this.values = function () {
		var values = [];
		for (var k in items) {
			if (this.has(k)) {
				values.push(items[k]);
			}
		}
		return values;
	};

	// clear、size、keys、getItems 方法
	this.clear = function () {
		items = {};
	}
	this.size = function () {
		return Object.keys(items).length;
	}
	this.keys = function () {
		return Object.keys(items);
	}
	this.getItems = function () {
		return items;
	}
}

// 队列结构
function Queue () {
    let items = [];

    // 向队列尾部添加一个新项
    this.enqueue = function (element) {
        items.push(element);
    }

    // 从队列移除元素
    this.dequeue = function () {
        return items.shift();
    }

    // 查看队列头元素
    this.front = function () {
        return items[0];
    }

    // 检查队列是否为空
    this.isEmpty = function () {
        return items.length == 0;
    }

    // 检查队列长度
    this.size = function () {
        return items.length;
    }

    // 打印队列元素
    this.print = function () {
        console.log(items.toString());
    }
}

// 堆栈结构
function  Stack () {
    let items = [];
    // push 方法
    this.push = function (element) {
        items.push(element);
    };
    // pop 方法
    this.pop = function () {
        return items.pop();
    };
    // 只能用这两种方法增删

    // 查看栈顶元素 peek 方法
    this.peek = function () {
        return items[items.length - 1];
    };
    // 检查栈是否为空 isEmpty 方法
    this.isEmpty = function () {
        return items.length == 0;
    };
    // 使用size代替length，判断栈的长度
    this.size = function () {
        return items.length;
    };
    // 清空栈 clear 方法
    this.clear = function () {
        items = [];
    };
    // 把栈所有内容打印 print 方法
    this.print = function () {
        console.log(items.toString())
    }
}



// 创建图类
function Graph () {
    var vertices = [];
    var adjList = new Dictionary();

    // 向图中添加一个新的顶点
    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []);
    }

    // 添加一条边
    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    // 方便控制台查看
    this.toString = function () {
        var s = '';
        for (var i = 0; i < vertices.length; i ++) {
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]);
            for (var j = 0; j < neighbors.length; j ++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    };

    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i ++) {
            color[vertices[i]] = 'white';
        }
        console.log(color)
        return color;
    }

    // 广度优先搜索 BFS
    this.bfs = function (v, callback) {
        var color = initializeColor(),
            queue = new Queue();
            queue.enqueue(v);
        
        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
                color[u] = 'grey';
            for (var i = 0; i < neighbors.length; i ++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    };


}

var graph = new Graph(); 
var myVertices = ['A','B','C','D','E','F','G','H','I']; //{7} 
for (var i = 0; i < myVertices.length; i ++){ //{8} 
    graph.addVertex(myVertices[i]); 
} 
graph.addEdge('A', 'B'); //{9} 
graph.addEdge('A', 'C'); 
graph.addEdge('A', 'D'); 
graph.addEdge('C', 'D'); 
graph.addEdge('C', 'G'); 
graph.addEdge('D', 'G'); 
graph.addEdge('D', 'H'); 
graph.addEdge('B', 'E'); 
graph.addEdge('B', 'F'); 
graph.addEdge('E', 'I'); 
console.log(graph.toString());
function printNode(value){ //{16} 
    console.log('Visited vertex: ' + value); //{17} 
} 
graph.bfs(myVertices[0], printNode); //{18} 