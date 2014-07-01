import java.util.Scanner;

/**
 * Problem 2. Sequences of Equal Strings Write a program that enters an array of
 * strings and finds in it all sequences of equal elements. The input strings
 * are given as a single line, separated by a space.
 *
 * @author Marto
 *
 */
public class Pr2_SequencesOfEqualStrings {
	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter strings separated by space");
		String input = scanner.nextLine();

		String[] splittedInput = input.split(" ");

		int currentString = 0;

		while (currentString < splittedInput.length) {
			System.out.print(splittedInput[currentString] + " ");
			for (int i = currentString + 1; i < splittedInput.length; i++) {
				if (splittedInput[currentString].equals(splittedInput[i])) {
					currentString++;
					System.out.print(splittedInput[i] + " ");
				}
			}
			System.out.println();
			currentString++;
		}
		scanner.close();
	}
}
