/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Vista;

import Logica.AVL;
import Logica.Nodo;
import java.awt.Color;
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
    public static final int DIAMETRO = 30;
    public static final int RADIO = DIAMETRO / 2;
    public static final int ANCHO = 50;
    

    public Ventana() {
        Container c = getContentPane();
        c.setLayout(null);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setTitle("AVL");
        
        c.add(btnDibujar);
        c.add(btnRetirar);
        c.add(txtInsertar);
        c.add(txtRetirar);
        txtInsertar.setBounds(50, 25, 150, 25);
        btnDibujar.setBounds(250, 25, 150, 25);
        btnDibujar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnDibujarActionPerformed(evt);
            }
        });
        txtRetirar.setBounds(50, 70, 150, 25);
        btnRetirar.setBounds(250, 70, 150, 25);
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
        pintar(g, getWidth() / 2, 250, avl.raizArbol());
    }
    private void pintar(Graphics g, int x, int y, Nodo nod) {
        if (nod != null) {
            int balance=nod.bal;
            System.out.println("dato: " + nod.info + " balance: " + balance);
            
            if(balance==1){
                g.setColor(Color.red);
            }
            if(balance==-1){
                g.setColor(Color.blue);
            }
            if(balance==0){
                g.setColor(Color.black);
            }
            int EXTRA = nod.nodosCompletos(nod) * (ANCHO / 2);
            g.drawOval(x, y, DIAMETRO, DIAMETRO);
            g.drawString(Integer.toString(nod.info), x + 12, y + 18);
            g.setColor(Color.black);
            if (nod.izq != null) {
                g.drawLine(x + RADIO, y + RADIO, x - ANCHO - EXTRA + RADIO, y + ANCHO + RADIO);
            }
            if (nod.der != null) {
                g.drawLine(x + RADIO, y + RADIO, x + ANCHO + EXTRA + RADIO, y + ANCHO + RADIO);
            }
            pintar(g, x - ANCHO - EXTRA, y + ANCHO, nod.izq);
            pintar(g, x + ANCHO + EXTRA, y + ANCHO, nod.der);
        }
    }
}
