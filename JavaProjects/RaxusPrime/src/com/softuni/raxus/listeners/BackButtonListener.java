package com.softuni.raxus.listeners;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import com.softuni.raxus.interfaces.IScreen;

public class BackButtonListener implements ActionListener {
	/**
	 * The frame that the user is currently at and needs to be disposed.
	 */
	private IScreen frameCurrent;

	/**
	 * The screen that should be opened when the back button is pressed.
	 */
	private IScreen framePrev;

	public BackButtonListener(IScreen frameCurrent, IScreen framePrev) {
		this.frameCurrent = frameCurrent;
		this.framePrev = framePrev;
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		frameCurrent.destroyScreen();
		framePrev.createScreen();
	}
}
