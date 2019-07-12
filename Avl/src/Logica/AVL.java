/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Logica;

import java.awt.Graphics;
import java.util.Stack;

/**
 *
 * @author david
 */
public class AVL {
    Nodo raiz;
    int fila;

    public AVL() {
        raiz = null;
    }
    void rDerecha(Nodo p, Nodo q){
        p.bal = 0;
        q.bal = 0;
        p.izq = q.der;
        q.der = p;
    }
    void rIzquierda(Nodo p, Nodo q){
        p.bal = 0;
        q.bal = 0;
        p.der = q.izq;
        q.izq = p;
    }
    Nodo drDerecha(Nodo p, Nodo q){
        Nodo r;
        
        r = q.der;
        q.der = r.izq;
        r.izq = q;
        p.izq = r.der;
        r.der = p;
        switch(r.bal) {
            case -1:
                q.bal = 1;
                p.bal = 0;
                break;
            case 0:
                q.bal = p.bal = 0;
                break;
            case 1:
                q.bal = 0;
                p.bal = -1;
                break;
        }
        r.bal = 0;
        return r;         
    }
    Nodo drIzquierda(Nodo p, Nodo q){
        Nodo r;
        r = q.izq;
        q.izq = r.der;
        r.der = q;
        p.der = r.izq;
        r.izq = p;
        switch(r.bal) {
            case -1:
                q.bal = 0;
                p.bal = 1;
                break;
            case 0:
                q.bal = p.bal = 0;
                break;
            case 1:
                q.bal = -1;
                p.bal = 0;
                break;
        }
        r.bal = 0;
        return r;
    }
    public int insAvl(int n){
        Nodo nuevo, p, q, s, pivote, pp;
        int llave, altura;
        nuevo = new Nodo(n);
        if (raiz == null) {
            raiz = nuevo;
            return (1); // el arbol tiene un solo nodo
        }
        pp = q = null;
        pivote = p = raiz;
        llave = nuevo.info;
        while (p != null) {            
            if (p.bal != 0) {
                pp = q;
                pivote = p;                
            }
            if (llave == p.info) {
                return (2);
            }else{
                q = p;
                if (llave < p.info) {
                    p = p.izq;
                }else{
                    p = p.der;
                }
            }            
        }
        if (llave < q.info) {
            q.izq = nuevo;
        }else{
            q.der = nuevo;
        }
        if (llave < pivote.info) {
            s = pivote.izq;
            altura = 1;
        }else{
            s = pivote.der;
            altura = -1;
        }
        p = s;
        while (p != nuevo) {            
            if (llave < p.info) {
                p.bal = 1;
                p = p.izq;
            }else{
                p.bal = -1;
                p = p.der;
            }
        }
        if (pivote.bal == 0) {
            pivote.bal = altura;
        }else if (pivote.bal + altura == 0){
            pivote.bal = 0;
        }else{
            if (altura == 1) {
                if(s.bal == 1){
                    rDerecha(pivote, s);
                }else{
                    s = drDerecha(pivote, s);
                }
            }else{
                if (s.bal == -1) {
                    rIzquierda(pivote, s);
                } else {
                    s = drIzquierda(pivote, s);
                }
            }
            if (pp == null) {
                raiz = s;
            }else if(pp.izq == pivote){
                pp.izq = s;
            }else{
                pp.der = s;
            }
        }
        return 1;
    }
    public Nodo raizArbol(){
        return raiz;
    }
    void initFila(){
        fila = 0;
    }
    public void inOrden(Nodo p, Graphics lienzo){
        if (p != null) {
            inOrden(p.izq, lienzo);
            lienzo.drawString("" + p.info + "  (bal): " + p.bal, 50, (++fila * 10));
            inOrden(p.der, lienzo);
        }
    }
    void preOrden(Nodo p, Graphics lienzo){
        if (p != null) {
            lienzo.drawString("" + p.info + " " + p.bal, 90, ++fila * 15);
            preOrden(p.izq, lienzo);
            preOrden(p.der, lienzo);
        }
    }
    void posOrden(Nodo p, Graphics lienzo){
        if (p != null) {
            posOrden(p.izq, lienzo);
            posOrden(p.der, lienzo);
            lienzo.drawString("" + p.info + " " + p.bal, 130, ++fila * 15);
        }
    }
    Nodo balDerecha(Nodo q, int [] terminar){
        Nodo t = null;
        switch(q.bal){
            case 1:
                q.bal = 0;
                break;
            case -1:
                t = q.der;
                switch(t.bal){
                    case 1:
                        t = drIzquierda(q, t);
                        break;
                    case -1:
                        rIzquierda(q, t);
                        break;
                    case 0:
                        q.der = t.izq;
                        t.izq = q;
                        t.bal= 1;
                        terminar[0] = 1;
                        break;
                }
                break;
            case 0:
                q.bal = -1;
                terminar[0] = 1;
                break;
        }
        return t;
    }
    Nodo balIzquierda(Nodo q, int [] terminar){
        Nodo t = null;
        switch(q.bal){
            case -1:
                q.bal = 0;
                break;
            case 1:
                t = q.izq;
                switch(t.bal){
                    case 1:
                        rDerecha(q, t);
                        break;
                    case -1:
                        t = drDerecha(q, t);
                        break;
                    case 0:
                        q.izq = t.der;
                        t.der = q;
                        t.bal = -1;
                        terminar[0] = 1;
                        break;
                }
                break;
            case 0:
                q.bal = 1;
                terminar[0] = 1;
                break;
        }
        return t;
    }
    public int eliminar(int n) {
        Stack pila = new Stack();
        Nodo p, q, t, r;
        int llave, accion;

        int[] terminar = new int[1];        //para trabajar terminar por referencia

        boolean encontro = false;

        if (raiz == null) {
            return (1);
        }
        terminar[0] = 0;

        p = raiz;

        /*busca el dato en el arbol. no se puede remplazar por el metodo buscar 
        poque la direccion de p que se obtiene de este metodo se usa mas adelante */
        while (!encontro && p != null) {
            pila.push(p);
            if (n < p.info) {
                p = p.izq;
            } else if (n > p.info) {
                p = p.der;
            } else {
                encontro = true;
            }
        }

        if (!encontro) {
            return (2);
        }
        t = null;
        p = (Nodo) pila.pop();
        llave = p.info;
        if (p.izq == null && p.der == null) {
            accion = 0;
        } else if (p.der == null) {
            accion = 1;
        } else if (p.izq == null) {
            accion = 2;
        } else {
            accion = 3;
        }
        if (accion == 0 || accion == 1 || accion == 2) {
            if (!pila.empty()) {
                q = (Nodo) pila.pop();
                if (llave < q.info) {
                    switch (accion) {
                        case 0:
                        case 1:
                            q.izq = p.izq;
                            t = balDerecha(q, terminar);
                            break;
                        case 2:
                            q.izq = p.der;
                            t = balDerecha(q, terminar);
                            break;
                    }
                } else {
                    switch (accion) {
                        case 0:
                        case 2:
                            q.der = p.der;
                            t = balIzquierda(q, terminar);
                            break;
                        case 1:
                            q.der = p.izq;
                            t = balIzquierda(q, terminar);
                            break;
                    }
                }
            } else {
                switch (accion) {
                    case 0:
                        raiz = null;
                        terminar[0] = 1;
                        break;
                    case 1:
                        raiz = p.izq;
                        break;
                    case 2:
                        raiz = p.der;
                        break;
                }
            }
        } else {
            pila.push(p);
            r = p;
            p = r.der;
            q = null;
            while (p.izq != null) {
                pila.push(p);
                q = p;
                p = p.izq;
            }
            llave = r.info = p.info;
            if (q != null) {
                q.izq = p.der;
                t = balDerecha(q, terminar);
            } else {
                r.der = p.der;
                t = balIzquierda(r, terminar);
            }
            q = (Nodo) pila.pop();
        }
        while (!pila.empty() && terminar[0] == 0) {
            q = (Nodo) pila.pop();
            if (llave < q.info) {
                if (t != null) {
                    q.izq = t;
                    t = null;
                }
                t = balDerecha(q, terminar);
            } else {
                if (t != null) {
                    q.der = t;
                    t = null;
                }
                t = balIzquierda(q, terminar);
            }
        }
        if (t != null) {
            if (pila.empty() == true) {
                raiz = t;
            } else {
                q = (Nodo) pila.pop();
                if (llave < q.info) {
                    q.izq = t;
                } else {
                    q.der = t;
                }
            }
        }
        return 0;
    }
}
