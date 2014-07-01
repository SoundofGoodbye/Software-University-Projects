package com.softuni.raxus.listeners;

import java.awt.event.ActionEvent;

import com.softuni.raxus.interfaces.IScreen;

public class PlayButtonListener extends DefaultButtonListener {
	public PlayButtonListener(IScreen prevScreen, IScreen newScreen) {
		super(prevScreen, newScreen);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		super.actionPerformed(e);
	}
}
