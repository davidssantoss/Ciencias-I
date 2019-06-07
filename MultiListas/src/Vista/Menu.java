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
import javax.swing.JOptionPane;
import javax.swing.JTextField;

/**
 *
 * @author estudiantes
 */
public class Menu extends JFrame{
    JLabel etqTit = new JLabel("Que desea realizar con la multilistas");
    JLabel etqNomProp = new JLabel("Digite el nombre del propietario: ");
    JTextField txtNomProp = new JTextField();
    JLabel etqIdProp = new JLabel("Digite la id del propietario: ");
    JTextField txtIdProp = new JTextField();
    JLabel etqDirInm = new JLabel("Digite la direccion del inmueble: ");
    JTextField txtDirInm = new JTextField();
    JLabel etqValInm = new JLabel("Digite el valor del inmueble: ");
    JTextField txtValInm = new JTextField();
    JLabel etqIdInm = new JLabel("Digite la identificacion del inmueble: ");
    JTextField txtIdInm = new JTextField();
    JButton btnHor = new JButton("Insertar Propietario");
    JButton btnVer = new JButton("Insertar Inmueble");
    JLabel etqRetProp = new JLabel("Digite el nombre del propietario: ");
    JLabel etqPropVer = new JLabel("Digite el nombre del propietario: ");
    JLabel etqPropIdVer = new JLabel("Digite la id del propietario: ");
    JTextField txtPropVer = new JTextField();
    JTextField txtPropIdVer = new JTextField();
    JLabel etqRetPropVer = new JLabel("Digite el nombre del propietario: ");
    JLabel etqRetPropIdVer = new JLabel("Digite la id del propietario: ");
    JTextField txtRetPropVer = new JTextField();
    JTextField txtRetPropIdVer = new JTextField();
    JLabel etqPropRetVer = new JLabel("Digite el nombre del propietario: ");
    JLabel etqPropRetIdVer = new JLabel("Digite la id del propietario: ");
    JTextField txtPropRetVer = new JTextField();
    JTextField txtPropRetIdVer = new JTextField();
    JTextField txtRetProp = new JTextField();
    JLabel etqRetIdProp = new JLabel("Digite la id del propietario: ");
    JTextField txtRetIdProp = new JTextField();
    JLabel etqRetDir = new JLabel("Digite la direccion del inmueble: ");
    JTextField txtRetDir = new JTextField();
    JLabel etqRetVal = new JLabel("Digite el valor del inmueble: ");
    JTextField txtRetVal = new JTextField();
    JLabel etqRetId = new JLabel("Digite la identificacion del inmueble: ");
    JTextField txtRetId = new JTextField();
    JButton btnRetHor = new JButton("Retirar Propietario");
    JButton btnRetVer = new JButton("Retirar Inmueble");
    JButton btnLista = new JButton("Ver lista");
    JLabel etqSubProp = new JLabel("Ingresar un propietario");
    JLabel etqSubInm = new JLabel("Ingresar un inmueble");
    JLabel etqSubRetInm = new JLabel("Retirar un inmueble");
    JLabel etqSubRetProp = new JLabel("Retirar un propietario");
    public Menu(){
        Container c = getContentPane();
        c.setLayout(null);
        this.setTitle("Multilistas");
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        
        c.add(etqTit);
        etqTit.setBounds(50, 20, 300, 35);
        c.add(btnLista);
        btnLista.setBounds(690, 20, 150, 35);
        btnLista.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnListaActionPerformed(evt);
            }
        });
        // Insertar propietario
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
        btnHor.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnHorActionPerformed(evt);
            }
        });
        // Insertar Inmueble
        c.add(etqPropVer);     
        etqPropVer.setBounds(50, 320, 200, 25);        
        c.add(txtPropVer);
        txtPropVer.setBounds(290, 320, 150, 25);
        c.add(etqPropIdVer);   
        etqPropIdVer.setBounds(50, 360, 200, 25);        
        c.add(txtPropIdVer);   
        txtPropIdVer.setBounds(290, 360, 150, 25);
        c.add(etqDirInm);
        etqDirInm.setBounds(50, 400, 200, 25);
        c.add(txtDirInm);
        txtDirInm.setBounds(290, 400, 150, 25);
        c.add(etqValInm);
        etqValInm.setBounds(50, 440, 200, 25);
        c.add(txtValInm);
        txtValInm.setBounds(290, 440, 150, 25);
        c.add(etqIdInm);
        etqIdInm.setBounds(50, 480, 200, 25);
        c.add(txtIdInm);
        txtIdInm.setBounds(290, 480, 150, 25);
        c.add(btnVer);
        btnVer.setBounds(290, 520, 150, 25);
        btnVer.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnVerActionPerformed(evt);
            }
        });
        // Retirar Propietario
        c.add(etqRetProp);
        etqRetProp.setBounds(450, 180, 200, 25);
        c.add(txtRetProp);
        txtRetProp.setBounds(690, 180, 150, 25);
        c.add(etqRetIdProp);
        etqRetIdProp.setBounds(450, 220, 200, 25);
        c.add(txtRetIdProp);
        txtRetIdProp.setBounds(690, 220, 150, 25);
        c.add(btnRetHor);
        btnRetHor.setBounds(690, 270, 150, 25);
        btnRetHor.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnRetHorActionPerformed(evt);
            }
        });
        //Retirar inmueble
        c.add(etqRetPropVer);     
        etqRetPropVer.setBounds(450, 320, 200, 25);        
        c.add(txtRetPropVer);
        txtRetPropVer.setBounds(690, 320, 150, 25);
        c.add(etqRetPropIdVer);   
        etqRetPropIdVer.setBounds(450, 360, 200, 25);        
        c.add(txtRetPropIdVer);   
        txtRetPropIdVer.setBounds(690, 360, 150, 25);
        c.add(etqRetDir);
        etqRetDir.setBounds(450, 400, 200, 25);
        c.add(txtRetDir);
        txtRetDir.setBounds(690, 400, 150, 25);
        c.add(etqRetVal);
        etqRetVal.setBounds(450, 440, 200, 25);
        c.add(txtRetVal);
        txtRetVal.setBounds(690, 440, 150, 25);
        c.add(etqRetId);
        etqRetId.setBounds(450, 480, 200, 25);
        c.add(txtRetId);
        txtRetId.setBounds(690, 480, 150, 25);
        c.add(btnRetVer);
        btnRetVer.setBounds(690, 520, 150, 25);
        btnRetVer.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnRetVerActionPerformed(evt);
            }
        });
        
        
        setVisible(true);
        setSize(900, 650);
    }
    public void btnVerActionPerformed(java.awt.event.ActionEvent evt) {
        try {
            if (txtDirInm.getText().equals(null) && txtIdInm.getText().equals(null) && txtValInm.getText().equals("")) {
                JOptionPane.showMessageDialog(this, "Por favor digite los tres campos del inmueble");
            }
            else{
                String s = txtDirInm.getText();
                String s1 = txtIdInm.getText();
                String s2 = txtValInm.getText();
                int i = Integer.parseInt(s1);
                float j = Float.parseFloat(s2);                
            }            
        } catch (Exception e) {
        }
        
        
    }
    public void btnHorActionPerformed(java.awt.event.ActionEvent evt) {
        try {
            if (txtNomProp.getText().equals("") && txtIdProp.getText().equals("")) {
                JOptionPane.showMessageDialog(this, "Por favor digite los dos campos del propietario");
            }
            else{
                String s = txtNomProp.getText();
                String s1 = txtIdProp.getText();
                int i = Integer.parseInt(s1);
            }
            
        } catch (Exception e) {
        }
        
    }
    public void btnListaActionPerformed(java.awt.event.ActionEvent evt) { 
        
    }
    public void btnRetVerActionPerformed(java.awt.event.ActionEvent evt) { 
        
    }
    public void btnRetHorActionPerformed(java.awt.event.ActionEvent evt) { 
        
    }
    
     
    
}