package com.softuni.raxus.screens.buttons;

import javax.swing.ImageIcon;
import javax.swing.JButton;

/**
 * This class is responsible for creating a button and handles the logic for
 * setting an icon representing the X or O, based on the players turn.
 *
 * @author Marto
 *
 */
public class XOButton extends JButton {

	public static final int IS_O_SET = 1;

	public static final int IS_X_SET = 0;

	public static final int IS_UNSET = -1;

	private static final String RESOURCES_O_PNG = "/resources/O_Final.png";

	private static final String RESOURCES_X_PNG = "/resources/X_final.png";

	private ImageIcon buttonIcon;

	/**
	 * -1 - unset 0 - X is set 1 - O is set
	 */
	private byte buttonState = IS_UNSET;

	public void changeIcon() {
		if (buttonIcon == null) {
			if (TurnHelper.getTurn()) {
				buttonIcon = new ImageIcon(getClass().getResource(
						RESOURCES_X_PNG));
				setIcon(buttonIcon);
				buttonState = IS_X_SET;
			} else {
				buttonIcon = new ImageIcon(getClass().getResource(
						RESOURCES_O_PNG));
				setIcon(buttonIcon);
				buttonState = IS_O_SET;
			}
			TurnHelper.changeTurn();
		}
	}

	public byte isSet() {
		return buttonState;
	}
}
