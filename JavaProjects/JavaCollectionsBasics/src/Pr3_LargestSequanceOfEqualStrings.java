import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

/**
 * Problem 3. Largest Sequence of Equal Strings Write a program that enters an
 * array of strings and finds in it the largest sequence of equal elements. If
 * several sequences have the same longest length, print the leftmost of them.
 * The input strings are given as a single line, separated by a space.
 *
 * @author Marto
 *
 */
public class Pr3_LargestSequanceOfEqualStrings {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.println("Enter strings separated by space");
		String input = scanner.nextLine();
		String[] splittedInput = input.split(" ");
		Arrays.sort(splittedInput);

		int currentString = 0;
		int counter = 1;
		List<String> helperList = new ArrayList<String>();

		for (int i = 0; i < splittedInput.length; i++) {
			System.out.println(splittedInput[i]);
		}
		while (currentString < splittedInput.length) {

			for (int i = currentString + 1; i < splittedInput.length; i++) {
				if (splittedInput[currentString].equals(splittedInput[i])) {
					counter++;
				}
			}

			if (helperList.size() < counter) {
				helperList = new ArrayList<String>();
				for (int i = 0; i < counter; i++) {
					helperList.add(splittedInput[currentString]);
				}
			}
			currentString += counter;
			counter = 1;
			// currentString++;
		}

		for (int i = 0; i < helperList.size(); i++) {
			System.out.print(helperList.get(i) + " ");
		}
		scanner.close();
	}
}
