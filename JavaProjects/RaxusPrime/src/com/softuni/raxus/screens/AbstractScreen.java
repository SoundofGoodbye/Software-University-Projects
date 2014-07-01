package com.softuni.raxus.screens;

import java.awt.BorderLayout;
import java.awt.Component;

import javax.swing.JFrame;
import javax.swing.JPanel;

import com.softuni.raxus.interfaces.IScreen;

/**
 * This is an abstract implementation of a screen. It will be used to create the
 * default UI and behavior of a game screen.
 * 
 * @author Marto
 * 
 */
public abstract class AbstractScreen extends JFrame implements IScreen {

	protected String title;

	/**
	 * Abstract class that creates an empty frame with a passed title.
	 * 
	 * @param title
	 *            - The title set to the frame.
	 */
	public AbstractScreen(String title) {
		this.title = title;
	}

	private void initializeScreen() {
		setTitle(title);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(new BorderLayout());
		setSize(800, 800);
		// Every child will override this method for specific implementation.
		Component component = createSpecificComponents();
		if (component != null) {
			add(component, BorderLayout.CENTER);
		}

		
		setLocationRelativeTo(null);
		setVisible(true);
	}

	public void setFullScreen() {
		setExtendedState(JFrame.MAXIMIZED_BOTH);
	}

	@Override
	public void createScreen() {
		initializeScreen();
	}

	/**
	 * This method is used to set up child screens additional functionality. It
	 * should add all views into a component (for example {@link JPanel}) and
	 * return that component in order to be added into the frame.
	 */
	protected abstract Component createSpecificComponents();
}
