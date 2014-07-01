import java.util.Scanner;

public class SumOfElements {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		String input = scanner.nextLine();
		String[] splittedInput = input.split(" ");

		long[] intArray = new long[splittedInput.length];

		long sum = 0;
		long max = Integer.MIN_VALUE;

		for (int i = 0; i < splittedInput.length; i++) {
			intArray[i] = Long.parseLong(splittedInput[i]);
			sum += intArray[i];
			if (max < intArray[i]) {
				max = intArray[i];
			}
		}

		if (sum == 2 * max) {
			System.out.println("Yes, sum=" + max);
		} else {
			long diff = Math.abs(sum - 2 * max);
			System.out.println("No, diff=" + diff);
		}
	}
}
