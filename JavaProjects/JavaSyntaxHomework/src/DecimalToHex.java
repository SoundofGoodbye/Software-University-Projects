import java.util.Scanner;

/**
 * Write a program that enters a positive integer number num and converts and
 * prints it in hexadecimal form. You may use some built-in method from the
 * standard Java libraries.
 * 
 * @author Marto
 * 
 */
public class DecimalToHex {
	public static void main(String[] args) {
		System.out.println("Enter number to convert to hex");
		Scanner scanner = new Scanner(System.in);
		int input = scanner.nextInt();

		String hex = Integer.toHexString(input);
		System.out.println(hex.toUpperCase());

		// After we are done with the scanner - close it to avoid resource leak.
		scanner.close();
	}
}
