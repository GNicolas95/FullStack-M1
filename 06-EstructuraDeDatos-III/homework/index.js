function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  
  BinarySearchTree.prototype.insert = function (value) {
    let subTree = new BinarySearchTree(value);
  
    // ES MENOR SE VA A LA IZQ
    if (value < this.value) {
      if (this.left === null) {
        this.left = subTree;
      } else {
        this.left.insert(value);
      }
    }
  
    // ES MAYOR SE VA A LA DERECHA
  
    if (value >= this.value) {
      if (this.right === null) {
        this.right = subTree;
      } else {
        this.right.insert(value);
      }
    }
  };
  
  let arbolito = new BinarySearchTree(5);
  console.log(arbolito);
  
  arbolito.insert(1);
  
  console.log(arbolito);
  
  arbolito.insert(16);
  
  console.log(arbolito);