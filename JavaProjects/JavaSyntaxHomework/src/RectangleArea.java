import java.util.Scanner;

/**
 * Write a program that enters the sides of a rectangle (two integers a and b)
 * and calculates and prints the rectangle's area.
 * 
 * @author Marto
 * 
 */
public class RectangleArea {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter rectangle side a:");
		int a = scanner.nextInt();

		System.out.println("Enter rectangle side b:");
		int b = scanner.nextInt();
		System.out.println("Rectangle area = " + a * b);
		scanner.close();
	}
}
