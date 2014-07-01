import java.math.BigInteger;
import java.util.Scanner;

public class SimpleLoops {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		BigInteger first = BigInteger.valueOf(scanner.nextInt());

		BigInteger second = BigInteger.valueOf(scanner.nextInt());

		BigInteger third = BigInteger.valueOf(scanner.nextInt());

		int n = scanner.nextInt();

		if (n == 1) {
			System.out.println(first);
		} else if (n == 2) {
			System.out.println(second);
		} else if (n == 3) {
			System.out.println(third);
		} else {
			BigInteger current = BigInteger.valueOf(0);
			for (int i = 4; i <= n; i++) {
				current = current.add(first);
				current = current.add(second);
				current = current.add(third);

				first = BigInteger.valueOf(0);
				first = first.add(second);

				second = BigInteger.valueOf(0);
				second = second.add(third);

				third = BigInteger.valueOf(0);
				third = third.add(current);

				current = BigInteger.valueOf(0);
			}
			System.out.print(third);
		}
	}
}
