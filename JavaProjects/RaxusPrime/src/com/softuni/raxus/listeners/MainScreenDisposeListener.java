package com.softuni.raxus.listeners;

import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

import com.softuni.raxus.constants.Constants;

/**
 * This listener is responsible for properly closing and terminating the
 * application when the main screen frame is disposed.
 * 
 * @author Marto
 * 
 */
public class MainScreenDisposeListener implements WindowListener {
	@Override
	public void windowActivated(WindowEvent e) {
	}

	@Override
	public void windowClosed(WindowEvent e) {
	}

	@Override
	public void windowClosing(WindowEvent e) {
		// Get the frame that triggered the closing.
		JFrame frame = (JFrame) e.getSource();

		// Show a dialog that tells the user what is happening and leaves him
		// with two options - confirm or cancel.
		int result = JOptionPane.showConfirmDialog(frame,
				Constants.MAIN_SCREEN_CLOSING_DIALOG_MESSAGE,
				Constants.MAIN_SCREEN_CLOSING_DIALOG_MESSAGE_TITLE,
				JOptionPane.YES_NO_OPTION);

		if (result == JOptionPane.YES_OPTION) {
			frame.dispose();
			frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		}
	}

	@Override
	public void windowDeactivated(WindowEvent e) {

	}

	@Override
	public void windowDeiconified(WindowEvent e) {

	}

	@Override
	public void windowIconified(WindowEvent e) {

	}

	@Override
	public void windowOpened(WindowEvent e) {

	}
}
