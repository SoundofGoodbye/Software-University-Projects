import java.util.Scanner;

public class Pr2_GenerateThreeLetterWords {

	/**
	 * Write a program to generate and print all 3-letter words consisting of
	 * given set of characters. For example if we have the characters 'a' and
	 * 'b', all possible words will be "aaa", "aab", "aba", "abb", "baa", "bab",
	 * "bba" and "bbb". The input characters are given as string at the first
	 * line of the input. Input characters are unique (there are no repeating
	 * characters).
	 */

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter characters.");
		char[] letters = scanner.next().toCharArray();

		for (int i = 0; i < letters.length; i++) {
			for (int j = 0; j < letters.length; j++) {
				for (int m = 0; m < letters.length; m++) {
					System.out.printf("%c%c%c ", letters[i], letters[j],
							letters[m]);
				}
			}
		}

		scanner.close();
	}
}