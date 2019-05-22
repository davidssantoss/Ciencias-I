/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Logica;

/**
 *
 * @author estudiantes
 */
public class Lista {
    public Nodo cabeza;
    public Nodo q;
    public Nodo s;
    
    public Lista() {
        cabeza = null;
    }
    // Inserta un nodo en la lista
    public Nodo insertar(Nodo p, int d){       
        q = null;
        s = p;
        while (s != null && d > s.info) {            
            if (s.info == d) {
                return null;
            }
            q = s;
            s = s.sig;
        }
        Nodo n = new Nodo(d);
        if (q == null) {
            n.sig = p;
            p = n;            
        }
        else if (s == null) {
            q.sig = n;
        }
        else{
            n.sig = s;
            q.sig = n;
        }
        return p;
    }
    
    // Retira un nodo de la lista
    public int retirar(int d){
        return 1;
    }
    
    //Imprime la lista
    public void imprimir(){
        q = cabeza;
        while (q != null) {
            System.out.println(q.info);
            q = q.sig;
        }
    }
    public int buscar(int d){
        q = cabeza;
        while (q != null && q.info < d) {            
            q = q.sig;
        }
        if (q != null && q.info == d) {
            return 1;
        }
        else{
            return -1;
        }
    }
    
    // dibuja la lista
    public void dibujar(){
        
    }  
}
