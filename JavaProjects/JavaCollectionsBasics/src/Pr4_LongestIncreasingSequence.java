import java.util.Scanner;

/**
 * Problem 4. Longest Increasing Sequence Write a program to find all increasing
 * sequences inside an array of integers. The integers are given in a single
 * line, separated by a space. Print the sequences in the order of their
 * appearance in the input array, each at a single line. Separate the sequence
 * elements by a space. Find also the longest increasing sequence and print it
 * at the last line. If several sequences have the same longest length, print
 * the leftmost of them
 *
 * @author Marto
 *
 */
public class Pr4_LongestIncreasingSequence {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter sequence of integers separated by space.");
		String input = scanner.nextLine();

		String[] splittedInput = input.split(" ");
		int[] intArray = new int[splittedInput.length];

		for (int i = 0; i < splittedInput.length; i++) {
			intArray[i] = Integer.valueOf(splittedInput[i]);
		}

		int tempCounter = 1;
		int counter = 1;
		int positionOfIndex = 0;

		System.out.print(intArray[0] + " ");

		for (int i = 1; i < intArray.length; i++) {
			if (intArray[i] > intArray[i - 1]) {
				tempCounter++;
				System.out.print(intArray[i] + " ");
			} else {
				tempCounter = 1;
				System.out.println();
				System.out.print(intArray[i] + " ");
				tempCounter = 1;
			}
			if (tempCounter > counter) {
				positionOfIndex = i;
				counter = tempCounter;
			}
		}

		System.out.println();
		System.out.println("Longest: ");
		for (int i = 0; i < counter; i++) {
			System.out.print(intArray[positionOfIndex - counter + i + 1] + " ");
		}
	}
}
