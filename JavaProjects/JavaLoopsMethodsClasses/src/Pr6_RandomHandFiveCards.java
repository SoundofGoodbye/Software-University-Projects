import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class Pr6_RandomHandFiveCards {
	// Write a program to generate n random hands of 5 different cards form a
	// standard suit of 52 cards

	private static final int NUM_CARDS = 5;

	public static void main(String[] args) {

		System.out.println("Enter number of hands: ");

		Scanner scanner = new Scanner(System.in);

		int numberOfHands = scanner.nextInt();

		scanner.close();

		char[] cardSuits = { '\u2666', '\u2663', '\u2665', '\u2660' };

		String[] cardFaces = { "2", "3", "4", "5", "6", "7", "8", "9", "10",
				"J", "Q", "K", "A" };

		// Create the deck with all cards.
		ArrayList<String> fullDeck = new ArrayList<String>();
		for (String currentCard : cardFaces) {
			for (Character suit : cardSuits) {
				fullDeck.add("" + currentCard + (char) suit);
			}
		}

		Random randomGenerator = new Random();
		ArrayList<String> pulledCards = new ArrayList<>();
		for (int i = 0; i < numberOfHands; i++) {
			for (int j = 0; j < NUM_CARDS; j++) {
				int index = randomGenerator.nextInt(fullDeck.size());
				String card = fullDeck.get(index);
				fullDeck.remove(index);
				pulledCards.add(card);
				System.out.printf("%s ", card);
			}
			System.out.println();
			fullDeck.addAll(pulledCards);
		}
	}
}