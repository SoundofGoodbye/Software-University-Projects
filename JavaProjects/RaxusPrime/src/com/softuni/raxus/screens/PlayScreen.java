package com.softuni.raxus.screens;

import java.awt.BorderLayout;
import java.awt.Button;
import java.awt.Component;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ContainerListener;
import java.awt.event.MouseEvent;
import java.lang.ProcessBuilder.Redirect;

import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.text.Position;

import org.omg.CORBA.PRIVATE_MEMBER;

import com.softuni.raxus.constants.Constants;
import com.softuni.raxus.listeners.XOButtonListener;
import com.softuni.raxus.screens.buttons.XOButton;

/**
 * This class is responsible for laying out the grid view.
 * 
 * @author Marto
 * 
 */
public class PlayScreen extends AbstractScreen {

	private String userInput;

	private static int ROWS = 3;

	private static int COLUMNS = 3;

	private static XOButton buttonArray[][];

	public PlayScreen() {
		this(Constants.PLAY_SCREEN_TITLE);
	}

	public PlayScreen(String title) {
		super(title);
		buttonArray = new XOButton[COLUMNS][ROWS];
	}

	@Override
	protected Component createSpecificComponents() {
		JPanel panel = new JPanel(new BorderLayout());
		// Create the GridLayout
		JPanel gridPanel = new JPanel(new GridLayout(ROWS, COLUMNS));

		// Populate the GridLayout with buttons
		for (int i = 0; i < ROWS; i++) {
			for (int j = 0; j < COLUMNS; j++) {
				buttonArray[i][j] = new XOButton();
				buttonArray[i][j].addActionListener(new XOButtonListener(this));
				gridPanel.add(buttonArray[i][j], BorderLayout.WEST);
			}
		}

		panel.add(gridPanel);
		panel.add(new JLabel(userInput), BorderLayout.EAST);

		return gridPanel;
	}

	public void checkWin() {
		String result1 = checkRightDiagonal();
		String result2 = checkLeftDiagonal();
		String result3 = checkLines();
		if (result1.isEmpty() && result2.isEmpty() && result3.isEmpty()){ checkDraw();	
		}else if ( result1.length() > 1 ){ 
			displayWinner(result1);
		}else if (result2.length() > 1) {
			displayWinner(result2);
		}else if (result3.length() > 1) {
			displayWinner(result3);
		}
		
	}

	private void displayWinner(String result) {
		dispose();
		WinScreen winScreen = new WinScreen(Constants.WIN_SCREEN_TITLE,result);
		winScreen.createScreen();
	}
	
	private void checkDraw(){
		int fullTable = 0;
		boolean isXOset = false;
			for (int i = 0; i < ROWS; i++) {
				for (int k = 0; k < COLUMNS; k++) {
					if ((buttonArray[i][k].isSet() == XOButton.IS_O_SET) || ( buttonArray[i][k].isSet() == XOButton.IS_X_SET) ) {
						fullTable++;
					}
				}
			}
			if(fullTable == (ROWS * COLUMNS)){
				isXOset = true;
			}
			
			String result = "";
			if (isXOset) {
				result = Constants.DRAW_MESSAGE;
				displayWinner(result);
				}
	}
	
	private static String checkLines() {
		boolean isXSet = false;
		boolean isOSet = false; 

		// Check vertical lines for a win
		for (int rows = 0; rows < ROWS; rows++) {
			if (buttonArray[0][rows].isSet() == XOButton.IS_X_SET
					&& buttonArray[1][rows].isSet() == XOButton.IS_X_SET
					&& buttonArray[2][rows].isSet() == XOButton.IS_X_SET) {
				isXSet = true;
				break;
			}
			if (buttonArray[0][rows].isSet() == XOButton.IS_O_SET
					&& buttonArray[1][rows].isSet() == XOButton.IS_O_SET
					&& buttonArray[2][rows].isSet() == XOButton.IS_O_SET) {
				isOSet = true;
				break;
			}
		}

		// Check horizontal lines for a win.
		for (int columns = 0; columns < COLUMNS; columns++) {
			if (buttonArray[columns][0].isSet() == XOButton.IS_X_SET
					&& buttonArray[columns][1].isSet() == XOButton.IS_X_SET
					&& buttonArray[columns][2].isSet() == XOButton.IS_X_SET) {
				isXSet = true;
				break;
			}
			if (buttonArray[columns][0].isSet() == XOButton.IS_O_SET
					&& buttonArray[columns][1].isSet() == XOButton.IS_O_SET
					&& buttonArray[columns][2].isSet() == XOButton.IS_O_SET) {
				isOSet = true;
				break;
			}
		}

		String result = "";
		if (isXSet) {
			result = Constants.WIN_X_MESSAGE;

		} else if (isOSet) {
			result = Constants.WIN_O_MESSAGE;
		}
		return result;
	}

	private static String checkLeftDiagonal() {
		boolean isXSet = buttonArray[0][0].isSet() == XOButton.IS_X_SET
				&& buttonArray[1][1].isSet() == XOButton.IS_X_SET
				&& buttonArray[2][2].isSet() == XOButton.IS_X_SET;

		boolean isOSet = buttonArray[0][0].isSet() == XOButton.IS_O_SET
				&& buttonArray[1][1].isSet() == XOButton.IS_O_SET
				&& buttonArray[2][2].isSet() == XOButton.IS_O_SET;

		String result = "";
		if (isXSet) {
			result = Constants.WIN_X_MESSAGE;
		} else if (isOSet) {
			result = Constants.WIN_O_MESSAGE;
		}
		return result;
	}

	private static String checkRightDiagonal() {
		boolean isXSet = buttonArray[0][2].isSet() == XOButton.IS_X_SET
				&& buttonArray[1][1].isSet() == XOButton.IS_X_SET
				&& buttonArray[2][0].isSet() == XOButton.IS_X_SET;

		boolean isOSet = buttonArray[0][2].isSet() == XOButton.IS_O_SET
				&& buttonArray[1][1].isSet() == XOButton.IS_O_SET
				&& buttonArray[2][0].isSet() == XOButton.IS_O_SET;

		String result = "";
		if (isXSet) {
			result = Constants.WIN_X_MESSAGE;

		} else if (isOSet) {
			result = Constants.WIN_O_MESSAGE;
		}
		return result;
	}

	@Override
	public void destroyScreen() {
		dispose();
	}

	public void setInputText(String userInput) {
		this.userInput = userInput;
	}
}
