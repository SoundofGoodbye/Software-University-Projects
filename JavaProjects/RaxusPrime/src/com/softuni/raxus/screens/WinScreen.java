package com.softuni.raxus.screens;

import java.awt.BorderLayout;
import java.awt.Component;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.Insets;
import java.util.ArrayList;
import java.util.List;

import javax.swing.Box;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;

import com.softuni.raxus.constants.Constants;
import com.softuni.raxus.interfaces.IScreen;
import com.softuni.raxus.layouts.VerticalLayout;
import com.softuni.raxus.listeners.ExitButtonListener;
import com.softuni.raxus.listeners.ReplayButtonListener;

public class WinScreen extends AbstractScreen implements IScreen {

	private String result;

	public WinScreen() {
		this(Constants.WIN_SCREEN_TITLE);
	}

	public WinScreen(String title) {
		super(title);
	}

	public WinScreen(String title, String result) {
		this(Constants.WIN_SCREEN_TITLE);
		this.result = result;
	}

	@Override
	public void destroyScreen() {
		dispose();
	}

	@Override
	protected Component createSpecificComponents() {
		JPanel panel = new JPanel();
		JLabel winner = new JLabel(result);
		winner.setFont(new Font("Tahoma", Font.CENTER_BASELINE, 80));

		JButton replayButton = new JButton(Constants.REPLAY_BUTTON);
		replayButton.addActionListener(new ReplayButtonListener(this, new PlayScreen()));
		replayButton.setFont(new Font("Tahoma", Font.CENTER_BASELINE, 18));
		replayButton.setMargin(new Insets(10, 62, 10, 62));
		
		JButton exitButton = new JButton(Constants.EXIT_BUTTON_LABEL);
		exitButton.addActionListener(new ExitButtonListener(this));
		exitButton.setFont(new Font("Tahoma", Font.CENTER_BASELINE, 18));
		exitButton.setMargin(new Insets(10, 62, 10, 62));
		
		panel.add(winner);
		panel.add(replayButton);
		panel.add(exitButton);
		
		return panel;
	}
}
