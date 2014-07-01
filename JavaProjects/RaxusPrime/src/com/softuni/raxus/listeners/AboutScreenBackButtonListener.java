package com.softuni.raxus.listeners;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;

import com.softuni.raxus.screens.MenuScreen;

public class AboutScreenBackButtonListener implements ActionListener {
	private JFrame frame;

	public AboutScreenBackButtonListener(JFrame frame) {
		this.frame = frame;
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.dispose();
		MenuScreen menuScreen = new MenuScreen();
	}
}
