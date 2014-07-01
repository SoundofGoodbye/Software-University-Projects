package com.softuni.raxus.layouts;

import java.awt.Component;
import java.awt.Container;
import java.util.List;

import javax.swing.Box;
import javax.swing.JApplet;

/**
 * This class is responsible for laying out Components in a vertical alignment.
 * 
 * @author Marto
 * 
 */
public class VerticalLayout extends JApplet {

	private List<Component> buttonsList;

	public VerticalLayout(List<Component> buttonsList) {
		this.buttonsList = buttonsList;
		init();
	}

	public void init() {
		Box verticalBox = Box.createVerticalBox();

		for (Component currentButton : buttonsList) {
			verticalBox.add(currentButton);
		}

		Container cp = getContentPane();
		cp.add(verticalBox);
	}
}
