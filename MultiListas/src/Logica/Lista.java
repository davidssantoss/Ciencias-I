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
    NodoHor cab;
    NodoVer n;

    public Lista() {
    }
    
    public int insertarHor(String nom, int x){
        NodoHor p;
        p = cab;
        while (p != null && p.idProp < x) {            
            p = p.sig;
        }
        if (p == null) {
            System.out.println("No existe");
        }
        if (p.idProp == x) {
            NodoVer s,q;
            s = null;
            q = p.abajo;
            while (q != null) {                
                s = q;
                q = q.abajo;
            }
            if (s == null) {
                NodoVer n = new NodoVer(nom, x, x);
                p.abajo = n;
                return 1;
            }
            NodoVer j = new NodoVer(nom, x, x);
            s.abajo = n;
            return 1;
        }else{
            System.out.println("No lo encontro");
            return -1;
        }
        
    }
    public int listar(int x){
        NodoHor p;
        p = cab;
        while (p != null && p.idProp < x) {
            p = p.sig;
        }
        if (p == null) {
            System.out.println("No existe");
            return -1;
        }
        if (p.idProp == x) {
            NodoVer q = p.abajo;
            while (q != null) {                
                System.out.println(q.dir);
                q = q.abajo;
            }
        }
        else{
            System.out.println("No existe");
            return -1;
        }
        return 1;
    }
    
}
