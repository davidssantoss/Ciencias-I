/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Vista;

import Logica.AVL;
import java.awt.Container;
import java.awt.Graphics;
import java.awt.HeadlessException;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;

/**
 *
 * @author david
 */
public class Ventana extends JFrame{
    AVL avl = new AVL();
    JButton btnDibujar = new JButton("Dibujar");
    JButton btnRetirar = new JButton("Retirar");
    JTextField txtInsertar = new JTextField();
    JTextField txtRetirar = new JTextField();
    

    public Ventana() {
        Container c = getContentPane();
        c.setLayout(null);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setTitle("AVL");
        
        c.add(btnDibujar);
        c.add(btnRetirar);
        c.add(txtInsertar);
        c.add(txtRetirar);
        txtInsertar.setBounds(250, 50, 150, 25);
        btnDibujar.setBounds(250, 90, 150, 25);
        btnDibujar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnDibujarActionPerformed(evt);
            }
        });
        txtRetirar.setBounds(250, 120, 150, 25);
        btnRetirar.setBounds(250, 150, 150, 25);
        btnRetirar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnRetirarActionPerformed(evt);
            }
        });
        
        setVisible(true);
        setSize(500, 500);
    }
    public void btnDibujarActionPerformed(java.awt.event.ActionEvent evt) {
        String s = txtInsertar.getText();
        int x = Integer.parseInt(s);
        System.out.println("X: " + x);
        avl.insAvl(x);
        txtInsertar.setText("");
        repaint();
    }
    public void btnRetirarActionPerformed(java.awt.event.ActionEvent evt) {
        String s1 = txtRetirar.getText();
        int x1 = Integer.parseInt(s1);
        System.out.println("Retirado: " + x1);
        avl.eliminar(x1);
        txtRetirar.setText("");
        repaint();
        
    }
    @Override
    public void paint(Graphics g){
        super.paint(g);
        avl.inOrden(avl.raizArbol(), g);        
    }
}
