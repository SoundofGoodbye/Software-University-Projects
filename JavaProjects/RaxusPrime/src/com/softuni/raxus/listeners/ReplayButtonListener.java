package com.softuni.raxus.listeners;

import java.awt.event.ActionEvent;

import com.softuni.raxus.interfaces.IScreen;
import com.softuni.raxus.screens.PlayScreen;

public class ReplayButtonListener extends DefaultButtonListener {

	private IScreen setNameScreen;
	private IScreen playScreen;

	public ReplayButtonListener(IScreen setNameScreen, IScreen playScreen) {
		super(setNameScreen, playScreen);
		this.setNameScreen = setNameScreen;
		this.playScreen = playScreen;
	}

	@Override
	public void actionPerformed(ActionEvent e) {
				super.actionPerformed(e);
	}
}
