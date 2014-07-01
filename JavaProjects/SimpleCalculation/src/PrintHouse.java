import java.util.Scanner;

public class PrintHouse {
	private static final String ASTERIX = "*";

	private static final String DOT = ".";

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int n = scanner.nextInt();

		int middle = n / 2;
		int diff = 0;
		int diffCounter = 0;
		for (int row = 0; row < n; row++) {
			for (int col = 0; col < n; col++) {
				if (row == n - 1) {
					if (col >= middle - diff && col <= middle + diff) {
						System.out.print(ASTERIX);
					} else {
						System.out.print(DOT);
					}
				} else {
					if (diffCounter > middle) {
						System.out.print(ASTERIX);
					} else {
						if (col == middle - diff || col == middle + diff) {
							System.out.print(ASTERIX);
						} else {
							System.out.print(DOT);
						}
					}
				}
			}
			diffCounter++;
			if (diffCounter < middle) {
				if (diffCounter >= middle) {
					diff--;
				} else {
					diff++;
				}
			} else {
				diff = n / 4;
			}
			System.out.println();
		}
	}
}
