import java.util.Scanner;

/**
 * Write a program to count how many sequences of two equal bits ("00" or "11")
 * can be found in the binary representation of given integer number n (with
 * overlapping).
 * 
 * @author Marto
 * 
 */
public class CountOfEqualBitPairs {
	public static void main(String[] args) {
		System.out.println("Enter number");
		Scanner scanner = new Scanner(System.in);
		int n = scanner.nextInt();

		String binaryRepresetnation = Integer.toBinaryString(n);

		int counter = 0;
		for (int i = 0; i < binaryRepresetnation.length() - 1; i++) {
			if (binaryRepresetnation.charAt(i) == binaryRepresetnation
					.charAt(i + 1)) {
				counter++;
			}
		}
		System.out.println(counter);
	}
}
