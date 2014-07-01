package com.softuni.raxus.screens.buttons;

/**
 * Helper class that keeps track whose turn it is. or simply keeps track if a X
 * should be drawn or an O.
 *
 * @author Marto
 *
 */
public class TurnHelper {
	private static boolean isXTurn = true;

	public static void setTurn(boolean isXTurn) {
		TurnHelper.isXTurn = isXTurn;
	}

	public static void changeTurn() {
		TurnHelper.isXTurn = !TurnHelper.isXTurn;
	}

	public static boolean getTurn() {
		return isXTurn;
	}
}
