import java.io.InputStreamReader;
import java.util.Scanner;

public class SumTwoNumbers {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(new InputStreamReader(System.in));
		try {
			System.out.println("Enter first number:");
			int firstNumber = scanner.nextInt();
			System.out.println("Enter second number:");
			int secondNumber = scanner.nextInt();

			System.out.println("Sum: " + (firstNumber + secondNumber));
		} finally {
			scanner.close();
		}
	}
}