import java.text.DecimalFormat;
import java.util.Scanner;

/**
 * Write a program that reads 3 numbers: an integer a (0 ≤ a ≤ 500), a
 * floating-point b and a floating-point c and prints them in 4 virtual columns
 * on the console. Each column should have a width of 10 characters. The number
 * a should be printed in hexadecimal, left aligned; then the number a should be
 * printed in binary form, padded with zeroes, then the number b should be
 * printed with 2 digits after the decimal point, right aligned; the number c
 * should be printed with 3 digits after the decimal point, left aligned.
 * 
 * @author Marto
 * 
 */
public class FormattingNumbers {
	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.println("Enter a");
		int a = scanner.nextInt();

		System.out.println("Enter b");
		float b = scanner.nextFloat();

		System.out.println("Enter c");
		float c = scanner.nextFloat();

		String hex = Integer.toHexString(a).toUpperCase();

		String binaryRepresentation = String.format("%10s", Integer.toBinaryString(a)).replace(' ', '0');
		
		if (c % 1 == 0) {
			System.out.printf("|%-10s|%s|%10.2f|%-10.0f|", hex, binaryRepresentation,
					b, c);
		} else {
			System.out.printf("|%-10s|%s|%10.2f|%-10.3f|", hex, binaryRepresentation,
					b, c);
		}
		scanner.close();
	}
}
