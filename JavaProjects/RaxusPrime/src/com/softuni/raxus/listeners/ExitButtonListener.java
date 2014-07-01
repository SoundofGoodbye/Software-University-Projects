package com.softuni.raxus.listeners;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

import com.softuni.raxus.constants.Constants;

public class ExitButtonListener implements ActionListener {

	private JFrame frame;

	public ExitButtonListener(JFrame frame) {
		this.frame = frame;
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		int result = JOptionPane.showConfirmDialog(frame,
				Constants.MAIN_SCREEN_CLOSING_DIALOG_MESSAGE,
				Constants.MAIN_SCREEN_CLOSING_DIALOG_MESSAGE_TITLE,
				JOptionPane.YES_NO_OPTION);

		if (result == JOptionPane.YES_OPTION) {
			frame.dispose();
		}
	}
}
