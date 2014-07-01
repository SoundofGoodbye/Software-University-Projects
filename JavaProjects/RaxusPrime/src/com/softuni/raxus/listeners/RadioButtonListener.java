package com.softuni.raxus.listeners;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JLabel;
import javax.swing.JRadioButton;

import com.softuni.raxus.constants.Constants;
import com.softuni.raxus.screens.buttons.TurnHelper;

public class RadioButtonListener implements ActionListener {
	private final JLabel resultLabel;

	public RadioButtonListener(JLabel resultLabel) {
		this.resultLabel = resultLabel;

	}

	@Override
	public void actionPerformed(ActionEvent e) {
		JRadioButton radioButton = (JRadioButton) e.getSource();
		String radioButtonText = radioButton.getText();
		resultLabel.setText(radioButtonText + " starts first.");
		if (radioButtonText.equals(Constants.RADIO_BUTTON_X)) {
			TurnHelper.setTurn(true);
		} else {
			TurnHelper.setTurn(false);
		}
	}
}
