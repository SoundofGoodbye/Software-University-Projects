package com.softuni.raxus;

import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;

import com.softuni.raxus.screens.MenuScreen;

/**
 * This class is responsible for keeping all the functionality working (to not
 * hang out) until exit. It is also responsible for laying out the GUI.
 * 
 * @author Marto
 * 
 */
public class Main {
	public static void main(String[] args) {
		javax.swing.SwingUtilities.invokeLater(new Runnable() {
			public void run() {
				createAndShowGUI();
			}
		});
	}

	private static void createAndShowGUI() {
		try {
			UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
		} catch (ClassNotFoundException | InstantiationException
				| IllegalAccessException | UnsupportedLookAndFeelException e) {
			e.printStackTrace();
		}
		MenuScreen startingScreen = new MenuScreen();
		startingScreen.createScreen();
	}
}
