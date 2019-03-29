/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecuacion.temporal;

import java.awt.Container;
import java.awt.HeadlessException;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;

/**
 *
 * @author david
 */
public class Menu extends JFrame{
    
    JLabel etqTtl = new JLabel("Seleccione un caso a determinar");
    JButton btnMC = new JButton("MEJOR CASO");
    JButton btnPC = new JButton("PEOR CASO");
    JButton btnPROM = new JButton("CASO PROMEDIO");

    public Menu(){
        Container c = getContentPane();
        c.setLayout(null);
        this.setTitle("Menu");
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        
        c.add(etqTtl);
        c.add(btnMC);
        c.add(btnPC);
        c.add(btnPROM);
        
        etqTtl.setBounds(50, 50, 250, 35);
        btnMC.setBounds(25, 100, 200, 35);
        btnMC.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnMCActionPerformed(evt);
            }
        });
        btnPC.setBounds(300, 100, 200, 35);
        btnPC.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnPCActionPerformed(evt);
            }
        });
        btnPROM.setBounds(150, 150, 200, 35);
        btnPROM.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnPROMActionPerformed(evt);
            }
        });
        
        
        setVisible(true);
        setSize(600,280);
    }
    
    public void btnPROMActionPerformed(java.awt.event.ActionEvent evt) {
        Ventana v = new Ventana();
        setVisible(false);
    }
    public void btnMCActionPerformed(java.awt.event.ActionEvent evt) {
        Ventana2 v = new Ventana2();        
        setVisible(false);
    }
    public void btnPCActionPerformed(java.awt.event.ActionEvent evt) {
        Ventana3 v = new Ventana3();
        setVisible(false);
    }
    
    
    
    
    
    
}
