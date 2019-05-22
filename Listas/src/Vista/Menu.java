/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Vista;

import java.awt.Container;
import java.awt.HeadlessException;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;

/**
 *
 * @author estudiantes
 */
public class Menu extends JFrame{
    JLabel etqTit = new JLabel("Que desea realizar con la lista");
    JButton btnIns = new JButton("Insertar");
    JButton btnRet = new JButton("Retirar");
    JButton btnImp = new JButton("Imprimir");
    JButton btnBus = new JButton("Buscar");
    JButton btnDib = new JButton("Dibujar");

    public Menu(){
        Container c = getContentPane();
        c.setLayout(null);
        this.setTitle("Menu");
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        
        c.add(etqTit);
        c.add(btnIns);
        c.add(btnRet);
        c.add(btnImp);
        c.add(btnBus);
        c.add(btnDib);
        etqTit.setBounds(20, 20, 250, 25);
        btnIns.setBounds(20, 100, 100, 25);
        btnRet.setBounds(20, 150, 100, 25);
        btnImp.setBounds(20, 200, 100, 25);
        btnBus.setBounds(20, 250, 100, 25);
        btnDib.setBounds(20, 300, 100, 25);
        
        setVisible(true);
        setSize(400, 400);
    }
    
    
}
