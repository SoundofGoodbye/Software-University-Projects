package com.softuni.raxus.listeners;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import com.softuni.raxus.interfaces.IScreen;

/**
 * Default button listener that simply opens the new frame and closes the prev
 * one.
 * 
 * @author Marto
 * 
 */
public class DefaultButtonListener implements ActionListener {

	private IScreen prevScreen;
	private IScreen newScreen;

	public DefaultButtonListener(IScreen prevScreen, IScreen newScreen) {
		this.prevScreen = prevScreen;
		this.newScreen = newScreen;
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		prevScreen.destroyScreen();
		newScreen.createScreen();
	}
}
