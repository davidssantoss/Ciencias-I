/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Vista;

import java.awt.Container;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

/**
 *
 * @author estudiantes
 */
public class Menu extends JFrame{
    JLabel etqTit = new JLabel("Que desea realizar con la multilistas");
    JLabel etqNomProp = new JLabel("Digite el nombre del propietario: ");
    JTextField txtNomProp = new JTextField();
    JLabel etqIdProp = new JLabel("Digite la identificacion del propietario: ");
    JTextField txtIdProp = new JTextField();
    JLabel etqDirInm = new JLabel("Digite la direccion del inmueble: ");
    JTextField txtDirInm = new JTextField();
    JLabel etqValInm = new JLabel("Digite el valor del inmueble: ");
    JTextField txtValInm = new JTextField();
    JLabel etqIdInm = new JLabel("Digite la identificacion del inmueble: ");
    JTextField txtIdInm = new JTextField();
    JButton btnHor = new JButton("Insertar Propietario");
    JButton btnVer = new JButton("Insertar Inmueble");
    
    public Menu(){
        Container c = getContentPane();
        c.setLayout(null);
        this.setTitle("Multilistas");
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        
        c.add(etqTit);
        etqTit.setBounds(50, 20, 300, 35);        
        
        c.add(etqNomProp);
        etqNomProp.setBounds(50, 180, 200, 25);
        c.add(txtNomProp);
        txtNomProp.setBounds(290, 180, 150, 25);
        c.add(etqIdProp);
        etqIdProp.setBounds(50, 220, 200, 25);
        c.add(txtIdProp);
        txtIdProp.setBounds(290, 220, 150, 25);
        c.add(btnHor);
        btnHor.setBounds(290, 270, 150, 25);
        c.add(etqDirInm);
        etqDirInm.setBounds(50, 320, 200, 25);
        c.add(txtDirInm);
        txtDirInm.setBounds(290, 320, 150, 25);
        c.add(etqValInm);
        etqValInm.setBounds(50, 360, 200, 25);
        c.add(txtValInm);
        txtValInm.setBounds(290, 360, 150, 25);
        c.add(etqIdInm);
        etqIdInm.setBounds(50, 400, 200, 25);
        c.add(txtIdInm);
        txtIdInm.setBounds(290, 400, 150, 25);
        c.add(btnVer);
        btnVer.setBounds(290, 470, 150, 25);
        
        setVisible(true);
        setSize(500, 650);
    }
     
    
}