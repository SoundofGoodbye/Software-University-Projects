import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

/**
 * Problem 10. Extract All Unique Words At the first line at the console you are
 * given a piece of text. Extract all words from it and print them in
 * alphabetical order. Consider each non-letter character as word separator.
 * Take the repeating words only once. Ignore the character casing. Print the
 * result words in a single line, separated by spaces.
 *
 * @author Marto
 *
 */
public class Pr10_ExtractAllUniqueWords {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter text to extract duplicated words from.");
		String input = scanner.nextLine().toLowerCase();
		String[] text = input.split("\\W+");

		// Use set because it doesn't allow duplicated values
		Set<String> setWords = new TreeSet<>();
		for (String word : text) {
			setWords.add(word);
		}

		for (String word : setWords) {
			System.out.print(word + " ");
		}

		scanner.close();
	}
}
