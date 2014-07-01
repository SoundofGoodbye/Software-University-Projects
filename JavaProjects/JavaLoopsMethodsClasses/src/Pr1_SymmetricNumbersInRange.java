import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Pr1_SymmetricNumbersInRange {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter start: ");
		int start = scanner.nextInt();

		System.out.print("Enter end: ");
		int end = scanner.nextInt();

		int numHelper = 0;
		List<Integer> digitsList;
		for (int i = start; i <= end; i++) {
			// We start from true because we may have only 1 digit
			boolean isSymetric = true;
			numHelper = i;

			digitsList = new ArrayList<Integer>();
			while (numHelper != 0) {
				if (!digitsList.isEmpty()) {
					if (digitsList.get(0) == numHelper % 10) {
						isSymetric = true;
					} else {
						isSymetric = false;
					}
				}
				digitsList.add(numHelper % 10);
				numHelper /= 10;
			}
			if (isSymetric) {
				System.out.println(i);
			}
		}
		scanner.close();
	}
}
