package com.softuni.raxus.screens;

import java.awt.Component;
import java.awt.Font;
import java.awt.Insets;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JApplet;
import javax.swing.JButton;
import javax.swing.JFrame;

import com.softuni.raxus.constants.Constants;
import com.softuni.raxus.layouts.VerticalLayout;
import com.softuni.raxus.listeners.AboutButtonListener;
import com.softuni.raxus.listeners.ExitButtonListener;
import com.softuni.raxus.listeners.MenuScreenDisposeListener;
import com.softuni.raxus.listeners.OptionsButtonListener;
import com.softuni.raxus.listeners.PlayButtonListener;

/**
 * This is the starting screen of the application. It is responsible for the
 * navigation between the other screens - {@link PlayScreen},
 * {@link OptionsScreen}, {@link AboutScreen} and {@link SetNameScreen}.
 *
 * @author Marto
 *
 */
public class MenuScreen extends AbstractScreen {

	/**
	 * Constructor with default title. See {@link #MenuScreen(String)}
	 */
	public MenuScreen() {
		// This will call the other constructor with the default title.
		this(Constants.MAIN_SCREEN_TITLE_LABEL);
	}

	/**
	 * Creates a frame using {@link AbstractScreen} and adds the menu buttons to that
	 * frame.
	 *
	 * @param title
	 *            - The title set to the frame.
	 */
	public MenuScreen(String title) {
		super(title);
		// Do nothing on close because we are closing the main screen
		// differently - with a prompt.
		setDefaultCloseOperation(DO_NOTHING_ON_CLOSE);
		addWindowListener(new MenuScreenDisposeListener());
	}

	@Override
	protected Component createSpecificComponents() {
		JApplet verticalButtons = initButtons();
		return verticalButtons;
	}

	private JApplet initButtons() {
		List<Component> buttonsList = new ArrayList<Component>();
		buttonsList.add(createPlayButton());
		buttonsList.add(createOptionsButton());
		buttonsList.add(createAboutButton());
		buttonsList.add(createExitButton());

		VerticalLayout verticalLayout = new VerticalLayout(buttonsList);
		return verticalLayout;
	}

	private JButton createPlayButton() {
		JButton playButton = new JButton(Constants.PLAY_BUTTON_LABEL);
		playButton.setAlignmentX(Component.CENTER_ALIGNMENT);
		playButton.setAlignmentY(Component.CENTER_ALIGNMENT);
		playButton.setFont(new Font("Tahoma", Font.CENTER_BASELINE, 18));
		playButton.setMargin(new Insets(10, 60, 10, 60));
		playButton.addActionListener(new PlayButtonListener(this,
				new SetNameScreen()));
		return playButton;
	}

	private JButton createOptionsButton() {
		JButton optionsButton = new JButton(Constants.OPTIONS_BUTTON_LABEL);
		optionsButton.setAlignmentX(Component.CENTER_ALIGNMENT);
		optionsButton.setAlignmentY(Component.CENTER_ALIGNMENT);
		optionsButton.setFont(new Font("Tahoma", Font.CENTER_BASELINE, 18));
		optionsButton.setMargin(new Insets(10, 45, 10, 45));
		optionsButton.addActionListener(new OptionsButtonListener(this,
				new OptionsScreen()));
		return optionsButton;
	}

	private JButton createAboutButton() {
		JButton aboutButton = new JButton(Constants.ABOUT_BUTTON_LABEL);
		aboutButton.setAlignmentX(Component.CENTER_ALIGNMENT);
		aboutButton.setAlignmentY(Component.CENTER_ALIGNMENT);
		aboutButton.setFont(new Font("Tahoma", Font.CENTER_BASELINE, 18));
		aboutButton.setMargin(new Insets(10, 53, 10, 53));
		aboutButton.addActionListener(new AboutButtonListener(this,
				new AboutScreen()));
		return aboutButton;
	}

	private JButton createExitButton() {
		JButton exitButton = new JButton(Constants.EXIT_BUTTON_LABEL);
		exitButton.setAlignmentX(Component.CENTER_ALIGNMENT);
		exitButton.setAlignmentY(Component.CENTER_ALIGNMENT);
		exitButton.setFont(new Font("Tahoma", Font.CENTER_BASELINE, 18));
		exitButton.setMargin(new Insets(10, 62, 10, 62));
		// Set the click listener to the button and pass it the frame that it
		// needs to close.
		exitButton.addActionListener(new ExitButtonListener(this));
		return exitButton;
	}

	@Override
	public void destroyScreen() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		dispose();
	}
}
