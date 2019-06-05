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
public class NodoVer {
    String dir;
    int id;
    float valor;
    NodoVer abajo;

    public NodoVer(String dir, int id, float valor) {
        this.dir = dir;
        this.id = id;
        this.valor = valor;
        abajo = null;
    }
}
