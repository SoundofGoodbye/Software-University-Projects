import java.util.Scanner;

public class SandGlass {
	private static final String DOT = ".";
	private static final String ASTERIX = "*";

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		int n = scanner.nextInt();

		int middle = n / 2;
		int diff = middle;
		int diffCounter = 0;

		for (int rows = 0; rows < n; rows++) {
			for (int col = 0; col < n; col++) {
				if (col >= middle - diff && col <= middle + diff) {
					System.out.print(ASTERIX);
				} else {
					System.out.print(DOT);
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
