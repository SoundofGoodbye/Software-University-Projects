import java.util.Scanner;

public class CountOfBits {
	public static void main(String[] args) {
		System.out.println("Enter number:");
		Scanner scanner = new Scanner(System.in);

		int n = scanner.nextInt();

		String binaryRepresetnation = String.format("%16s",
				Integer.toBinaryString(n)).replace(' ', '0');

		int counter = 0;
		for (int i = 0; i < binaryRepresetnation.length(); i++) {
			if (binaryRepresetnation.charAt(i) == '1') {
				counter++;
			}
		}
		System.out.println(counter);
		scanner.close();
	}
}
