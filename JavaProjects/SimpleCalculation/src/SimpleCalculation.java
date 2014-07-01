import java.util.Scanner;

public class SimpleCalculation {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		double x = scanner.nextDouble();
		double y = scanner.nextDouble();
		double result = -1;

		// int result = checkResult(x, y);

		if (x == 0 && y == 0) {
			result = 0;
		} else if (y == 0 && x != 0) {
			result = 6;
		} else if (x == 0 && y != 0) {
			result = 5;
		} else if (x > 0 && y < 0) {
			result = 4;
		} else if (x < 0 && y < 0) {
			result = 3;
		} else if (x > 0 && y > 0) {
			result = 1;
		} else if (x < 0 && y > 0) {
			result = 2;
		}

		System.out.println(result);
		scanner.close();
	}
}
