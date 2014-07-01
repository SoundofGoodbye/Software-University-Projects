import java.util.Scanner;

/**
 * Problem 1. Sort Array of Numbers.
 * 
 * Write a program to enter a number n and n integer numbers and sort and print
 * them. Keep the numbers in array of integers: int[].
 * 
 * @author Marto
 * 
 */
public class Pr1_SortNumArray {
	public static void main(String[] args) {
		System.out.println("Enter number of input");

		Scanner scanner = new Scanner(System.in);
		int numOfInputs = scanner.nextInt();

		int[] numArray = new int[numOfInputs];
		for (int i = 0; i < numOfInputs; i++) {
			numArray[i] = scanner.nextInt();
		}

		sort(numArray);

		for (int i = 0; i < numArray.length; i++) {
			System.out.println(numArray[i]);
		}

		scanner.close();
	}

	/**
	 * Sorts an array of integers by bubble sorting it. The bubble sort stops
	 * when there are no more exchanges necessary and has shorter range each
	 * loop.
	 * 
	 * @param numArray
	 *            - the array to sort.
	 */
	private static void sort(int[] numArray) {
		boolean doMore = true;
		int n = numArray.length;

		while (doMore) {
			n--;
			// Assume this is our last pass over the array.
			doMore = false;
			for (int i = 0; i < n; i++) {
				if (numArray[i] > numArray[i + 1]) {
					// Exchange
					int temp = numArray[i];
					numArray[i] = numArray[i + 1];
					numArray[i + 1] = temp;
					// After an exchange we need to check again.
					doMore = true;
				}
			}
		}
	}
}
