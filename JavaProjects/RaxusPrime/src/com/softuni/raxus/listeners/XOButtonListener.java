package com.softuni.raxus.listeners;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import com.softuni.raxus.screens.PlayScreen;
import com.softuni.raxus.screens.buttons.XOButton;

public class XOButtonListener implements ActionListener {

	private PlayScreen playScreen;

	public XOButtonListener(PlayScreen playScreen) {
		this.playScreen = playScreen;
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		XOButton button = (XOButton) e.getSource();
		// if (isXTurn) {
		button.changeIcon();
		playScreen.checkWin();
		// }
		// // isXTurn = !isXTurn;
		// button.setTurn(isXTurn);
	}
}
