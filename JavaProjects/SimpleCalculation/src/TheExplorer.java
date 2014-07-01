import java.util.Scanner;

public class TheExplorer {

	private static final String ASTERIX = "*";

	private static final String UNDERSCORE = "-";

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int n = scanner.nextInt();

		int middle = n / 2;
		int diff = 0;
		int diffCounter = 0;

		for (int rows = 0; rows < n; rows++) {
			for (int cols = 0; cols < n; cols++) {
				if (cols == middle - diff) {
					System.out.print(ASTERIX);
				} else if (cols == middle + diff) {
					System.out.print(ASTERIX);
				} else {
					System.out.print(UNDERSCORE);
				}
			}

			if (diffCounter >= middle) {
				diff++;
			} else {
				diff--;
			}

			diffCounter++;

			System.out.println();
		}
	}
}
