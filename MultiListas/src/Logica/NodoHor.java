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
public class NodoHor {
    int idProp;
    String propietario;
    NodoVer abajo;
    NodoHor sig;
    public NodoHor(int idProp, String propietario) {
        this.idProp = idProp;
        this.propietario = propietario;
        sig = null;
        abajo = null;
    }
}
