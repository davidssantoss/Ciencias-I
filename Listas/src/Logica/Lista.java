/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Logica;

import java.awt.Graphics;

/**
 *
 * @author David
 */
public class Lista {
    Nodo cab;

    public Lista() {
    }
    public void insertar(Nodo p, Nodo q, int n){
        Nodo nuevo;
        nuevo = new Nodo(n);
        nuevo.sig = q;
        if (p != null) {
            p.sig = nuevo;
        }else{
            cab = nuevo;
        }
    }
    public int mantener(int n){
        Nodo p, q;
        boolean encontro;
        p = null;
        q = cab;
        encontro = false;
        while (q != null && !encontro) {            
            if (n > q.info) {
                p = q;
                q = q.sig;
            }else{
                encontro = true;
            }
        }
        if (encontro) {
            if (n == q.info) {
                return -1;
            }else{
                insertar(p, q, n);
            }
        }else{
            insertar(p, q, n);            
        }
        return 1;
    }
    public Nodo buscar(int n){
        Nodo p = cab;
        while (p != null) {            
            if (p.info == n) {
                return p;
            }
            if (n > p.info) {
                p = p.sig;
            }else{
                return null;
            }
        }
        return null;
    }
    public int retirar(Nodo p){
        Nodo aux;
        if (p == null) {
            return -1;
        }
        if (p == cab) {
            cab = p.sig;
        }
        else{
            aux = cab;
            while (aux.sig != p) {                
                aux = aux.sig;
            }
            aux.sig = p.sig;
        }
        return 1;
    }
    public void listar(Graphics g){
        Nodo p = cab;
        int fila = 0;
        while (p != null) {
            g.drawRect(150 + fila * 45, 100, 30, 30);
            g.drawLine(180 + fila * 45, 115, 200 + fila * 45, 115);
            g.drawString(""+p.info, 150 + fila * 45, 100);
            p = p.sig;
            fila++;
        }
    }
}
