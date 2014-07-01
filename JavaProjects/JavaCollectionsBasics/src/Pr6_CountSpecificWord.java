import java.util.Scanner;

/**
 * Problem 6. Count Specified Word Write a program to find how many times a word
 * appears in given text. The text is given at the first input line. The target
 * word is given at the second input line. The output is an integer number.
 * Please ignore the character casing. Consider that any non-letter character is
 * a word separator.
 *
 * @author Marto
 *
 */
public class Pr6_CountSpecificWord {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter text to count specific word from.");
		String input = scanner.nextLine().toLowerCase();
		System.out.println("Enter word");
		String wordToCount = scanner.nextLine().toLowerCase();

		String[] words = input.split("\\W+");

		int counter = 0;

		for (int i = 0; i < words.length; i++) {
			if (wordToCount.equals(words[i])) {
				counter++;
			}
		}
		System.out.println(counter);
		scanner.close();
	}
}
