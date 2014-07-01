package com.softuni.raxus.listeners;

import java.awt.event.ActionEvent;

import com.softuni.raxus.interfaces.IScreen;
import com.softuni.raxus.screens.PlayScreen;
import com.softuni.raxus.screens.SetNameScreen;

public class StartButtonListener extends DefaultButtonListener {

	private IScreen setNameScreen;
	private IScreen playScreen;

	public StartButtonListener(IScreen setNameScreen, IScreen playScreen) {
		super(setNameScreen, playScreen);
		this.setNameScreen = setNameScreen;
		this.playScreen = playScreen;
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		// We know that this is a SetNameScreen so it's ok to cast it.
		String userInput = ((SetNameScreen) setNameScreen).getFirstName();
		String userInput2 = ((SetNameScreen) setNameScreen).getSecondName();

		// Check if any text is entered.
		if ((userInput.equals(null) || userInput.isEmpty()) || (userInput2.equals(null) || userInput2.isEmpty())) {
			// If no text is entered make the prompt color to red.
			((SetNameScreen) setNameScreen).setPromptColorRed();
		} else {
			// If the user entered his name pass it to the PlayScreen.
			((PlayScreen) playScreen).setInputText(userInput);
			super.actionPerformed(e);
		}
		
	}
}
