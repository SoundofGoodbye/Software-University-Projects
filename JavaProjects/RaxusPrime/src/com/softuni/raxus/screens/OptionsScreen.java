package com.softuni.raxus.screens;

import java.awt.Button;
import java.awt.Component;

import javax.swing.ButtonGroup;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JRadioButton;

import com.softuni.raxus.constants.Constants;
import com.softuni.raxus.listeners.BackButtonListener;
import com.softuni.raxus.listeners.RadioButtonListener;

/**
 * This class is responsible for laying out the available options and forwarding
 * them appropriately so they are available after the game starts.
 *
 * @author Marto
 *
 */
public class OptionsScreen extends AbstractScreen {

	public OptionsScreen() {
		this(Constants.OPTIONS_SCREEN_TITLE);
	}

	public OptionsScreen(String title) {
		super(title);
		// TODO Auto-generated constructor stub
	}

	@Override
	protected Component createSpecificComponents() {
		JRadioButton xButton = new JRadioButton(Constants.RADIO_BUTTON_X, true);
		JRadioButton oButton = new JRadioButton(Constants.RADIO_BUTTON_O, false);

		ButtonGroup buttonGroup = new ButtonGroup();
		buttonGroup.add(xButton);
		buttonGroup.add(oButton);

		JLabel whichIsFirstLabel = new JLabel(
				Constants.OPTIONS_SCREEN_INFORMATON_LABEL);

		JLabel resultLabel = new JLabel("X starts first.");
		xButton.addActionListener(new RadioButtonListener(resultLabel));
		oButton.addActionListener(new RadioButtonListener(resultLabel));

		Button backButton = new Button(Constants.BACK_BUTTON);
		backButton.addActionListener(new BackButtonListener(this,
				new MenuScreen()));

		JPanel panel = new JPanel();
		panel.add(whichIsFirstLabel);
		panel.add(xButton);
		panel.add(oButton);
		panel.add(resultLabel);
		panel.add(backButton);

		return panel;
	}

	@Override
	public void destroyScreen() {
		dispose();
	}
}
