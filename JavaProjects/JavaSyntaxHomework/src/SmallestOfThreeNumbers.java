import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * Write a program that finds the smallest of three numbers.
 * 
 * @author Marto
 * 
 */
public class SmallestOfThreeNumbers {
	public static void main(String[] args) {
		System.out.println("Write three numbers to find the smallest:");

		Scanner scanner = new Scanner(System.in);

		List<Float> numbersToCompare = new ArrayList<Float>();

		System.out.println("Enter a:");
		float a = scanner.nextFloat();
		numbersToCompare.add(a);

		System.out.println("Enter b:");
		float b = scanner.nextFloat();
		numbersToCompare.add(b);

		System.out.println("Enter c:");
		float c = scanner.nextFloat();
		numbersToCompare.add(c);

		System.out.println("Smallest number is: "
				+ findSmallestNumber(numbersToCompare));

		// After we are done with the scanner - close it to avoid resource leak.
		scanner.close();
	}

	private static float findSmallestNumber(List<Float> numbersToCompare) {
		float result = Float.MAX_VALUE;

		for (Float currentNumber : numbersToCompare) {
			if (result > currentNumber) {
				result = currentNumber;
			}
		}

		return result;
	}
}
