import java.util.Scanner;

/**
 * Problem 5. Count All Words Write a program to count the number of words in
 * given sentence. Use any non-letter character as word separator.
 *
 * @author Marto
 *
 */
public class Pr5_CountWords {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter text to count words in.");
		String input = scanner.nextLine();

		String[] words = input.split("\\W+");
		System.out.println(words.length);
		scanner.close();
	}
}
