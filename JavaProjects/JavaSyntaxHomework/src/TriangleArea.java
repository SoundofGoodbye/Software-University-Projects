import java.awt.Point;
import java.util.Scanner;

/**
 * Write a program that enters 3 points in the plane (as integer x and y
 * coordinates), calculates and prints the area of the triangle composed by
 * these 3 points. Round the result to a whole number. In case the three points
 * do not form a triangle, print "0" as result
 * 
 * @author Marto
 * 
 */
public class TriangleArea {
	public static void main(String[] args) {
		System.out.println("Enter coordinates in order x, y");
		Scanner scanner = new Scanner(System.in);

		System.out.println("Point A:");
		Point pointA = createPoint(scanner);

		System.out.println("Point B:");
		Point pointB = createPoint(scanner);

		System.out.println("Point C:");
		Point pointC = createPoint(scanner);

		int result = calculateArea(pointA, pointB, pointC);
		System.out.println(result);

		// After we are done with the scanner - close it to avoid resource leak.
		scanner.close();
	}

	private static Point createPoint(Scanner scanner) {

		int x = scanner.nextInt();
		int y = scanner.nextInt();
		Point point = new Point(x, y);
		return point;
	}

	private static int calculateArea(Point pointA, Point pointB, Point pointC) {
		// Calculate rectangle area by given vertices.
		int area = pointA.x * (pointB.y - pointC.y) + pointB.x
				* (pointC.y - pointA.y) + pointC.x * (pointA.y - pointB.y);
		int result = Math.abs(area / 2);
		return result;
	}
}
