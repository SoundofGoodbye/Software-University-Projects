import java.util.Scanner;

/**
 * Problem 7. Count Substring Occurrences Write a program to find how many times
 * given string appears in given text as substring. The text is given at the
 * first input line. The search string is given at the second input line. The
 * output is an integer number. Please ignore the character casing.
 *
 * @author Marto
 *
 */
public class Pr7_CountSubstringOcurances {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter text to count specific sentence from.");
		String input = scanner.nextLine().toLowerCase();
		System.out.println("Enter word");
		String sentenceToCount = scanner.nextLine().toLowerCase();

//		String[] words = input.split("\\W+");

		int counter = 0;

		for (int i = 0; i <= input.length() - sentenceToCount.length(); i++) {
			if (input.substring(0 + i, sentenceToCount.length() + i).contains(
					sentenceToCount)) {
				counter++;
			}
		}
		System.out.println(counter);
		scanner.close();
	}
}
