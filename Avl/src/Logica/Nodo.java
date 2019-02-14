/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Logica;

/**
 *
 * @author david
 */
public class Nodo {
    public int info, bal;
    public Nodo izq, der;

    public Nodo(int dato) {
        info = dato;
        bal = 0;
        izq = der = null;
    }
    public int nodosCompletos(Nodo n) {
        if (n == null) {
            return 0;
        } else {
            if (n.izq != null && n.der != null) {
                return nodosCompletos(n.izq) + nodosCompletos(n.der) + 1;
            }
            return nodosCompletos(n.izq) + nodosCompletos(n.der);
        }
    }
    
    
}
