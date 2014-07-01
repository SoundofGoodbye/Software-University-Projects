package com.softuni.raxus.screens;

import java.awt.BorderLayout;
import java.awt.Component;
import java.awt.Font;
import java.awt.Insets;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import javax.swing.JButton;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.ScrollPaneConstants;
import javax.swing.border.EtchedBorder;
import javax.swing.border.TitledBorder;

import com.softuni.raxus.constants.Constants;
import com.softuni.raxus.listeners.BackButtonListener;

/**
 * A class that creates a frame holding a scrollable text and a back button that
 * returns to {@link MenuScreen}
 * 
 * @author Marto
 * 
 */
@SuppressWarnings("serial")
public class AboutScreen extends AbstractScreen {
	public AboutScreen() {
		this(Constants.ABOUT_SCREEN_TITLE);
	}

	public AboutScreen(String title) {
		super(title);
	}

	public JPanel initScreen() {
		JPanel middlePanel = new JPanel();
		middlePanel.setLayout(new BorderLayout());
		middlePanel.setBorder(new TitledBorder(new EtchedBorder(),
				"Display Area"));

		// Text

		String textLine = null;
		String resultText = "";
		FileReader fReader = null;
		try {
			fReader = new FileReader("resources/AboutPage.txt");
		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		}
		BufferedReader reader = new BufferedReader(fReader);
		try {
			while ((textLine = reader.readLine()) != null) {
				resultText += textLine;
			}
			reader.close();
		} catch (IOException e) {
			e.printStackTrace();
		}


		JTextArea text = createTextArea(resultText);
		text.setFont(new Font("Segoe UI", Font.LAYOUT_LEFT_TO_RIGHT, 16));
		// Scroll
		JScrollPane scroll = createScrollBar(text);
		// Back Button
		JButton backButton = addBackButton();
		backButton.setMargin(new Insets(10, 10, 10, 10));
		backButton.setFont(new Font("Tahoma", Font.CENTER_BASELINE, 18));

		// Add Textarea in to middle panel
		middlePanel.add(scroll, BorderLayout.CENTER);
		middlePanel.add(backButton, BorderLayout.PAGE_END);
		return middlePanel;
	}

	/**
	 * Create a button that serves as a navigation to the frame that called this
	 * frame.
	 * 
	 * @return backButton that navigates to the previous frame.
	 */
	private JButton addBackButton() {
		JButton backButton = new JButton(Constants.BACK_BUTTON);
		// Pass the AboutScreen frame so it can be disposed.
		backButton.addActionListener(new BackButtonListener(this,
				new MenuScreen()));
		return backButton;
	}

	private JTextArea createTextArea(String resultText) {
		JTextArea text = new JTextArea(resultText);
		text.setLineWrap(true);
		text.setEditable(false); // set textArea non-editable
		return text;
	}

	private JScrollPane createScrollBar(Component text) {
		JScrollPane scroll = new JScrollPane(text);
		scroll.setVerticalScrollBarPolicy(ScrollPaneConstants.VERTICAL_SCROLLBAR_ALWAYS);
		return scroll;
	}

	@Override
	protected Component createSpecificComponents() {
		JPanel panel = initScreen();
		return panel;
	}

	@Override
	public void destroyScreen() {
		dispose();
	}
}
