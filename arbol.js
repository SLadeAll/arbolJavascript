class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.hijoIz = null;
        this.hijoDe = null;
    }

}
class ArblolBinario {
    constructor() {
        this.raiz = null;
    }
    agregate(n, r) {
        if (n.dato < r.dato) {
            if (r.hijoIz == null)
                r.hijoIz = n;
            else
                this.agregate(n, r.hijoIz);
        } else {
            if (r.hijoDe == null)
                r.hijoDe = n;
            else
                this.agregate(n, r.hijoDe);

        }

    }
    agregar(nuevo) {
        if (this.raiz == null){
            this.raiz = nuevo;
            
        }
        else
            this.agregate(nuevo, this.raiz);
    }
    
    inOrder(){
        if(this.raiz==null)
            return " ";
        else
            return this.inO(this.raiz);
    }
    inO(r){
        var c = " ";
        if(r.hijoIz != null)
        c+=this.inO(r.hijoIz)+" ";

        c+=r.dato;
        if(r.hijoDe != null)
            c+=this.inO(r.hijoDe)+" ";
        
        return c;
    }
}
var arbol= new ArblolBinario();
var nuevo= new Nodo(25);
var nuevo1= new Nodo(32);
var nuevo2 = new Nodo(10);
var nuevo3 = new Nodo(5); 
var nuevo5 = new Nodo(7);
var nuevo4 = new Nodo(24); 

arbol.agregar(nuevo);
arbol.agregar(nuevo1);
arbol.agregar(nuevo2);
arbol.agregar(nuevo3);
arbol.agregar(nuevo5);
arbol.agregar(nuevo4);


console.log(arbol.inOrder());
