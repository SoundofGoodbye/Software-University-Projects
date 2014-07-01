package com.softuni.raxus.screens;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Component;
import java.awt.Font;
import java.awt.Insets;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

import org.jdesktop.xswingx.PromptSupport;
import org.jdesktop.xswingx.PromptSupport.FocusBehavior;
import org.jdesktop.xswingx.plaf.PromptTextAreaUI;

import com.softuni.raxus.constants.Constants;
import com.softuni.raxus.listeners.BackButtonListener;
import com.softuni.raxus.listeners.StartButtonListener;

/**
 * This screen is responsible for laying out the field for entering the player
 * name and forwarding it to the {@link PlayScreen} to be displayed there.
 * 
 * @author Marto
 * 
 */
@SuppressWarnings("serial")
public class SetNameScreen extends AbstractScreen {

	JTextField nameFirstPlayer;
	JTextField nameSecondPlayer;

	public SetNameScreen() {
		this(Constants.SET_NAME_SCREEN_TITLE);
	}

	public SetNameScreen(String title) {
		super(title);
	}

	@Override
	protected Component createSpecificComponents() {
		// Create the panel that will hold the text field and the buttons.
		JPanel panel = new JPanel();

		JLabel nameLabel = new JLabel(Constants.SET_NAME_SCREEN_NAME_LABEL);
		nameLabel.setFont(new Font("Tahoma", Font.CENTER_BASELINE, 18));
		

		// This is the text field in which the user inputs his name.
		nameFirstPlayer = new JTextField();
		PromptSupport.setPrompt("Enter the name of the first player here", nameFirstPlayer);
		PromptSupport.setFocusBehavior(FocusBehavior.SHOW_PROMPT, nameFirstPlayer);
		nameFirstPlayer.setFont(nameFirstPlayer.getFont().deriveFont(16.0f));
		nameFirstPlayer.setEditable(true);
		
		nameSecondPlayer = new JTextField();
		PromptSupport.setPrompt("Enter the name of the second player here", nameSecondPlayer);
		PromptSupport.setFocusBehavior(FocusBehavior.SHOW_PROMPT, nameSecondPlayer);
		nameSecondPlayer.setFont(nameSecondPlayer.getFont().deriveFont(16.0f));
		nameSecondPlayer.setEditable(true);

		// Button that lets the user navigate back to the calling frame.
		JButton backButton = new JButton(Constants.BACK_BUTTON);
		backButton.addActionListener(new BackButtonListener(this,
				new MenuScreen()));
		backButton.setFont(new Font("Tahoma", Font.CENTER_BASELINE, 18));
		backButton.setMargin(new Insets(7, 45, 7, 45));
		
		// The text that the user entered.
		// Button that lets the user continue to the PlayScreen.
		JButton startButton = new JButton(Constants.START_BUTTON);
		startButton.addActionListener(new StartButtonListener(this,
				new PlayScreen()));
		startButton.setFont(new Font("Tahoma", Font.CENTER_BASELINE, 18));
		startButton.setMargin(new Insets(7, 45, 7, 45));
		

		panel.add(nameLabel, BorderLayout.LINE_START);
		panel.add(nameFirstPlayer, BorderLayout.LINE_START);
		panel.add(nameSecondPlayer, BorderLayout.LINE_START);
		panel.add(backButton, BorderLayout.PAGE_END);
		panel.add(startButton, BorderLayout.PAGE_END);
		return panel;
	}

	/**
	 * This method simply changes the prompt message color to red.
	 */
	public void setPromptColorRed() {
		if (nameFirstPlayer != null) {
			PromptSupport.setForeground(Color.RED, nameFirstPlayer);
		}
		if (nameSecondPlayer != null) {
			PromptSupport.setForeground(Color.RED, nameSecondPlayer);
		}
	}

	/**
	 * Returns the text, entered in the text field or an empty string if there
	 * is no text entered.
	 * 
	 * @return the entered text in the text field or empty string.
	 */
	public String getFirstName() {
		if (nameFirstPlayer != null) {
			return nameFirstPlayer.getText();
		}
		return "";
	}
	public String getSecondName() {
		if (nameSecondPlayer != null) {
			return nameSecondPlayer.getText();
		}
		return "";
	}

	@Override
	public void destroyScreen() {
		dispose();
	}
}
