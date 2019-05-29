/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Vista;

import Logica.Lista;
import Logica.Nodo;
import java.awt.Container;
import java.awt.Graphics;
import javax.swing.JButton;
import javax.swing.JFrame;
import static javax.swing.JFrame.EXIT_ON_CLOSE;
import javax.swing.JLabel;
import javax.swing.JTextField;

/**
 *
 * @author estudiantes
 */
public class Menu extends JFrame{
    JLabel etqTit = new JLabel("¿ Que desea realizar con la lista ?");
    JButton btnIns = new JButton("Insertar");
    JButton btnRet = new JButton("Retirar");
    JButton btnBus = new JButton("Buscar");
    JTextField txtInsertar = new JTextField();
    JTextField txtRetirar = new JTextField();
    int sw, numero;
    Lista lista = new Lista();
    

    public Menu(){
        Container c = getContentPane();
        c.setLayout(null);
        this.setTitle("Menu");
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        
        c.add(etqTit);
        c.add(btnIns);
        c.add(btnRet);
        c.add(btnBus);
        c.add(txtInsertar);
        c.add(txtRetirar);
        etqTit.setBounds(20, 20, 250, 25);
        btnIns.setBounds(270, 200, 100, 25);
        btnIns.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnInsActionPerformed(evt);
            }
        });
        txtInsertar.setBounds(99, 200, 100, 25);
        btnRet.setBounds(270, 250, 100, 25);
        btnRet.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnRetActionPerformed(evt);
            }
        });
        txtRetirar.setBounds(99, 250, 100, 25);
        btnBus.setBounds(270, 300, 100, 25);
        btnBus.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnBusActionPerformed(evt);
            }
        });
        
        setVisible(true);
        setSize(700, 600);
    }
    public void btnInsActionPerformed(java.awt.event.ActionEvent evt) { 
        String s = txtInsertar.getText();
        int i = Integer.parseInt(s);
        numero = i;
        txtInsertar.setText("");
        sw = 1;
        repaint();       
    }
    
    public void btnRetActionPerformed(java.awt.event.ActionEvent evt) { 
        String s = txtRetirar.getText();
        int i = Integer.parseInt(s);
        numero = i;
        txtRetirar.setText("");
        sw = 3;
        repaint(); 
               
    }
    public void btnBusActionPerformed(java.awt.event.ActionEvent evt) { 
        sw = 2;
        repaint();       
    }
    public void paint(Graphics g){
        super.paint(g);
        if (sw == 1) {
            if (lista.mantener(numero) == -1) {
                g.drawString("Repetido", 100, 100);
            }
        }
        if (sw == 2) {
            lista.listar(g);
        }
        if (sw == 3){
            Nodo p = lista.buscar(numero);
            if(p == null){
                g.drawString("No existe", 100, 100);
            }else{
                lista.retirar(p);
                g.drawString("Retirado" + numero, 100, 100);
            }
        }
    }
}
