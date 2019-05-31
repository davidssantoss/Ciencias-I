/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Vista;

import java.awt.Container;
import java.awt.HeadlessException;
import javax.swing.JFrame;
import javax.swing.JLabel;

/**
 *
 * @author estudiantes
 */
public class Menu extends JFrame{
    JLabel etqTit = new JLabel("Que desea realizar con la multilistas");
    public Menu(){
        Container c = getContentPane();
        c.setLayout(null);
        this.setTitle("Multilistas");
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        
        c.add(etqTit);
        etqTit.setBounds(50, 50, 300, 35);
        setVisible(true);
        setSize(500, 500);
    }
     
    
}
