import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Pr5_AngleUnitConverter {
	public static void main(String[] args) {

		System.out.println("Enter number of queries.");
		Scanner scanner = new Scanner(new InputStreamReader(System.in));

		int numQueries = scanner.nextInt();

		List<String> resultList = new ArrayList<String>();

		for (int i = 0; i < numQueries; i++) {
			BufferedReader br = new BufferedReader(new InputStreamReader(
					System.in));

			String input = null;

			try {
				input = br.readLine();
			} catch (IOException e) {
				e.printStackTrace();
			}
			String[] splittedInput = input.split(" ");

			if (splittedInput[1].equals("deg")) {

				double radians = Math.toRadians(Integer
						.valueOf(splittedInput[0]));

				resultList.add(String.valueOf(radians) + " rad");

			} else if (splittedInput[1].equals("rad")) {

				double degrees = Math.toDegrees(Integer
						.valueOf(splittedInput[0]));

				resultList.add(String.valueOf(degrees) + " deg");
			}
		}
		
		for (String currentString : resultList) {
			System.out.println(currentString);
		}
		scanner.close();
	}
}
